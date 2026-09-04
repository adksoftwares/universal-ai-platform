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
import { TravelService } from './travel.service.js';
let TravelController = class TravelController {
    travelService;
    constructor(travelService) {
        this.travelService = travelService;
    }
    createTrip(userId, data) {
        return this.travelService.createTrip(userId, data);
    }
    getTrips(userId) {
        return this.travelService.getTrips(userId);
    }
    getTrip(userId, id) {
        return this.travelService.getTrip(userId, id);
    }
    updateTrip(userId, id, data) {
        return this.travelService.updateTrip(userId, id, data);
    }
    deleteTrip(userId, id) {
        return this.travelService.deleteTrip(userId, id);
    }
};
__decorate([
    Post('trips'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TravelController.prototype, "createTrip", null);
__decorate([
    Get('trips'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TravelController.prototype, "getTrips", null);
__decorate([
    Get('trips/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], TravelController.prototype, "getTrip", null);
__decorate([
    Put('trips/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], TravelController.prototype, "updateTrip", null);
__decorate([
    Delete('trips/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], TravelController.prototype, "deleteTrip", null);
TravelController = __decorate([
    Controller('travel'),
    __metadata("design:paramtypes", [TravelService])
], TravelController);
export { TravelController };
//# sourceMappingURL=travel.controller.js.map