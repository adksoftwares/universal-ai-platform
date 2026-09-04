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
import { HealthService } from './health.service.js';
let HealthController = class HealthController {
    healthService;
    constructor(healthService) {
        this.healthService = healthService;
    }
    getProfile(userId) {
        return this.healthService.getHealthProfile(userId);
    }
    upsertProfile(userId, data) {
        return this.healthService.upsertHealthProfile(userId, data);
    }
    getMedications(userId) {
        return this.healthService.getMedications(userId);
    }
    createMedication(userId, data) {
        return this.healthService.createMedication(userId, data);
    }
    updateMedication(userId, id, data) {
        return this.healthService.updateMedication(userId, id, data);
    }
    deleteMedication(userId, id) {
        return this.healthService.deleteMedication(userId, id);
    }
    getAppointments(userId) {
        return this.healthService.getAppointments(userId);
    }
    createAppointment(userId, data) {
        return this.healthService.createAppointment(userId, data);
    }
    updateAppointment(userId, id, data) {
        return this.healthService.updateAppointment(userId, id, data);
    }
    deleteAppointment(userId, id) {
        return this.healthService.deleteAppointment(userId, id);
    }
    getWellnessRecords(userId) {
        return this.healthService.getWellnessRecords(userId);
    }
    createWellnessRecord(userId, data) {
        return this.healthService.createWellnessRecord(userId, data);
    }
    updateWellnessRecord(userId, id, data) {
        return this.healthService.updateWellnessRecord(userId, id, data);
    }
    deleteWellnessRecord(userId, id) {
        return this.healthService.deleteWellnessRecord(userId, id);
    }
};
__decorate([
    Get('profile'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HealthController.prototype, "getProfile", null);
__decorate([
    Put('profile'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], HealthController.prototype, "upsertProfile", null);
__decorate([
    Get('medications'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HealthController.prototype, "getMedications", null);
__decorate([
    Post('medications'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], HealthController.prototype, "createMedication", null);
__decorate([
    Put('medications/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], HealthController.prototype, "updateMedication", null);
__decorate([
    Delete('medications/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], HealthController.prototype, "deleteMedication", null);
__decorate([
    Get('appointments'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HealthController.prototype, "getAppointments", null);
__decorate([
    Post('appointments'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], HealthController.prototype, "createAppointment", null);
__decorate([
    Put('appointments/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], HealthController.prototype, "updateAppointment", null);
__decorate([
    Delete('appointments/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], HealthController.prototype, "deleteAppointment", null);
__decorate([
    Get('wellness'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HealthController.prototype, "getWellnessRecords", null);
__decorate([
    Post('wellness'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], HealthController.prototype, "createWellnessRecord", null);
__decorate([
    Put('wellness/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], HealthController.prototype, "updateWellnessRecord", null);
__decorate([
    Delete('wellness/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], HealthController.prototype, "deleteWellnessRecord", null);
HealthController = __decorate([
    Controller('health'),
    __metadata("design:paramtypes", [HealthService])
], HealthController);
export { HealthController };
//# sourceMappingURL=health.controller.js.map