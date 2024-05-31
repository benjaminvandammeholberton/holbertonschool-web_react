import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
} from './uiActionCreators';

import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

describe('tests for login function', () => {
  it('should return the expected object when calling the function ', () => {
    const email = 'test@test.com';
    const password = 'fake_password';
    const expectedReturn = { type: LOGIN, user: { email, password } };

    expect(login(email, password)).toStrictEqual(expectedReturn);
  });
});

describe('tests for logout function', () => {
  it('should return the expected object when calling the function ', () => {
    const expectedReturn = { type: LOGOUT };
    expect(logout()).toStrictEqual(expectedReturn);
  });
});

describe('tests for displayNotificationDrawer function', () => {
  it('should return the expected object when calling the function ', () => {
    const expectedReturn = {
      type: DISPLAY_NOTIFICATION_DRAWER,
    };
    expect(displayNotificationDrawer()).toStrictEqual(expectedReturn);
  });
});

describe('tests for hideNotificationDrawer function', () => {
  it('should return the expected object when calling the function ', () => {
    const expectedReturn = { type: HIDE_NOTIFICATION_DRAWER };
    expect(hideNotificationDrawer()).toStrictEqual(expectedReturn);
  });
});
