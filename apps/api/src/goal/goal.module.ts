import { Module } from '@nestjs/common';
import { GoalService } from './goal.service.js';
import { GoalController } from './goal.controller.js';
import { PrismaService } from '../prisma.service.js';

@Module({
  controllers: [GoalController],
  providers: [GoalService, PrismaService],
})
export class GoalModule {}
