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
let CareerIntelligenceService = class CareerIntelligenceService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getResumes(userId) {
        return this.prisma.resume.findMany({ where: { userId } });
    }
    async getResume(userId, id) {
        const resume = await this.prisma.resume.findFirst({ where: { id, userId } });
        if (!resume)
            throw new NotFoundException('Resume not found');
        return resume;
    }
    async createResume(userId, data) {
        return this.prisma.resume.create({
            data: { ...data, userId },
        });
    }
    async updateResume(userId, id, data) {
        const resume = await this.getResume(userId, id);
        return this.prisma.resume.update({
            where: { id: resume.id },
            data,
        });
    }
    async deleteResume(userId, id) {
        const resume = await this.getResume(userId, id);
        return this.prisma.resume.delete({
            where: { id: resume.id },
        });
    }
    async tailorResume(userId, resumeId, jobDescription) {
        await this.getResume(userId, resumeId);
        return {
            message: 'Mock AI response: Suggested keywords and improvements added based on the job description.',
            suggestedKeywords: ['Leadership', 'Agile', 'Microservices'],
            improvements: [
                'Highlight past experience with large-scale systems.',
                'Include measurable metrics for previous projects.'
            ]
        };
    }
    async getPortfolioProjects(userId) {
        return this.prisma.portfolioProject.findMany({ where: { userId } });
    }
    async getPortfolioProject(userId, id) {
        const project = await this.prisma.portfolioProject.findFirst({ where: { id, userId } });
        if (!project)
            throw new NotFoundException('Portfolio Project not found');
        return project;
    }
    async createPortfolioProject(userId, data) {
        return this.prisma.portfolioProject.create({
            data: { ...data, userId },
        });
    }
    async updatePortfolioProject(userId, id, data) {
        const project = await this.getPortfolioProject(userId, id);
        return this.prisma.portfolioProject.update({
            where: { id: project.id },
            data,
        });
    }
    async deletePortfolioProject(userId, id) {
        const project = await this.getPortfolioProject(userId, id);
        return this.prisma.portfolioProject.delete({
            where: { id: project.id },
        });
    }
    async getNetworkingRecords(userId) {
        return this.prisma.networkingRecord.findMany({ where: { userId } });
    }
    async getNetworkingRecord(userId, id) {
        const record = await this.prisma.networkingRecord.findFirst({ where: { id, userId } });
        if (!record)
            throw new NotFoundException('Networking Record not found');
        return record;
    }
    async createNetworkingRecord(userId, data) {
        return this.prisma.networkingRecord.create({
            data: { ...data, userId },
        });
    }
    async updateNetworkingRecord(userId, id, data) {
        const record = await this.getNetworkingRecord(userId, id);
        return this.prisma.networkingRecord.update({
            where: { id: record.id },
            data,
        });
    }
    async deleteNetworkingRecord(userId, id) {
        const record = await this.getNetworkingRecord(userId, id);
        return this.prisma.networkingRecord.delete({
            where: { id: record.id },
        });
    }
};
CareerIntelligenceService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], CareerIntelligenceService);
export { CareerIntelligenceService };
//# sourceMappingURL=career-intelligence.service.js.map