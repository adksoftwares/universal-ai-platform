import { Controller, Get, Post, Body, Patch, Param, Delete, Headers } from '@nestjs/common';
import { MemoryService } from './memory.service.js';

@Controller('memories')
export class MemoryController {
  constructor(private readonly memoryService: MemoryService) {}

  @Post()
  create(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.memoryService.create(userId, data);
  }

  @Get()
  findAll(@Headers('x-user-id') userId: string) {
    return this.memoryService.findAll(userId);
  }

  @Get(':id')
  findOne(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.memoryService.findOne(userId, id);
  }

  @Patch(':id')
  update(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.memoryService.update(userId, id, data);
  }

  @Delete(':id')
  remove(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.memoryService.remove(userId, id);
  }
}
