import { Module } from '@nestjs/common';
import { KnowledgeIntelligenceController } from './knowledge-intelligence.controller.js';
import { KnowledgeIntelligenceService } from './knowledge-intelligence.service.js';
import { PrismaService } from '../prisma.service.js';

@Module({
  controllers: [KnowledgeIntelligenceController],
  providers: [KnowledgeIntelligenceService, PrismaService],
})
export class KnowledgeIntelligenceModule {}
