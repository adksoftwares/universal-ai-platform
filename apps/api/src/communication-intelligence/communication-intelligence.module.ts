import { Module } from '@nestjs/common';
import { CommunicationIntelligenceController } from './communication-intelligence.controller.js';
import { CommunicationIntelligenceService } from './communication-intelligence.service.js';
import { PrismaService } from '../prisma.service.js';

@Module({
  controllers: [CommunicationIntelligenceController],
  providers: [CommunicationIntelligenceService, PrismaService],
})
export class CommunicationIntelligenceModule {}
