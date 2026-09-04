import { Module } from '@nestjs/common';
import { ConnectionIntelligenceController } from './connection-intelligence.controller.js';
import { ConnectionIntelligenceService } from './connection-intelligence.service.js';
import { PrismaService } from '../prisma.service.js';

@Module({
  controllers: [ConnectionIntelligenceController],
  providers: [ConnectionIntelligenceService, PrismaService],
})
export class ConnectionIntelligenceModule {}
