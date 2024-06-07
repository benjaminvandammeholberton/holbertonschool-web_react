import { Map } from 'immutable';
import { createSelector } from 'reselect';

export const filterTypeSelected = (state) => {
  return state.get('filter');
};

export function getNotifications(state) {
  console.log(state.toJS());
  const notifications = state.get('notifications');
  return Map(notifications);
}

export function getUnreadNotifications(state) {
  const notifications = state.get('messages');
  if (notifications) {
    const unread = notifications
      .valueSeq()
      .filter((notif) => notif.get('isRead') === false);
    return unread;
  }
  return notifications;
}

export const getUnreadNotificationsByType = createSelector(
  [filterTypeSelected, getNotifications],
  (filter, notifications) => {
    if (!notifications) {
      return Map();
    }

    const unreadNotifications = notifications.filter(
      (notif) => !notif.get('isRead')
    );

    return unreadNotifications.filter((notif) => notif.get('type') === filter);
  }
);
