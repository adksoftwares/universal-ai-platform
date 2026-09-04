import { Module } from '@nestjs/common';
import { ReminderService } from './reminder.service.js';
import { ReminderController } from './reminder.controller.js';
import { PrismaService } from '../prisma.service.js';

@Module({
  controllers: [ReminderController],
  providers: [ReminderService, PrismaService],
})
export class ReminderModule {}
