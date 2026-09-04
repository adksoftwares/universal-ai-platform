import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';

@Injectable()
export class EducationIntelligenceService {
  constructor(private readonly prisma: PrismaService) {}

  // MistakeLog CRUD
  async createMistakeLog(userId: string, data: any) {
    return this.prisma.mistakeLog.create({
      data: { ...data, userId }
    });
  }
  async getMistakeLogs(userId: string) {
    return this.prisma.mistakeLog.findMany({ where: { userId } });
  }
  async getMistakeLog(userId: string, id: string) {
    const record = await this.prisma.mistakeLog.findFirst({ where: { id, userId } });
    if (!record) throw new NotFoundException();
    return record;
  }
  async updateMistakeLog(userId: string, id: string, data: any) {
    await this.getMistakeLog(userId, id); // check exist/ownership
    return this.prisma.mistakeLog.update({ where: { id }, data });
  }
  async deleteMistakeLog(userId: string, id: string) {
    await this.getMistakeLog(userId, id);
    return this.prisma.mistakeLog.delete({ where: { id } });
  }

  // PracticeSession CRUD
  async createPracticeSession(userId: string, data: any) {
    return this.prisma.practiceSession.create({
      data: { ...data, userId }
    });
  }
  async getPracticeSessions(userId: string) {
    return this.prisma.practiceSession.findMany({ where: { userId } });
  }
  async getPracticeSession(userId: string, id: string) {
    const record = await this.prisma.practiceSession.findFirst({ where: { id, userId } });
    if (!record) throw new NotFoundException();
    return record;
  }
  async updatePracticeSession(userId: string, id: string, data: any) {
    await this.getPracticeSession(userId, id);
    return this.prisma.practiceSession.update({ where: { id }, data });
  }
  async deletePracticeSession(userId: string, id: string) {
    await this.getPracticeSession(userId, id);
    return this.prisma.practiceSession.delete({ where: { id } });
  }

  // Certificate CRUD
  async createCertificate(userId: string, data: any) {
    return this.prisma.certificate.create({
      data: { ...data, userId }
    });
  }
  async getCertificates(userId: string) {
    return this.prisma.certificate.findMany({ where: { userId } });
  }
  async getCertificate(userId: string, id: string) {
    const record = await this.prisma.certificate.findFirst({ where: { id, userId } });
    if (!record) throw new NotFoundException();
    return record;
  }
  async updateCertificate(userId: string, id: string, data: any) {
    await this.getCertificate(userId, id);
    return this.prisma.certificate.update({ where: { id }, data });
  }
  async deleteCertificate(userId: string, id: string) {
    await this.getCertificate(userId, id);
    return this.prisma.certificate.delete({ where: { id } });
  }

  async solveStudyProblem(problem: string, level: string) {
    return {
      message: `I see you are working on this problem: "${problem}" at the ${level} level. What do you think the first step should be? Can you identify any key principles or formulas that apply here? (Disclaimer: Please verify any important mathematical calculations manually, as AI-generated calculations may not always be 100% accurate.)`
    };
  }
}
