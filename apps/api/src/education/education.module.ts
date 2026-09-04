import { Module } from '@nestjs/common';
import { EducationController } from './education.controller.js';
import { EducationService } from './education.service.js';
import { PrismaService } from '../prisma.service.js';

@Module({
  controllers: [EducationController],
  providers: [EducationService, PrismaService],
})
export class EducationModule {}
