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
import { Controller, Get, Post, Body, Patch, Param, Delete, Headers, } from '@nestjs/common';
import { ResearchIntelligenceService } from './research-intelligence.service.js';
let ResearchIntelligenceController = class ResearchIntelligenceController {
    researchIntelligenceService;
    constructor(researchIntelligenceService) {
        this.researchIntelligenceService = researchIntelligenceService;
    }
    createLesson(userId, data) {
        return this.researchIntelligenceService.createLesson(userId, data);
    }
    findAllLessons(userId) {
        return this.researchIntelligenceService.findAllLessons(userId);
    }
    findOneLesson(userId, id) {
        return this.researchIntelligenceService.findOneLesson(userId, id);
    }
    updateLesson(userId, id, data) {
        return this.researchIntelligenceService.updateLesson(userId, id, data);
    }
    removeLesson(userId, id) {
        return this.researchIntelligenceService.removeLesson(userId, id);
    }
    createStudyGroup(userId, data) {
        return this.researchIntelligenceService.createStudyGroup(userId, data);
    }
    findAllStudyGroups(userId) {
        return this.researchIntelligenceService.findAllStudyGroups(userId);
    }
    findOneStudyGroup(userId, id) {
        return this.researchIntelligenceService.findOneStudyGroup(userId, id);
    }
    updateStudyGroup(userId, id, data) {
        return this.researchIntelligenceService.updateStudyGroup(userId, id, data);
    }
    removeStudyGroup(userId, id) {
        return this.researchIntelligenceService.removeStudyGroup(userId, id);
    }
    createResearchPaper(userId, data) {
        return this.researchIntelligenceService.createResearchPaper(userId, data);
    }
    findAllResearchPapers(userId) {
        return this.researchIntelligenceService.findAllResearchPapers(userId);
    }
    findOneResearchPaper(userId, id) {
        return this.researchIntelligenceService.findOneResearchPaper(userId, id);
    }
    updateResearchPaper(userId, id, data) {
        return this.researchIntelligenceService.updateResearchPaper(userId, id, data);
    }
    removeResearchPaper(userId, id) {
        return this.researchIntelligenceService.removeResearchPaper(userId, id);
    }
    createCitation(userId, data) {
        return this.researchIntelligenceService.createCitation(userId, data);
    }
    findAllCitations(userId) {
        return this.researchIntelligenceService.findAllCitations(userId);
    }
    findOneCitation(userId, id) {
        return this.researchIntelligenceService.findOneCitation(userId, id);
    }
    updateCitation(userId, id, data) {
        return this.researchIntelligenceService.updateCitation(userId, id, data);
    }
    removeCitation(userId, id) {
        return this.researchIntelligenceService.removeCitation(userId, id);
    }
    socraticTutor(userId, question) {
        return this.researchIntelligenceService.socraticTutor(userId, question);
    }
};
__decorate([
    Post('lesson'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ResearchIntelligenceController.prototype, "createLesson", null);
__decorate([
    Get('lesson'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ResearchIntelligenceController.prototype, "findAllLessons", null);
__decorate([
    Get('lesson/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ResearchIntelligenceController.prototype, "findOneLesson", null);
__decorate([
    Patch('lesson/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], ResearchIntelligenceController.prototype, "updateLesson", null);
__decorate([
    Delete('lesson/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ResearchIntelligenceController.prototype, "removeLesson", null);
__decorate([
    Post('study-group'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ResearchIntelligenceController.prototype, "createStudyGroup", null);
__decorate([
    Get('study-group'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ResearchIntelligenceController.prototype, "findAllStudyGroups", null);
__decorate([
    Get('study-group/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ResearchIntelligenceController.prototype, "findOneStudyGroup", null);
__decorate([
    Patch('study-group/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], ResearchIntelligenceController.prototype, "updateStudyGroup", null);
__decorate([
    Delete('study-group/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ResearchIntelligenceController.prototype, "removeStudyGroup", null);
__decorate([
    Post('research-paper'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ResearchIntelligenceController.prototype, "createResearchPaper", null);
__decorate([
    Get('research-paper'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ResearchIntelligenceController.prototype, "findAllResearchPapers", null);
__decorate([
    Get('research-paper/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ResearchIntelligenceController.prototype, "findOneResearchPaper", null);
__decorate([
    Patch('research-paper/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], ResearchIntelligenceController.prototype, "updateResearchPaper", null);
__decorate([
    Delete('research-paper/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ResearchIntelligenceController.prototype, "removeResearchPaper", null);
__decorate([
    Post('citation'),
    __param(0, Headers('x-user-id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ResearchIntelligenceController.prototype, "createCitation", null);
__decorate([
    Get('citation'),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ResearchIntelligenceController.prototype, "findAllCitations", null);
__decorate([
    Get('citation/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ResearchIntelligenceController.prototype, "findOneCitation", null);
__decorate([
    Patch('citation/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], ResearchIntelligenceController.prototype, "updateCitation", null);
__decorate([
    Delete('citation/:id'),
    __param(0, Headers('x-user-id')),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ResearchIntelligenceController.prototype, "removeCitation", null);
__decorate([
    Post('assistant/tutor'),
    __param(0, Headers('x-user-id')),
    __param(1, Body('question')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ResearchIntelligenceController.prototype, "socraticTutor", null);
ResearchIntelligenceController = __decorate([
    Controller('research-intelligence'),
    __metadata("design:paramtypes", [ResearchIntelligenceService])
], ResearchIntelligenceController);
export { ResearchIntelligenceController };
//# sourceMappingURL=research-intelligence.controller.js.map