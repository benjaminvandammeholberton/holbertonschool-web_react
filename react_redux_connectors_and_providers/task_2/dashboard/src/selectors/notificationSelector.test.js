import { notificationReducer } from '../reducers/notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';
import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from './notificationSelector';
import { markAsread } from '../actions/notificationActionCreators';
import { Map, fromJS } from 'immutable';

describe('Test suite for notification selectors', () => {
  it('Tests that filterTypeSelected works as expected', () => {
    const state = notificationReducer(undefined, {});
    expect(filterTypeSelected(state)).toEqual('DEFAULT');
  });

  it('Tests that getNotifications returns a list of the message entities within the reducer', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', value: 'New data available' },
      ],
    };
    const expectedData = {
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
      3: { id: 3, type: 'urgent', value: 'New data available', isRead: false },
    };
    const state = notificationReducer(undefined, action);
    expect(getNotifications(state)).toEqual(Map(expectedData));
  });

  it('Tests that getUnreadNotifications returns a list of the message entities within the reducer', () => {
    const fetchAction = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', value: 'New data available' },
      ],
    };
    const expectedData = {
      1: {
        id: 1,
        type: 'default',
        value: 'New course available',
        isRead: false,
      },
      3: { id: 3, type: 'urgent', value: 'New data available', isRead: false },
    };
    const action = markAsread(2);
    const initialState = notificationReducer(undefined, fetchAction);
    const state = notificationReducer(initialState, action);
    const selectedNotifs = getUnreadNotifications(state);
    expect(selectedNotifs.toJS()).toEqual(Map(expectedData).toJS());
  });
});
