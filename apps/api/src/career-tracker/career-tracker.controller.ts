import { Controller, Get, Post, Put, Delete, Param, Body, Headers, UnauthorizedException } from '@nestjs/common';
import { CareerTrackerService } from './career-tracker.service.js';

@Controller('career-tracker')
export class CareerTrackerController {
  constructor(private readonly careerTrackerService: CareerTrackerService) {}

  private extractUserId(userId: string | undefined) {
    if (!userId) {
      throw new UnauthorizedException('x-user-id header is required');
    }
    return userId;
  }

  // WorkExperience
  @Get('work-experiences')
  getWorkExperiences(@Headers('x-user-id') userId: string) {
    return this.careerTrackerService.getWorkExperiences(this.extractUserId(userId));
  }

  @Get('work-experiences/:id')
  getWorkExperienceById(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.careerTrackerService.getWorkExperienceById(this.extractUserId(userId), id);
  }

  @Post('work-experiences')
  createWorkExperience(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.careerTrackerService.createWorkExperience(this.extractUserId(userId), data);
  }

  @Put('work-experiences/:id')
  updateWorkExperience(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.careerTrackerService.updateWorkExperience(this.extractUserId(userId), id, data);
  }

  @Delete('work-experiences/:id')
  deleteWorkExperience(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.careerTrackerService.deleteWorkExperience(this.extractUserId(userId), id);
  }

  // Certification
  @Get('certifications')
  getCertifications(@Headers('x-user-id') userId: string) {
    return this.careerTrackerService.getCertifications(this.extractUserId(userId));
  }

  @Get('certifications/:id')
  getCertificationById(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.careerTrackerService.getCertificationById(this.extractUserId(userId), id);
  }

  @Post('certifications')
  createCertification(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.careerTrackerService.createCertification(this.extractUserId(userId), data);
  }

  @Put('certifications/:id')
  updateCertification(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.careerTrackerService.updateCertification(this.extractUserId(userId), id, data);
  }

  @Delete('certifications/:id')
  deleteCertification(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.careerTrackerService.deleteCertification(this.extractUserId(userId), id);
  }

  // GeneratedResume
  @Get('resumes')
  getGeneratedResumes(@Headers('x-user-id') userId: string) {
    return this.careerTrackerService.getGeneratedResumes(this.extractUserId(userId));
  }

  @Get('resumes/:id')
  getGeneratedResumeById(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.careerTrackerService.getGeneratedResumeById(this.extractUserId(userId), id);
  }

  @Post('resumes')
  createGeneratedResume(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.careerTrackerService.createGeneratedResume(this.extractUserId(userId), data);
  }

  @Put('resumes/:id')
  updateGeneratedResume(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.careerTrackerService.updateGeneratedResume(this.extractUserId(userId), id, data);
  }

  @Delete('resumes/:id')
  deleteGeneratedResume(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.careerTrackerService.deleteGeneratedResume(this.extractUserId(userId), id);
  }

  // JobOpportunity
  @Get('opportunities')
  getJobOpportunities(@Headers('x-user-id') userId: string) {
    return this.careerTrackerService.getJobOpportunities(this.extractUserId(userId));
  }

  @Get('opportunities/:id')
  getJobOpportunityById(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.careerTrackerService.getJobOpportunityById(this.extractUserId(userId), id);
  }

  @Post('opportunities')
  createJobOpportunity(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.careerTrackerService.createJobOpportunity(this.extractUserId(userId), data);
  }

  @Put('opportunities/:id')
  updateJobOpportunity(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.careerTrackerService.updateJobOpportunity(this.extractUserId(userId), id, data);
  }

  @Delete('opportunities/:id')
  deleteJobOpportunity(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.careerTrackerService.deleteJobOpportunity(this.extractUserId(userId), id);
  }

  // JobApplication
  @Get('applications')
  getJobApplications(@Headers('x-user-id') userId: string) {
    return this.careerTrackerService.getJobApplications(this.extractUserId(userId));
  }

  @Get('applications/:id')
  getJobApplicationById(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.careerTrackerService.getJobApplicationById(this.extractUserId(userId), id);
  }

  @Post('applications')
  createJobApplication(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.careerTrackerService.createJobApplication(this.extractUserId(userId), data);
  }

  @Put('applications/:id')
  updateJobApplication(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.careerTrackerService.updateJobApplication(this.extractUserId(userId), id, data);
  }

  @Delete('applications/:id')
  deleteJobApplication(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.careerTrackerService.deleteJobApplication(this.extractUserId(userId), id);
  }
}
