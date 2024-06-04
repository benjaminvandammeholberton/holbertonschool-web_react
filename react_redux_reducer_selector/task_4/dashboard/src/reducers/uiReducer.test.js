import { initialState, uiReducer } from './uiReducer';
import { displayNotificationDrawer } from '../actions/uiActionCreators';
import { selectCourse } from '../actions/courseActionCreators';

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
      user: {},
    };
    expect(uiReducer(initialState, displayNotificationDrawer()).toJS()).toEqual(
      modifiedState
    );
  });
});
