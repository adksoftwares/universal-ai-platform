import { Controller, Get, Post, Put, Delete, Body, Param, Headers } from '@nestjs/common';
import { CivicIntelligenceService } from './civic-intelligence.service.js';

@Controller('civic-intelligence')
export class CivicIntelligenceController {
  constructor(private readonly civicIntelligenceService: CivicIntelligenceService) {}

  // Applications
  @Post('applications')
  createApplication(@Headers('x-user-id') userId: string, @Body() body: any) {
    return this.civicIntelligenceService.createApplication(userId, body);
  }

  @Get('applications')
  getApplications(@Headers('x-user-id') userId: string) {
    return this.civicIntelligenceService.getApplications(userId);
  }

  @Put('applications/:id')
  updateApplication(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() body: any) {
    return this.civicIntelligenceService.updateApplication(userId, id, body);
  }

  @Delete('applications/:id')
  deleteApplication(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.civicIntelligenceService.deleteApplication(userId, id);
  }

  // Licence/Permits
  @Post('licence-permits')
  createLicencePermit(@Headers('x-user-id') userId: string, @Body() body: any) {
    return this.civicIntelligenceService.createLicencePermit(userId, body);
  }

  @Get('licence-permits')
  getLicencePermits(@Headers('x-user-id') userId: string) {
    return this.civicIntelligenceService.getLicencePermits(userId);
  }

  @Put('licence-permits/:id')
  updateLicencePermit(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() body: any) {
    return this.civicIntelligenceService.updateLicencePermit(userId, id, body);
  }

  @Delete('licence-permits/:id')
  deleteLicencePermit(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.civicIntelligenceService.deleteLicencePermit(userId, id);
  }

  // Complaints
  @Post('complaints')
  createComplaint(@Headers('x-user-id') userId: string, @Body() body: any) {
    return this.civicIntelligenceService.createComplaint(userId, body);
  }

  @Get('complaints')
  getComplaints(@Headers('x-user-id') userId: string) {
    return this.civicIntelligenceService.getComplaints(userId);
  }

  @Put('complaints/:id')
  updateComplaint(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() body: any) {
    return this.civicIntelligenceService.updateComplaint(userId, id, body);
  }

  @Delete('complaints/:id')
  deleteComplaint(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.civicIntelligenceService.deleteComplaint(userId, id);
  }

  // AI Explain
  @Post('services/explain')
  explainService(@Headers('x-user-id') userId: string, @Body('serviceName') serviceName: string) {
    return this.civicIntelligenceService.explainService(serviceName);
  }
}
