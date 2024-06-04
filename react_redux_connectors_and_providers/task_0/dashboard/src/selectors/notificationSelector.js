import { Map } from 'immutable';

export const filterTypeSelected = (state) => {
  return state.get('filter');
};

export function getNotifications(state) {
  const notifications = state.get('notifications');
  return Map(notifications);
}

export function getUnreadNotifications(state) {
  const notifications = state.get('notifications');
  const unreadNotifications = Object.values(notifications).filter(
    (notif) => !notif.isRead
  );
  console.log(
    Map(unreadNotifications.map((notif) => [notif.id, notif])).toJS()
  );
  return Map(unreadNotifications.map((notif) => [notif.id, notif]));
}
