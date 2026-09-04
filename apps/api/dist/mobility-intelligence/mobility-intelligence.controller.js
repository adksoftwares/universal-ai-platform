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
import { Controller, Get, Post, Body, Patch, Param, Delete, Headers } from '@nestjs/common';
import { MobilityIntelligenceService } from './mobility-intelligence.service.js';
let MobilityIntelligenceController = class MobilityIntelligenceController {
    mobilityIntelligenceService;
    constructor(mobilityIntelligenceService) {
        this.mobilityIntelligenceService = mobilityIntelligenceService;
    }
    createVehicle(userId, data) {
        return this.mobilityIntelligenceService.createVehicle(userId, data);
    }
    getVehicles(userId) {
        return this.mobilityIntelligenceService.getVehicles(userId);
    }
    getVehicle(userId, id) {
        return this.mobilityIntelligenceService.getVehicle(userId, id);
    }
    updateVehicle(userId, id, data) {
        return this.mobilityIntelligenceService.updateVehicle(userId, id, data);
    }
    deleteVehicle(userId, id) {
        return this.mobilityIntelligenceService.deleteVehicle(userId, id);
    }
    createCommuteProfile(userId, data) {
        return this.mobilityIntelligenceService.createCommuteProfile(userId, data);
    }
    getCommuteProfiles(userId) {
        return this.mobilityIntelligenceService.getCommuteProfiles(userId);
    }
    getCommuteProfile(userId, id) {
        return this.mobilityIntelligenceService.getCommuteProfile(userId, id);
    }
    updateCommuteProfile(userId, id, data) {
        return this.mobilityIntelligenceService.updateCommuteProfile(userId, id, data);
    }
    deleteCommuteProfile(userId, id) {
        return this.mobilityIntelligenceService.deleteCommuteProfile(userId, id);
    }
    searchRoutes(userId, query) {
        return this.mobilityIntelligenceService.searchRoutes(userId, query);
    }
};
__decorate([
    Post('vehicles'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], MobilityIntelligenceController.prototype, "createVehicle", null);
__decorate([
    Get('vehicles'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MobilityIntelligenceController.prototype, "getVehicles", null);
__decorate([
    Get('vehicles/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], MobilityIntelligenceController.prototype, "getVehicle", null);
__decorate([
    Patch('vehicles/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], MobilityIntelligenceController.prototype, "updateVehicle", null);
__decorate([
    Delete('vehicles/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], MobilityIntelligenceController.prototype, "deleteVehicle", null);
__decorate([
    Post('commute-profiles'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], MobilityIntelligenceController.prototype, "createCommuteProfile", null);
__decorate([
    Get('commute-profiles'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MobilityIntelligenceController.prototype, "getCommuteProfiles", null);
__decorate([
    Get('commute-profiles/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], MobilityIntelligenceController.prototype, "getCommuteProfile", null);
__decorate([
    Patch('commute-profiles/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], MobilityIntelligenceController.prototype, "updateCommuteProfile", null);
__decorate([
    Delete('commute-profiles/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], MobilityIntelligenceController.prototype, "deleteCommuteProfile", null);
__decorate([
    Post('routes/search'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], MobilityIntelligenceController.prototype, "searchRoutes", null);
MobilityIntelligenceController = __decorate([
    Controller('mobility-intelligence'),
    __metadata("design:paramtypes", [MobilityIntelligenceService])
], MobilityIntelligenceController);
export { MobilityIntelligenceController };
//# sourceMappingURL=mobility-intelligence.controller.js.map