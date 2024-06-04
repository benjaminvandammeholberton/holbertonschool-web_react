import configureStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';
import fetchMock from 'fetch-mock';

import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest,
} from './uiActionCreators';

import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './uiActionTypes';

const mockStore = configureStore([thunk]);

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

describe('tests for loginRequest function', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  // it('Tests that if the API returns the right response, the store received two actions LOGIN and LOGING_SUCCESS', () => {
  //   const store = mockStore({});
  //   const email = 'test@test.com';
  //   const password = 'fake_password';
  //   const expectedActions = [
  //     {
  //       type: LOGIN,
  //       user: {
  //         email,
  //         password,
  //       },
  //     },
  //     { type: LOGIN_SUCCESS },
  //   ];

  //   fetchMock.get('http://localhost:8564/login-success.json', 200);

  //   return store.dispatch(loginRequest(email, password)).then(() => {
  //     expect(store.getActions()).toEqual(expectedActions);
  //   });
  // });
  it('Tests that if the API query fails, the store received two actions LOGIN and LOGIN_FAILURE', () => {
    const store = mockStore({});
    const email = 'test@test.com';
    const password = 'fake_password';
    const expectedActions = [
      {
        type: LOGIN,
        user: {
          email,
          password,
        },
      },
      { type: LOGIN_FAILURE },
    ];

    fetchMock.get('http://localhost:8564/login-success.json', 500);

    return store.dispatch(loginRequest(email, password)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
