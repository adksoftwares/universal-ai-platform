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
import { EmergencyService } from './emergency.service.js';
let EmergencyController = class EmergencyController {
    emergencyService;
    constructor(emergencyService) {
        this.emergencyService = emergencyService;
    }
    getProfile(userId) {
        return this.emergencyService.getProfile(userId);
    }
    upsertProfile(userId, data) {
        return this.emergencyService.upsertProfile(userId, data);
    }
    getContacts(userId) {
        return this.emergencyService.getContacts(userId);
    }
    createContact(userId, data) {
        return this.emergencyService.createContact(userId, data);
    }
    updateContact(userId, id, data) {
        return this.emergencyService.updateContact(userId, id, data);
    }
    deleteContact(userId, id) {
        return this.emergencyService.deleteContact(userId, id);
    }
    getPlans(userId) {
        return this.emergencyService.getPlans(userId);
    }
    createPlan(userId, data) {
        return this.emergencyService.createPlan(userId, data);
    }
    updatePlan(userId, id, data) {
        return this.emergencyService.updatePlan(userId, id, data);
    }
    deletePlan(userId, id) {
        return this.emergencyService.deletePlan(userId, id);
    }
    getSafetyCheckIns(userId) {
        return this.emergencyService.getSafetyCheckIns(userId);
    }
    createSafetyCheckIn(userId, data) {
        return this.emergencyService.createSafetyCheckIn(userId, data);
    }
    updateSafetyCheckIn(userId, id, data) {
        return this.emergencyService.updateSafetyCheckIn(userId, id, data);
    }
    deleteSafetyCheckIn(userId, id) {
        return this.emergencyService.deleteSafetyCheckIn(userId, id);
    }
};
__decorate([
    Get('profile'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmergencyController.prototype, "getProfile", null);
__decorate([
    Put('profile'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], EmergencyController.prototype, "upsertProfile", null);
__decorate([
    Get('contacts'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmergencyController.prototype, "getContacts", null);
__decorate([
    Post('contacts'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], EmergencyController.prototype, "createContact", null);
__decorate([
    Put('contacts/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], EmergencyController.prototype, "updateContact", null);
__decorate([
    Delete('contacts/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], EmergencyController.prototype, "deleteContact", null);
__decorate([
    Get('plans'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmergencyController.prototype, "getPlans", null);
__decorate([
    Post('plans'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], EmergencyController.prototype, "createPlan", null);
__decorate([
    Put('plans/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], EmergencyController.prototype, "updatePlan", null);
__decorate([
    Delete('plans/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], EmergencyController.prototype, "deletePlan", null);
__decorate([
    Get('safety-check-ins'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmergencyController.prototype, "getSafetyCheckIns", null);
__decorate([
    Post('safety-check-ins'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], EmergencyController.prototype, "createSafetyCheckIn", null);
__decorate([
    Put('safety-check-ins/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], EmergencyController.prototype, "updateSafetyCheckIn", null);
__decorate([
    Delete('safety-check-ins/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], EmergencyController.prototype, "deleteSafetyCheckIn", null);
EmergencyController = __decorate([
    Controller('emergency'),
    __metadata("design:paramtypes", [EmergencyService])
], EmergencyController);
export { EmergencyController };
//# sourceMappingURL=emergency.controller.js.map