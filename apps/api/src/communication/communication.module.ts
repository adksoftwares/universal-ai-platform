import { Module } from '@nestjs/common';
import { CommunicationController } from './communication.controller.js';
import { CommunicationService } from './communication.service.js';
import { PrismaService } from '../prisma.service.js';

@Module({
  controllers: [CommunicationController],
  providers: [CommunicationService, PrismaService],
})
export class CommunicationModule {}
