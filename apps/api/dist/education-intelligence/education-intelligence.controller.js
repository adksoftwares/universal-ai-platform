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
import { EducationIntelligenceService } from './education-intelligence.service.js';
let EducationIntelligenceController = class EducationIntelligenceController {
    service;
    constructor(service) {
        this.service = service;
    }
    createMistakeLog(userId, data) {
        return this.service.createMistakeLog(userId, data);
    }
    getMistakeLogs(userId) {
        return this.service.getMistakeLogs(userId);
    }
    getMistakeLog(userId, id) {
        return this.service.getMistakeLog(userId, id);
    }
    updateMistakeLog(userId, id, data) {
        return this.service.updateMistakeLog(userId, id, data);
    }
    deleteMistakeLog(userId, id) {
        return this.service.deleteMistakeLog(userId, id);
    }
    createPracticeSession(userId, data) {
        return this.service.createPracticeSession(userId, data);
    }
    getPracticeSessions(userId) {
        return this.service.getPracticeSessions(userId);
    }
    getPracticeSession(userId, id) {
        return this.service.getPracticeSession(userId, id);
    }
    updatePracticeSession(userId, id, data) {
        return this.service.updatePracticeSession(userId, id, data);
    }
    deletePracticeSession(userId, id) {
        return this.service.deletePracticeSession(userId, id);
    }
    createCertificate(userId, data) {
        return this.service.createCertificate(userId, data);
    }
    getCertificates(userId) {
        return this.service.getCertificates(userId);
    }
    getCertificate(userId, id) {
        return this.service.getCertificate(userId, id);
    }
    updateCertificate(userId, id, data) {
        return this.service.updateCertificate(userId, id, data);
    }
    deleteCertificate(userId, id) {
        return this.service.deleteCertificate(userId, id);
    }
    solveStudyProblem(body) {
        return this.service.solveStudyProblem(body.problem, body.level);
    }
};
__decorate([
    Post('mistake-logs'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], EducationIntelligenceController.prototype, "createMistakeLog", null);
__decorate([
    Get('mistake-logs'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EducationIntelligenceController.prototype, "getMistakeLogs", null);
__decorate([
    Get('mistake-logs/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], EducationIntelligenceController.prototype, "getMistakeLog", null);
__decorate([
    Put('mistake-logs/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], EducationIntelligenceController.prototype, "updateMistakeLog", null);
__decorate([
    Delete('mistake-logs/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], EducationIntelligenceController.prototype, "deleteMistakeLog", null);
__decorate([
    Post('practice-sessions'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], EducationIntelligenceController.prototype, "createPracticeSession", null);
__decorate([
    Get('practice-sessions'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EducationIntelligenceController.prototype, "getPracticeSessions", null);
__decorate([
    Get('practice-sessions/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], EducationIntelligenceController.prototype, "getPracticeSession", null);
__decorate([
    Put('practice-sessions/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], EducationIntelligenceController.prototype, "updatePracticeSession", null);
__decorate([
    Delete('practice-sessions/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], EducationIntelligenceController.prototype, "deletePracticeSession", null);
__decorate([
    Post('certificates'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], EducationIntelligenceController.prototype, "createCertificate", null);
__decorate([
    Get('certificates'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EducationIntelligenceController.prototype, "getCertificates", null);
__decorate([
    Get('certificates/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], EducationIntelligenceController.prototype, "getCertificate", null);
__decorate([
    Put('certificates/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], EducationIntelligenceController.prototype, "updateCertificate", null);
__decorate([
    Delete('certificates/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], EducationIntelligenceController.prototype, "deleteCertificate", null);
__decorate([
    Post('study/solve'),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EducationIntelligenceController.prototype, "solveStudyProblem", null);
EducationIntelligenceController = __decorate([
    Controller('education-intelligence'),
    __metadata("design:paramtypes", [EducationIntelligenceService])
], EducationIntelligenceController);
export { EducationIntelligenceController };
//# sourceMappingURL=education-intelligence.controller.js.map