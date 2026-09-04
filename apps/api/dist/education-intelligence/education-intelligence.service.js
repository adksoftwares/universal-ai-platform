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
let EducationIntelligenceService = class EducationIntelligenceService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createMistakeLog(userId, data) {
        return this.prisma.mistakeLog.create({
            data: { ...data, userId }
        });
    }
    async getMistakeLogs(userId) {
        return this.prisma.mistakeLog.findMany({ where: { userId } });
    }
    async getMistakeLog(userId, id) {
        const record = await this.prisma.mistakeLog.findFirst({ where: { id, userId } });
        if (!record)
            throw new NotFoundException();
        return record;
    }
    async updateMistakeLog(userId, id, data) {
        await this.getMistakeLog(userId, id);
        return this.prisma.mistakeLog.update({ where: { id }, data });
    }
    async deleteMistakeLog(userId, id) {
        await this.getMistakeLog(userId, id);
        return this.prisma.mistakeLog.delete({ where: { id } });
    }
    async createPracticeSession(userId, data) {
        return this.prisma.practiceSession.create({
            data: { ...data, userId }
        });
    }
    async getPracticeSessions(userId) {
        return this.prisma.practiceSession.findMany({ where: { userId } });
    }
    async getPracticeSession(userId, id) {
        const record = await this.prisma.practiceSession.findFirst({ where: { id, userId } });
        if (!record)
            throw new NotFoundException();
        return record;
    }
    async updatePracticeSession(userId, id, data) {
        await this.getPracticeSession(userId, id);
        return this.prisma.practiceSession.update({ where: { id }, data });
    }
    async deletePracticeSession(userId, id) {
        await this.getPracticeSession(userId, id);
        return this.prisma.practiceSession.delete({ where: { id } });
    }
    async createCertificate(userId, data) {
        return this.prisma.certificate.create({
            data: { ...data, userId }
        });
    }
    async getCertificates(userId) {
        return this.prisma.certificate.findMany({ where: { userId } });
    }
    async getCertificate(userId, id) {
        const record = await this.prisma.certificate.findFirst({ where: { id, userId } });
        if (!record)
            throw new NotFoundException();
        return record;
    }
    async updateCertificate(userId, id, data) {
        await this.getCertificate(userId, id);
        return this.prisma.certificate.update({ where: { id }, data });
    }
    async deleteCertificate(userId, id) {
        await this.getCertificate(userId, id);
        return this.prisma.certificate.delete({ where: { id } });
    }
    async solveStudyProblem(problem, level) {
        return {
            message: `I see you are working on this problem: "${problem}" at the ${level} level. What do you think the first step should be? Can you identify any key principles or formulas that apply here? (Disclaimer: Please verify any important mathematical calculations manually, as AI-generated calculations may not always be 100% accurate.)`
        };
    }
};
EducationIntelligenceService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], EducationIntelligenceService);
export { EducationIntelligenceService };
//# sourceMappingURL=education-intelligence.service.js.map