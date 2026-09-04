import { Module } from '@nestjs/common';
import { HouseholdIntelligenceController } from './household-intelligence.controller.js';
import { HouseholdIntelligenceService } from './household-intelligence.service.js';
import { PrismaService } from '../prisma.service.js';

@Module({
  controllers: [HouseholdIntelligenceController],
  providers: [HouseholdIntelligenceService, PrismaService],
})
export class HouseholdIntelligenceModule {}
