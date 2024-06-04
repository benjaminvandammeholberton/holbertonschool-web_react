import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from './notificationActionTypes';
import {
  markAsread,
  setNotificationFilter,
} from './notificationActionCreators';

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
