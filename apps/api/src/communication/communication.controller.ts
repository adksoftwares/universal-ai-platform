import { Controller, Get, Post, Put, Delete, Body, Param, Headers, HttpCode } from '@nestjs/common';
import { CommunicationService } from './communication.service.js';
import { Prisma } from '@prisma/client';

@Controller('communications')
export class CommunicationController {
  constructor(private readonly communicationService: CommunicationService) {}

  // ---- Contacts ----

  @Post('contacts')
  createContact(
    @Headers('x-user-id') userId: string,
    @Body() data: Prisma.ContactCreateWithoutUserInput,
  ) {
    return this.communicationService.createContact(userId, data);
  }

  @Get('contacts')
  findAllContacts(@Headers('x-user-id') userId: string) {
    return this.communicationService.findAllContacts(userId);
  }

  @Get('contacts/:id')
  findContactById(
    @Headers('x-user-id') userId: string,
    @Param('id') id: string,
  ) {
    return this.communicationService.findContactById(userId, id);
  }

  @Put('contacts/:id')
  updateContact(
    @Headers('x-user-id') userId: string,
    @Param('id') id: string,
    @Body() data: Prisma.ContactUpdateWithoutUserInput,
  ) {
    return this.communicationService.updateContact(userId, id, data);
  }

  @Delete('contacts/:id')
  @HttpCode(204)
  deleteContact(
    @Headers('x-user-id') userId: string,
    @Param('id') id: string,
  ) {
    return this.communicationService.deleteContact(userId, id);
  }

  // ---- Communication Records ----

  @Post('records')
  createRecord(
    @Headers('x-user-id') userId: string,
    @Body() data: Prisma.CommunicationRecordUncheckedCreateInput,
  ) {
    return this.communicationService.createCommunication(userId, data);
  }

  @Get('records')
  findAllRecords(@Headers('x-user-id') userId: string) {
    return this.communicationService.findAllCommunications(userId);
  }

  @Get('records/:id')
  findRecordById(
    @Headers('x-user-id') userId: string,
    @Param('id') id: string,
  ) {
    return this.communicationService.findCommunicationById(userId, id);
  }

  @Put('records/:id')
  updateRecord(
    @Headers('x-user-id') userId: string,
    @Param('id') id: string,
    @Body() data: Prisma.CommunicationRecordUpdateWithoutUserInput,
  ) {
    return this.communicationService.updateCommunication(userId, id, data);
  }

  @Delete('records/:id')
  @HttpCode(204)
  deleteRecord(
    @Headers('x-user-id') userId: string,
    @Param('id') id: string,
  ) {
    return this.communicationService.deleteCommunication(userId, id);
  }

  // ---- Meetings ----

  @Post('meetings')
  createMeeting(
    @Headers('x-user-id') userId: string,
    @Body() data: Prisma.MeetingRecordCreateWithoutUserInput,
  ) {
    return this.communicationService.createMeeting(userId, data);
  }

  @Get('meetings')
  findAllMeetings(@Headers('x-user-id') userId: string) {
    return this.communicationService.findAllMeetings(userId);
  }

  @Get('meetings/:id')
  findMeetingById(
    @Headers('x-user-id') userId: string,
    @Param('id') id: string,
  ) {
    return this.communicationService.findMeetingById(userId, id);
  }

  @Put('meetings/:id')
  updateMeeting(
    @Headers('x-user-id') userId: string,
    @Param('id') id: string,
    @Body() data: Prisma.MeetingRecordUpdateWithoutUserInput,
  ) {
    return this.communicationService.updateMeeting(userId, id, data);
  }

  @Delete('meetings/:id')
  @HttpCode(204)
  deleteMeeting(
    @Headers('x-user-id') userId: string,
    @Param('id') id: string,
  ) {
    return this.communicationService.deleteMeeting(userId, id);
  }
}
