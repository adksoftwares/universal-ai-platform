import { Module } from '@nestjs/common';
import { FinancialIntelligenceController } from './financial-intelligence.controller.js';
import { FinancialIntelligenceService } from './financial-intelligence.service.js';
import { PrismaService } from '../prisma.service.js';

@Module({
  controllers: [FinancialIntelligenceController],
  providers: [FinancialIntelligenceService, PrismaService]
})
export class FinancialIntelligenceModule {}
