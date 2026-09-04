import { Module } from '@nestjs/common';
import { CareerController } from './career.controller.js';
import { CareerService } from './career.service.js';
import { PrismaService } from '../prisma.service.js';

@Module({
  controllers: [CareerController],
  providers: [CareerService, PrismaService],
})
export class CareerModule {}
