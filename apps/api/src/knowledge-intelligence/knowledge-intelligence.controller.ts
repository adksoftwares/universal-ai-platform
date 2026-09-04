import { Controller, Get, Post, Put, Delete, Body, Param, Headers } from '@nestjs/common';
import { KnowledgeIntelligenceService } from './knowledge-intelligence.service.js';

@Controller('knowledge-intelligence')
export class KnowledgeIntelligenceController {
  constructor(private readonly service: KnowledgeIntelligenceService) {}

  // Knowledge Collections
  @Post('collections')
  createCollection(@Headers('x-user-id') userId: string, @Body() body: any) {
    return this.service.createKnowledgeCollection(userId, body);
  }

  @Get('collections')
  getCollections(@Headers('x-user-id') userId: string) {
    return this.service.getKnowledgeCollections(userId);
  }

  @Put('collections/:id')
  updateCollection(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() body: any) {
    return this.service.updateKnowledgeCollection(userId, id, body);
  }

  @Delete('collections/:id')
  deleteCollection(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.service.deleteKnowledgeCollection(userId, id);
  }

  // Knowledge Notes
  @Post('notes')
  createNote(@Headers('x-user-id') userId: string, @Body() body: any) {
    return this.service.createKnowledgeNote(userId, body);
  }

  @Get('notes')
  getNotes(@Headers('x-user-id') userId: string) {
    return this.service.getKnowledgeNotes(userId);
  }

  @Put('notes/:id')
  updateNote(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() body: any) {
    return this.service.updateKnowledgeNote(userId, id, body);
  }

  @Delete('notes/:id')
  deleteNote(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.service.deleteKnowledgeNote(userId, id);
  }

  // Quizzes
  @Post('quizzes')
  createQuiz(@Headers('x-user-id') userId: string, @Body() body: any) {
    return this.service.createQuiz(userId, body);
  }

  @Get('quizzes')
  getQuizzes(@Headers('x-user-id') userId: string) {
    return this.service.getQuizzes(userId);
  }

  @Put('quizzes/:id')
  updateQuiz(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() body: any) {
    return this.service.updateQuiz(userId, id, body);
  }

  @Delete('quizzes/:id')
  deleteQuiz(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.service.deleteQuiz(userId, id);
  }

  // Document AI
  @Post('documents/ask')
  askDocument(@Headers('x-user-id') userId: string, @Body() body: { documentId: string, prompt: string }) {
    return this.service.askDocument(userId, body.documentId, body.prompt);
  }
}
