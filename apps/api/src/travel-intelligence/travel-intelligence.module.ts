import { Module } from '@nestjs/common';
import { TravelIntelligenceController } from './travel-intelligence.controller.js';
import { TravelIntelligenceService } from './travel-intelligence.service.js';
import { PrismaService } from '../prisma.service.js';

@Module({
  controllers: [TravelIntelligenceController],
  providers: [TravelIntelligenceService, PrismaService],
})
export class TravelIntelligenceModule {}
