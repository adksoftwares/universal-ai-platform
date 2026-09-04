import { Controller, Get, Post, Body, Patch, Param, Delete, Headers } from '@nestjs/common';
import { TaskService } from './task.service.js';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.taskService.create(userId, data);
  }

  @Get()
  findAll(@Headers('x-user-id') userId: string) {
    return this.taskService.findAll(userId);
  }

  @Get(':id')
  findOne(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.taskService.findOne(userId, id);
  }

  @Patch(':id')
  update(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.taskService.update(userId, id, data);
  }

  @Delete(':id')
  remove(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.taskService.remove(userId, id);
  }
}
