import { Module } from '@nestjs/common';
import { EducationIntelligenceController } from './education-intelligence.controller.js';
import { EducationIntelligenceService } from './education-intelligence.service.js';
import { PrismaService } from '../prisma.service.js';

@Module({
  controllers: [EducationIntelligenceController],
  providers: [EducationIntelligenceService, PrismaService],
})
export class EducationIntelligenceModule {}
