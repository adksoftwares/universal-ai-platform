import { Module } from '@nestjs/common';
import { FinanceController } from './finance.controller.js';
import { FinanceService } from './finance.service.js';
import { PrismaService } from '../prisma.service.js';

@Module({
  controllers: [FinanceController],
  providers: [FinanceService, PrismaService],
})
export class FinanceModule {}
