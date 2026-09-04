import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Headers,
} from '@nestjs/common';
import { ResearchIntelligenceService } from './research-intelligence.service.js';

@Controller('research-intelligence')
export class ResearchIntelligenceController {
  constructor(private readonly researchIntelligenceService: ResearchIntelligenceService) {}

  // --- Lesson ---
  @Post('lesson')
  createLesson(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.researchIntelligenceService.createLesson(userId, data);
  }

  @Get('lesson')
  findAllLessons(@Headers('x-user-id') userId: string) {
    return this.researchIntelligenceService.findAllLessons(userId);
  }

  @Get('lesson/:id')
  findOneLesson(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.researchIntelligenceService.findOneLesson(userId, id);
  }

  @Patch('lesson/:id')
  updateLesson(
    @Headers('x-user-id') userId: string,
    @Param('id') id: string,
    @Body() data: any,
  ) {
    return this.researchIntelligenceService.updateLesson(userId, id, data);
  }

  @Delete('lesson/:id')
  removeLesson(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.researchIntelligenceService.removeLesson(userId, id);
  }

  // --- StudyGroup ---
  @Post('study-group')
  createStudyGroup(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.researchIntelligenceService.createStudyGroup(userId, data);
  }

  @Get('study-group')
  findAllStudyGroups(@Headers('x-user-id') userId: string) {
    return this.researchIntelligenceService.findAllStudyGroups(userId);
  }

  @Get('study-group/:id')
  findOneStudyGroup(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.researchIntelligenceService.findOneStudyGroup(userId, id);
  }

  @Patch('study-group/:id')
  updateStudyGroup(
    @Headers('x-user-id') userId: string,
    @Param('id') id: string,
    @Body() data: any,
  ) {
    return this.researchIntelligenceService.updateStudyGroup(userId, id, data);
  }

  @Delete('study-group/:id')
  removeStudyGroup(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.researchIntelligenceService.removeStudyGroup(userId, id);
  }

  // --- ResearchPaper ---
  @Post('research-paper')
  createResearchPaper(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.researchIntelligenceService.createResearchPaper(userId, data);
  }

  @Get('research-paper')
  findAllResearchPapers(@Headers('x-user-id') userId: string) {
    return this.researchIntelligenceService.findAllResearchPapers(userId);
  }

  @Get('research-paper/:id')
  findOneResearchPaper(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.researchIntelligenceService.findOneResearchPaper(userId, id);
  }

  @Patch('research-paper/:id')
  updateResearchPaper(
    @Headers('x-user-id') userId: string,
    @Param('id') id: string,
    @Body() data: any,
  ) {
    return this.researchIntelligenceService.updateResearchPaper(userId, id, data);
  }

  @Delete('research-paper/:id')
  removeResearchPaper(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.researchIntelligenceService.removeResearchPaper(userId, id);
  }

  // --- Citation ---
  @Post('citation')
  createCitation(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.researchIntelligenceService.createCitation(userId, data);
  }

  @Get('citation')
  findAllCitations(@Headers('x-user-id') userId: string) {
    return this.researchIntelligenceService.findAllCitations(userId);
  }

  @Get('citation/:id')
  findOneCitation(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.researchIntelligenceService.findOneCitation(userId, id);
  }

  @Patch('citation/:id')
  updateCitation(
    @Headers('x-user-id') userId: string,
    @Param('id') id: string,
    @Body() data: any,
  ) {
    return this.researchIntelligenceService.updateCitation(userId, id, data);
  }

  @Delete('citation/:id')
  removeCitation(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.researchIntelligenceService.removeCitation(userId, id);
  }

  // --- Socratic Tutor ---
  @Post('assistant/tutor')
  socraticTutor(
    @Headers('x-user-id') userId: string,
    @Body('question') question: string,
  ) {
    return this.researchIntelligenceService.socraticTutor(userId, question);
  }
}
