import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';

@Injectable()
export class CareerTrackerService {
  constructor(private prisma: PrismaService) {}

  // WorkExperience
  getWorkExperiences(userId: string) {
    return this.prisma.workExperience.findMany({ where: { userId } });
  }
  getWorkExperienceById(userId: string, id: string) {
    return this.prisma.workExperience.findFirst({ where: { id, userId } });
  }
  createWorkExperience(userId: string, data: any) {
    return this.prisma.workExperience.create({ data: { ...data, userId } });
  }
  updateWorkExperience(userId: string, id: string, data: any) {
    return this.prisma.workExperience.updateMany({ where: { id, userId }, data });
  }
  deleteWorkExperience(userId: string, id: string) {
    return this.prisma.workExperience.deleteMany({ where: { id, userId } });
  }

  // Certification
  getCertifications(userId: string) {
    return this.prisma.certification.findMany({ where: { userId } });
  }
  getCertificationById(userId: string, id: string) {
    return this.prisma.certification.findFirst({ where: { id, userId } });
  }
  createCertification(userId: string, data: any) {
    return this.prisma.certification.create({ data: { ...data, userId } });
  }
  updateCertification(userId: string, id: string, data: any) {
    return this.prisma.certification.updateMany({ where: { id, userId }, data });
  }
  deleteCertification(userId: string, id: string) {
    return this.prisma.certification.deleteMany({ where: { id, userId } });
  }

  // GeneratedResume
  getGeneratedResumes(userId: string) {
    return this.prisma.generatedResume.findMany({ where: { userId } });
  }
  getGeneratedResumeById(userId: string, id: string) {
    return this.prisma.generatedResume.findFirst({ where: { id, userId } });
  }
  createGeneratedResume(userId: string, data: any) {
    return this.prisma.generatedResume.create({ data: { ...data, userId } });
  }
  updateGeneratedResume(userId: string, id: string, data: any) {
    return this.prisma.generatedResume.updateMany({ where: { id, userId }, data });
  }
  deleteGeneratedResume(userId: string, id: string) {
    return this.prisma.generatedResume.deleteMany({ where: { id, userId } });
  }

  // JobOpportunity
  getJobOpportunities(userId: string) {
    return this.prisma.jobOpportunity.findMany({ where: { userId } });
  }
  getJobOpportunityById(userId: string, id: string) {
    return this.prisma.jobOpportunity.findFirst({ where: { id, userId } });
  }
  createJobOpportunity(userId: string, data: any) {
    return this.prisma.jobOpportunity.create({ data: { ...data, userId } });
  }
  updateJobOpportunity(userId: string, id: string, data: any) {
    return this.prisma.jobOpportunity.updateMany({ where: { id, userId }, data });
  }
  deleteJobOpportunity(userId: string, id: string) {
    return this.prisma.jobOpportunity.deleteMany({ where: { id, userId } });
  }

  // JobApplication
  getJobApplications(userId: string) {
    return this.prisma.jobApplication.findMany({ where: { userId } });
  }
  getJobApplicationById(userId: string, id: string) {
    return this.prisma.jobApplication.findFirst({ where: { id, userId } });
  }
  async createJobApplication(userId: string, data: any) {
    if (data.opportunityId) {
      const opp = await this.prisma.jobOpportunity.findFirst({ where: { id: data.opportunityId, userId } });
      if (!opp) throw new Error('Opportunity not found or unauthorized');
    }
    return this.prisma.jobApplication.create({ data: { ...data, userId } });
  }
  updateJobApplication(userId: string, id: string, data: any) {
    return this.prisma.jobApplication.updateMany({ where: { id, userId }, data });
  }
  deleteJobApplication(userId: string, id: string) {
    return this.prisma.jobApplication.deleteMany({ where: { id, userId } });
  }
}
