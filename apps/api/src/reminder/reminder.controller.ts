import { Controller, Get, Post, Body, Patch, Param, Delete, Headers } from '@nestjs/common';
import { ReminderService } from './reminder.service.js';

@Controller('reminders')
export class ReminderController {
  constructor(private readonly reminderService: ReminderService) {}

  @Post()
  create(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.reminderService.create(userId, data);
  }

  @Get()
  findAll(@Headers('x-user-id') userId: string) {
    return this.reminderService.findAll(userId);
  }

  @Get(':id')
  findOne(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.reminderService.findOne(userId, id);
  }

  @Patch(':id')
  update(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.reminderService.update(userId, id, data);
  }

  @Delete(':id')
  remove(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.reminderService.remove(userId, id);
  }
}
