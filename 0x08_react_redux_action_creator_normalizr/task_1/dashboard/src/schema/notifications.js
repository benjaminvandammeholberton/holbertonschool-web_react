import * as notificationsData from '../../notifications.json';
import { schema, normalize } from 'normalizr';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});
export const normalizedNotifications = normalize(notificationsData.default, [
  notification,
]);

export const getAllNotificationsByUser = (userId) => {
  return notificationsData.default
    .filter((notif) => notif.author.id === userId)
    .map((notif) => notif.context);
};
