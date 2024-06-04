import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';

describe('tests for App component', () => {
  it('should render without crashing', () => {
    shallow(<App />);
  });

  it('should contain the Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications')).toHaveLength(1);
  });

  it('should render the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Footer />)).toBe(true);
  });

  it('should render the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Header />)).toBe(true);
  });

  it('should render the Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Login />)).toBe(true);
  });

  it('should not render the CourseList componenet', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList).length).toBe(0);
  });
});

describe('tests for App component when logged in', () => {
  it('should not render the Login component', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ user: { isLoggedIn: true } });
    expect(wrapper.find(Login).length).toBe(0);
  });

  it('should render the CourseList component', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ user: { isLoggedIn: true } });
    expect(wrapper.find(CourseList).length).toBe(1);
  });
});

describe('tests for click events', () => {
  it('checks that the logOut function and the alert function is called with the good string', () => {
    window.alert = jest.fn();
    const wrapper = mount(<App />);
    wrapper.setState({ user: { isLoggedIn: true } });
    expect(wrapper.state().user.isLoggedIn).toBe(true);
    const event = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true });
    window.dispatchEvent(event);
    expect(window.alert).toHaveBeenCalledWith('Logging you out');
    expect(wrapper.state().user.isLoggedIn).toBe(false);
    jest.restoreAllMocks();
  });
});

describe('tests for the state of displayDrawer', () => {
  it('should be set to false by default', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('displayDrawer')).toEqual(false);
  });

  it('should set to true when calling the function handleDisplayDrawer', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toEqual(true);
  });

  it('should set to false when calling the function handleHideDrawer', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state('displayDrawer')).toEqual(false);
  });
});

describe('tests to verify logIn and logOut function', () => {
  it('should update the state when logIn is been called', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn();
    const user = wrapper.state('user');
    expect(user.isLoggedIn).toBe(true);
  });
  it('should update the state when logOut is been called', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ user: { isLoggedIn: true } });
    wrapper.instance().logOut();
    const user = wrapper.state('user');
    expect(user.isLoggedIn).toBe(false);
  });
});

describe('test for markNotificationAsRead function', () => {
  it('sould delete the right notification in the state', () => {
    const mockListNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New cv available' },
      { id: 3, type: 'default', value: 'New tests' },
    ];
    const wrapper = shallow(<App />);
    wrapper.setState({ listNotifications: mockListNotifications });
    wrapper.instance().markNotificationAsRead(1);
    const notifications = wrapper.state('listNotifications');
    expect(notifications.length).toBe(2);
  });
});
