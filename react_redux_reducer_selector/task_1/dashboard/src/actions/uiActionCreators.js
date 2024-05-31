import {
  LOGOUT,
  LOGIN,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
} from './uiActionTypes';

export const login = (email, password) => ({
  type: LOGIN,
  user: { email, password },
});

export const logout = () => ({
  type: LOGOUT,
});

export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER,
});

export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER,
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const loginRequest = (email, password) => {
  return async (dispatch) => {
    dispatch(login(email, password));
    try {
      const response = await fetch('/login-success.json');
      console.log(response.status);
      if (response.status === 200) {
        dispatch(loginSuccess());
      } else {
        dispatch(loginFailure());
      }
    } catch (error) {
      dispatch(loginFailure());
    }
  };
};
