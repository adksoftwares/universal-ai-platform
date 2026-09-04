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
import { AlertService } from './alert.service.js';
let AlertController = class AlertController {
    alertService;
    constructor(alertService) {
        this.alertService = alertService;
    }
    getSubscriptions(userId) {
        return this.alertService.getSubscriptions(userId);
    }
    createSubscription(userId, data) {
        return this.alertService.createSubscription(userId, data);
    }
    updateSubscription(userId, id, data) {
        return this.alertService.updateSubscription(userId, id, data);
    }
    deleteSubscription(userId, id) {
        return this.alertService.deleteSubscription(userId, id);
    }
    getDisasterAlerts() {
        return this.alertService.getDisasterAlerts();
    }
};
__decorate([
    Get('subscriptions'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AlertController.prototype, "getSubscriptions", null);
__decorate([
    Post('subscriptions'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AlertController.prototype, "createSubscription", null);
__decorate([
    Put('subscriptions/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], AlertController.prototype, "updateSubscription", null);
__decorate([
    Delete('subscriptions/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], AlertController.prototype, "deleteSubscription", null);
__decorate([
    Get('disaster-alerts'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AlertController.prototype, "getDisasterAlerts", null);
AlertController = __decorate([
    Controller('alert'),
    __metadata("design:paramtypes", [AlertService])
], AlertController);
export { AlertController };
//# sourceMappingURL=alert.controller.js.map