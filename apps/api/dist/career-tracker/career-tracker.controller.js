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
import { Controller, Get, Post, Put, Delete, Param, Body, Headers, UnauthorizedException } from '@nestjs/common';
import { CareerTrackerService } from './career-tracker.service.js';
let CareerTrackerController = class CareerTrackerController {
    careerTrackerService;
    constructor(careerTrackerService) {
        this.careerTrackerService = careerTrackerService;
    }
    extractUserId(userId) {
        if (!userId) {
            throw new UnauthorizedException('x-user-id header is required');
        }
        return userId;
    }
    getWorkExperiences(userId) {
        return this.careerTrackerService.getWorkExperiences(this.extractUserId(userId));
    }
    getWorkExperienceById(userId, id) {
        return this.careerTrackerService.getWorkExperienceById(this.extractUserId(userId), id);
    }
    createWorkExperience(userId, data) {
        return this.careerTrackerService.createWorkExperience(this.extractUserId(userId), data);
    }
    updateWorkExperience(userId, id, data) {
        return this.careerTrackerService.updateWorkExperience(this.extractUserId(userId), id, data);
    }
    deleteWorkExperience(userId, id) {
        return this.careerTrackerService.deleteWorkExperience(this.extractUserId(userId), id);
    }
    getCertifications(userId) {
        return this.careerTrackerService.getCertifications(this.extractUserId(userId));
    }
    getCertificationById(userId, id) {
        return this.careerTrackerService.getCertificationById(this.extractUserId(userId), id);
    }
    createCertification(userId, data) {
        return this.careerTrackerService.createCertification(this.extractUserId(userId), data);
    }
    updateCertification(userId, id, data) {
        return this.careerTrackerService.updateCertification(this.extractUserId(userId), id, data);
    }
    deleteCertification(userId, id) {
        return this.careerTrackerService.deleteCertification(this.extractUserId(userId), id);
    }
    getGeneratedResumes(userId) {
        return this.careerTrackerService.getGeneratedResumes(this.extractUserId(userId));
    }
    getGeneratedResumeById(userId, id) {
        return this.careerTrackerService.getGeneratedResumeById(this.extractUserId(userId), id);
    }
    createGeneratedResume(userId, data) {
        return this.careerTrackerService.createGeneratedResume(this.extractUserId(userId), data);
    }
    updateGeneratedResume(userId, id, data) {
        return this.careerTrackerService.updateGeneratedResume(this.extractUserId(userId), id, data);
    }
    deleteGeneratedResume(userId, id) {
        return this.careerTrackerService.deleteGeneratedResume(this.extractUserId(userId), id);
    }
    getJobOpportunities(userId) {
        return this.careerTrackerService.getJobOpportunities(this.extractUserId(userId));
    }
    getJobOpportunityById(userId, id) {
        return this.careerTrackerService.getJobOpportunityById(this.extractUserId(userId), id);
    }
    createJobOpportunity(userId, data) {
        return this.careerTrackerService.createJobOpportunity(this.extractUserId(userId), data);
    }
    updateJobOpportunity(userId, id, data) {
        return this.careerTrackerService.updateJobOpportunity(this.extractUserId(userId), id, data);
    }
    deleteJobOpportunity(userId, id) {
        return this.careerTrackerService.deleteJobOpportunity(this.extractUserId(userId), id);
    }
    getJobApplications(userId) {
        return this.careerTrackerService.getJobApplications(this.extractUserId(userId));
    }
    getJobApplicationById(userId, id) {
        return this.careerTrackerService.getJobApplicationById(this.extractUserId(userId), id);
    }
    createJobApplication(userId, data) {
        return this.careerTrackerService.createJobApplication(this.extractUserId(userId), data);
    }
    updateJobApplication(userId, id, data) {
        return this.careerTrackerService.updateJobApplication(this.extractUserId(userId), id, data);
    }
    deleteJobApplication(userId, id) {
        return this.careerTrackerService.deleteJobApplication(this.extractUserId(userId), id);
    }
};
__decorate([
    Get('work-experiences'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CareerTrackerController.prototype, "getWorkExperiences", null);
__decorate([
    Get('work-experiences/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CareerTrackerController.prototype, "getWorkExperienceById", null);
__decorate([
    Post('work-experiences'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CareerTrackerController.prototype, "createWorkExperience", null);
__decorate([
    Put('work-experiences/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], CareerTrackerController.prototype, "updateWorkExperience", null);
__decorate([
    Delete('work-experiences/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CareerTrackerController.prototype, "deleteWorkExperience", null);
__decorate([
    Get('certifications'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CareerTrackerController.prototype, "getCertifications", null);
__decorate([
    Get('certifications/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CareerTrackerController.prototype, "getCertificationById", null);
__decorate([
    Post('certifications'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CareerTrackerController.prototype, "createCertification", null);
__decorate([
    Put('certifications/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], CareerTrackerController.prototype, "updateCertification", null);
__decorate([
    Delete('certifications/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CareerTrackerController.prototype, "deleteCertification", null);
__decorate([
    Get('resumes'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CareerTrackerController.prototype, "getGeneratedResumes", null);
__decorate([
    Get('resumes/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CareerTrackerController.prototype, "getGeneratedResumeById", null);
__decorate([
    Post('resumes'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CareerTrackerController.prototype, "createGeneratedResume", null);
__decorate([
    Put('resumes/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], CareerTrackerController.prototype, "updateGeneratedResume", null);
__decorate([
    Delete('resumes/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CareerTrackerController.prototype, "deleteGeneratedResume", null);
__decorate([
    Get('opportunities'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CareerTrackerController.prototype, "getJobOpportunities", null);
__decorate([
    Get('opportunities/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CareerTrackerController.prototype, "getJobOpportunityById", null);
__decorate([
    Post('opportunities'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CareerTrackerController.prototype, "createJobOpportunity", null);
__decorate([
    Put('opportunities/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], CareerTrackerController.prototype, "updateJobOpportunity", null);
__decorate([
    Delete('opportunities/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CareerTrackerController.prototype, "deleteJobOpportunity", null);
__decorate([
    Get('applications'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CareerTrackerController.prototype, "getJobApplications", null);
__decorate([
    Get('applications/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CareerTrackerController.prototype, "getJobApplicationById", null);
__decorate([
    Post('applications'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CareerTrackerController.prototype, "createJobApplication", null);
__decorate([
    Put('applications/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], CareerTrackerController.prototype, "updateJobApplication", null);
__decorate([
    Delete('applications/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CareerTrackerController.prototype, "deleteJobApplication", null);
CareerTrackerController = __decorate([
    Controller('career-tracker'),
    __metadata("design:paramtypes", [CareerTrackerService])
], CareerTrackerController);
export { CareerTrackerController };
//# sourceMappingURL=career-tracker.controller.js.map