import {
  FETCH_NOTIFICATIONS_SUCCESS,
  SET_TYPE_FILTER,
  MARK_AS_READ,
} from '../actions/notificationActionTypes';

export const initialState = {
  notifications: [],
  filter: 'DEFAULT',
};

export const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      return {
        ...state,
        notifications: action.data.map((notif) => ({
          ...notif,
          isRead: false,
        })),
      };
    }

    case MARK_AS_READ: {
      return {
        ...state,
        notifications: state.notifications.map((notif) =>
          notif.id === action.index ? { ...notif, isRead: true } : notif
        ),
      };
    }

    case SET_TYPE_FILTER: {
      return {
        ...state,
        filter: action.filter,
      };
    }

    default: {
      return state;
    }
  }
};
