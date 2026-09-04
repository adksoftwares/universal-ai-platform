import { Controller, Get, Post, Put, Delete, Body, Param, Headers, HttpException, HttpStatus } from '@nestjs/common';
import { LocationIntelligenceService } from './location-intelligence.service.js';

@Controller('location-intelligence')
export class LocationIntelligenceController {
  constructor(private readonly locationIntelligenceService: LocationIntelligenceService) {}

  @Post('geofence-rules')
  async createGeofenceRule(@Headers('x-user-id') userId: string, @Body() data: any) {
    if (!userId) throw new HttpException('x-user-id header is required', HttpStatus.UNAUTHORIZED);
    return this.locationIntelligenceService.createGeofenceRule(userId, data);
  }

  @Get('geofence-rules')
  async getGeofenceRules(@Headers('x-user-id') userId: string) {
    if (!userId) throw new HttpException('x-user-id header is required', HttpStatus.UNAUTHORIZED);
    return this.locationIntelligenceService.getGeofenceRules(userId);
  }

  @Get('geofence-rules/:id')
  async getGeofenceRule(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    if (!userId) throw new HttpException('x-user-id header is required', HttpStatus.UNAUTHORIZED);
    return this.locationIntelligenceService.getGeofenceRule(userId, id);
  }

  @Put('geofence-rules/:id')
  async updateGeofenceRule(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    if (!userId) throw new HttpException('x-user-id header is required', HttpStatus.UNAUTHORIZED);
    return this.locationIntelligenceService.updateGeofenceRule(userId, id, data);
  }

  @Delete('geofence-rules/:id')
  async deleteGeofenceRule(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    if (!userId) throw new HttpException('x-user-id header is required', HttpStatus.UNAUTHORIZED);
    return this.locationIntelligenceService.deleteGeofenceRule(userId, id);
  }

  @Post('assistant/plan')
  async planItinerary(@Body() payload: { destination: string; budget: string | number }) {
    const { destination, budget } = payload;
    return this.locationIntelligenceService.planItinerary(destination, budget);
  }
}
