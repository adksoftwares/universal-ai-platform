import { Controller, Get, Post, Body, Param, Delete, Headers, Put, Patch } from '@nestjs/common';
import { CitizenService } from './citizen.service.js';

@Controller('citizen')
export class CitizenController {
  constructor(private readonly citizenService: CitizenService) {}

  @Get('services')
  getServices() {
    return this.citizenService.getServices();
  }

  @Post('services/:id/verify-source')
  verifySource(@Param('id') sourceId: string) {
    return this.citizenService.verifySource(sourceId);
  }

  @Get('bookmarks')
  getBookmarks(@Headers('x-user-id') userId: string) {
    return this.citizenService.getBookmarks(userId);
  }

  @Post('bookmarks')
  addBookmark(@Headers('x-user-id') userId: string, @Body() body: any) {
    return this.citizenService.addBookmark(userId, body);
  }

  @Delete('bookmarks/:id')
  removeBookmark(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.citizenService.removeBookmark(userId, id);
  }

  @Get('applications')
  getApplications(@Headers('x-user-id') userId: string) {
    return this.citizenService.getApplications(userId);
  }

  @Post('applications')
  createApplication(@Headers('x-user-id') userId: string, @Body() body: any) {
    return this.citizenService.createApplication(userId, body);
  }

  @Patch('applications/:id')
  updateApplication(
    @Headers('x-user-id') userId: string,
    @Param('id') id: string,
    @Body() body: any
  ) {
    return this.citizenService.updateApplication(userId, id, body);
  }

  @Delete('applications/:id')
  removeApplication(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.citizenService.removeApplication(userId, id);
  }
}
