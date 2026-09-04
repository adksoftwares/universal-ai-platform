import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';

@Injectable()
export class ServiceIntegrationService {
  constructor(private readonly prisma: PrismaService) {}

  async createConnectedService(userId: string, data: any) {
    return this.prisma.connectedService.create({
      data: { ...data, userId },
    });
  }

  async getConnectedServices(userId: string) {
    return this.prisma.connectedService.findMany({
      where: { userId },
      include: { permissions: true },
    });
  }

  async deleteConnectedService(userId: string, id: string) {
    return this.prisma.connectedService.delete({
      where: { id, userId },
    });
  }

  async logExternalAction(userId: string, data: any) {
    return this.prisma.externalActionRecord.create({
      data: { ...data, userId },
    });
  }

  async getExternalActions(userId: string) {
    return this.prisma.externalActionRecord.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }
}
