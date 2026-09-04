import { Module } from '@nestjs/common';
import { ResearchIntelligenceService } from './research-intelligence.service.js';
import { ResearchIntelligenceController } from './research-intelligence.controller.js';
import { PrismaService } from '../prisma.service.js';

@Module({
  controllers: [ResearchIntelligenceController],
  providers: [ResearchIntelligenceService, PrismaService],
})
export class ResearchIntelligenceModule {}
