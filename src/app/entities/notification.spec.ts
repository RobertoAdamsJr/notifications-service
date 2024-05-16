import { Notification } from './notification';
import { NotificationContent } from './notification-content';

describe('Notification', () => {
  it('should be able to create notification content', () => {
    const notification = new Notification({
      content: new NotificationContent('Você tem uma nova mensagem'),
      recipientId: '1',
      category: 'message',
      createdAt: new Date(),
    });

    expect(notification).toBeTruthy();
  });
});
