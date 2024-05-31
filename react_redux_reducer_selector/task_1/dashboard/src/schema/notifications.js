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
  const notifications = normalizedNotifications.entities.notifications;
  const messages = normalizedNotifications.entities.messages;
  let notificationByUser = [];
  for (let key in notifications) {
    if (notifications[key].author === userId) {
      notificationByUser.push(messages[notifications[key].context]);
    }
  }
  return notificationByUser;
};
