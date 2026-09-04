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
import { CareerIntelligenceService } from './career-intelligence.service.js';
let CareerIntelligenceController = class CareerIntelligenceController {
    careerIntelligenceService;
    constructor(careerIntelligenceService) {
        this.careerIntelligenceService = careerIntelligenceService;
    }
    async getResumes(userId) {
        return this.careerIntelligenceService.getResumes(userId);
    }
    async getResume(userId, id) {
        return this.careerIntelligenceService.getResume(userId, id);
    }
    async createResume(userId, data) {
        return this.careerIntelligenceService.createResume(userId, data);
    }
    async updateResume(userId, id, data) {
        return this.careerIntelligenceService.updateResume(userId, id, data);
    }
    async deleteResume(userId, id) {
        await this.careerIntelligenceService.deleteResume(userId, id);
    }
    async tailorResume(userId, body) {
        return this.careerIntelligenceService.tailorResume(userId, body.resumeId, body.jobDescription);
    }
    async getPortfolioProjects(userId) {
        return this.careerIntelligenceService.getPortfolioProjects(userId);
    }
    async getPortfolioProject(userId, id) {
        return this.careerIntelligenceService.getPortfolioProject(userId, id);
    }
    async createPortfolioProject(userId, data) {
        return this.careerIntelligenceService.createPortfolioProject(userId, data);
    }
    async updatePortfolioProject(userId, id, data) {
        return this.careerIntelligenceService.updatePortfolioProject(userId, id, data);
    }
    async deletePortfolioProject(userId, id) {
        await this.careerIntelligenceService.deletePortfolioProject(userId, id);
    }
    async getNetworkingRecords(userId) {
        return this.careerIntelligenceService.getNetworkingRecords(userId);
    }
    async getNetworkingRecord(userId, id) {
        return this.careerIntelligenceService.getNetworkingRecord(userId, id);
    }
    async createNetworkingRecord(userId, data) {
        return this.careerIntelligenceService.createNetworkingRecord(userId, data);
    }
    async updateNetworkingRecord(userId, id, data) {
        return this.careerIntelligenceService.updateNetworkingRecord(userId, id, data);
    }
    async deleteNetworkingRecord(userId, id) {
        await this.careerIntelligenceService.deleteNetworkingRecord(userId, id);
    }
};
__decorate([
    Get('resumes'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CareerIntelligenceController.prototype, "getResumes", null);
__decorate([
    Get('resumes/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CareerIntelligenceController.prototype, "getResume", null);
__decorate([
    Post('resumes'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CareerIntelligenceController.prototype, "createResume", null);
__decorate([
    Put('resumes/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], CareerIntelligenceController.prototype, "updateResume", null);
__decorate([
    Delete('resumes/:id'),
    HttpCode(204),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CareerIntelligenceController.prototype, "deleteResume", null);
__decorate([
    Post('resumes/tailor'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CareerIntelligenceController.prototype, "tailorResume", null);
__decorate([
    Get('portfolio-projects'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CareerIntelligenceController.prototype, "getPortfolioProjects", null);
__decorate([
    Get('portfolio-projects/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CareerIntelligenceController.prototype, "getPortfolioProject", null);
__decorate([
    Post('portfolio-projects'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CareerIntelligenceController.prototype, "createPortfolioProject", null);
__decorate([
    Put('portfolio-projects/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], CareerIntelligenceController.prototype, "updatePortfolioProject", null);
__decorate([
    Delete('portfolio-projects/:id'),
    HttpCode(204),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CareerIntelligenceController.prototype, "deletePortfolioProject", null);
__decorate([
    Get('networking-records'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CareerIntelligenceController.prototype, "getNetworkingRecords", null);
__decorate([
    Get('networking-records/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CareerIntelligenceController.prototype, "getNetworkingRecord", null);
__decorate([
    Post('networking-records'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CareerIntelligenceController.prototype, "createNetworkingRecord", null);
__decorate([
    Put('networking-records/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], CareerIntelligenceController.prototype, "updateNetworkingRecord", null);
__decorate([
    Delete('networking-records/:id'),
    HttpCode(204),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CareerIntelligenceController.prototype, "deleteNetworkingRecord", null);
CareerIntelligenceController = __decorate([
    Controller('career-intelligence'),
    __metadata("design:paramtypes", [CareerIntelligenceService])
], CareerIntelligenceController);
export { CareerIntelligenceController };
//# sourceMappingURL=career-intelligence.controller.js.map