import { Controller, Get, Post, Put, Delete, Body, Param, Headers } from '@nestjs/common';
import { SocialIntelligenceService } from './social-intelligence.service.js';

@Controller('social-intelligence')
export class SocialIntelligenceController {
  constructor(private readonly service: SocialIntelligenceService) {}

  @Post('groups')
  createGroup(@Headers('x-user-id') userId: string, @Body() body: any) {
    return this.service.createGroup(userId, body);
  }

  @Get('groups')
  getGroups(@Headers('x-user-id') userId: string) {
    return this.service.getGroups(userId);
  }

  @Put('groups/:id')
  updateGroup(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() body: any) {
    return this.service.updateGroup(userId, id, body);
  }

  @Delete('groups/:id')
  deleteGroup(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.service.deleteGroup(userId, id);
  }

  @Post('events')
  createEvent(@Headers('x-user-id') userId: string, @Body() body: any) {
    return this.service.createEvent(userId, body);
  }

  @Get('events')
  getEvents(@Headers('x-user-id') userId: string) {
    return this.service.getEvents(userId);
  }

  @Put('events/:id')
  updateEvent(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() body: any) {
    return this.service.updateEvent(userId, id, body);
  }

  @Delete('events/:id')
  deleteEvent(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.service.deleteEvent(userId, id);
  }

  @Post('gift-plans')
  createGiftPlan(@Headers('x-user-id') userId: string, @Body() body: any) {
    return this.service.createGiftPlan(userId, body);
  }

  @Get('gift-plans')
  getGiftPlans(@Headers('x-user-id') userId: string) {
    return this.service.getGiftPlans(userId);
  }

  @Put('gift-plans/:id')
  updateGiftPlan(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() body: any) {
    return this.service.updateGiftPlan(userId, id, body);
  }

  @Delete('gift-plans/:id')
  deleteGiftPlan(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.service.deleteGiftPlan(userId, id);
  }

  @Post('safety-plans')
  createSafetyPlan(@Headers('x-user-id') userId: string, @Body() body: any) {
    return this.service.createSafetyPlan(userId, body);
  }

  @Get('safety-plans')
  getSafetyPlans(@Headers('x-user-id') userId: string) {
    return this.service.getSafetyPlans(userId);
  }

  @Put('safety-plans/:id')
  updateSafetyPlan(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() body: any) {
    return this.service.updateSafetyPlan(userId, id, body);
  }

  @Delete('safety-plans/:id')
  deleteSafetyPlan(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.service.deleteSafetyPlan(userId, id);
  }

  @Post('location-shares')
  createLocationShare(@Headers('x-user-id') userId: string, @Body() body: any) {
    return this.service.createLocationShare(userId, body);
  }

  @Get('location-shares')
  getLocationShares(@Headers('x-user-id') userId: string) {
    return this.service.getLocationShares(userId);
  }

  @Put('location-shares/:id')
  updateLocationShare(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() body: any) {
    return this.service.updateLocationShare(userId, id, body);
  }

  @Delete('location-shares/:id')
  deleteLocationShare(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.service.deleteLocationShare(userId, id);
  }

  @Post('planning/suggest')
  suggestPlanning(@Headers('x-user-id') userId: string, @Body() body: any) {
    return this.service.suggestPlanning(userId, body);
  }
}
