import { Module } from '@nestjs/common';
import { SocialIntelligenceController } from './social-intelligence.controller.js';
import { SocialIntelligenceService } from './social-intelligence.service.js';
import { PrismaService } from '../prisma.service.js';

@Module({
  controllers: [SocialIntelligenceController],
  providers: [SocialIntelligenceService, PrismaService],
})
export class SocialIntelligenceModule {}
