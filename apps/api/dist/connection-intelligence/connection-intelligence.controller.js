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
import { ConnectionIntelligenceService } from './connection-intelligence.service.js';
let ConnectionIntelligenceController = class ConnectionIntelligenceController {
    connectionIntelligenceService;
    constructor(connectionIntelligenceService) {
        this.connectionIntelligenceService = connectionIntelligenceService;
    }
    createTemplate(userId, body) {
        return this.connectionIntelligenceService.createTemplate(userId, body);
    }
    getTemplates(userId) {
        return this.connectionIntelligenceService.getTemplates(userId);
    }
    getTemplateById(userId, id) {
        return this.connectionIntelligenceService.getTemplateById(userId, id);
    }
    updateTemplate(userId, id, body) {
        return this.connectionIntelligenceService.updateTemplate(userId, id, body);
    }
    deleteTemplate(userId, id) {
        return this.connectionIntelligenceService.deleteTemplate(userId, id);
    }
    createBlockedContact(userId, body) {
        return this.connectionIntelligenceService.createBlockedContact(userId, body);
    }
    getBlockedContacts(userId) {
        return this.connectionIntelligenceService.getBlockedContacts(userId);
    }
    getBlockedContactById(userId, id) {
        return this.connectionIntelligenceService.getBlockedContactById(userId, id);
    }
    updateBlockedContact(userId, id, body) {
        return this.connectionIntelligenceService.updateBlockedContact(userId, id, body);
    }
    deleteBlockedContact(userId, id) {
        return this.connectionIntelligenceService.deleteBlockedContact(userId, id);
    }
    rewriteMessage(userId, body) {
        return this.connectionIntelligenceService.rewriteMessage(userId, body.content, body.tone || 'professional');
    }
};
__decorate([
    Post('templates'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ConnectionIntelligenceController.prototype, "createTemplate", null);
__decorate([
    Get('templates'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ConnectionIntelligenceController.prototype, "getTemplates", null);
__decorate([
    Get('templates/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ConnectionIntelligenceController.prototype, "getTemplateById", null);
__decorate([
    Put('templates/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], ConnectionIntelligenceController.prototype, "updateTemplate", null);
__decorate([
    Delete('templates/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ConnectionIntelligenceController.prototype, "deleteTemplate", null);
__decorate([
    Post('blocked-contacts'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ConnectionIntelligenceController.prototype, "createBlockedContact", null);
__decorate([
    Get('blocked-contacts'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ConnectionIntelligenceController.prototype, "getBlockedContacts", null);
__decorate([
    Get('blocked-contacts/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ConnectionIntelligenceController.prototype, "getBlockedContactById", null);
__decorate([
    Put('blocked-contacts/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], ConnectionIntelligenceController.prototype, "updateBlockedContact", null);
__decorate([
    Delete('blocked-contacts/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ConnectionIntelligenceController.prototype, "deleteBlockedContact", null);
__decorate([
    Post('assistant/rewrite'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ConnectionIntelligenceController.prototype, "rewriteMessage", null);
ConnectionIntelligenceController = __decorate([
    Controller('connection-intelligence'),
    __metadata("design:paramtypes", [ConnectionIntelligenceService])
], ConnectionIntelligenceController);
export { ConnectionIntelligenceController };
//# sourceMappingURL=connection-intelligence.controller.js.map