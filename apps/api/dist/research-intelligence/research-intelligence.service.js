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
let ResearchIntelligenceService = class ResearchIntelligenceService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createLesson(userId, data) {
        const course = await this.prisma.course.findFirst({
            where: { id: data.courseId, userId },
        });
        if (!course)
            throw new NotFoundException('Course not found or unauthorized');
        return this.prisma.lesson.create({ data });
    }
    async findAllLessons(userId) {
        return this.prisma.lesson.findMany({
            where: { course: { userId } },
        });
    }
    async findOneLesson(userId, id) {
        return this.prisma.lesson.findFirst({
            where: { id, course: { userId } },
        });
    }
    async updateLesson(userId, id, data) {
        const lesson = await this.findOneLesson(userId, id);
        if (!lesson)
            throw new NotFoundException('Lesson not found or unauthorized');
        return this.prisma.lesson.update({
            where: { id },
            data,
        });
    }
    async removeLesson(userId, id) {
        const lesson = await this.findOneLesson(userId, id);
        if (!lesson)
            throw new NotFoundException('Lesson not found or unauthorized');
        return this.prisma.lesson.delete({
            where: { id },
        });
    }
    async createStudyGroup(userId, data) {
        return this.prisma.studyGroup.create({
            data: {
                ...data,
                members: {
                    create: {
                        userId,
                        role: 'owner',
                    },
                },
            },
        });
    }
    async findAllStudyGroups(userId) {
        return this.prisma.studyGroup.findMany({
            where: { members: { some: { userId } } },
        });
    }
    async findOneStudyGroup(userId, id) {
        return this.prisma.studyGroup.findFirst({
            where: { id, members: { some: { userId } } },
        });
    }
    async updateStudyGroup(userId, id, data) {
        const group = await this.findOneStudyGroup(userId, id);
        if (!group)
            throw new NotFoundException('StudyGroup not found or unauthorized');
        return this.prisma.studyGroup.update({
            where: { id },
            data,
        });
    }
    async removeStudyGroup(userId, id) {
        const group = await this.findOneStudyGroup(userId, id);
        if (!group)
            throw new NotFoundException('StudyGroup not found or unauthorized');
        return this.prisma.studyGroup.delete({
            where: { id },
        });
    }
    async createResearchPaper(userId, data) {
        return this.prisma.researchPaper.create({
            data: { ...data, userId },
        });
    }
    async findAllResearchPapers(userId) {
        return this.prisma.researchPaper.findMany({
            where: { userId },
        });
    }
    async findOneResearchPaper(userId, id) {
        return this.prisma.researchPaper.findFirst({
            where: { id, userId },
        });
    }
    async updateResearchPaper(userId, id, data) {
        const paper = await this.findOneResearchPaper(userId, id);
        if (!paper)
            throw new NotFoundException('ResearchPaper not found or unauthorized');
        return this.prisma.researchPaper.update({
            where: { id },
            data,
        });
    }
    async removeResearchPaper(userId, id) {
        const paper = await this.findOneResearchPaper(userId, id);
        if (!paper)
            throw new NotFoundException('ResearchPaper not found or unauthorized');
        return this.prisma.researchPaper.delete({
            where: { id },
        });
    }
    async createCitation(userId, data) {
        const paper = await this.prisma.researchPaper.findFirst({
            where: { id: data.paperId, userId },
        });
        if (!paper)
            throw new NotFoundException('ResearchPaper not found or unauthorized');
        return this.prisma.citation.create({ data });
    }
    async findAllCitations(userId) {
        return this.prisma.citation.findMany({
            where: { paper: { userId } },
        });
    }
    async findOneCitation(userId, id) {
        return this.prisma.citation.findFirst({
            where: { id, paper: { userId } },
        });
    }
    async updateCitation(userId, id, data) {
        const citation = await this.findOneCitation(userId, id);
        if (!citation)
            throw new NotFoundException('Citation not found or unauthorized');
        return this.prisma.citation.update({
            where: { id },
            data,
        });
    }
    async removeCitation(userId, id) {
        const citation = await this.findOneCitation(userId, id);
        if (!citation)
            throw new NotFoundException('Citation not found or unauthorized');
        return this.prisma.citation.delete({
            where: { id },
        });
    }
    async socraticTutor(userId, question) {
        return {
            tutorResponse: "That is an interesting question. What do you think are the fundamental principles underlying this concept?"
        };
    }
};
ResearchIntelligenceService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], ResearchIntelligenceService);
export { ResearchIntelligenceService };
//# sourceMappingURL=research-intelligence.service.js.map