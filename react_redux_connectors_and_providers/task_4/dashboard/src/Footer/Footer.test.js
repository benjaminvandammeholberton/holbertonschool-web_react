import React from 'react';
import { mount, shallow } from 'enzyme';
import { Footer } from './Footer';
import AppContext from '../App/AppContext';

describe('tests for Footer component', () => {
  it('should render without crashing', () => {
    shallow(<Footer />);
  });

  it('should render the text Copyright at the very least', () => {
    const wrapper = shallow(<Footer />);
    const pElementText = wrapper.find('p').text();
    expect(pElementText.includes('Copyright')).toBe(true);
  });

  it('should display contact us when the user is logged in', () => {
    const wrapper = shallow(
      <Footer user={{ email: 'test', password: 'password' }} />
    );
    expect(wrapper.find('p').at(1).text()).toContain('Contact us');
  });

  it('should not display contact us when the user is logged in', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('p').length).toBe(1);
  });
});
