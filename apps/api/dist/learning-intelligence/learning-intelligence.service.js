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
let LearningIntelligenceService = class LearningIntelligenceService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getTopics(userId) {
        return this.prisma.topic.findMany({
            where: { subject: { course: { userId } } }
        });
    }
    async getTopicById(id, userId) {
        const topic = await this.prisma.topic.findFirst({
            where: { id, subject: { course: { userId } } }
        });
        if (!topic)
            throw new NotFoundException('Topic not found');
        return topic;
    }
    async createTopic(userId, data) {
        if (data.subjectId) {
            const subject = await this.prisma.subject.findFirst({
                where: { id: data.subjectId, course: { userId } }
            });
            if (!subject)
                throw new NotFoundException('Subject not found or access denied');
        }
        return this.prisma.topic.create({ data });
    }
    async updateTopic(id, userId, data) {
        await this.getTopicById(id, userId);
        return this.prisma.topic.update({
            where: { id },
            data
        });
    }
    async deleteTopic(id, userId) {
        await this.getTopicById(id, userId);
        return this.prisma.topic.delete({
            where: { id }
        });
    }
    async getStudySessions(userId) {
        return this.prisma.studySession.findMany({
            where: { userId }
        });
    }
    async getStudySessionById(id, userId) {
        const session = await this.prisma.studySession.findFirst({
            where: { id, userId }
        });
        if (!session)
            throw new NotFoundException('Study session not found');
        return session;
    }
    async createStudySession(userId, data) {
        return this.prisma.studySession.create({
            data: { ...data, userId }
        });
    }
    async updateStudySession(id, userId, data) {
        await this.getStudySessionById(id, userId);
        return this.prisma.studySession.update({
            where: { id },
            data
        });
    }
    async deleteStudySession(id, userId) {
        await this.getStudySessionById(id, userId);
        return this.prisma.studySession.delete({
            where: { id }
        });
    }
    async getFlashcards(userId) {
        return this.prisma.flashcard.findMany({
            where: { userId }
        });
    }
    async getFlashcardById(id, userId) {
        const card = await this.prisma.flashcard.findFirst({
            where: { id, userId }
        });
        if (!card)
            throw new NotFoundException('Flashcard not found');
        return card;
    }
    async createFlashcard(userId, data) {
        return this.prisma.flashcard.create({
            data: { ...data, userId }
        });
    }
    async updateFlashcard(id, userId, data) {
        await this.getFlashcardById(id, userId);
        return this.prisma.flashcard.update({
            where: { id },
            data
        });
    }
    async deleteFlashcard(id, userId) {
        await this.getFlashcardById(id, userId);
        return this.prisma.flashcard.delete({
            where: { id }
        });
    }
    async getAssessments(userId) {
        return this.prisma.assessment.findMany({
            where: { userId }
        });
    }
    async getAssessmentById(id, userId) {
        const assessment = await this.prisma.assessment.findFirst({
            where: { id, userId }
        });
        if (!assessment)
            throw new NotFoundException('Assessment not found');
        return assessment;
    }
    async createAssessment(userId, data) {
        return this.prisma.assessment.create({
            data: { ...data, userId }
        });
    }
    async updateAssessment(id, userId, data) {
        await this.getAssessmentById(id, userId);
        return this.prisma.assessment.update({
            where: { id },
            data
        });
    }
    async deleteAssessment(id, userId) {
        await this.getAssessmentById(id, userId);
        return this.prisma.assessment.delete({
            where: { id }
        });
    }
    async getSubjectGraph(id, userId) {
        const subject = await this.prisma.subject.findFirst({
            where: { id, course: { userId } },
            include: {
                topics: {
                    include: {
                        concepts: true
                    }
                }
            }
        });
        if (!subject) {
            throw new NotFoundException('Subject not found or access denied');
        }
        return subject;
    }
};
LearningIntelligenceService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], LearningIntelligenceService);
export { LearningIntelligenceService };
//# sourceMappingURL=learning-intelligence.service.js.map