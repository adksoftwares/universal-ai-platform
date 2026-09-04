import { Module } from '@nestjs/common';
import { LocationIntelligenceController } from './location-intelligence.controller.js';
import { LocationIntelligenceService } from './location-intelligence.service.js';
import { PrismaService } from '../prisma.service.js';

@Module({
  controllers: [LocationIntelligenceController],
  providers: [LocationIntelligenceService, PrismaService],
})
export class LocationIntelligenceModule {}
