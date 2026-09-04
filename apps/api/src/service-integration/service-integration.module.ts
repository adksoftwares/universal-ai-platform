import { Module } from '@nestjs/common';
import { ServiceIntegrationController } from './service-integration.controller.js';
import { ServiceIntegrationService } from './service-integration.service.js';
import { PrismaService } from '../prisma.service.js';

@Module({
  controllers: [ServiceIntegrationController],
  providers: [ServiceIntegrationService, PrismaService],
})
export class ServiceIntegrationModule {}
