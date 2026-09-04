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
import { Controller, Get, Post, Delete, Body, Param, Headers } from '@nestjs/common';
import { ServiceIntegrationService } from './service-integration.service.js';
let ServiceIntegrationController = class ServiceIntegrationController {
    integrationService;
    constructor(integrationService) {
        this.integrationService = integrationService;
    }
    createConnectedService(userId, data) {
        return this.integrationService.createConnectedService(userId, data);
    }
    getConnectedServices(userId) {
        return this.integrationService.getConnectedServices(userId);
    }
    deleteConnectedService(userId, id) {
        return this.integrationService.deleteConnectedService(userId, id);
    }
    logExternalAction(userId, data) {
        return this.integrationService.logExternalAction(userId, data);
    }
    getExternalActions(userId) {
        return this.integrationService.getExternalActions(userId);
    }
};
__decorate([
    Post('services'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ServiceIntegrationController.prototype, "createConnectedService", null);
__decorate([
    Get('services'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ServiceIntegrationController.prototype, "getConnectedServices", null);
__decorate([
    Delete('services/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ServiceIntegrationController.prototype, "deleteConnectedService", null);
__decorate([
    Post('actions'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ServiceIntegrationController.prototype, "logExternalAction", null);
__decorate([
    Get('actions'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ServiceIntegrationController.prototype, "getExternalActions", null);
ServiceIntegrationController = __decorate([
    Controller('service-integration'),
    __metadata("design:paramtypes", [ServiceIntegrationService])
], ServiceIntegrationController);
export { ServiceIntegrationController };
//# sourceMappingURL=service-integration.controller.js.map