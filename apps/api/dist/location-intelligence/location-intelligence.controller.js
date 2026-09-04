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
import { Controller, Get, Post, Put, Delete, Body, Param, Headers, HttpException, HttpStatus } from '@nestjs/common';
import { LocationIntelligenceService } from './location-intelligence.service.js';
let LocationIntelligenceController = class LocationIntelligenceController {
    locationIntelligenceService;
    constructor(locationIntelligenceService) {
        this.locationIntelligenceService = locationIntelligenceService;
    }
    async createGeofenceRule(userId, data) {
        if (!userId)
            throw new HttpException('x-user-id header is required', HttpStatus.UNAUTHORIZED);
        return this.locationIntelligenceService.createGeofenceRule(userId, data);
    }
    async getGeofenceRules(userId) {
        if (!userId)
            throw new HttpException('x-user-id header is required', HttpStatus.UNAUTHORIZED);
        return this.locationIntelligenceService.getGeofenceRules(userId);
    }
    async getGeofenceRule(userId, id) {
        if (!userId)
            throw new HttpException('x-user-id header is required', HttpStatus.UNAUTHORIZED);
        return this.locationIntelligenceService.getGeofenceRule(userId, id);
    }
    async updateGeofenceRule(userId, id, data) {
        if (!userId)
            throw new HttpException('x-user-id header is required', HttpStatus.UNAUTHORIZED);
        return this.locationIntelligenceService.updateGeofenceRule(userId, id, data);
    }
    async deleteGeofenceRule(userId, id) {
        if (!userId)
            throw new HttpException('x-user-id header is required', HttpStatus.UNAUTHORIZED);
        return this.locationIntelligenceService.deleteGeofenceRule(userId, id);
    }
    async planItinerary(payload) {
        const { destination, budget } = payload;
        return this.locationIntelligenceService.planItinerary(destination, budget);
    }
};
__decorate([
    Post('geofence-rules'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], LocationIntelligenceController.prototype, "createGeofenceRule", null);
__decorate([
    Get('geofence-rules'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LocationIntelligenceController.prototype, "getGeofenceRules", null);
__decorate([
    Get('geofence-rules/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], LocationIntelligenceController.prototype, "getGeofenceRule", null);
__decorate([
    Put('geofence-rules/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], LocationIntelligenceController.prototype, "updateGeofenceRule", null);
__decorate([
    Delete('geofence-rules/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], LocationIntelligenceController.prototype, "deleteGeofenceRule", null);
__decorate([
    Post('assistant/plan'),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LocationIntelligenceController.prototype, "planItinerary", null);
LocationIntelligenceController = __decorate([
    Controller('location-intelligence'),
    __metadata("design:paramtypes", [LocationIntelligenceService])
], LocationIntelligenceController);
export { LocationIntelligenceController };
//# sourceMappingURL=location-intelligence.controller.js.map