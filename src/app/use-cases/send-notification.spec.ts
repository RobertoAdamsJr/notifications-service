import { InMemoryNotificationRepository } from '@test/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

describe('Send Notifications', () => {
  it('should be able to send a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const sendNotification = new SendNotification(notificationRepository);

    const { notification } = await sendNotification.execute({
      content: 'Você tem uma nova mensagem',
      category: 'social_new',
      recipientId: '1',
    });

    expect(notificationRepository.notifications).toHaveLength(1);
    expect(notificationRepository.notifications[0]).toEqual(notification);
  });
});
