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
import { Controller, Get, Post, Put, Delete, Body, Param, Headers } from '@nestjs/common';
import { CivicIntelligenceService } from './civic-intelligence.service.js';
let CivicIntelligenceController = class CivicIntelligenceController {
    civicIntelligenceService;
    constructor(civicIntelligenceService) {
        this.civicIntelligenceService = civicIntelligenceService;
    }
    createApplication(userId, body) {
        return this.civicIntelligenceService.createApplication(userId, body);
    }
    getApplications(userId) {
        return this.civicIntelligenceService.getApplications(userId);
    }
    updateApplication(userId, id, body) {
        return this.civicIntelligenceService.updateApplication(userId, id, body);
    }
    deleteApplication(userId, id) {
        return this.civicIntelligenceService.deleteApplication(userId, id);
    }
    createLicencePermit(userId, body) {
        return this.civicIntelligenceService.createLicencePermit(userId, body);
    }
    getLicencePermits(userId) {
        return this.civicIntelligenceService.getLicencePermits(userId);
    }
    updateLicencePermit(userId, id, body) {
        return this.civicIntelligenceService.updateLicencePermit(userId, id, body);
    }
    deleteLicencePermit(userId, id) {
        return this.civicIntelligenceService.deleteLicencePermit(userId, id);
    }
    createComplaint(userId, body) {
        return this.civicIntelligenceService.createComplaint(userId, body);
    }
    getComplaints(userId) {
        return this.civicIntelligenceService.getComplaints(userId);
    }
    updateComplaint(userId, id, body) {
        return this.civicIntelligenceService.updateComplaint(userId, id, body);
    }
    deleteComplaint(userId, id) {
        return this.civicIntelligenceService.deleteComplaint(userId, id);
    }
    explainService(userId, serviceName) {
        return this.civicIntelligenceService.explainService(serviceName);
    }
};
__decorate([
    Post('applications'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CivicIntelligenceController.prototype, "createApplication", null);
__decorate([
    Get('applications'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CivicIntelligenceController.prototype, "getApplications", null);
__decorate([
    Put('applications/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], CivicIntelligenceController.prototype, "updateApplication", null);
__decorate([
    Delete('applications/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CivicIntelligenceController.prototype, "deleteApplication", null);
__decorate([
    Post('licence-permits'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CivicIntelligenceController.prototype, "createLicencePermit", null);
__decorate([
    Get('licence-permits'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CivicIntelligenceController.prototype, "getLicencePermits", null);
__decorate([
    Put('licence-permits/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], CivicIntelligenceController.prototype, "updateLicencePermit", null);
__decorate([
    Delete('licence-permits/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CivicIntelligenceController.prototype, "deleteLicencePermit", null);
__decorate([
    Post('complaints'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CivicIntelligenceController.prototype, "createComplaint", null);
__decorate([
    Get('complaints'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CivicIntelligenceController.prototype, "getComplaints", null);
__decorate([
    Put('complaints/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], CivicIntelligenceController.prototype, "updateComplaint", null);
__decorate([
    Delete('complaints/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CivicIntelligenceController.prototype, "deleteComplaint", null);
__decorate([
    Post('services/explain'),
    __param(0, Headers('x-user-id')),
    __param(1, Body('serviceName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CivicIntelligenceController.prototype, "explainService", null);
CivicIntelligenceController = __decorate([
    Controller('civic-intelligence'),
    __metadata("design:paramtypes", [CivicIntelligenceService])
], CivicIntelligenceController);
export { CivicIntelligenceController };
//# sourceMappingURL=civic-intelligence.controller.js.map