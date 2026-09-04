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
import { KnowledgeIntelligenceService } from './knowledge-intelligence.service.js';
let KnowledgeIntelligenceController = class KnowledgeIntelligenceController {
    service;
    constructor(service) {
        this.service = service;
    }
    createCollection(userId, body) {
        return this.service.createKnowledgeCollection(userId, body);
    }
    getCollections(userId) {
        return this.service.getKnowledgeCollections(userId);
    }
    updateCollection(userId, id, body) {
        return this.service.updateKnowledgeCollection(userId, id, body);
    }
    deleteCollection(userId, id) {
        return this.service.deleteKnowledgeCollection(userId, id);
    }
    createNote(userId, body) {
        return this.service.createKnowledgeNote(userId, body);
    }
    getNotes(userId) {
        return this.service.getKnowledgeNotes(userId);
    }
    updateNote(userId, id, body) {
        return this.service.updateKnowledgeNote(userId, id, body);
    }
    deleteNote(userId, id) {
        return this.service.deleteKnowledgeNote(userId, id);
    }
    createQuiz(userId, body) {
        return this.service.createQuiz(userId, body);
    }
    getQuizzes(userId) {
        return this.service.getQuizzes(userId);
    }
    updateQuiz(userId, id, body) {
        return this.service.updateQuiz(userId, id, body);
    }
    deleteQuiz(userId, id) {
        return this.service.deleteQuiz(userId, id);
    }
    askDocument(userId, body) {
        return this.service.askDocument(userId, body.documentId, body.prompt);
    }
};
__decorate([
    Post('collections'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], KnowledgeIntelligenceController.prototype, "createCollection", null);
__decorate([
    Get('collections'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], KnowledgeIntelligenceController.prototype, "getCollections", null);
__decorate([
    Put('collections/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], KnowledgeIntelligenceController.prototype, "updateCollection", null);
__decorate([
    Delete('collections/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], KnowledgeIntelligenceController.prototype, "deleteCollection", null);
__decorate([
    Post('notes'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], KnowledgeIntelligenceController.prototype, "createNote", null);
__decorate([
    Get('notes'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], KnowledgeIntelligenceController.prototype, "getNotes", null);
__decorate([
    Put('notes/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], KnowledgeIntelligenceController.prototype, "updateNote", null);
__decorate([
    Delete('notes/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], KnowledgeIntelligenceController.prototype, "deleteNote", null);
__decorate([
    Post('quizzes'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], KnowledgeIntelligenceController.prototype, "createQuiz", null);
__decorate([
    Get('quizzes'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], KnowledgeIntelligenceController.prototype, "getQuizzes", null);
__decorate([
    Put('quizzes/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], KnowledgeIntelligenceController.prototype, "updateQuiz", null);
__decorate([
    Delete('quizzes/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], KnowledgeIntelligenceController.prototype, "deleteQuiz", null);
__decorate([
    Post('documents/ask'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], KnowledgeIntelligenceController.prototype, "askDocument", null);
KnowledgeIntelligenceController = __decorate([
    Controller('knowledge-intelligence'),
    __metadata("design:paramtypes", [KnowledgeIntelligenceService])
], KnowledgeIntelligenceController);
export { KnowledgeIntelligenceController };
//# sourceMappingURL=knowledge-intelligence.controller.js.map