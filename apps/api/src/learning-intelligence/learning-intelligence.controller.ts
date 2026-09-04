import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Headers,
  UnauthorizedException,
} from '@nestjs/common';
import { LearningIntelligenceService } from './learning-intelligence.service.js';

@Controller('learning-intelligence')
export class LearningIntelligenceController {
  constructor(private readonly learningIntelligenceService: LearningIntelligenceService) {}

  private getUserId(headers: Record<string, string>): string {
    const userId = headers['x-user-id'];
    if (!userId) {
      throw new UnauthorizedException('x-user-id header is required');
    }
    return userId;
  }

  // ======================
  // TOPIC
  // ======================
  @Get('topic')
  getTopics(@Headers() headers: Record<string, string>) {
    return this.learningIntelligenceService.getTopics(this.getUserId(headers));
  }

  @Get('topic/:id')
  getTopicById(
    @Param('id') id: string,
    @Headers() headers: Record<string, string>,
  ) {
    return this.learningIntelligenceService.getTopicById(id, this.getUserId(headers));
  }

  @Post('topic')
  createTopic(
    @Headers() headers: Record<string, string>,
    @Body() data: any,
  ) {
    return this.learningIntelligenceService.createTopic(this.getUserId(headers), data);
  }

  @Put('topic/:id')
  updateTopic(
    @Param('id') id: string,
    @Headers() headers: Record<string, string>,
    @Body() data: any,
  ) {
    return this.learningIntelligenceService.updateTopic(id, this.getUserId(headers), data);
  }

  @Delete('topic/:id')
  deleteTopic(
    @Param('id') id: string,
    @Headers() headers: Record<string, string>,
  ) {
    return this.learningIntelligenceService.deleteTopic(id, this.getUserId(headers));
  }

  // ======================
  // STUDYSESSION
  // ======================
  @Get('study-session')
  getStudySessions(@Headers() headers: Record<string, string>) {
    return this.learningIntelligenceService.getStudySessions(this.getUserId(headers));
  }

  @Get('study-session/:id')
  getStudySessionById(
    @Param('id') id: string,
    @Headers() headers: Record<string, string>,
  ) {
    return this.learningIntelligenceService.getStudySessionById(id, this.getUserId(headers));
  }

  @Post('study-session')
  createStudySession(
    @Headers() headers: Record<string, string>,
    @Body() data: any,
  ) {
    return this.learningIntelligenceService.createStudySession(this.getUserId(headers), data);
  }

  @Put('study-session/:id')
  updateStudySession(
    @Param('id') id: string,
    @Headers() headers: Record<string, string>,
    @Body() data: any,
  ) {
    return this.learningIntelligenceService.updateStudySession(id, this.getUserId(headers), data);
  }

  @Delete('study-session/:id')
  deleteStudySession(
    @Param('id') id: string,
    @Headers() headers: Record<string, string>,
  ) {
    return this.learningIntelligenceService.deleteStudySession(id, this.getUserId(headers));
  }

  // ======================
  // FLASHCARD
  // ======================
  @Get('flashcard')
  getFlashcards(@Headers() headers: Record<string, string>) {
    return this.learningIntelligenceService.getFlashcards(this.getUserId(headers));
  }

  @Get('flashcard/:id')
  getFlashcardById(
    @Param('id') id: string,
    @Headers() headers: Record<string, string>,
  ) {
    return this.learningIntelligenceService.getFlashcardById(id, this.getUserId(headers));
  }

  @Post('flashcard')
  createFlashcard(
    @Headers() headers: Record<string, string>,
    @Body() data: any,
  ) {
    return this.learningIntelligenceService.createFlashcard(this.getUserId(headers), data);
  }

  @Put('flashcard/:id')
  updateFlashcard(
    @Param('id') id: string,
    @Headers() headers: Record<string, string>,
    @Body() data: any,
  ) {
    return this.learningIntelligenceService.updateFlashcard(id, this.getUserId(headers), data);
  }

  @Delete('flashcard/:id')
  deleteFlashcard(
    @Param('id') id: string,
    @Headers() headers: Record<string, string>,
  ) {
    return this.learningIntelligenceService.deleteFlashcard(id, this.getUserId(headers));
  }

  // ======================
  // ASSESSMENT
  // ======================
  @Get('assessment')
  getAssessments(@Headers() headers: Record<string, string>) {
    return this.learningIntelligenceService.getAssessments(this.getUserId(headers));
  }

  @Get('assessment/:id')
  getAssessmentById(
    @Param('id') id: string,
    @Headers() headers: Record<string, string>,
  ) {
    return this.learningIntelligenceService.getAssessmentById(id, this.getUserId(headers));
  }

  @Post('assessment')
  createAssessment(
    @Headers() headers: Record<string, string>,
    @Body() data: any,
  ) {
    return this.learningIntelligenceService.createAssessment(this.getUserId(headers), data);
  }

  @Put('assessment/:id')
  updateAssessment(
    @Param('id') id: string,
    @Headers() headers: Record<string, string>,
    @Body() data: any,
  ) {
    return this.learningIntelligenceService.updateAssessment(id, this.getUserId(headers), data);
  }

  @Delete('assessment/:id')
  deleteAssessment(
    @Param('id') id: string,
    @Headers() headers: Record<string, string>,
  ) {
    return this.learningIntelligenceService.deleteAssessment(id, this.getUserId(headers));
  }

  // ======================
  // KNOWLEDGE GRAPH
  // ======================
  @Get('subject/:id/graph')
  getSubjectGraph(
    @Param('id') id: string,
    @Headers() headers: Record<string, string>,
  ) {
    return this.learningIntelligenceService.getSubjectGraph(id, this.getUserId(headers));
  }
}
