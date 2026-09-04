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
let CivicIntelligenceService = class CivicIntelligenceService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createApplication(userId, data) {
        return this.prisma.civicApplication.create({
            data: { ...data, userId },
        });
    }
    async getApplications(userId) {
        return this.prisma.civicApplication.findMany({ where: { userId } });
    }
    async updateApplication(userId, id, data) {
        const existing = await this.prisma.civicApplication.findUnique({ where: { id } });
        if (!existing || existing.userId !== userId)
            throw new NotFoundException('Application not found');
        return this.prisma.civicApplication.update({ where: { id }, data });
    }
    async deleteApplication(userId, id) {
        const existing = await this.prisma.civicApplication.findUnique({ where: { id } });
        if (!existing || existing.userId !== userId)
            throw new NotFoundException('Application not found');
        return this.prisma.civicApplication.delete({ where: { id } });
    }
    async createLicencePermit(userId, data) {
        return this.prisma.licencePermit.create({
            data: { ...data, userId },
        });
    }
    async getLicencePermits(userId) {
        return this.prisma.licencePermit.findMany({ where: { userId } });
    }
    async updateLicencePermit(userId, id, data) {
        const existing = await this.prisma.licencePermit.findUnique({ where: { id } });
        if (!existing || existing.userId !== userId)
            throw new NotFoundException('Licence/Permit not found');
        return this.prisma.licencePermit.update({ where: { id }, data });
    }
    async deleteLicencePermit(userId, id) {
        const existing = await this.prisma.licencePermit.findUnique({ where: { id } });
        if (!existing || existing.userId !== userId)
            throw new NotFoundException('Licence/Permit not found');
        return this.prisma.licencePermit.delete({ where: { id } });
    }
    async createComplaint(userId, data) {
        return this.prisma.civicComplaint.create({
            data: { ...data, userId },
        });
    }
    async getComplaints(userId) {
        return this.prisma.civicComplaint.findMany({ where: { userId } });
    }
    async updateComplaint(userId, id, data) {
        const existing = await this.prisma.civicComplaint.findUnique({ where: { id } });
        if (!existing || existing.userId !== userId)
            throw new NotFoundException('Complaint not found');
        return this.prisma.civicComplaint.update({ where: { id }, data });
    }
    async deleteComplaint(userId, id) {
        const existing = await this.prisma.civicComplaint.findUnique({ where: { id } });
        if (!existing || existing.userId !== userId)
            throw new NotFoundException('Complaint not found');
        return this.prisma.civicComplaint.delete({ where: { id } });
    }
    async explainService(serviceName) {
        return {
            serviceName,
            officialAuthority: 'Local Government Authority',
            necessaryDocuments: ['Proof of Identity', 'Proof of Address', 'Supporting Documentation'],
            explanation: `To proceed with "${serviceName}", you generally must submit a formal application to the relevant authority along with required documents.`,
            disclaimer: 'This is an AI-generated explanation for informational purposes only and we explicitly decline to make any legal determinations. Please consult official government sources for definitive guidance.',
        };
    }
};
CivicIntelligenceService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], CivicIntelligenceService);
export { CivicIntelligenceService };
//# sourceMappingURL=civic-intelligence.service.js.map