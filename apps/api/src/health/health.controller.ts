import { Controller, Get, Post, Put, Delete, Body, Param, Headers } from '@nestjs/common';
import { HealthService } from './health.service.js';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get('profile')
  getProfile(@Headers('x-user-id') userId: string) {
    return this.healthService.getHealthProfile(userId);
  }

  @Put('profile')
  upsertProfile(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.healthService.upsertHealthProfile(userId, data);
  }

  @Get('medications')
  getMedications(@Headers('x-user-id') userId: string) {
    return this.healthService.getMedications(userId);
  }

  @Post('medications')
  createMedication(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.healthService.createMedication(userId, data);
  }

  @Put('medications/:id')
  updateMedication(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.healthService.updateMedication(userId, id, data);
  }

  @Delete('medications/:id')
  deleteMedication(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.healthService.deleteMedication(userId, id);
  }

  @Get('appointments')
  getAppointments(@Headers('x-user-id') userId: string) {
    return this.healthService.getAppointments(userId);
  }

  @Post('appointments')
  createAppointment(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.healthService.createAppointment(userId, data);
  }

  @Put('appointments/:id')
  updateAppointment(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.healthService.updateAppointment(userId, id, data);
  }

  @Delete('appointments/:id')
  deleteAppointment(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.healthService.deleteAppointment(userId, id);
  }

  @Get('wellness')
  getWellnessRecords(@Headers('x-user-id') userId: string) {
    return this.healthService.getWellnessRecords(userId);
  }

  @Post('wellness')
  createWellnessRecord(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.healthService.createWellnessRecord(userId, data);
  }

  @Put('wellness/:id')
  updateWellnessRecord(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.healthService.updateWellnessRecord(userId, id, data);
  }

  @Delete('wellness/:id')
  deleteWellnessRecord(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.healthService.deleteWellnessRecord(userId, id);
  }
}
