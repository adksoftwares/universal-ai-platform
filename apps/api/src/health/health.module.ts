import { Module } from '@nestjs/common';
import { HealthService } from './health.service.js';
import { HealthController } from './health.controller.js';
import { PrismaService } from '../prisma.service.js';

@Module({
  controllers: [HealthController],
  providers: [HealthService, PrismaService],
})
export class HealthModule {}
