import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps } from './App';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import { fromJS } from 'immutable';

describe('tests for App component', () => {
  it('should render without crashing', () => {
    shallow(<App />);
  });

  it('should contain the Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications)).toHaveLength(1);
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
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(Login).length).toBe(0);
  });

  it('should render the CourseList component', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(CourseList).length).toBe(1);
  });
});

describe('tests for click events', () => {
  it('checks that the logOut function and the alert function is called with the good string', () => {
    window.alert = jest.fn();
    const wrapper = shallow(<App isLoggedIn={true} />);
    const event = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true });
    window.dispatchEvent(event);
    expect(window.alert).toHaveBeenCalledWith('Logging you out');
    jest.restoreAllMocks();
  });
});

describe('tests suite to trest the mapStateToProps function', () => {
  it('should return the expected data when the function is called', () => {
    const state = {
      ui: fromJS({
        isUserLoggedIn: true,
        isNotificationDrawerVisible: false,
      }),
    };
    const expectedData = { isLoggedIn: true, displayDrawer: false };
    expect(mapStateToProps(state)).toEqual(expectedData);
  });
});
