import { Controller, Get, Post, Put, Delete, Param, Body, Headers, UnauthorizedException } from '@nestjs/common';
import { EducationService } from './education.service.js';

@Controller('education')
export class EducationController {
  constructor(private readonly educationService: EducationService) {}

  private extractUserId(userId: string | undefined) {
    if (!userId) {
      throw new UnauthorizedException('x-user-id header is required');
    }
    return userId;
  }

  // EducationRecord
  @Get('records')
  getEducationRecords(@Headers('x-user-id') userId: string) {
    return this.educationService.getEducationRecords(this.extractUserId(userId));
  }

  @Get('records/:id')
  getEducationRecordById(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.educationService.getEducationRecordById(this.extractUserId(userId), id);
  }

  @Post('records')
  createEducationRecord(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.educationService.createEducationRecord(this.extractUserId(userId), data);
  }

  @Put('records/:id')
  updateEducationRecord(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.educationService.updateEducationRecord(this.extractUserId(userId), id, data);
  }

  @Delete('records/:id')
  deleteEducationRecord(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.educationService.deleteEducationRecord(this.extractUserId(userId), id);
  }

  // Course
  @Get('courses')
  getCourses(@Headers('x-user-id') userId: string) {
    return this.educationService.getCourses(this.extractUserId(userId));
  }

  @Get('courses/:id')
  getCourseById(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.educationService.getCourseById(this.extractUserId(userId), id);
  }

  @Post('courses')
  createCourse(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.educationService.createCourse(this.extractUserId(userId), data);
  }

  @Put('courses/:id')
  updateCourse(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.educationService.updateCourse(this.extractUserId(userId), id, data);
  }

  @Delete('courses/:id')
  deleteCourse(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.educationService.deleteCourse(this.extractUserId(userId), id);
  }

  // Subject
  @Get('courses/:courseId/subjects')
  getSubjects(@Headers('x-user-id') userId: string, @Param('courseId') courseId: string) {
    return this.educationService.getSubjects(this.extractUserId(userId), courseId);
  }

  @Get('subjects/:id')
  getSubjectById(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.educationService.getSubjectById(this.extractUserId(userId), id);
  }

  @Post('courses/:courseId/subjects')
  createSubject(@Headers('x-user-id') userId: string, @Param('courseId') courseId: string, @Body() data: any) {
    return this.educationService.createSubject(this.extractUserId(userId), courseId, data);
  }

  @Put('subjects/:id')
  updateSubject(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.educationService.updateSubject(this.extractUserId(userId), id, data);
  }

  @Delete('subjects/:id')
  deleteSubject(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.educationService.deleteSubject(this.extractUserId(userId), id);
  }

  // Exam
  @Get('subjects/:subjectId/exams')
  getExams(@Headers('x-user-id') userId: string, @Param('subjectId') subjectId: string) {
    return this.educationService.getExams(this.extractUserId(userId), subjectId);
  }

  @Get('exams/:id')
  getExamById(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.educationService.getExamById(this.extractUserId(userId), id);
  }

  @Post('subjects/:subjectId/exams')
  createExam(@Headers('x-user-id') userId: string, @Param('subjectId') subjectId: string, @Body() data: any) {
    return this.educationService.createExam(this.extractUserId(userId), subjectId, data);
  }

  @Put('exams/:id')
  updateExam(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.educationService.updateExam(this.extractUserId(userId), id, data);
  }

  @Delete('exams/:id')
  deleteExam(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.educationService.deleteExam(this.extractUserId(userId), id);
  }
}
