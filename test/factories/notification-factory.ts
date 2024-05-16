import { Notification, NotificationProps } from '@app/entities/notification';
import { NotificationContent } from '@app/entities/notification-content';

export function makeNotification(override: Partial<NotificationProps> = {}) {
  return new Notification({
    category: 'event',
    content: new NotificationContent('New Notifications'),
    recipientId: 'recipient-2',
    ...override,
  });
}
