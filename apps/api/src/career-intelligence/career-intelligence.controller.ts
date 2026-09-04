import { Controller, Get, Post, Put, Delete, Body, Param, Headers, HttpCode } from '@nestjs/common';
import { CareerIntelligenceService } from './career-intelligence.service.js';

@Controller('career-intelligence')
export class CareerIntelligenceController {
  constructor(private readonly careerIntelligenceService: CareerIntelligenceService) {}

  // Resumes
  @Get('resumes')
  async getResumes(@Headers('x-user-id') userId: string) {
    return this.careerIntelligenceService.getResumes(userId);
  }

  @Get('resumes/:id')
  async getResume(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.careerIntelligenceService.getResume(userId, id);
  }

  @Post('resumes')
  async createResume(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.careerIntelligenceService.createResume(userId, data);
  }

  @Put('resumes/:id')
  async updateResume(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.careerIntelligenceService.updateResume(userId, id, data);
  }

  @Delete('resumes/:id')
  @HttpCode(204)
  async deleteResume(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    await this.careerIntelligenceService.deleteResume(userId, id);
  }

  @Post('resumes/tailor')
  async tailorResume(@Headers('x-user-id') userId: string, @Body() body: { resumeId: string; jobDescription: string }) {
    return this.careerIntelligenceService.tailorResume(userId, body.resumeId, body.jobDescription);
  }

  // PortfolioProjects
  @Get('portfolio-projects')
  async getPortfolioProjects(@Headers('x-user-id') userId: string) {
    return this.careerIntelligenceService.getPortfolioProjects(userId);
  }

  @Get('portfolio-projects/:id')
  async getPortfolioProject(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.careerIntelligenceService.getPortfolioProject(userId, id);
  }

  @Post('portfolio-projects')
  async createPortfolioProject(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.careerIntelligenceService.createPortfolioProject(userId, data);
  }

  @Put('portfolio-projects/:id')
  async updatePortfolioProject(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.careerIntelligenceService.updatePortfolioProject(userId, id, data);
  }

  @Delete('portfolio-projects/:id')
  @HttpCode(204)
  async deletePortfolioProject(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    await this.careerIntelligenceService.deletePortfolioProject(userId, id);
  }

  // NetworkingRecords
  @Get('networking-records')
  async getNetworkingRecords(@Headers('x-user-id') userId: string) {
    return this.careerIntelligenceService.getNetworkingRecords(userId);
  }

  @Get('networking-records/:id')
  async getNetworkingRecord(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.careerIntelligenceService.getNetworkingRecord(userId, id);
  }

  @Post('networking-records')
  async createNetworkingRecord(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.careerIntelligenceService.createNetworkingRecord(userId, data);
  }

  @Put('networking-records/:id')
  async updateNetworkingRecord(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.careerIntelligenceService.updateNetworkingRecord(userId, id, data);
  }

  @Delete('networking-records/:id')
  @HttpCode(204)
  async deleteNetworkingRecord(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    await this.careerIntelligenceService.deleteNetworkingRecord(userId, id);
  }
}
