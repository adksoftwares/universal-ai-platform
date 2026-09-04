import { Controller, Get, Post, Body, Patch, Param, Delete, Headers, Query } from '@nestjs/common';
import { MobilityIntelligenceService } from './mobility-intelligence.service.js';

@Controller('mobility-intelligence')
export class MobilityIntelligenceController {
  constructor(private readonly mobilityIntelligenceService: MobilityIntelligenceService) {}

  // --- Vehicle CRUD ---

  @Post('vehicles')
  createVehicle(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.mobilityIntelligenceService.createVehicle(userId, data);
  }

  @Get('vehicles')
  getVehicles(@Headers('x-user-id') userId: string) {
    return this.mobilityIntelligenceService.getVehicles(userId);
  }

  @Get('vehicles/:id')
  getVehicle(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.mobilityIntelligenceService.getVehicle(userId, id);
  }

  @Patch('vehicles/:id')
  updateVehicle(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.mobilityIntelligenceService.updateVehicle(userId, id, data);
  }

  @Delete('vehicles/:id')
  deleteVehicle(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.mobilityIntelligenceService.deleteVehicle(userId, id);
  }

  // --- CommuteProfile CRUD ---

  @Post('commute-profiles')
  createCommuteProfile(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.mobilityIntelligenceService.createCommuteProfile(userId, data);
  }

  @Get('commute-profiles')
  getCommuteProfiles(@Headers('x-user-id') userId: string) {
    return this.mobilityIntelligenceService.getCommuteProfiles(userId);
  }

  @Get('commute-profiles/:id')
  getCommuteProfile(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.mobilityIntelligenceService.getCommuteProfile(userId, id);
  }

  @Patch('commute-profiles/:id')
  updateCommuteProfile(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.mobilityIntelligenceService.updateCommuteProfile(userId, id, data);
  }

  @Delete('commute-profiles/:id')
  deleteCommuteProfile(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.mobilityIntelligenceService.deleteCommuteProfile(userId, id);
  }

  // --- Routes Search ---

  @Post('routes/search')
  searchRoutes(@Headers('x-user-id') userId: string, @Body() query: any) {
    return this.mobilityIntelligenceService.searchRoutes(userId, query);
  }
}
