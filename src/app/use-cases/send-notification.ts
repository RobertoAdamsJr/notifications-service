import { Injectable } from '@nestjs/common';
import { Notification } from '../entities/notification';
import { NotificationContent } from '../entities/notification-content';
import { NotificationsRepostory } from '../repositories/notifications-repositories';

interface SendNotificationsRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationsResponse {
  notification: Notification;
}

@Injectable()
export class SendNotification {
  constructor(private notificationsRepository: NotificationsRepostory) {}

  async execute(
    request: SendNotificationsRequest,
  ): Promise<SendNotificationsResponse> {
    const { recipientId, content, category } = request;

    const notification = new Notification({
      recipientId,
      content: new NotificationContent(content),
      category,
    });

    await this.notificationsRepository.create(notification);

    return { notification };
  }
}
