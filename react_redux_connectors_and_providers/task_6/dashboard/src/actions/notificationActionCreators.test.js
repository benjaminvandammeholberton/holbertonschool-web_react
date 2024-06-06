import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
  SET_LOADING_STATE,
  FETCH_NOTIFICATIONS_SUCCESS,
} from './notificationActionTypes';
import {
  markAsread,
  setNotificationFilter,
  setLoadingState,
  setNotifications,
} from './notificationActionCreators';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);

describe('tests for markAsreadfunction', () => {
  it('should return the expected object', () => {
    const expectedReturn = {
      type: MARK_AS_READ,
      index: 1,
    };
    expect(markAsread(1)).toStrictEqual(expectedReturn);
  });
});

describe('tests for setNotificationFilter', () => {
  it('should return the expected object', () => {
    const filter = NotificationTypeFilters.DEFAULT;
    const expectedReturn = {
      type: SET_TYPE_FILTER,
      filter: 'DEFAULT',
    };
    expect(setNotificationFilter(filter)).toStrictEqual(expectedReturn);
  });
});

describe('tests for setLoadingState action creator', () => {
  it('should retiurn the expected action', () => {
    const loading = true;
    const expectedAction = {
      type: SET_LOADING_STATE,
      loading,
    };
    expect(setLoadingState(true)).toStrictEqual(expectedAction);
  });
});

describe('tests for setNotifications action creator', () => {
  it('should retiurn the expected action', () => {
    const data = { 1: 'test' };
    const expectedAction = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data,
    };
    expect(setNotifications({ 1: 'test' })).toStrictEqual(expectedAction);
  });
});

describe('tests for fetchNotifications action creator', () => {
  // it('Tests the fetchNotifications action', () => {
  //   const store = mockStore({});
  //   const expectedActions = [
  //     {
  //       type: SET_LOADING_STATE,
  //       loading: true,
  //     },
  //     {
  //       type: FETCH_NOTIFICATIONS_SUCCESS,
  //       data: [],
  //     },
  //     {
  //       type: SET_LOADING_STATE,
  //       loading: false,
  //     },
  //   ];
  //   fetchMock.get('http://localhost:8564/notifications.json', {
  //     status: 200,
  //     body: [],
  //   });
  //   return store.dispatch(fetchNotifications()).then(() => {
  //     expect(store.getActions()).toEqual(expectedActions);
  //   });
  // });
});
