import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';

@Injectable()
export class CitizenService {
  constructor(private prisma: PrismaService) {}

  async getServices() {
    return this.prisma.governmentService.findMany({
      include: {
        jurisdiction: true,
        sources: true,
        requirements: true,
      },
    });
  }

  async getBookmarks(userId: string) {
    return this.prisma.serviceBookmark.findMany({
      where: { userId },
      include: { service: true },
    });
  }

  async addBookmark(userId: string, data: any) {
    return this.prisma.serviceBookmark.create({
      data: { ...data, userId },
    });
  }

  async removeBookmark(userId: string, id: string) {
    return this.prisma.serviceBookmark.deleteMany({
      where: { id, userId },
    });
  }

  async getApplications(userId: string) {
    return this.prisma.serviceApplication.findMany({
      where: { userId },
      include: { service: true },
    });
  }

  async createApplication(userId: string, data: any) {
    return this.prisma.serviceApplication.create({
      data: { ...data, userId },
    });
  }

  async updateApplication(userId: string, id: string, data: any) {
    return this.prisma.serviceApplication.updateMany({
      where: { id, userId },
      data,
    });
  }

  async removeApplication(userId: string, id: string) {
    return this.prisma.serviceApplication.deleteMany({
      where: { id, userId },
    });
  }

  async verifySource(sourceId: string) {
    return this.prisma.serviceSource.update({
      where: { id: sourceId },
      data: { lastVerified: new Date() },
    });
  }
}
