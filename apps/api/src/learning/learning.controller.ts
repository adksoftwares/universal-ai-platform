import { Controller, Get, Post, Body, Put, Param, Delete, Headers } from '@nestjs/common';
import { LearningService } from './learning.service.js';

@Controller('learning')
export class LearningController {
  constructor(private readonly learningService: LearningService) {}

  @Post('goals')
  createGoal(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.learningService.createGoal(userId, data);
  }

  @Get('goals')
  getGoals(@Headers('x-user-id') userId: string) {
    return this.learningService.getGoals(userId);
  }

  @Get('goals/:id')
  getGoal(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.learningService.getGoal(userId, id);
  }

  @Put('goals/:id')
  updateGoal(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.learningService.updateGoal(userId, id, data);
  }

  @Delete('goals/:id')
  deleteGoal(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.learningService.deleteGoal(userId, id);
  }
}
