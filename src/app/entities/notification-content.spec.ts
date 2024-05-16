import { NotificationContent } from './notification-content';

describe('Notification Content', () => {
  it('should be able to create notification content', () => {
    const notificationContent = new NotificationContent(
      'Você tem uma nova mensagem',
    );

    expect(notificationContent).toBeTruthy();
  });

  it('should not be able to create a notification content with less than 5 caracters', () => {
    expect(() => new NotificationContent('aaa')).toThrow();
  });

  it('should not be able to create a notification content with less than 5 caracters', () => {
    expect(() => new NotificationContent('a'.repeat(256))).toThrow();
  });
});
