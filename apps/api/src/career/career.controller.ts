import { Controller, Get, Post, Body, Put, Param, Delete, Headers } from '@nestjs/common';
import { CareerService } from './career.service.js';

@Controller('career')
export class CareerController {
  constructor(private readonly careerService: CareerService) {}

  // Profile
  @Get('profile')
  getProfile(@Headers('x-user-id') userId: string) {
    return this.careerService.getProfile(userId);
  }

  @Put('profile')
  updateProfile(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.careerService.updateProfile(userId, data);
  }

  // Skills
  @Post('skills')
  createSkill(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.careerService.createSkill(userId, data);
  }

  @Get('skills')
  getSkills(@Headers('x-user-id') userId: string) {
    return this.careerService.getSkills(userId);
  }

  @Put('skills/:id')
  updateSkill(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.careerService.updateSkill(userId, id, data);
  }

  @Delete('skills/:id')
  deleteSkill(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.careerService.deleteSkill(userId, id);
  }

  // Projects
  @Post('projects')
  createProject(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.careerService.createProject(userId, data);
  }

  @Get('projects')
  getProjects(@Headers('x-user-id') userId: string) {
    return this.careerService.getProjects(userId);
  }

  @Put('projects/:id')
  updateProject(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.careerService.updateProject(userId, id, data);
  }

  @Delete('projects/:id')
  deleteProject(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.careerService.deleteProject(userId, id);
  }
}
