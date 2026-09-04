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
import { Controller, Get, Post, Put, Delete, Body, Param, Headers, UnauthorizedException } from '@nestjs/common';
import { WorkIntelligenceService } from './work-intelligence.service.js';
let WorkIntelligenceController = class WorkIntelligenceController {
    workIntelligenceService;
    constructor(workIntelligenceService) {
        this.workIntelligenceService = workIntelligenceService;
    }
    createInterview(userId, data) {
        if (!userId)
            throw new UnauthorizedException('Missing x-user-id header');
        return this.workIntelligenceService.createInterview(userId, data);
    }
    getInterviews(userId) {
        if (!userId)
            throw new UnauthorizedException('Missing x-user-id header');
        return this.workIntelligenceService.getInterviews(userId);
    }
    getInterview(userId, id) {
        if (!userId)
            throw new UnauthorizedException('Missing x-user-id header');
        return this.workIntelligenceService.getInterview(userId, id);
    }
    updateInterview(userId, id, data) {
        if (!userId)
            throw new UnauthorizedException('Missing x-user-id header');
        return this.workIntelligenceService.updateInterview(userId, id, data);
    }
    deleteInterview(userId, id) {
        if (!userId)
            throw new UnauthorizedException('Missing x-user-id header');
        return this.workIntelligenceService.deleteInterview(userId, id);
    }
    createFreelanceProject(userId, data) {
        if (!userId)
            throw new UnauthorizedException('Missing x-user-id header');
        return this.workIntelligenceService.createFreelanceProject(userId, data);
    }
    getFreelanceProjects(userId) {
        if (!userId)
            throw new UnauthorizedException('Missing x-user-id header');
        return this.workIntelligenceService.getFreelanceProjects(userId);
    }
    getFreelanceProject(userId, id) {
        if (!userId)
            throw new UnauthorizedException('Missing x-user-id header');
        return this.workIntelligenceService.getFreelanceProject(userId, id);
    }
    updateFreelanceProject(userId, id, data) {
        if (!userId)
            throw new UnauthorizedException('Missing x-user-id header');
        return this.workIntelligenceService.updateFreelanceProject(userId, id, data);
    }
    deleteFreelanceProject(userId, id) {
        if (!userId)
            throw new UnauthorizedException('Missing x-user-id header');
        return this.workIntelligenceService.deleteFreelanceProject(userId, id);
    }
    createBusiness(userId, data) {
        if (!userId)
            throw new UnauthorizedException('Missing x-user-id header');
        return this.workIntelligenceService.createBusiness(userId, data);
    }
    getBusinesses(userId) {
        if (!userId)
            throw new UnauthorizedException('Missing x-user-id header');
        return this.workIntelligenceService.getBusinesses(userId);
    }
    getBusiness(userId, id) {
        if (!userId)
            throw new UnauthorizedException('Missing x-user-id header');
        return this.workIntelligenceService.getBusiness(userId, id);
    }
    updateBusiness(userId, id, data) {
        if (!userId)
            throw new UnauthorizedException('Missing x-user-id header');
        return this.workIntelligenceService.updateBusiness(userId, id, data);
    }
    deleteBusiness(userId, id) {
        if (!userId)
            throw new UnauthorizedException('Missing x-user-id header');
        return this.workIntelligenceService.deleteBusiness(userId, id);
    }
    generateResumeMatch(userId, body) {
        if (!userId)
            throw new UnauthorizedException('Missing x-user-id header');
        return this.workIntelligenceService.generateResumeMatch(userId, body.resumeId, body.jobId);
    }
};
__decorate([
    Post('interviews'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], WorkIntelligenceController.prototype, "createInterview", null);
__decorate([
    Get('interviews'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WorkIntelligenceController.prototype, "getInterviews", null);
__decorate([
    Get('interviews/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], WorkIntelligenceController.prototype, "getInterview", null);
__decorate([
    Put('interviews/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], WorkIntelligenceController.prototype, "updateInterview", null);
__decorate([
    Delete('interviews/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], WorkIntelligenceController.prototype, "deleteInterview", null);
__decorate([
    Post('freelance-projects'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], WorkIntelligenceController.prototype, "createFreelanceProject", null);
__decorate([
    Get('freelance-projects'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WorkIntelligenceController.prototype, "getFreelanceProjects", null);
__decorate([
    Get('freelance-projects/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], WorkIntelligenceController.prototype, "getFreelanceProject", null);
__decorate([
    Put('freelance-projects/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], WorkIntelligenceController.prototype, "updateFreelanceProject", null);
__decorate([
    Delete('freelance-projects/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], WorkIntelligenceController.prototype, "deleteFreelanceProject", null);
__decorate([
    Post('businesses'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], WorkIntelligenceController.prototype, "createBusiness", null);
__decorate([
    Get('businesses'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WorkIntelligenceController.prototype, "getBusinesses", null);
__decorate([
    Get('businesses/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], WorkIntelligenceController.prototype, "getBusiness", null);
__decorate([
    Put('businesses/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], WorkIntelligenceController.prototype, "updateBusiness", null);
__decorate([
    Delete('businesses/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], WorkIntelligenceController.prototype, "deleteBusiness", null);
__decorate([
    Post('resume-match'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], WorkIntelligenceController.prototype, "generateResumeMatch", null);
WorkIntelligenceController = __decorate([
    Controller('work-intelligence'),
    __metadata("design:paramtypes", [WorkIntelligenceService])
], WorkIntelligenceController);
export { WorkIntelligenceController };
//# sourceMappingURL=work-intelligence.controller.js.map