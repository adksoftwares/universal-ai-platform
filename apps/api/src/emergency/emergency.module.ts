import { Module } from '@nestjs/common';
import { EmergencyService } from './emergency.service.js';
import { EmergencyController } from './emergency.controller.js';
import { PrismaService } from '../prisma.service.js';

@Module({
  controllers: [EmergencyController],
  providers: [EmergencyService, PrismaService],
})
export class EmergencyModule {}
