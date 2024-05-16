import { Injectable } from '@nestjs/common';
import { NotificationsRepostory } from '../repositories/notifications-repositories';

interface CountRecipientNotificationsRequest {
  recipientId: string;
}

interface CountRecipientNotificationsResponse {
  count: number;
}

@Injectable()
export class CountRecipientNotifications {
  constructor(private notificationsRepository: NotificationsRepostory) {}

  async execute(
    request: CountRecipientNotificationsRequest,
  ): Promise<CountRecipientNotificationsResponse> {
    const { recipientId } = request;

    const count =
      await this.notificationsRepository.countManyByRecipientId(recipientId);

    return { count };
  }
}
