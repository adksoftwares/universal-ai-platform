import { Module } from '@nestjs/common';
import { CivicIntelligenceController } from './civic-intelligence.controller.js';
import { CivicIntelligenceService } from './civic-intelligence.service.js';
import { PrismaService } from '../prisma.service.js';

@Module({
  controllers: [CivicIntelligenceController],
  providers: [CivicIntelligenceService, PrismaService],
})
export class CivicIntelligenceModule {}
