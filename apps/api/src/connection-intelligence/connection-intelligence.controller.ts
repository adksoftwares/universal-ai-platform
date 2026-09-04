import { Controller, Get, Post, Put, Delete, Body, Param, Headers } from '@nestjs/common';
import { ConnectionIntelligenceService } from './connection-intelligence.service.js';

@Controller('connection-intelligence')
export class ConnectionIntelligenceController {
  constructor(private readonly connectionIntelligenceService: ConnectionIntelligenceService) {}

  // CommunicationTemplate endpoints
  @Post('templates')
  createTemplate(@Headers('x-user-id') userId: string, @Body() body: any) {
    return this.connectionIntelligenceService.createTemplate(userId, body);
  }

  @Get('templates')
  getTemplates(@Headers('x-user-id') userId: string) {
    return this.connectionIntelligenceService.getTemplates(userId);
  }

  @Get('templates/:id')
  getTemplateById(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.connectionIntelligenceService.getTemplateById(userId, id);
  }

  @Put('templates/:id')
  updateTemplate(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() body: any) {
    return this.connectionIntelligenceService.updateTemplate(userId, id, body);
  }

  @Delete('templates/:id')
  deleteTemplate(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.connectionIntelligenceService.deleteTemplate(userId, id);
  }

  // BlockedContact endpoints
  @Post('blocked-contacts')
  createBlockedContact(@Headers('x-user-id') userId: string, @Body() body: any) {
    return this.connectionIntelligenceService.createBlockedContact(userId, body);
  }

  @Get('blocked-contacts')
  getBlockedContacts(@Headers('x-user-id') userId: string) {
    return this.connectionIntelligenceService.getBlockedContacts(userId);
  }

  @Get('blocked-contacts/:id')
  getBlockedContactById(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.connectionIntelligenceService.getBlockedContactById(userId, id);
  }

  @Put('blocked-contacts/:id')
  updateBlockedContact(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() body: any) {
    return this.connectionIntelligenceService.updateBlockedContact(userId, id, body);
  }

  @Delete('blocked-contacts/:id')
  deleteBlockedContact(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.connectionIntelligenceService.deleteBlockedContact(userId, id);
  }

  // Assistant rewrite endpoint
  @Post('assistant/rewrite')
  rewriteMessage(
    @Headers('x-user-id') userId: string,
    @Body() body: { content: string; tone: string }
  ) {
    return this.connectionIntelligenceService.rewriteMessage(userId, body.content, body.tone || 'professional');
  }
}
