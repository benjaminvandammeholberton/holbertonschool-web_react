import { initialState, uiReducer } from './uiReducer';
import {
  displayNotificationDrawer,
  login,
  logout,
} from '../actions/uiActionCreators';
import { selectCourse } from '../actions/courseActionCreators';
import { Map } from 'immutable';

describe('tests for the uiReducer function', () => {
  it('should return the initial state when no action is passed', () => {
    expect(uiReducer(initialState, {})).toEqual(initialState);
  });

  it('should return the initial state when SELECT_COURSE action is passed', () => {
    expect(uiReducer(initialState, selectCourse())).toEqual(initialState);
  });

  it('should return the modified state when DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    const modifiedState = {
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: null,
    };
    expect(uiReducer(initialState, displayNotificationDrawer()).toJS()).toEqual(
      modifiedState
    );
  });

  it('should change the expectedState when passing LOGIN action', () => {
    const expectedState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {
        email: 'test',
        password: 'password',
      },
    };
    expect(uiReducer(initialState, login('test', 'password')).toJS()).toEqual(
      expectedState
    );
  });

  it('should return the expectedState when passing LOGOUT action', () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {
        email: 'test',
        password: 'password',
      },
    });
    const expectedState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: null,
    };
    expect(uiReducer(initialState, logout()).toJS()).toEqual(expectedState);
  });
});
