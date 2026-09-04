import { Controller, Get, Post, Put, Delete, Body, Param, Headers, HttpCode } from '@nestjs/common';
import { LifeIntelligenceService } from './life-intelligence.service.js';

@Controller('life-intelligence')
export class LifeIntelligenceController {
  constructor(private readonly service: LifeIntelligenceService) {}

  // Assistant
  @Post('assistant/plan')
  @HttpCode(200)
  async getAssistantPlan(@Headers('x-user-id') userId: string, @Body() body: { goal: string }) {
    return this.service.getAssistantPlan(userId, body.goal);
  }

  // Routine
  @Get('routines')
  async getRoutines(@Headers('x-user-id') userId: string) {
    return this.service.getRoutines(userId);
  }
  @Post('routines')
  async createRoutine(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.service.createRoutine(userId, data);
  }
  @Put('routines/:id')
  async updateRoutine(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.service.updateRoutine(userId, id, data);
  }
  @Delete('routines/:id')
  async deleteRoutine(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.service.deleteRoutine(userId, id);
  }

  // Recipe
  @Get('recipes')
  async getRecipes(@Headers('x-user-id') userId: string) {
    return this.service.getRecipes(userId);
  }
  @Post('recipes')
  async createRecipe(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.service.createRecipe(userId, data);
  }
  @Put('recipes/:id')
  async updateRecipe(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.service.updateRecipe(userId, id, data);
  }
  @Delete('recipes/:id')
  async deleteRecipe(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.service.deleteRecipe(userId, id);
  }

  // MealPlan
  @Get('meal-plans')
  async getMealPlans(@Headers('x-user-id') userId: string) {
    return this.service.getMealPlans(userId);
  }
  @Post('meal-plans')
  async createMealPlan(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.service.createMealPlan(userId, data);
  }
  @Put('meal-plans/:id')
  async updateMealPlan(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.service.updateMealPlan(userId, id, data);
  }
  @Delete('meal-plans/:id')
  async deleteMealPlan(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.service.deleteMealPlan(userId, id);
  }

  // SmartDevice
  @Get('smart-devices')
  async getSmartDevices(@Headers('x-user-id') userId: string) {
    return this.service.getSmartDevices(userId);
  }
  @Post('smart-devices')
  async createSmartDevice(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.service.createSmartDevice(userId, data);
  }
  @Put('smart-devices/:id')
  async updateSmartDevice(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.service.updateSmartDevice(userId, id, data);
  }
  @Delete('smart-devices/:id')
  async deleteSmartDevice(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.service.deleteSmartDevice(userId, id);
  }

  // Warranty
  @Get('warranties')
  async getWarranties(@Headers('x-user-id') userId: string) {
    return this.service.getWarranties(userId);
  }
  @Post('warranties')
  async createWarranty(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.service.createWarranty(userId, data);
  }
  @Put('warranties/:id')
  async updateWarranty(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.service.updateWarranty(userId, id, data);
  }
  @Delete('warranties/:id')
  async deleteWarranty(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.service.deleteWarranty(userId, id);
  }
}
