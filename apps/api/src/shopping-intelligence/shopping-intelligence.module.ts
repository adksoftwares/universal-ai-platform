import { Module } from '@nestjs/common';
import { ShoppingIntelligenceService } from './shopping-intelligence.service.js';
import { ShoppingIntelligenceController } from './shopping-intelligence.controller.js';
import { PrismaService } from '../prisma.service.js';

@Module({
  controllers: [ShoppingIntelligenceController],
  providers: [ShoppingIntelligenceService, PrismaService],
})
export class ShoppingIntelligenceModule {}
