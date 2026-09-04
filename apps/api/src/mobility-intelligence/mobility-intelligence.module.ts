import { Module } from '@nestjs/common';
import { MobilityIntelligenceService } from './mobility-intelligence.service.js';
import { MobilityIntelligenceController } from './mobility-intelligence.controller.js';
import { PrismaService } from '../prisma.service.js';

@Module({
  controllers: [MobilityIntelligenceController],
  providers: [MobilityIntelligenceService, PrismaService],
  exports: [MobilityIntelligenceService],
})
export class MobilityIntelligenceModule {}
