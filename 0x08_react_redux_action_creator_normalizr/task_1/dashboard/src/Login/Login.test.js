import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('tests for Login Component', () => {
  it('should render without crashing', () => {
    shallow(<Login />);
  });

  it('should render 3 input and 2 label', () => {
    const wrapper = shallow(<Login />);
    const inputElements = wrapper.find('input');
    const labelElements = wrapper.find('label');
    expect(inputElements.length).toBe(3);
    expect(labelElements.length).toBe(2);
  });
});

describe('Tests for the enability of the submit input', () => {
  it('should have submit button initially disabled', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.state('enableSubmit')).toBe(false);
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop('disabled')).toBe(true);
  });
  it('should be enabled when the value of email and password are not', () => {
    const wrapper = shallow(<Login />);
    const submitButton = wrapper.find('input[type="submit"]');
    const emailInput = wrapper.find('input[type="text"]');
    const passwordInput = wrapper.find('input[type="password"]');
    emailInput.simulate('change', { target: { value: 'test' } });
    passwordInput.simulate('change', { target: { value: 'test' } });
    expect(submitButton.prop('disabled')).toBe(true);
  });
});
