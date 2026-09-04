import { Module } from '@nestjs/common';
import { AlertService } from './alert.service.js';
import { AlertController } from './alert.controller.js';
import { PrismaService } from '../prisma.service.js';

@Module({
  controllers: [AlertController],
  providers: [AlertService, PrismaService],
})
export class AlertModule {}
