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
import { Controller, Get, Post, Put, Delete, Param, Body, Headers, UnauthorizedException, } from '@nestjs/common';
import { LearningIntelligenceService } from './learning-intelligence.service.js';
let LearningIntelligenceController = class LearningIntelligenceController {
    learningIntelligenceService;
    constructor(learningIntelligenceService) {
        this.learningIntelligenceService = learningIntelligenceService;
    }
    getUserId(headers) {
        const userId = headers['x-user-id'];
        if (!userId) {
            throw new UnauthorizedException('x-user-id header is required');
        }
        return userId;
    }
    getTopics(headers) {
        return this.learningIntelligenceService.getTopics(this.getUserId(headers));
    }
    getTopicById(id, headers) {
        return this.learningIntelligenceService.getTopicById(id, this.getUserId(headers));
    }
    createTopic(headers, data) {
        return this.learningIntelligenceService.createTopic(this.getUserId(headers), data);
    }
    updateTopic(id, headers, data) {
        return this.learningIntelligenceService.updateTopic(id, this.getUserId(headers), data);
    }
    deleteTopic(id, headers) {
        return this.learningIntelligenceService.deleteTopic(id, this.getUserId(headers));
    }
    getStudySessions(headers) {
        return this.learningIntelligenceService.getStudySessions(this.getUserId(headers));
    }
    getStudySessionById(id, headers) {
        return this.learningIntelligenceService.getStudySessionById(id, this.getUserId(headers));
    }
    createStudySession(headers, data) {
        return this.learningIntelligenceService.createStudySession(this.getUserId(headers), data);
    }
    updateStudySession(id, headers, data) {
        return this.learningIntelligenceService.updateStudySession(id, this.getUserId(headers), data);
    }
    deleteStudySession(id, headers) {
        return this.learningIntelligenceService.deleteStudySession(id, this.getUserId(headers));
    }
    getFlashcards(headers) {
        return this.learningIntelligenceService.getFlashcards(this.getUserId(headers));
    }
    getFlashcardById(id, headers) {
        return this.learningIntelligenceService.getFlashcardById(id, this.getUserId(headers));
    }
    createFlashcard(headers, data) {
        return this.learningIntelligenceService.createFlashcard(this.getUserId(headers), data);
    }
    updateFlashcard(id, headers, data) {
        return this.learningIntelligenceService.updateFlashcard(id, this.getUserId(headers), data);
    }
    deleteFlashcard(id, headers) {
        return this.learningIntelligenceService.deleteFlashcard(id, this.getUserId(headers));
    }
    getAssessments(headers) {
        return this.learningIntelligenceService.getAssessments(this.getUserId(headers));
    }
    getAssessmentById(id, headers) {
        return this.learningIntelligenceService.getAssessmentById(id, this.getUserId(headers));
    }
    createAssessment(headers, data) {
        return this.learningIntelligenceService.createAssessment(this.getUserId(headers), data);
    }
    updateAssessment(id, headers, data) {
        return this.learningIntelligenceService.updateAssessment(id, this.getUserId(headers), data);
    }
    deleteAssessment(id, headers) {
        return this.learningIntelligenceService.deleteAssessment(id, this.getUserId(headers));
    }
    getSubjectGraph(id, headers) {
        return this.learningIntelligenceService.getSubjectGraph(id, this.getUserId(headers));
    }
};
__decorate([
    Get('topic'),
    __param(0, Headers()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LearningIntelligenceController.prototype, "getTopics", null);
__decorate([
    Get('topic/:id'),
    __param(0, Param('id')),
    __param(1, Headers()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], LearningIntelligenceController.prototype, "getTopicById", null);
__decorate([
    Post('topic'),
    __param(0, Headers()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], LearningIntelligenceController.prototype, "createTopic", null);
__decorate([
    Put('topic/:id'),
    __param(0, Param('id')),
    __param(1, Headers()),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], LearningIntelligenceController.prototype, "updateTopic", null);
__decorate([
    Delete('topic/:id'),
    __param(0, Param('id')),
    __param(1, Headers()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], LearningIntelligenceController.prototype, "deleteTopic", null);
__decorate([
    Get('study-session'),
    __param(0, Headers()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LearningIntelligenceController.prototype, "getStudySessions", null);
__decorate([
    Get('study-session/:id'),
    __param(0, Param('id')),
    __param(1, Headers()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], LearningIntelligenceController.prototype, "getStudySessionById", null);
__decorate([
    Post('study-session'),
    __param(0, Headers()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], LearningIntelligenceController.prototype, "createStudySession", null);
__decorate([
    Put('study-session/:id'),
    __param(0, Param('id')),
    __param(1, Headers()),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], LearningIntelligenceController.prototype, "updateStudySession", null);
__decorate([
    Delete('study-session/:id'),
    __param(0, Param('id')),
    __param(1, Headers()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], LearningIntelligenceController.prototype, "deleteStudySession", null);
__decorate([
    Get('flashcard'),
    __param(0, Headers()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LearningIntelligenceController.prototype, "getFlashcards", null);
__decorate([
    Get('flashcard/:id'),
    __param(0, Param('id')),
    __param(1, Headers()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], LearningIntelligenceController.prototype, "getFlashcardById", null);
__decorate([
    Post('flashcard'),
    __param(0, Headers()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], LearningIntelligenceController.prototype, "createFlashcard", null);
__decorate([
    Put('flashcard/:id'),
    __param(0, Param('id')),
    __param(1, Headers()),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], LearningIntelligenceController.prototype, "updateFlashcard", null);
__decorate([
    Delete('flashcard/:id'),
    __param(0, Param('id')),
    __param(1, Headers()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], LearningIntelligenceController.prototype, "deleteFlashcard", null);
__decorate([
    Get('assessment'),
    __param(0, Headers()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LearningIntelligenceController.prototype, "getAssessments", null);
__decorate([
    Get('assessment/:id'),
    __param(0, Param('id')),
    __param(1, Headers()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], LearningIntelligenceController.prototype, "getAssessmentById", null);
__decorate([
    Post('assessment'),
    __param(0, Headers()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], LearningIntelligenceController.prototype, "createAssessment", null);
__decorate([
    Put('assessment/:id'),
    __param(0, Param('id')),
    __param(1, Headers()),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], LearningIntelligenceController.prototype, "updateAssessment", null);
__decorate([
    Delete('assessment/:id'),
    __param(0, Param('id')),
    __param(1, Headers()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], LearningIntelligenceController.prototype, "deleteAssessment", null);
__decorate([
    Get('subject/:id/graph'),
    __param(0, Param('id')),
    __param(1, Headers()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], LearningIntelligenceController.prototype, "getSubjectGraph", null);
LearningIntelligenceController = __decorate([
    Controller('learning-intelligence'),
    __metadata("design:paramtypes", [LearningIntelligenceService])
], LearningIntelligenceController);
export { LearningIntelligenceController };
//# sourceMappingURL=learning-intelligence.controller.js.map