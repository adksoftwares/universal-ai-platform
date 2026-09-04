import { Controller, Get, Post, Put, Delete, Body, Param, Headers } from '@nestjs/common';
import { AlertService } from './alert.service.js';

@Controller('alert')
export class AlertController {
  constructor(private readonly alertService: AlertService) {}

  @Get('subscriptions')
  getSubscriptions(@Headers('x-user-id') userId: string) {
    return this.alertService.getSubscriptions(userId);
  }

  @Post('subscriptions')
  createSubscription(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.alertService.createSubscription(userId, data);
  }

  @Put('subscriptions/:id')
  updateSubscription(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.alertService.updateSubscription(userId, id, data);
  }

  @Delete('subscriptions/:id')
  deleteSubscription(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.alertService.deleteSubscription(userId, id);
  }

  @Get('disaster-alerts')
  getDisasterAlerts() {
    return this.alertService.getDisasterAlerts();
  }
}
