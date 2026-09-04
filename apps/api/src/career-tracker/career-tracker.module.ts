import { Module } from '@nestjs/common';
import { CareerTrackerController } from './career-tracker.controller.js';
import { CareerTrackerService } from './career-tracker.service.js';
import { PrismaService } from '../prisma.service.js';

@Module({
  controllers: [CareerTrackerController],
  providers: [CareerTrackerService, PrismaService],
})
export class CareerTrackerModule {}
