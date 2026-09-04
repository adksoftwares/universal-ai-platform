import { Module } from '@nestjs/common';
import { TravelController } from './travel.controller.js';
import { TravelService } from './travel.service.js';
import { PrismaService } from '../prisma.service.js';

@Module({
  controllers: [TravelController],
  providers: [TravelService, PrismaService],
})
export class TravelModule {}
