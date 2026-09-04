import { Module } from '@nestjs/common';
import { FinanceIntelligenceController } from './finance-intelligence.controller.js';
import { FinanceIntelligenceService } from './finance-intelligence.service.js';
import { PrismaService } from '../prisma.service.js';

@Module({
  controllers: [FinanceIntelligenceController],
  providers: [FinanceIntelligenceService, PrismaService],
})
export class FinanceIntelligenceModule {}
