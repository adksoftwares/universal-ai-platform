var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Controller, Get, Post, Body, Param, Headers, Query, UnauthorizedException } from '@nestjs/common';
import { HouseholdIntelligenceService } from './household-intelligence.service.js';
let HouseholdIntelligenceController = class HouseholdIntelligenceController {
    householdIntelligenceService;
    constructor(householdIntelligenceService) {
        this.householdIntelligenceService = householdIntelligenceService;
    }
    extractUserId(userId) {
        if (!userId) {
            throw new UnauthorizedException('Missing x-user-id header');
        }
        return userId;
    }
    getBriefing(userId, householdId) {
        return this.householdIntelligenceService.getBriefing(this.extractUserId(userId), householdId);
    }
    getHouseholds(userId) {
        return this.householdIntelligenceService.getHouseholds(this.extractUserId(userId));
    }
    createHousehold(userId, data) {
        return this.householdIntelligenceService.createHousehold(this.extractUserId(userId), data);
    }
    getHouseholdById(userId, householdId) {
        return this.householdIntelligenceService.getHouseholdById(this.extractUserId(userId), householdId);
    }
    getChores(userId, householdId) {
        return this.householdIntelligenceService.getChores(this.extractUserId(userId), householdId);
    }
    createChore(userId, householdId, data) {
        return this.householdIntelligenceService.createChore(this.extractUserId(userId), householdId, data);
    }
    getShoppingLists(userId, householdId) {
        return this.householdIntelligenceService.getShoppingLists(this.extractUserId(userId), householdId);
    }
    createShoppingList(userId, householdId, data) {
        return this.householdIntelligenceService.createShoppingList(this.extractUserId(userId), householdId, data);
    }
    createShoppingItem(userId, listId, data) {
        return this.householdIntelligenceService.createShoppingItem(this.extractUserId(userId), listId, data);
    }
    getInventory(userId, householdId) {
        return this.householdIntelligenceService.getInventory(this.extractUserId(userId), householdId);
    }
    createInventoryItem(userId, householdId, data) {
        return this.householdIntelligenceService.createInventoryItem(this.extractUserId(userId), householdId, data);
    }
    getMaintenanceRecords(userId, householdId) {
        return this.householdIntelligenceService.getMaintenanceRecords(this.extractUserId(userId), householdId);
    }
    createMaintenanceRecord(userId, householdId, data) {
        return this.householdIntelligenceService.createMaintenanceRecord(this.extractUserId(userId), householdId, data);
    }
};
__decorate([
    Get('briefing'),
    __param(0, Headers('x-user-id')),
    __param(1, Query('householdId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], HouseholdIntelligenceController.prototype, "getBriefing", null);
__decorate([
    Get('households'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HouseholdIntelligenceController.prototype, "getHouseholds", null);
__decorate([
    Post('households'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], HouseholdIntelligenceController.prototype, "createHousehold", null);
__decorate([
    Get('households/:householdId'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('householdId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], HouseholdIntelligenceController.prototype, "getHouseholdById", null);
__decorate([
    Get('households/:householdId/chores'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('householdId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], HouseholdIntelligenceController.prototype, "getChores", null);
__decorate([
    Post('households/:householdId/chores'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('householdId')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], HouseholdIntelligenceController.prototype, "createChore", null);
__decorate([
    Get('households/:householdId/shopping-lists'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('householdId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], HouseholdIntelligenceController.prototype, "getShoppingLists", null);
__decorate([
    Post('households/:householdId/shopping-lists'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('householdId')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], HouseholdIntelligenceController.prototype, "createShoppingList", null);
__decorate([
    Post('shopping-lists/:listId/items'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('listId')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], HouseholdIntelligenceController.prototype, "createShoppingItem", null);
__decorate([
    Get('households/:householdId/inventory'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('householdId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], HouseholdIntelligenceController.prototype, "getInventory", null);
__decorate([
    Post('households/:householdId/inventory'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('householdId')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], HouseholdIntelligenceController.prototype, "createInventoryItem", null);
__decorate([
    Get('households/:householdId/maintenance'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('householdId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], HouseholdIntelligenceController.prototype, "getMaintenanceRecords", null);
__decorate([
    Post('households/:householdId/maintenance'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('householdId')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], HouseholdIntelligenceController.prototype, "createMaintenanceRecord", null);
HouseholdIntelligenceController = __decorate([
    Controller('household-intelligence'),
    __metadata("design:paramtypes", [HouseholdIntelligenceService])
], HouseholdIntelligenceController);
export { HouseholdIntelligenceController };
//# sourceMappingURL=household-intelligence.controller.js.map