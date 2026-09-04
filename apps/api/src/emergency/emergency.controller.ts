import { Controller, Get, Post, Put, Delete, Body, Param, Headers } from '@nestjs/common';
import { EmergencyService } from './emergency.service.js';

@Controller('emergency')
export class EmergencyController {
  constructor(private readonly emergencyService: EmergencyService) {}

  @Get('profile')
  getProfile(@Headers('x-user-id') userId: string) {
    return this.emergencyService.getProfile(userId);
  }

  @Put('profile')
  upsertProfile(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.emergencyService.upsertProfile(userId, data);
  }

  @Get('contacts')
  getContacts(@Headers('x-user-id') userId: string) {
    return this.emergencyService.getContacts(userId);
  }

  @Post('contacts')
  createContact(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.emergencyService.createContact(userId, data);
  }

  @Put('contacts/:id')
  updateContact(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.emergencyService.updateContact(userId, id, data);
  }

  @Delete('contacts/:id')
  deleteContact(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.emergencyService.deleteContact(userId, id);
  }

  @Get('plans')
  getPlans(@Headers('x-user-id') userId: string) {
    return this.emergencyService.getPlans(userId);
  }

  @Post('plans')
  createPlan(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.emergencyService.createPlan(userId, data);
  }

  @Put('plans/:id')
  updatePlan(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.emergencyService.updatePlan(userId, id, data);
  }

  @Delete('plans/:id')
  deletePlan(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.emergencyService.deletePlan(userId, id);
  }

  @Get('safety-check-ins')
  getSafetyCheckIns(@Headers('x-user-id') userId: string) {
    return this.emergencyService.getSafetyCheckIns(userId);
  }

  @Post('safety-check-ins')
  createSafetyCheckIn(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.emergencyService.createSafetyCheckIn(userId, data);
  }

  @Put('safety-check-ins/:id')
  updateSafetyCheckIn(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.emergencyService.updateSafetyCheckIn(userId, id, data);
  }

  @Delete('safety-check-ins/:id')
  deleteSafetyCheckIn(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.emergencyService.deleteSafetyCheckIn(userId, id);
  }
}
