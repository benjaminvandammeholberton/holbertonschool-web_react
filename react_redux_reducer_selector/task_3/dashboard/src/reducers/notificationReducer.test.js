import { FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';
import { notificationReducer, initialState } from './notificationReducer';
import {
  markAsread,
  setNotificationFilter,
} from '../actions/notificationActionCreators';

describe('tests for the notificationReducer function', () => {
  it('should return the default state when passing no action', () => {
    const action = {};
    const expectedData = {
      notifications: [],
      filter: 'DEFAULT',
    };
    expect(notificationReducer(initialState, action)).toEqual(expectedData);
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
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available',
        },
        {
          id: 2,
          isRead: false,
          type: 'urgent',
          value: 'New resume available',
        },
        {
          id: 3,
          isRead: false,
          type: 'urgent',
          value: 'New data available',
        },
      ],
    };
    expect(notificationReducer(initialState, action)).toEqual(expectedData);
  });

  it('should return the expected data when MARK_AS_READ action is passed', () => {
    const action = markAsread(2);
    const state = {
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available',
        },
        {
          id: 2,
          isRead: false,
          type: 'urgent',
          value: 'New resume available',
        },
        {
          id: 3,
          isRead: false,
          type: 'urgent',
          value: 'New data available',
        },
      ],
    };
    const expectedData = {
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available',
        },
        {
          id: 2,
          isRead: true,
          type: 'urgent',
          value: 'New resume available',
        },
        {
          id: 3,
          isRead: false,
          type: 'urgent',
          value: 'New data available',
        },
      ],
    };
    expect(notificationReducer(state, action)).toEqual(expectedData);
  });

  it('should return the expected data when call the SET_TYPE_FILTER action', () => {
    const action = setNotificationFilter('URGENT');
    const state = {
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available',
        },
        {
          id: 2,
          isRead: false,
          type: 'urgent',
          value: 'New resume available',
        },
        {
          id: 3,
          isRead: false,
          type: 'urgent',
          value: 'New data available',
        },
      ],
    };
    const expectedData = {
      filter: 'URGENT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available',
        },
        {
          id: 2,
          isRead: false,
          type: 'urgent',
          value: 'New resume available',
        },
        {
          id: 3,
          isRead: false,
          type: 'urgent',
          value: 'New data available',
        },
      ],
    };
    expect(notificationReducer(state, action)).toEqual(expectedData);
  });
});
