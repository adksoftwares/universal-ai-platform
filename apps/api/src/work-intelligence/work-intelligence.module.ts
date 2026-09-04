import { Module } from '@nestjs/common';
import { WorkIntelligenceController } from './work-intelligence.controller.js';
import { WorkIntelligenceService } from './work-intelligence.service.js';
import { PrismaService } from '../prisma.service.js';

@Module({
  controllers: [WorkIntelligenceController],
  providers: [WorkIntelligenceService, PrismaService],
})
export class WorkIntelligenceModule {}
