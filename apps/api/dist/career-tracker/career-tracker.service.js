var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';
let CareerTrackerService = class CareerTrackerService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    getWorkExperiences(userId) {
        return this.prisma.workExperience.findMany({ where: { userId } });
    }
    getWorkExperienceById(userId, id) {
        return this.prisma.workExperience.findFirst({ where: { id, userId } });
    }
    createWorkExperience(userId, data) {
        return this.prisma.workExperience.create({ data: { ...data, userId } });
    }
    updateWorkExperience(userId, id, data) {
        return this.prisma.workExperience.updateMany({ where: { id, userId }, data });
    }
    deleteWorkExperience(userId, id) {
        return this.prisma.workExperience.deleteMany({ where: { id, userId } });
    }
    getCertifications(userId) {
        return this.prisma.certification.findMany({ where: { userId } });
    }
    getCertificationById(userId, id) {
        return this.prisma.certification.findFirst({ where: { id, userId } });
    }
    createCertification(userId, data) {
        return this.prisma.certification.create({ data: { ...data, userId } });
    }
    updateCertification(userId, id, data) {
        return this.prisma.certification.updateMany({ where: { id, userId }, data });
    }
    deleteCertification(userId, id) {
        return this.prisma.certification.deleteMany({ where: { id, userId } });
    }
    getGeneratedResumes(userId) {
        return this.prisma.generatedResume.findMany({ where: { userId } });
    }
    getGeneratedResumeById(userId, id) {
        return this.prisma.generatedResume.findFirst({ where: { id, userId } });
    }
    createGeneratedResume(userId, data) {
        return this.prisma.generatedResume.create({ data: { ...data, userId } });
    }
    updateGeneratedResume(userId, id, data) {
        return this.prisma.generatedResume.updateMany({ where: { id, userId }, data });
    }
    deleteGeneratedResume(userId, id) {
        return this.prisma.generatedResume.deleteMany({ where: { id, userId } });
    }
    getJobOpportunities(userId) {
        return this.prisma.jobOpportunity.findMany({ where: { userId } });
    }
    getJobOpportunityById(userId, id) {
        return this.prisma.jobOpportunity.findFirst({ where: { id, userId } });
    }
    createJobOpportunity(userId, data) {
        return this.prisma.jobOpportunity.create({ data: { ...data, userId } });
    }
    updateJobOpportunity(userId, id, data) {
        return this.prisma.jobOpportunity.updateMany({ where: { id, userId }, data });
    }
    deleteJobOpportunity(userId, id) {
        return this.prisma.jobOpportunity.deleteMany({ where: { id, userId } });
    }
    getJobApplications(userId) {
        return this.prisma.jobApplication.findMany({ where: { userId } });
    }
    getJobApplicationById(userId, id) {
        return this.prisma.jobApplication.findFirst({ where: { id, userId } });
    }
    async createJobApplication(userId, data) {
        if (data.opportunityId) {
            const opp = await this.prisma.jobOpportunity.findFirst({ where: { id: data.opportunityId, userId } });
            if (!opp)
                throw new Error('Opportunity not found or unauthorized');
        }
        return this.prisma.jobApplication.create({ data: { ...data, userId } });
    }
    updateJobApplication(userId, id, data) {
        return this.prisma.jobApplication.updateMany({ where: { id, userId }, data });
    }
    deleteJobApplication(userId, id) {
        return this.prisma.jobApplication.deleteMany({ where: { id, userId } });
    }
};
CareerTrackerService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], CareerTrackerService);
export { CareerTrackerService };
//# sourceMappingURL=career-tracker.service.js.map