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
import { Controller, Get, Post, Put, Delete, Body, Param, Headers, HttpCode } from '@nestjs/common';
import { LifeIntelligenceService } from './life-intelligence.service.js';
let LifeIntelligenceController = class LifeIntelligenceController {
    service;
    constructor(service) {
        this.service = service;
    }
    async getAssistantPlan(userId, body) {
        return this.service.getAssistantPlan(userId, body.goal);
    }
    async getRoutines(userId) {
        return this.service.getRoutines(userId);
    }
    async createRoutine(userId, data) {
        return this.service.createRoutine(userId, data);
    }
    async updateRoutine(userId, id, data) {
        return this.service.updateRoutine(userId, id, data);
    }
    async deleteRoutine(userId, id) {
        return this.service.deleteRoutine(userId, id);
    }
    async getRecipes(userId) {
        return this.service.getRecipes(userId);
    }
    async createRecipe(userId, data) {
        return this.service.createRecipe(userId, data);
    }
    async updateRecipe(userId, id, data) {
        return this.service.updateRecipe(userId, id, data);
    }
    async deleteRecipe(userId, id) {
        return this.service.deleteRecipe(userId, id);
    }
    async getMealPlans(userId) {
        return this.service.getMealPlans(userId);
    }
    async createMealPlan(userId, data) {
        return this.service.createMealPlan(userId, data);
    }
    async updateMealPlan(userId, id, data) {
        return this.service.updateMealPlan(userId, id, data);
    }
    async deleteMealPlan(userId, id) {
        return this.service.deleteMealPlan(userId, id);
    }
    async getSmartDevices(userId) {
        return this.service.getSmartDevices(userId);
    }
    async createSmartDevice(userId, data) {
        return this.service.createSmartDevice(userId, data);
    }
    async updateSmartDevice(userId, id, data) {
        return this.service.updateSmartDevice(userId, id, data);
    }
    async deleteSmartDevice(userId, id) {
        return this.service.deleteSmartDevice(userId, id);
    }
    async getWarranties(userId) {
        return this.service.getWarranties(userId);
    }
    async createWarranty(userId, data) {
        return this.service.createWarranty(userId, data);
    }
    async updateWarranty(userId, id, data) {
        return this.service.updateWarranty(userId, id, data);
    }
    async deleteWarranty(userId, id) {
        return this.service.deleteWarranty(userId, id);
    }
};
__decorate([
    Post('assistant/plan'),
    HttpCode(200),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], LifeIntelligenceController.prototype, "getAssistantPlan", null);
__decorate([
    Get('routines'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LifeIntelligenceController.prototype, "getRoutines", null);
__decorate([
    Post('routines'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], LifeIntelligenceController.prototype, "createRoutine", null);
__decorate([
    Put('routines/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], LifeIntelligenceController.prototype, "updateRoutine", null);
__decorate([
    Delete('routines/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], LifeIntelligenceController.prototype, "deleteRoutine", null);
__decorate([
    Get('recipes'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LifeIntelligenceController.prototype, "getRecipes", null);
__decorate([
    Post('recipes'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], LifeIntelligenceController.prototype, "createRecipe", null);
__decorate([
    Put('recipes/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], LifeIntelligenceController.prototype, "updateRecipe", null);
__decorate([
    Delete('recipes/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], LifeIntelligenceController.prototype, "deleteRecipe", null);
__decorate([
    Get('meal-plans'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LifeIntelligenceController.prototype, "getMealPlans", null);
__decorate([
    Post('meal-plans'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], LifeIntelligenceController.prototype, "createMealPlan", null);
__decorate([
    Put('meal-plans/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], LifeIntelligenceController.prototype, "updateMealPlan", null);
__decorate([
    Delete('meal-plans/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], LifeIntelligenceController.prototype, "deleteMealPlan", null);
__decorate([
    Get('smart-devices'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LifeIntelligenceController.prototype, "getSmartDevices", null);
__decorate([
    Post('smart-devices'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], LifeIntelligenceController.prototype, "createSmartDevice", null);
__decorate([
    Put('smart-devices/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], LifeIntelligenceController.prototype, "updateSmartDevice", null);
__decorate([
    Delete('smart-devices/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], LifeIntelligenceController.prototype, "deleteSmartDevice", null);
__decorate([
    Get('warranties'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LifeIntelligenceController.prototype, "getWarranties", null);
__decorate([
    Post('warranties'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], LifeIntelligenceController.prototype, "createWarranty", null);
__decorate([
    Put('warranties/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], LifeIntelligenceController.prototype, "updateWarranty", null);
__decorate([
    Delete('warranties/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], LifeIntelligenceController.prototype, "deleteWarranty", null);
LifeIntelligenceController = __decorate([
    Controller('life-intelligence'),
    __metadata("design:paramtypes", [LifeIntelligenceService])
], LifeIntelligenceController);
export { LifeIntelligenceController };
//# sourceMappingURL=life-intelligence.controller.js.map