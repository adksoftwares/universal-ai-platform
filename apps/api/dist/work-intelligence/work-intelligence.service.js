var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';
let WorkIntelligenceService = class WorkIntelligenceService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createInterview(userId, data) {
        if (!userId)
            throw new UnauthorizedException('Missing user ID');
        return this.prisma.interview.create({
            data: { ...data, userId },
        });
    }
    async getInterviews(userId) {
        if (!userId)
            throw new UnauthorizedException('Missing user ID');
        return this.prisma.interview.findMany({
            where: { userId },
        });
    }
    async getInterview(userId, id) {
        if (!userId)
            throw new UnauthorizedException('Missing user ID');
        return this.prisma.interview.findFirst({
            where: { id, userId },
        });
    }
    async updateInterview(userId, id, data) {
        if (!userId)
            throw new UnauthorizedException('Missing user ID');
        await this.prisma.interview.updateMany({
            where: { id, userId },
            data,
        });
        return this.getInterview(userId, id);
    }
    async deleteInterview(userId, id) {
        if (!userId)
            throw new UnauthorizedException('Missing user ID');
        return this.prisma.interview.deleteMany({
            where: { id, userId },
        });
    }
    async createFreelanceProject(userId, data) {
        if (!userId)
            throw new UnauthorizedException('Missing user ID');
        return this.prisma.freelanceProject.create({
            data: { ...data, userId },
        });
    }
    async getFreelanceProjects(userId) {
        if (!userId)
            throw new UnauthorizedException('Missing user ID');
        return this.prisma.freelanceProject.findMany({
            where: { userId },
            include: {
                proposals: true,
                deliverables: true,
            }
        });
    }
    async getFreelanceProject(userId, id) {
        if (!userId)
            throw new UnauthorizedException('Missing user ID');
        return this.prisma.freelanceProject.findFirst({
            where: { id, userId },
            include: {
                proposals: true,
                deliverables: true,
            }
        });
    }
    async updateFreelanceProject(userId, id, data) {
        if (!userId)
            throw new UnauthorizedException('Missing user ID');
        await this.prisma.freelanceProject.updateMany({
            where: { id, userId },
            data,
        });
        return this.getFreelanceProject(userId, id);
    }
    async deleteFreelanceProject(userId, id) {
        if (!userId)
            throw new UnauthorizedException('Missing user ID');
        return this.prisma.freelanceProject.deleteMany({
            where: { id, userId },
        });
    }
    async createBusiness(userId, data) {
        if (!userId)
            throw new UnauthorizedException('Missing user ID');
        return this.prisma.business.create({
            data: { ...data, userId },
        });
    }
    async getBusinesses(userId) {
        if (!userId)
            throw new UnauthorizedException('Missing user ID');
        return this.prisma.business.findMany({
            where: { userId },
            include: {
                projects: true,
                products: true,
            }
        });
    }
    async getBusiness(userId, id) {
        if (!userId)
            throw new UnauthorizedException('Missing user ID');
        return this.prisma.business.findFirst({
            where: { id, userId },
            include: {
                projects: true,
                products: true,
            }
        });
    }
    async updateBusiness(userId, id, data) {
        if (!userId)
            throw new UnauthorizedException('Missing user ID');
        await this.prisma.business.updateMany({
            where: { id, userId },
            data,
        });
        return this.getBusiness(userId, id);
    }
    async deleteBusiness(userId, id) {
        if (!userId)
            throw new UnauthorizedException('Missing user ID');
        return this.prisma.business.deleteMany({
            where: { id, userId },
        });
    }
    async generateResumeMatch(userId, resumeId, jobId) {
        if (!userId) {
            throw new UnauthorizedException('Missing user ID');
        }
        return {
            strongMatches: ['React', 'Node.js', 'Typescript'],
            partialMatches: ['AWS', 'Docker'],
            missingRequirements: ['GraphQL', 'Kubernetes'],
            suggestedImprovements: ['Add more detail on backend architecture experience', 'Highlight leadership role']
        };
    }
};
WorkIntelligenceService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], WorkIntelligenceService);
export { WorkIntelligenceService };
//# sourceMappingURL=work-intelligence.service.js.map