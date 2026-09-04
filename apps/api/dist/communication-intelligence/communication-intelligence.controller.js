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
import { Controller, Get, Post, Delete, Body, Param, Headers, Patch } from '@nestjs/common';
import { CommunicationIntelligenceService } from './communication-intelligence.service.js';
let CommunicationIntelligenceController = class CommunicationIntelligenceController {
    service;
    constructor(service) {
        this.service = service;
    }
    createAccount(userId, data) {
        return this.service.createAccount(userId, data);
    }
    getAccounts(userId) {
        return this.service.getAccounts(userId);
    }
    getAccountById(userId, id) {
        return this.service.getAccountById(userId, id);
    }
    updateAccount(userId, id, data) {
        return this.service.updateAccount(userId, id, data);
    }
    deleteAccount(userId, id) {
        return this.service.deleteAccount(userId, id);
    }
    createFollowUp(userId, data) {
        return this.service.createFollowUp(userId, data);
    }
    getFollowUps(userId) {
        return this.service.getFollowUps(userId);
    }
    getFollowUpById(userId, id) {
        return this.service.getFollowUpById(userId, id);
    }
    updateFollowUp(userId, id, data) {
        return this.service.updateFollowUp(userId, id, data);
    }
    deleteFollowUp(userId, id) {
        return this.service.deleteFollowUp(userId, id);
    }
    createMeetingNote(userId, data) {
        return this.service.createMeetingNote(userId, data);
    }
    getMeetingNotes(userId) {
        return this.service.getMeetingNotes(userId);
    }
    getMeetingNoteById(userId, id) {
        return this.service.getMeetingNoteById(userId, id);
    }
    updateMeetingNote(userId, id, data) {
        return this.service.updateMeetingNote(userId, id, data);
    }
    deleteMeetingNote(userId, id) {
        return this.service.deleteMeetingNote(userId, id);
    }
    generateDraft(data) {
        return this.service.generateDraft(data.prompt, data.tone);
    }
};
__decorate([
    Post('accounts'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CommunicationIntelligenceController.prototype, "createAccount", null);
__decorate([
    Get('accounts'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CommunicationIntelligenceController.prototype, "getAccounts", null);
__decorate([
    Get('accounts/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CommunicationIntelligenceController.prototype, "getAccountById", null);
__decorate([
    Patch('accounts/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], CommunicationIntelligenceController.prototype, "updateAccount", null);
__decorate([
    Delete('accounts/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CommunicationIntelligenceController.prototype, "deleteAccount", null);
__decorate([
    Post('follow-ups'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CommunicationIntelligenceController.prototype, "createFollowUp", null);
__decorate([
    Get('follow-ups'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CommunicationIntelligenceController.prototype, "getFollowUps", null);
__decorate([
    Get('follow-ups/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CommunicationIntelligenceController.prototype, "getFollowUpById", null);
__decorate([
    Patch('follow-ups/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], CommunicationIntelligenceController.prototype, "updateFollowUp", null);
__decorate([
    Delete('follow-ups/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CommunicationIntelligenceController.prototype, "deleteFollowUp", null);
__decorate([
    Post('meeting-notes'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CommunicationIntelligenceController.prototype, "createMeetingNote", null);
__decorate([
    Get('meeting-notes'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CommunicationIntelligenceController.prototype, "getMeetingNotes", null);
__decorate([
    Get('meeting-notes/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CommunicationIntelligenceController.prototype, "getMeetingNoteById", null);
__decorate([
    Patch('meeting-notes/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], CommunicationIntelligenceController.prototype, "updateMeetingNote", null);
__decorate([
    Delete('meeting-notes/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CommunicationIntelligenceController.prototype, "deleteMeetingNote", null);
__decorate([
    Post('messages/draft'),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CommunicationIntelligenceController.prototype, "generateDraft", null);
CommunicationIntelligenceController = __decorate([
    Controller('communication-intelligence'),
    __metadata("design:paramtypes", [CommunicationIntelligenceService])
], CommunicationIntelligenceController);
export { CommunicationIntelligenceController };
//# sourceMappingURL=communication-intelligence.controller.js.map