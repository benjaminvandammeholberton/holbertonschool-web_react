import { Map } from 'immutable';

export const filterTypeSelected = (state) => {
  return state.get('filter');
};

export function getNotifications(state) {
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
