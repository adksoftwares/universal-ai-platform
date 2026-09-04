import { Module } from '@nestjs/common';
import { LearningIntelligenceController } from './learning-intelligence.controller.js';
import { LearningIntelligenceService } from './learning-intelligence.service.js';
import { PrismaService } from '../prisma.service.js';

@Module({
  controllers: [LearningIntelligenceController],
  providers: [LearningIntelligenceService, PrismaService],
})
export class LearningIntelligenceModule {}
