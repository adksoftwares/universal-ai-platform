import { Module } from '@nestjs/common';
import { LearningController } from './learning.controller.js';
import { LearningService } from './learning.service.js';
import { PrismaService } from '../prisma.service.js';

@Module({
  controllers: [LearningController],
  providers: [LearningService, PrismaService],
})
export class LearningModule {}
