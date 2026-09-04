import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';

@Injectable()
export class WorkIntelligenceService {
  constructor(private readonly prisma: PrismaService) {}

  // --- Interview ---
  async createInterview(userId: string, data: any) {
    if (!userId) throw new UnauthorizedException('Missing user ID');
    return this.prisma.interview.create({
      data: { ...data, userId },
    });
  }

  async getInterviews(userId: string) {
    if (!userId) throw new UnauthorizedException('Missing user ID');
    return this.prisma.interview.findMany({
      where: { userId },
    });
  }

  async getInterview(userId: string, id: string) {
    if (!userId) throw new UnauthorizedException('Missing user ID');
    return this.prisma.interview.findFirst({
      where: { id, userId },
    });
  }

  async updateInterview(userId: string, id: string, data: any) {
    if (!userId) throw new UnauthorizedException('Missing user ID');
    await this.prisma.interview.updateMany({
      where: { id, userId },
      data,
    });
    return this.getInterview(userId, id);
  }

  async deleteInterview(userId: string, id: string) {
    if (!userId) throw new UnauthorizedException('Missing user ID');
    return this.prisma.interview.deleteMany({
      where: { id, userId },
    });
  }

  // --- FreelanceProject ---
  async createFreelanceProject(userId: string, data: any) {
    if (!userId) throw new UnauthorizedException('Missing user ID');
    return this.prisma.freelanceProject.create({
      data: { ...data, userId },
    });
  }

  async getFreelanceProjects(userId: string) {
    if (!userId) throw new UnauthorizedException('Missing user ID');
    return this.prisma.freelanceProject.findMany({
      where: { userId },
      include: {
        proposals: true,
        deliverables: true,
      }
    });
  }

  async getFreelanceProject(userId: string, id: string) {
    if (!userId) throw new UnauthorizedException('Missing user ID');
    return this.prisma.freelanceProject.findFirst({
      where: { id, userId },
      include: {
        proposals: true,
        deliverables: true,
      }
    });
  }

  async updateFreelanceProject(userId: string, id: string, data: any) {
    if (!userId) throw new UnauthorizedException('Missing user ID');
    await this.prisma.freelanceProject.updateMany({
      where: { id, userId },
      data,
    });
    return this.getFreelanceProject(userId, id);
  }

  async deleteFreelanceProject(userId: string, id: string) {
    if (!userId) throw new UnauthorizedException('Missing user ID');
    return this.prisma.freelanceProject.deleteMany({
      where: { id, userId },
    });
  }

  // --- Business ---
  async createBusiness(userId: string, data: any) {
    if (!userId) throw new UnauthorizedException('Missing user ID');
    return this.prisma.business.create({
      data: { ...data, userId },
    });
  }

  async getBusinesses(userId: string) {
    if (!userId) throw new UnauthorizedException('Missing user ID');
    return this.prisma.business.findMany({
      where: { userId },
      include: {
        projects: true,
        products: true,
      }
    });
  }

  async getBusiness(userId: string, id: string) {
    if (!userId) throw new UnauthorizedException('Missing user ID');
    return this.prisma.business.findFirst({
      where: { id, userId },
      include: {
        projects: true,
        products: true,
      }
    });
  }

  async updateBusiness(userId: string, id: string, data: any) {
    if (!userId) throw new UnauthorizedException('Missing user ID');
    await this.prisma.business.updateMany({
      where: { id, userId },
      data,
    });
    return this.getBusiness(userId, id);
  }

  async deleteBusiness(userId: string, id: string) {
    if (!userId) throw new UnauthorizedException('Missing user ID');
    return this.prisma.business.deleteMany({
      where: { id, userId },
    });
  }

  // --- Resume Match (Mock extraction logic) ---
  async generateResumeMatch(userId: string, resumeId: string, jobId: string) {
    if (!userId) {
      throw new UnauthorizedException('Missing user ID');
    }
    
    // We would fetch resume and job from DB making sure they belong to the user
    // e.g. this.prisma.generatedResume.findFirst({ where: { id: resumeId, userId } })
    // and jobOpportunity.findFirst({ where: { id: jobId, userId } })

    return {
      strongMatches: ['React', 'Node.js', 'Typescript'],
      partialMatches: ['AWS', 'Docker'],
      missingRequirements: ['GraphQL', 'Kubernetes'],
      suggestedImprovements: ['Add more detail on backend architecture experience', 'Highlight leadership role']
    };
  }
}
