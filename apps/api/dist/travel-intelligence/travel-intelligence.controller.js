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
import { Controller, Get, Post, Body, Patch, Param, Delete, Headers, Query } from '@nestjs/common';
import { TravelIntelligenceService } from './travel-intelligence.service.js';
let TravelIntelligenceController = class TravelIntelligenceController {
    service;
    constructor(service) {
        this.service = service;
    }
    searchPlaces(query) {
        return this.service.searchPlaces(query);
    }
    createTripDestination(userId, data) {
        return this.service.createTripDestination(userId, data);
    }
    getTripDestinations(userId, tripId) {
        return this.service.getTripDestinations(userId, tripId);
    }
    getTripDestination(userId, id) {
        return this.service.getTripDestination(userId, id);
    }
    updateTripDestination(userId, id, data) {
        return this.service.updateTripDestination(userId, id, data);
    }
    deleteTripDestination(userId, id) {
        return this.service.deleteTripDestination(userId, id);
    }
    createTravelBooking(userId, data) {
        return this.service.createTravelBooking(userId, data);
    }
    getTravelBookings(userId, tripId) {
        return this.service.getTravelBookings(userId, tripId);
    }
    getTravelBooking(userId, id) {
        return this.service.getTravelBooking(userId, id);
    }
    updateTravelBooking(userId, id, data) {
        return this.service.updateTravelBooking(userId, id, data);
    }
    deleteTravelBooking(userId, id) {
        return this.service.deleteTravelBooking(userId, id);
    }
    createSavedPlace(userId, data) {
        return this.service.createSavedPlace(userId, data);
    }
    getSavedPlaces(userId) {
        return this.service.getSavedPlaces(userId);
    }
    getSavedPlace(userId, id) {
        return this.service.getSavedPlace(userId, id);
    }
    updateSavedPlace(userId, id, data) {
        return this.service.updateSavedPlace(userId, id, data);
    }
    deleteSavedPlace(userId, id) {
        return this.service.deleteSavedPlace(userId, id);
    }
};
__decorate([
    Get('places/search'),
    __param(0, Query('query')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TravelIntelligenceController.prototype, "searchPlaces", null);
__decorate([
    Post('destinations'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TravelIntelligenceController.prototype, "createTripDestination", null);
__decorate([
    Get('destinations'),
    __param(0, Headers('x-user-id')),
    __param(1, Query('tripId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], TravelIntelligenceController.prototype, "getTripDestinations", null);
__decorate([
    Get('destinations/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], TravelIntelligenceController.prototype, "getTripDestination", null);
__decorate([
    Patch('destinations/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], TravelIntelligenceController.prototype, "updateTripDestination", null);
__decorate([
    Delete('destinations/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], TravelIntelligenceController.prototype, "deleteTripDestination", null);
__decorate([
    Post('bookings'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TravelIntelligenceController.prototype, "createTravelBooking", null);
__decorate([
    Get('bookings'),
    __param(0, Headers('x-user-id')),
    __param(1, Query('tripId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], TravelIntelligenceController.prototype, "getTravelBookings", null);
__decorate([
    Get('bookings/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], TravelIntelligenceController.prototype, "getTravelBooking", null);
__decorate([
    Patch('bookings/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], TravelIntelligenceController.prototype, "updateTravelBooking", null);
__decorate([
    Delete('bookings/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], TravelIntelligenceController.prototype, "deleteTravelBooking", null);
__decorate([
    Post('saved-places'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TravelIntelligenceController.prototype, "createSavedPlace", null);
__decorate([
    Get('saved-places'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TravelIntelligenceController.prototype, "getSavedPlaces", null);
__decorate([
    Get('saved-places/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], TravelIntelligenceController.prototype, "getSavedPlace", null);
__decorate([
    Patch('saved-places/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], TravelIntelligenceController.prototype, "updateSavedPlace", null);
__decorate([
    Delete('saved-places/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], TravelIntelligenceController.prototype, "deleteSavedPlace", null);
TravelIntelligenceController = __decorate([
    Controller('travel-intelligence'),
    __metadata("design:paramtypes", [TravelIntelligenceService])
], TravelIntelligenceController);
export { TravelIntelligenceController };
//# sourceMappingURL=travel-intelligence.controller.js.map