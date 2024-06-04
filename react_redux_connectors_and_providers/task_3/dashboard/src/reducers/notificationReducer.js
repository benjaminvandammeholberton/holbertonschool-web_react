import { Map } from 'immutable';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  SET_TYPE_FILTER,
  MARK_AS_READ,
} from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

export const initialState = Map({
  notifications: [],
  filter: 'DEFAULT',
});

export const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      const normalizedData = notificationsNormalizer(action.data);
      Object.keys(normalizedData.entities.notifications).forEach(
        (id) => (normalizedData.entities.notifications[id].isRead = false)
      );
      return initialState.merge(Map(normalizedData.entities));
    }

    case MARK_AS_READ: {
      return state.setIn(
        ['notifications', action.index.toString(), 'isRead'],
        true
      );
    }

    case SET_TYPE_FILTER: {
      return state.set('filter', 'URGENT');
    }

    default: {
      return state;
    }
  }
};
