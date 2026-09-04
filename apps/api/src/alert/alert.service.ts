import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';

@Injectable()
export class AlertService {
  constructor(private prisma: PrismaService) {}

  // AlertSubscription
  getSubscriptions(userId: string) {
    return this.prisma.alertSubscription.findMany({ where: { userId } });
  }

  createSubscription(userId: string, data: any) {
    return this.prisma.alertSubscription.create({ data: { ...data, userId } });
  }

  updateSubscription(userId: string, id: string, data: any) {
    return this.prisma.alertSubscription.updateMany({ where: { id, userId }, data });
  }

  deleteSubscription(userId: string, id: string) {
    return this.prisma.alertSubscription.deleteMany({ where: { id, userId } });
  }

  // DisasterAlert (Read-only)
  getDisasterAlerts() {
    return this.prisma.disasterAlert.findMany({
      where: {
        OR: [
          { expiresAt: { gt: new Date() } },
          { expiresAt: null }
        ]
      },
      orderBy: { issuedAt: 'desc' },
      take: 50,
    });
  }
}
