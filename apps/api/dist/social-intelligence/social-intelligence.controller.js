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
import { SocialIntelligenceService } from './social-intelligence.service.js';
let SocialIntelligenceController = class SocialIntelligenceController {
    service;
    constructor(service) {
        this.service = service;
    }
    createGroup(userId, body) {
        return this.service.createGroup(userId, body);
    }
    getGroups(userId) {
        return this.service.getGroups(userId);
    }
    updateGroup(userId, id, body) {
        return this.service.updateGroup(userId, id, body);
    }
    deleteGroup(userId, id) {
        return this.service.deleteGroup(userId, id);
    }
    createEvent(userId, body) {
        return this.service.createEvent(userId, body);
    }
    getEvents(userId) {
        return this.service.getEvents(userId);
    }
    updateEvent(userId, id, body) {
        return this.service.updateEvent(userId, id, body);
    }
    deleteEvent(userId, id) {
        return this.service.deleteEvent(userId, id);
    }
    createGiftPlan(userId, body) {
        return this.service.createGiftPlan(userId, body);
    }
    getGiftPlans(userId) {
        return this.service.getGiftPlans(userId);
    }
    updateGiftPlan(userId, id, body) {
        return this.service.updateGiftPlan(userId, id, body);
    }
    deleteGiftPlan(userId, id) {
        return this.service.deleteGiftPlan(userId, id);
    }
    createSafetyPlan(userId, body) {
        return this.service.createSafetyPlan(userId, body);
    }
    getSafetyPlans(userId) {
        return this.service.getSafetyPlans(userId);
    }
    updateSafetyPlan(userId, id, body) {
        return this.service.updateSafetyPlan(userId, id, body);
    }
    deleteSafetyPlan(userId, id) {
        return this.service.deleteSafetyPlan(userId, id);
    }
    createLocationShare(userId, body) {
        return this.service.createLocationShare(userId, body);
    }
    getLocationShares(userId) {
        return this.service.getLocationShares(userId);
    }
    updateLocationShare(userId, id, body) {
        return this.service.updateLocationShare(userId, id, body);
    }
    deleteLocationShare(userId, id) {
        return this.service.deleteLocationShare(userId, id);
    }
    suggestPlanning(userId, body) {
        return this.service.suggestPlanning(userId, body);
    }
};
__decorate([
    Post('groups'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], SocialIntelligenceController.prototype, "createGroup", null);
__decorate([
    Get('groups'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SocialIntelligenceController.prototype, "getGroups", null);
__decorate([
    Put('groups/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], SocialIntelligenceController.prototype, "updateGroup", null);
__decorate([
    Delete('groups/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], SocialIntelligenceController.prototype, "deleteGroup", null);
__decorate([
    Post('events'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], SocialIntelligenceController.prototype, "createEvent", null);
__decorate([
    Get('events'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SocialIntelligenceController.prototype, "getEvents", null);
__decorate([
    Put('events/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], SocialIntelligenceController.prototype, "updateEvent", null);
__decorate([
    Delete('events/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], SocialIntelligenceController.prototype, "deleteEvent", null);
__decorate([
    Post('gift-plans'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], SocialIntelligenceController.prototype, "createGiftPlan", null);
__decorate([
    Get('gift-plans'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SocialIntelligenceController.prototype, "getGiftPlans", null);
__decorate([
    Put('gift-plans/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], SocialIntelligenceController.prototype, "updateGiftPlan", null);
__decorate([
    Delete('gift-plans/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], SocialIntelligenceController.prototype, "deleteGiftPlan", null);
__decorate([
    Post('safety-plans'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], SocialIntelligenceController.prototype, "createSafetyPlan", null);
__decorate([
    Get('safety-plans'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SocialIntelligenceController.prototype, "getSafetyPlans", null);
__decorate([
    Put('safety-plans/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], SocialIntelligenceController.prototype, "updateSafetyPlan", null);
__decorate([
    Delete('safety-plans/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], SocialIntelligenceController.prototype, "deleteSafetyPlan", null);
__decorate([
    Post('location-shares'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], SocialIntelligenceController.prototype, "createLocationShare", null);
__decorate([
    Get('location-shares'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SocialIntelligenceController.prototype, "getLocationShares", null);
__decorate([
    Put('location-shares/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], SocialIntelligenceController.prototype, "updateLocationShare", null);
__decorate([
    Delete('location-shares/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], SocialIntelligenceController.prototype, "deleteLocationShare", null);
__decorate([
    Post('planning/suggest'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], SocialIntelligenceController.prototype, "suggestPlanning", null);
SocialIntelligenceController = __decorate([
    Controller('social-intelligence'),
    __metadata("design:paramtypes", [SocialIntelligenceService])
], SocialIntelligenceController);
export { SocialIntelligenceController };
//# sourceMappingURL=social-intelligence.controller.js.map