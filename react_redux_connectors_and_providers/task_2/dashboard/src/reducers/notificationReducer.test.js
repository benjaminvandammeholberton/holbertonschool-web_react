import { FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';
import { notificationReducer, initialState } from './notificationReducer';
import {
  markAsread,
  setNotificationFilter,
} from '../actions/notificationActionCreators';
import { fromJS } from 'immutable';

describe('tests for the notificationReducer function', () => {
  it('should return the default state when passing no action', () => {
    const action = {};
    const expectedData = {
      notifications: [],
      filter: 'DEFAULT',
    };
    expect(notificationReducer(initialState, action).toJS()).toEqual(
      expectedData
    );
  });

  it('should return the expected data when FETCH_NOTIFICATIONS_SUCCESS is passed', () => {
    const data = [
      {
        id: 1,
        type: 'default',
        value: 'New course available',
      },
      {
        id: 2,
        type: 'urgent',
        value: 'New resume available',
      },
      {
        id: 3,
        type: 'urgent',
        value: 'New data available',
      },
    ];
    const action = { type: FETCH_NOTIFICATIONS_SUCCESS, data };
    const expectedData = {
      notifications: {
        1: {
          id: 1,
          type: 'default',
          value: 'New course available',
          isRead: false,
        },
        2: {
          id: 2,
          type: 'urgent',
          value: 'New resume available',
          isRead: false,
        },
        3: {
          id: 3,
          type: 'urgent',
          value: 'New data available',
          isRead: false,
        },
      },
      filter: 'DEFAULT',
    };
    expect(notificationReducer(initialState, action).toJS()).toEqual(
      expectedData
    );
  });

  it('should return the expected data when MARK_AS_READ action is passed', () => {
    const action = markAsread(2);
    const state = fromJS({
      notifications: {
        1: {
          id: 1,
          type: 'default',
          value: 'New course available',
          isRead: false,
        },
        2: {
          id: 2,
          type: 'urgent',
          value: 'New resume available',
          isRead: true,
        },
        3: {
          id: 3,
          type: 'urgent',
          value: 'New data available',
          isRead: false,
        },
      },
      filter: 'DEFAULT',
    });
    const expectedData = {
      notifications: {
        1: {
          id: 1,
          type: 'default',
          value: 'New course available',
          isRead: false,
        },
        2: {
          id: 2,
          type: 'urgent',
          value: 'New resume available',
          isRead: true,
        },
        3: {
          id: 3,
          type: 'urgent',
          value: 'New data available',
          isRead: false,
        },
      },
      filter: 'DEFAULT',
    };
    expect(notificationReducer(state, action).toJS()).toEqual(expectedData);
  });

  it('should return the expected data when call the SET_TYPE_FILTER action', () => {
    const action = setNotificationFilter('URGENT');
    const state = fromJS({
      notifications: {
        1: {
          id: 1,
          type: 'default',
          value: 'New course available',
          isRead: false,
        },
        2: {
          id: 2,
          type: 'urgent',
          value: 'New resume available',
          isRead: true,
        },
        3: {
          id: 3,
          type: 'urgent',
          value: 'New data available',
          isRead: false,
        },
      },
      filter: 'DEFAULT',
    });
    const expectedData = {
      notifications: {
        1: {
          id: 1,
          type: 'default',
          value: 'New course available',
          isRead: false,
        },
        2: {
          id: 2,
          type: 'urgent',
          value: 'New resume available',
          isRead: true,
        },
        3: {
          id: 3,
          type: 'urgent',
          value: 'New data available',
          isRead: false,
        },
      },
      filter: 'URGENT',
    };
    expect(notificationReducer(state, action).toJS()).toEqual(expectedData);
  });
});
