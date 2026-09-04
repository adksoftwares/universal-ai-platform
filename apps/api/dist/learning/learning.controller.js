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
import { Controller, Get, Post, Body, Put, Param, Delete, Headers } from '@nestjs/common';
import { LearningService } from './learning.service.js';
let LearningController = class LearningController {
    learningService;
    constructor(learningService) {
        this.learningService = learningService;
    }
    createGoal(userId, data) {
        return this.learningService.createGoal(userId, data);
    }
    getGoals(userId) {
        return this.learningService.getGoals(userId);
    }
    getGoal(userId, id) {
        return this.learningService.getGoal(userId, id);
    }
    updateGoal(userId, id, data) {
        return this.learningService.updateGoal(userId, id, data);
    }
    deleteGoal(userId, id) {
        return this.learningService.deleteGoal(userId, id);
    }
};
__decorate([
    Post('goals'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], LearningController.prototype, "createGoal", null);
__decorate([
    Get('goals'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LearningController.prototype, "getGoals", null);
__decorate([
    Get('goals/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], LearningController.prototype, "getGoal", null);
__decorate([
    Put('goals/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], LearningController.prototype, "updateGoal", null);
__decorate([
    Delete('goals/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], LearningController.prototype, "deleteGoal", null);
LearningController = __decorate([
    Controller('learning'),
    __metadata("design:paramtypes", [LearningService])
], LearningController);
export { LearningController };
//# sourceMappingURL=learning.controller.js.map