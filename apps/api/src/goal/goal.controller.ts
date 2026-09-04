import { Controller, Get, Post, Body, Patch, Param, Delete, Headers } from '@nestjs/common';
import { GoalService } from './goal.service.js';

@Controller('goals')
export class GoalController {
  constructor(private readonly goalService: GoalService) {}

  @Post()
  create(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.goalService.create(userId, data);
  }

  @Get()
  findAll(@Headers('x-user-id') userId: string) {
    return this.goalService.findAll(userId);
  }

  @Get(':id')
  findOne(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.goalService.findOne(userId, id);
  }

  @Patch(':id')
  update(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.goalService.update(userId, id, data);
  }

  @Delete(':id')
  remove(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.goalService.remove(userId, id);
  }
}
