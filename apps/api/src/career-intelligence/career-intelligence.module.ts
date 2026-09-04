import { Module } from '@nestjs/common';
import { CareerIntelligenceController } from './career-intelligence.controller.js';
import { CareerIntelligenceService } from './career-intelligence.service.js';
import { PrismaService } from '../prisma.service.js';

@Module({
  controllers: [CareerIntelligenceController],
  providers: [CareerIntelligenceService, PrismaService],
})
export class CareerIntelligenceModule {}
