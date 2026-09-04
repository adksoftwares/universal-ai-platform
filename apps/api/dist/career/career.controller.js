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
import { CareerService } from './career.service.js';
let CareerController = class CareerController {
    careerService;
    constructor(careerService) {
        this.careerService = careerService;
    }
    getProfile(userId) {
        return this.careerService.getProfile(userId);
    }
    updateProfile(userId, data) {
        return this.careerService.updateProfile(userId, data);
    }
    createSkill(userId, data) {
        return this.careerService.createSkill(userId, data);
    }
    getSkills(userId) {
        return this.careerService.getSkills(userId);
    }
    updateSkill(userId, id, data) {
        return this.careerService.updateSkill(userId, id, data);
    }
    deleteSkill(userId, id) {
        return this.careerService.deleteSkill(userId, id);
    }
    createProject(userId, data) {
        return this.careerService.createProject(userId, data);
    }
    getProjects(userId) {
        return this.careerService.getProjects(userId);
    }
    updateProject(userId, id, data) {
        return this.careerService.updateProject(userId, id, data);
    }
    deleteProject(userId, id) {
        return this.careerService.deleteProject(userId, id);
    }
};
__decorate([
    Get('profile'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CareerController.prototype, "getProfile", null);
__decorate([
    Put('profile'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CareerController.prototype, "updateProfile", null);
__decorate([
    Post('skills'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CareerController.prototype, "createSkill", null);
__decorate([
    Get('skills'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CareerController.prototype, "getSkills", null);
__decorate([
    Put('skills/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], CareerController.prototype, "updateSkill", null);
__decorate([
    Delete('skills/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CareerController.prototype, "deleteSkill", null);
__decorate([
    Post('projects'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CareerController.prototype, "createProject", null);
__decorate([
    Get('projects'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CareerController.prototype, "getProjects", null);
__decorate([
    Put('projects/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], CareerController.prototype, "updateProject", null);
__decorate([
    Delete('projects/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CareerController.prototype, "deleteProject", null);
CareerController = __decorate([
    Controller('career'),
    __metadata("design:paramtypes", [CareerService])
], CareerController);
export { CareerController };
//# sourceMappingURL=career.controller.js.map