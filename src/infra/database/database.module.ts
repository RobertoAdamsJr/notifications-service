import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { NotificationsRepostory } from '@app/repositories/notifications-repositories';
import { PrismaNotificationsRepository } from './prisma/repositories/prisma-notifications-repositorires';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepostory,
      useClass: PrismaNotificationsRepository,
    },
  ],
  exports: [NotificationsRepostory],
})
export class DatabaseModule {}
