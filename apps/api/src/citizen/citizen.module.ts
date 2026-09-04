import { Module } from '@nestjs/common';
import { CitizenService } from './citizen.service.js';
import { CitizenController } from './citizen.controller.js';
import { PrismaService } from '../prisma.service.js';

@Module({
  controllers: [CitizenController],
  providers: [CitizenService, PrismaService],
})
export class CitizenModule {}
