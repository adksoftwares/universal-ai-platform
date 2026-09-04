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
import { Controller, Get, Post, Put, Delete, Body, Param, Headers, HttpCode } from '@nestjs/common';
import { CommunicationService } from './communication.service.js';
import { Prisma } from '@prisma/client';
let CommunicationController = class CommunicationController {
    communicationService;
    constructor(communicationService) {
        this.communicationService = communicationService;
    }
    createContact(userId, data) {
        return this.communicationService.createContact(userId, data);
    }
    findAllContacts(userId) {
        return this.communicationService.findAllContacts(userId);
    }
    findContactById(userId, id) {
        return this.communicationService.findContactById(userId, id);
    }
    updateContact(userId, id, data) {
        return this.communicationService.updateContact(userId, id, data);
    }
    deleteContact(userId, id) {
        return this.communicationService.deleteContact(userId, id);
    }
    createRecord(userId, data) {
        return this.communicationService.createCommunication(userId, data);
    }
    findAllRecords(userId) {
        return this.communicationService.findAllCommunications(userId);
    }
    findRecordById(userId, id) {
        return this.communicationService.findCommunicationById(userId, id);
    }
    updateRecord(userId, id, data) {
        return this.communicationService.updateCommunication(userId, id, data);
    }
    deleteRecord(userId, id) {
        return this.communicationService.deleteCommunication(userId, id);
    }
    createMeeting(userId, data) {
        return this.communicationService.createMeeting(userId, data);
    }
    findAllMeetings(userId) {
        return this.communicationService.findAllMeetings(userId);
    }
    findMeetingById(userId, id) {
        return this.communicationService.findMeetingById(userId, id);
    }
    updateMeeting(userId, id, data) {
        return this.communicationService.updateMeeting(userId, id, data);
    }
    deleteMeeting(userId, id) {
        return this.communicationService.deleteMeeting(userId, id);
    }
};
__decorate([
    Post('contacts'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CommunicationController.prototype, "createContact", null);
__decorate([
    Get('contacts'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CommunicationController.prototype, "findAllContacts", null);
__decorate([
    Get('contacts/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CommunicationController.prototype, "findContactById", null);
__decorate([
    Put('contacts/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], CommunicationController.prototype, "updateContact", null);
__decorate([
    Delete('contacts/:id'),
    HttpCode(204),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CommunicationController.prototype, "deleteContact", null);
__decorate([
    Post('records'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CommunicationController.prototype, "createRecord", null);
__decorate([
    Get('records'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CommunicationController.prototype, "findAllRecords", null);
__decorate([
    Get('records/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CommunicationController.prototype, "findRecordById", null);
__decorate([
    Put('records/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], CommunicationController.prototype, "updateRecord", null);
__decorate([
    Delete('records/:id'),
    HttpCode(204),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CommunicationController.prototype, "deleteRecord", null);
__decorate([
    Post('meetings'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CommunicationController.prototype, "createMeeting", null);
__decorate([
    Get('meetings'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CommunicationController.prototype, "findAllMeetings", null);
__decorate([
    Get('meetings/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CommunicationController.prototype, "findMeetingById", null);
__decorate([
    Put('meetings/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], CommunicationController.prototype, "updateMeeting", null);
__decorate([
    Delete('meetings/:id'),
    HttpCode(204),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CommunicationController.prototype, "deleteMeeting", null);
CommunicationController = __decorate([
    Controller('communications'),
    __metadata("design:paramtypes", [CommunicationService])
], CommunicationController);
export { CommunicationController };
//# sourceMappingURL=communication.controller.js.map