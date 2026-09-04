import { Controller, Get, Post, Body, Param, Headers, Query, UnauthorizedException } from '@nestjs/common';
import { HouseholdIntelligenceService } from './household-intelligence.service.js';

@Controller('household-intelligence')
export class HouseholdIntelligenceController {
  constructor(private readonly householdIntelligenceService: HouseholdIntelligenceService) {}

  private extractUserId(userId: string) {
    if (!userId) {
      throw new UnauthorizedException('Missing x-user-id header');
    }
    return userId;
  }

  @Get('briefing')
  getBriefing(
    @Headers('x-user-id') userId: string,
    @Query('householdId') householdId: string,
  ) {
    return this.householdIntelligenceService.getBriefing(this.extractUserId(userId), householdId);
  }

  @Get('households')
  getHouseholds(@Headers('x-user-id') userId: string) {
    return this.householdIntelligenceService.getHouseholds(this.extractUserId(userId));
  }

  @Post('households')
  createHousehold(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.householdIntelligenceService.createHousehold(this.extractUserId(userId), data);
  }

  @Get('households/:householdId')
  getHouseholdById(
    @Headers('x-user-id') userId: string,
    @Param('householdId') householdId: string,
  ) {
    return this.householdIntelligenceService.getHouseholdById(this.extractUserId(userId), householdId);
  }

  @Get('households/:householdId/chores')
  getChores(
    @Headers('x-user-id') userId: string,
    @Param('householdId') householdId: string,
  ) {
    return this.householdIntelligenceService.getChores(this.extractUserId(userId), householdId);
  }

  @Post('households/:householdId/chores')
  createChore(
    @Headers('x-user-id') userId: string,
    @Param('householdId') householdId: string,
    @Body() data: any,
  ) {
    return this.householdIntelligenceService.createChore(this.extractUserId(userId), householdId, data);
  }

  @Get('households/:householdId/shopping-lists')
  getShoppingLists(
    @Headers('x-user-id') userId: string,
    @Param('householdId') householdId: string,
  ) {
    return this.householdIntelligenceService.getShoppingLists(this.extractUserId(userId), householdId);
  }

  @Post('households/:householdId/shopping-lists')
  createShoppingList(
    @Headers('x-user-id') userId: string,
    @Param('householdId') householdId: string,
    @Body() data: any,
  ) {
    return this.householdIntelligenceService.createShoppingList(this.extractUserId(userId), householdId, data);
  }

  @Post('shopping-lists/:listId/items')
  createShoppingItem(
    @Headers('x-user-id') userId: string,
    @Param('listId') listId: string,
    @Body() data: any,
  ) {
    return this.householdIntelligenceService.createShoppingItem(this.extractUserId(userId), listId, data);
  }

  @Get('households/:householdId/inventory')
  getInventory(
    @Headers('x-user-id') userId: string,
    @Param('householdId') householdId: string,
  ) {
    return this.householdIntelligenceService.getInventory(this.extractUserId(userId), householdId);
  }

  @Post('households/:householdId/inventory')
  createInventoryItem(
    @Headers('x-user-id') userId: string,
    @Param('householdId') householdId: string,
    @Body() data: any,
  ) {
    return this.householdIntelligenceService.createInventoryItem(this.extractUserId(userId), householdId, data);
  }

  @Get('households/:householdId/maintenance')
  getMaintenanceRecords(
    @Headers('x-user-id') userId: string,
    @Param('householdId') householdId: string,
  ) {
    return this.householdIntelligenceService.getMaintenanceRecords(this.extractUserId(userId), householdId);
  }

  @Post('households/:householdId/maintenance')
  createMaintenanceRecord(
    @Headers('x-user-id') userId: string,
    @Param('householdId') householdId: string,
    @Body() data: any,
  ) {
    return this.householdIntelligenceService.createMaintenanceRecord(this.extractUserId(userId), householdId, data);
  }
}
