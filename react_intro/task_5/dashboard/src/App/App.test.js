import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders a div with the class App-header', () => {
    const wrapper = shallow(<App />);
    const divElement = wrapper.find('.App-header');
    expect(divElement.exists()).toBe(true);
  });

  it('renders a div with the class App-body', () => {
    const wrapper = shallow(<App />);
    const divElement = wrapper.find('.App-body');
    expect(divElement.exists()).toBe(true);
  });

  it('renders a div with the class App-footer', () => {
    const wrapper = shallow(<App />);
    const divElement = wrapper.find('.App-footer');
    expect(divElement.exists()).toBe(true);
  });
});
