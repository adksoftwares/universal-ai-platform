var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';
let KnowledgeIntelligenceService = class KnowledgeIntelligenceService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createKnowledgeCollection(userId, data) {
        return this.prisma.knowledgeCollection.create({
            data: {
                userId,
                ...data,
            },
        });
    }
    async getKnowledgeCollections(userId) {
        return this.prisma.knowledgeCollection.findMany({
            where: { userId },
        });
    }
    async updateKnowledgeCollection(userId, id, data) {
        const collection = await this.prisma.knowledgeCollection.findUnique({ where: { id } });
        if (!collection || collection.userId !== userId)
            throw new NotFoundException('Collection not found');
        return this.prisma.knowledgeCollection.update({
            where: { id },
            data,
        });
    }
    async deleteKnowledgeCollection(userId, id) {
        const collection = await this.prisma.knowledgeCollection.findUnique({ where: { id } });
        if (!collection || collection.userId !== userId)
            throw new NotFoundException('Collection not found');
        return this.prisma.knowledgeCollection.delete({
            where: { id },
        });
    }
    async createKnowledgeNote(userId, data) {
        return this.prisma.knowledgeNote.create({
            data: {
                userId,
                ...data,
            },
        });
    }
    async getKnowledgeNotes(userId) {
        return this.prisma.knowledgeNote.findMany({
            where: { userId },
        });
    }
    async updateKnowledgeNote(userId, id, data) {
        const note = await this.prisma.knowledgeNote.findUnique({ where: { id } });
        if (!note || note.userId !== userId)
            throw new NotFoundException('Note not found');
        return this.prisma.knowledgeNote.update({
            where: { id },
            data,
        });
    }
    async deleteKnowledgeNote(userId, id) {
        const note = await this.prisma.knowledgeNote.findUnique({ where: { id } });
        if (!note || note.userId !== userId)
            throw new NotFoundException('Note not found');
        return this.prisma.knowledgeNote.delete({
            where: { id },
        });
    }
    async createQuiz(userId, data) {
        return this.prisma.quiz.create({
            data: {
                userId,
                ...data,
            },
        });
    }
    async getQuizzes(userId) {
        return this.prisma.quiz.findMany({
            where: { userId },
        });
    }
    async updateQuiz(userId, id, data) {
        const quiz = await this.prisma.quiz.findUnique({ where: { id } });
        if (!quiz || quiz.userId !== userId)
            throw new NotFoundException('Quiz not found');
        return this.prisma.quiz.update({
            where: { id },
            data,
        });
    }
    async deleteQuiz(userId, id) {
        const quiz = await this.prisma.quiz.findUnique({ where: { id } });
        if (!quiz || quiz.userId !== userId)
            throw new NotFoundException('Quiz not found');
        return this.prisma.quiz.delete({
            where: { id },
        });
    }
    async askDocument(userId, documentId, prompt) {
        return {
            answer: `Based on the selected PDF (documentId: ${documentId}), ${prompt} is defined as... [MOCKED RESPONSE]`
        };
    }
};
KnowledgeIntelligenceService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], KnowledgeIntelligenceService);
export { KnowledgeIntelligenceService };
//# sourceMappingURL=knowledge-intelligence.service.js.map