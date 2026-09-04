import { Module } from '@nestjs/common';
import { MemoryService } from './memory.service.js';
import { MemoryController } from './memory.controller.js';
import { PrismaService } from '../prisma.service.js';

@Module({
  controllers: [MemoryController],
  providers: [MemoryService, PrismaService],
})
export class MemoryModule {}
