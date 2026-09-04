import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';

@Injectable()
export class CivicIntelligenceService {
  constructor(private readonly prisma: PrismaService) {}

  // --- CivicApplication ---
  async createApplication(userId: string, data: any) {
    return this.prisma.civicApplication.create({
      data: { ...data, userId },
    });
  }

  async getApplications(userId: string) {
    return this.prisma.civicApplication.findMany({ where: { userId } });
  }

  async updateApplication(userId: string, id: string, data: any) {
    const existing = await this.prisma.civicApplication.findUnique({ where: { id } });
    if (!existing || existing.userId !== userId) throw new NotFoundException('Application not found');
    return this.prisma.civicApplication.update({ where: { id }, data });
  }

  async deleteApplication(userId: string, id: string) {
    const existing = await this.prisma.civicApplication.findUnique({ where: { id } });
    if (!existing || existing.userId !== userId) throw new NotFoundException('Application not found');
    return this.prisma.civicApplication.delete({ where: { id } });
  }

  // --- LicencePermit ---
  async createLicencePermit(userId: string, data: any) {
    return this.prisma.licencePermit.create({
      data: { ...data, userId },
    });
  }

  async getLicencePermits(userId: string) {
    return this.prisma.licencePermit.findMany({ where: { userId } });
  }

  async updateLicencePermit(userId: string, id: string, data: any) {
    const existing = await this.prisma.licencePermit.findUnique({ where: { id } });
    if (!existing || existing.userId !== userId) throw new NotFoundException('Licence/Permit not found');
    return this.prisma.licencePermit.update({ where: { id }, data });
  }

  async deleteLicencePermit(userId: string, id: string) {
    const existing = await this.prisma.licencePermit.findUnique({ where: { id } });
    if (!existing || existing.userId !== userId) throw new NotFoundException('Licence/Permit not found');
    return this.prisma.licencePermit.delete({ where: { id } });
  }

  // --- CivicComplaint ---
  async createComplaint(userId: string, data: any) {
    return this.prisma.civicComplaint.create({
      data: { ...data, userId },
    });
  }

  async getComplaints(userId: string) {
    return this.prisma.civicComplaint.findMany({ where: { userId } });
  }

  async updateComplaint(userId: string, id: string, data: any) {
    const existing = await this.prisma.civicComplaint.findUnique({ where: { id } });
    if (!existing || existing.userId !== userId) throw new NotFoundException('Complaint not found');
    return this.prisma.civicComplaint.update({ where: { id }, data });
  }

  async deleteComplaint(userId: string, id: string) {
    const existing = await this.prisma.civicComplaint.findUnique({ where: { id } });
    if (!existing || existing.userId !== userId) throw new NotFoundException('Complaint not found');
    return this.prisma.civicComplaint.delete({ where: { id } });
  }

  // --- AI Service Explain ---
  async explainService(serviceName: string) {
    return {
      serviceName,
      officialAuthority: 'Local Government Authority',
      necessaryDocuments: ['Proof of Identity', 'Proof of Address', 'Supporting Documentation'],
      explanation: `To proceed with "${serviceName}", you generally must submit a formal application to the relevant authority along with required documents.`,
      disclaimer: 'This is an AI-generated explanation for informational purposes only and we explicitly decline to make any legal determinations. Please consult official government sources for definitive guidance.',
    };
  }
}
