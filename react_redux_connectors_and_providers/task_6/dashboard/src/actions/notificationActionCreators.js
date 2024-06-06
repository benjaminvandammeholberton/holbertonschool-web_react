// notificationActionCreators.js

import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  SET_LOADING_STATE,
  FETCH_NOTIFICATIONS_SUCCESS,
} from './notificationActionTypes';

export const markAsread = (index) => ({
  type: MARK_AS_READ,
  index,
});

export const setNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter,
});

export const setLoadingState = (loading) => ({
  type: SET_LOADING_STATE,
  loading,
});

export const setNotifications = (data) => ({
  type: FETCH_NOTIFICATIONS_SUCCESS,
  data,
});

export const fetchNotifications = () => {
  return async (dispatch) => {
    dispatch(setLoadingState(true));
    try {
      const response = await fetch(
        'http://192.168.1.192:8564/notifications.json'
      );
      if (!response.ok) {
        throw new Error("Can't fetch data");
      }
      const data = await response.json();
      dispatch(setNotifications(data));
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setLoadingState(false));
    }
  };
};
