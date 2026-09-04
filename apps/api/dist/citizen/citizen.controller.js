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
import { Controller, Get, Post, Body, Param, Delete, Headers, Patch } from '@nestjs/common';
import { CitizenService } from './citizen.service.js';
let CitizenController = class CitizenController {
    citizenService;
    constructor(citizenService) {
        this.citizenService = citizenService;
    }
    getServices() {
        return this.citizenService.getServices();
    }
    verifySource(sourceId) {
        return this.citizenService.verifySource(sourceId);
    }
    getBookmarks(userId) {
        return this.citizenService.getBookmarks(userId);
    }
    addBookmark(userId, body) {
        return this.citizenService.addBookmark(userId, body);
    }
    removeBookmark(userId, id) {
        return this.citizenService.removeBookmark(userId, id);
    }
    getApplications(userId) {
        return this.citizenService.getApplications(userId);
    }
    createApplication(userId, body) {
        return this.citizenService.createApplication(userId, body);
    }
    updateApplication(userId, id, body) {
        return this.citizenService.updateApplication(userId, id, body);
    }
    removeApplication(userId, id) {
        return this.citizenService.removeApplication(userId, id);
    }
};
__decorate([
    Get('services'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CitizenController.prototype, "getServices", null);
__decorate([
    Post('services/:id/verify-source'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CitizenController.prototype, "verifySource", null);
__decorate([
    Get('bookmarks'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CitizenController.prototype, "getBookmarks", null);
__decorate([
    Post('bookmarks'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CitizenController.prototype, "addBookmark", null);
__decorate([
    Delete('bookmarks/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CitizenController.prototype, "removeBookmark", null);
__decorate([
    Get('applications'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CitizenController.prototype, "getApplications", null);
__decorate([
    Post('applications'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CitizenController.prototype, "createApplication", null);
__decorate([
    Patch('applications/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], CitizenController.prototype, "updateApplication", null);
__decorate([
    Delete('applications/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CitizenController.prototype, "removeApplication", null);
CitizenController = __decorate([
    Controller('citizen'),
    __metadata("design:paramtypes", [CitizenService])
], CitizenController);
export { CitizenController };
//# sourceMappingURL=citizen.controller.js.map