import { Controller, Get, Post, Put, Delete, Body, Param, Headers, Patch } from '@nestjs/common';
import { CommunicationIntelligenceService } from './communication-intelligence.service.js';

@Controller('communication-intelligence')
export class CommunicationIntelligenceController {
  constructor(private readonly service: CommunicationIntelligenceService) {}

  @Post('accounts')
  createAccount(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.service.createAccount(userId, data);
  }

  @Get('accounts')
  getAccounts(@Headers('x-user-id') userId: string) {
    return this.service.getAccounts(userId);
  }

  @Get('accounts/:id')
  getAccountById(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.service.getAccountById(userId, id);
  }

  @Patch('accounts/:id')
  updateAccount(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.service.updateAccount(userId, id, data);
  }

  @Delete('accounts/:id')
  deleteAccount(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.service.deleteAccount(userId, id);
  }

  @Post('follow-ups')
  createFollowUp(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.service.createFollowUp(userId, data);
  }

  @Get('follow-ups')
  getFollowUps(@Headers('x-user-id') userId: string) {
    return this.service.getFollowUps(userId);
  }

  @Get('follow-ups/:id')
  getFollowUpById(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.service.getFollowUpById(userId, id);
  }

  @Patch('follow-ups/:id')
  updateFollowUp(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.service.updateFollowUp(userId, id, data);
  }

  @Delete('follow-ups/:id')
  deleteFollowUp(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.service.deleteFollowUp(userId, id);
  }

  @Post('meeting-notes')
  createMeetingNote(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.service.createMeetingNote(userId, data);
  }

  @Get('meeting-notes')
  getMeetingNotes(@Headers('x-user-id') userId: string) {
    return this.service.getMeetingNotes(userId);
  }

  @Get('meeting-notes/:id')
  getMeetingNoteById(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.service.getMeetingNoteById(userId, id);
  }

  @Patch('meeting-notes/:id')
  updateMeetingNote(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.service.updateMeetingNote(userId, id, data);
  }

  @Delete('meeting-notes/:id')
  deleteMeetingNote(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.service.deleteMeetingNote(userId, id);
  }

  @Post('messages/draft')
  generateDraft(@Body() data: { prompt: string; tone: string }) {
    return this.service.generateDraft(data.prompt, data.tone);
  }
}
