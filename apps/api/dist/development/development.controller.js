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
import { DevelopmentService } from './development.service.js';
let DevelopmentController = class DevelopmentController {
    developmentService;
    constructor(developmentService) {
        this.developmentService = developmentService;
    }
    createHabit(userId, data) {
        return this.developmentService.createHabit(userId, data);
    }
    getHabits(userId) {
        return this.developmentService.getHabits(userId);
    }
    updateHabit(userId, id, data) {
        return this.developmentService.updateHabit(userId, id, data);
    }
    deleteHabit(userId, id) {
        return this.developmentService.deleteHabit(userId, id);
    }
};
__decorate([
    Post('habits'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], DevelopmentController.prototype, "createHabit", null);
__decorate([
    Get('habits'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DevelopmentController.prototype, "getHabits", null);
__decorate([
    Put('habits/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], DevelopmentController.prototype, "updateHabit", null);
__decorate([
    Delete('habits/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], DevelopmentController.prototype, "deleteHabit", null);
DevelopmentController = __decorate([
    Controller('development'),
    __metadata("design:paramtypes", [DevelopmentService])
], DevelopmentController);
export { DevelopmentController };
//# sourceMappingURL=development.controller.js.map