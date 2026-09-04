import { Module } from '@nestjs/common';
import { HealthIntelligenceController } from './health-intelligence.controller.js';
import { HealthIntelligenceService } from './health-intelligence.service.js';
import { PrismaService } from '../prisma.service.js';

@Module({
  controllers: [HealthIntelligenceController],
  providers: [HealthIntelligenceService, PrismaService],
})
export class HealthIntelligenceModule {}
