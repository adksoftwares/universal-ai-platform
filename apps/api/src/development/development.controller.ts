import { Controller, Get, Post, Body, Put, Param, Delete, Headers } from '@nestjs/common';
import { DevelopmentService } from './development.service.js';

@Controller('development')
export class DevelopmentController {
  constructor(private readonly developmentService: DevelopmentService) {}

  @Post('habits')
  createHabit(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.developmentService.createHabit(userId, data);
  }

  @Get('habits')
  getHabits(@Headers('x-user-id') userId: string) {
    return this.developmentService.getHabits(userId);
  }

  @Put('habits/:id')
  updateHabit(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.developmentService.updateHabit(userId, id, data);
  }

  @Delete('habits/:id')
  deleteHabit(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.developmentService.deleteHabit(userId, id);
  }
}
