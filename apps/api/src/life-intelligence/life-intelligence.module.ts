import { Module } from '@nestjs/common';
import { LifeIntelligenceController } from './life-intelligence.controller.js';
import { LifeIntelligenceService } from './life-intelligence.service.js';
import { PrismaService } from '../prisma.service.js';

@Module({
  controllers: [LifeIntelligenceController],
  providers: [LifeIntelligenceService, PrismaService],
})
export class LifeIntelligenceModule {}
