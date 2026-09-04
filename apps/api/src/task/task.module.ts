import { Module } from '@nestjs/common';
import { TaskService } from './task.service.js';
import { TaskController } from './task.controller.js';
import { PrismaService } from '../prisma.service.js';

@Module({
  controllers: [TaskController],
  providers: [TaskService, PrismaService],
})
export class TaskModule {}
