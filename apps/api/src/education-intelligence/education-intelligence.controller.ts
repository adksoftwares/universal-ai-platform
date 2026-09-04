import { Controller, Get, Post, Put, Delete, Body, Param, Headers } from '@nestjs/common';
import { EducationIntelligenceService } from './education-intelligence.service.js';

@Controller('education-intelligence')
export class EducationIntelligenceController {
  constructor(private readonly service: EducationIntelligenceService) {}

  // MistakeLog CRUD
  @Post('mistake-logs')
  createMistakeLog(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.service.createMistakeLog(userId, data);
  }
  @Get('mistake-logs')
  getMistakeLogs(@Headers('x-user-id') userId: string) {
    return this.service.getMistakeLogs(userId);
  }
  @Get('mistake-logs/:id')
  getMistakeLog(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.service.getMistakeLog(userId, id);
  }
  @Put('mistake-logs/:id')
  updateMistakeLog(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.service.updateMistakeLog(userId, id, data);
  }
  @Delete('mistake-logs/:id')
  deleteMistakeLog(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.service.deleteMistakeLog(userId, id);
  }

  // PracticeSession CRUD
  @Post('practice-sessions')
  createPracticeSession(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.service.createPracticeSession(userId, data);
  }
  @Get('practice-sessions')
  getPracticeSessions(@Headers('x-user-id') userId: string) {
    return this.service.getPracticeSessions(userId);
  }
  @Get('practice-sessions/:id')
  getPracticeSession(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.service.getPracticeSession(userId, id);
  }
  @Put('practice-sessions/:id')
  updatePracticeSession(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.service.updatePracticeSession(userId, id, data);
  }
  @Delete('practice-sessions/:id')
  deletePracticeSession(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.service.deletePracticeSession(userId, id);
  }

  // Certificate CRUD
  @Post('certificates')
  createCertificate(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.service.createCertificate(userId, data);
  }
  @Get('certificates')
  getCertificates(@Headers('x-user-id') userId: string) {
    return this.service.getCertificates(userId);
  }
  @Get('certificates/:id')
  getCertificate(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.service.getCertificate(userId, id);
  }
  @Put('certificates/:id')
  updateCertificate(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.service.updateCertificate(userId, id, data);
  }
  @Delete('certificates/:id')
  deleteCertificate(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.service.deleteCertificate(userId, id);
  }

  @Post('study/solve')
  solveStudyProblem(@Body() body: { problem: string; level: string }) {
    return this.service.solveStudyProblem(body.problem, body.level);
  }
}
