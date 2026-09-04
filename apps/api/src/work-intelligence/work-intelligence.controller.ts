import { Controller, Get, Post, Put, Delete, Body, Param, Headers, UnauthorizedException } from '@nestjs/common';
import { WorkIntelligenceService } from './work-intelligence.service.js';

@Controller('work-intelligence')
export class WorkIntelligenceController {
  constructor(private readonly workIntelligenceService: WorkIntelligenceService) {}

  @Post('interviews')
  createInterview(@Headers('x-user-id') userId: string, @Body() data: any) {
    if (!userId) throw new UnauthorizedException('Missing x-user-id header');
    return this.workIntelligenceService.createInterview(userId, data);
  }

  @Get('interviews')
  getInterviews(@Headers('x-user-id') userId: string) {
    if (!userId) throw new UnauthorizedException('Missing x-user-id header');
    return this.workIntelligenceService.getInterviews(userId);
  }

  @Get('interviews/:id')
  getInterview(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    if (!userId) throw new UnauthorizedException('Missing x-user-id header');
    return this.workIntelligenceService.getInterview(userId, id);
  }

  @Put('interviews/:id')
  updateInterview(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    if (!userId) throw new UnauthorizedException('Missing x-user-id header');
    return this.workIntelligenceService.updateInterview(userId, id, data);
  }

  @Delete('interviews/:id')
  deleteInterview(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    if (!userId) throw new UnauthorizedException('Missing x-user-id header');
    return this.workIntelligenceService.deleteInterview(userId, id);
  }

  @Post('freelance-projects')
  createFreelanceProject(@Headers('x-user-id') userId: string, @Body() data: any) {
    if (!userId) throw new UnauthorizedException('Missing x-user-id header');
    return this.workIntelligenceService.createFreelanceProject(userId, data);
  }

  @Get('freelance-projects')
  getFreelanceProjects(@Headers('x-user-id') userId: string) {
    if (!userId) throw new UnauthorizedException('Missing x-user-id header');
    return this.workIntelligenceService.getFreelanceProjects(userId);
  }

  @Get('freelance-projects/:id')
  getFreelanceProject(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    if (!userId) throw new UnauthorizedException('Missing x-user-id header');
    return this.workIntelligenceService.getFreelanceProject(userId, id);
  }

  @Put('freelance-projects/:id')
  updateFreelanceProject(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    if (!userId) throw new UnauthorizedException('Missing x-user-id header');
    return this.workIntelligenceService.updateFreelanceProject(userId, id, data);
  }

  @Delete('freelance-projects/:id')
  deleteFreelanceProject(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    if (!userId) throw new UnauthorizedException('Missing x-user-id header');
    return this.workIntelligenceService.deleteFreelanceProject(userId, id);
  }

  @Post('businesses')
  createBusiness(@Headers('x-user-id') userId: string, @Body() data: any) {
    if (!userId) throw new UnauthorizedException('Missing x-user-id header');
    return this.workIntelligenceService.createBusiness(userId, data);
  }

  @Get('businesses')
  getBusinesses(@Headers('x-user-id') userId: string) {
    if (!userId) throw new UnauthorizedException('Missing x-user-id header');
    return this.workIntelligenceService.getBusinesses(userId);
  }

  @Get('businesses/:id')
  getBusiness(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    if (!userId) throw new UnauthorizedException('Missing x-user-id header');
    return this.workIntelligenceService.getBusiness(userId, id);
  }

  @Put('businesses/:id')
  updateBusiness(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    if (!userId) throw new UnauthorizedException('Missing x-user-id header');
    return this.workIntelligenceService.updateBusiness(userId, id, data);
  }

  @Delete('businesses/:id')
  deleteBusiness(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    if (!userId) throw new UnauthorizedException('Missing x-user-id header');
    return this.workIntelligenceService.deleteBusiness(userId, id);
  }

  @Post('resume-match')
  generateResumeMatch(
    @Headers('x-user-id') userId: string,
    @Body() body: { resumeId: string; jobId: string }
  ) {
    if (!userId) throw new UnauthorizedException('Missing x-user-id header');
    return this.workIntelligenceService.generateResumeMatch(userId, body.resumeId, body.jobId);
  }
}
