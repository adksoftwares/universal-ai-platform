import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';

@Injectable()
export class CareerIntelligenceService {
  constructor(private readonly prisma: PrismaService) {}

  // Resumes
  async getResumes(userId: string) {
    return this.prisma.resume.findMany({ where: { userId } });
  }

  async getResume(userId: string, id: string) {
    const resume = await this.prisma.resume.findFirst({ where: { id, userId } });
    if (!resume) throw new NotFoundException('Resume not found');
    return resume;
  }

  async createResume(userId: string, data: any) {
    return this.prisma.resume.create({
      data: { ...data, userId },
    });
  }

  async updateResume(userId: string, id: string, data: any) {
    const resume = await this.getResume(userId, id);
    return this.prisma.resume.update({
      where: { id: resume.id },
      data,
    });
  }

  async deleteResume(userId: string, id: string) {
    const resume = await this.getResume(userId, id);
    return this.prisma.resume.delete({
      where: { id: resume.id },
    });
  }

  async tailorResume(userId: string, resumeId: string, jobDescription: string) {
    // Validate ownership
    await this.getResume(userId, resumeId);
    
    // Mock AI response
    return {
      message: 'Mock AI response: Suggested keywords and improvements added based on the job description.',
      suggestedKeywords: ['Leadership', 'Agile', 'Microservices'],
      improvements: [
        'Highlight past experience with large-scale systems.',
        'Include measurable metrics for previous projects.'
      ]
    };
  }

  // PortfolioProjects
  async getPortfolioProjects(userId: string) {
    return this.prisma.portfolioProject.findMany({ where: { userId } });
  }

  async getPortfolioProject(userId: string, id: string) {
    const project = await this.prisma.portfolioProject.findFirst({ where: { id, userId } });
    if (!project) throw new NotFoundException('Portfolio Project not found');
    return project;
  }

  async createPortfolioProject(userId: string, data: any) {
    return this.prisma.portfolioProject.create({
      data: { ...data, userId },
    });
  }

  async updatePortfolioProject(userId: string, id: string, data: any) {
    const project = await this.getPortfolioProject(userId, id);
    return this.prisma.portfolioProject.update({
      where: { id: project.id },
      data,
    });
  }

  async deletePortfolioProject(userId: string, id: string) {
    const project = await this.getPortfolioProject(userId, id);
    return this.prisma.portfolioProject.delete({
      where: { id: project.id },
    });
  }

  // NetworkingRecords
  async getNetworkingRecords(userId: string) {
    return this.prisma.networkingRecord.findMany({ where: { userId } });
  }

  async getNetworkingRecord(userId: string, id: string) {
    const record = await this.prisma.networkingRecord.findFirst({ where: { id, userId } });
    if (!record) throw new NotFoundException('Networking Record not found');
    return record;
  }

  async createNetworkingRecord(userId: string, data: any) {
    return this.prisma.networkingRecord.create({
      data: { ...data, userId },
    });
  }

  async updateNetworkingRecord(userId: string, id: string, data: any) {
    const record = await this.getNetworkingRecord(userId, id);
    return this.prisma.networkingRecord.update({
      where: { id: record.id },
      data,
    });
  }

  async deleteNetworkingRecord(userId: string, id: string) {
    const record = await this.getNetworkingRecord(userId, id);
    return this.prisma.networkingRecord.delete({
      where: { id: record.id },
    });
  }
}
