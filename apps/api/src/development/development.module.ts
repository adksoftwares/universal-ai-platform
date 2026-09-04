import { Module } from '@nestjs/common';
import { DevelopmentController } from './development.controller.js';
import { DevelopmentService } from './development.service.js';
import { PrismaService } from '../prisma.service.js';

@Module({
  controllers: [DevelopmentController],
  providers: [DevelopmentService, PrismaService],
})
export class DevelopmentModule {}
