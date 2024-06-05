import React from 'react';
import { Header } from './Header';
import { mount, shallow } from 'enzyme';
import AppContext from '../App/AppContext';

describe('test for Header component', () => {
  it('should render without crashing', () => {
    shallow(<Header />);
  });

  it('should render an img and a h1', () => {
    const wrapper = shallow(<Header />);
    const imgElement = wrapper.find('img');
    const h1Element = wrapper.find('h1');
    expect(imgElement.length).toBe(1);
    expect(h1Element.length).toBe(1);
  });
});

describe('test for logoutSection', () => {
  it('should not render the section when the user is not logged in', () => {
    const wrapper = shallow(<Header />);
    const sectionLogOut = wrapper.find('#logoutSection');
    expect(sectionLogOut.length).toBe(0);
  });

  it('should display the section when the user is logged in', () => {
    const wrapper = shallow(
      <Header user={{ email: 'test', password: 'password' }} />
    );
    const sectionLogOut = wrapper.find('#logoutSection');
    expect(sectionLogOut.length).toBe(1);
    expect(sectionLogOut.text()).toContain('test');
  });

  it('should call the logout function when clicking on logout', () => {
    const mockLogOut = jest.fn();
    const wrapper = shallow(
      <Header
        user={{ email: 'test', password: 'password' }}
        logout={mockLogOut}
      />
    );
    const logOutButton = wrapper.find('span');
    logOutButton.simulate('click');
    expect(mockLogOut).toHaveBeenCalledTimes(1);
    mockLogOut.mockClear();
  });
});
