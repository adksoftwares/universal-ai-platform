import { Controller, Get, Post, Delete, Body, Param, Headers } from '@nestjs/common';
import { ServiceIntegrationService } from './service-integration.service.js';

@Controller('service-integration')
export class ServiceIntegrationController {
  constructor(private readonly integrationService: ServiceIntegrationService) {}

  @Post('services')
  createConnectedService(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.integrationService.createConnectedService(userId, data);
  }

  @Get('services')
  getConnectedServices(@Headers('x-user-id') userId: string) {
    return this.integrationService.getConnectedServices(userId);
  }

  @Delete('services/:id')
  deleteConnectedService(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.integrationService.deleteConnectedService(userId, id);
  }

  @Post('actions')
  logExternalAction(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.integrationService.logExternalAction(userId, data);
  }

  @Get('actions')
  getExternalActions(@Headers('x-user-id') userId: string) {
    return this.integrationService.getExternalActions(userId);
  }
}
