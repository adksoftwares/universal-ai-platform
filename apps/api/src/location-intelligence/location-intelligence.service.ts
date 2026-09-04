import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';

@Injectable()
export class LocationIntelligenceService {
  constructor(private prisma: PrismaService) {}

  async createGeofenceRule(userId: string, data: any) {
    return this.prisma.geofenceRule.create({
      data: { ...data, userId }
    });
  }

  async getGeofenceRules(userId: string) {
    return this.prisma.geofenceRule.findMany({
      where: { userId }
    });
  }

  async getGeofenceRule(userId: string, id: string) {
    const rule = await this.prisma.geofenceRule.findFirst({
      where: { id, userId }
    });
    if (!rule) throw new NotFoundException('GeofenceRule not found');
    return rule;
  }

  async updateGeofenceRule(userId: string, id: string, data: any) {
    await this.getGeofenceRule(userId, id); // Ensure access
    return this.prisma.geofenceRule.update({
      where: { id },
      data
    });
  }

  async deleteGeofenceRule(userId: string, id: string) {
    await this.getGeofenceRule(userId, id); // Ensure access
    return this.prisma.geofenceRule.delete({
      where: { id }
    });
  }

  async planItinerary(destination: string, budget: string | number) {
    return {
      recommendation: `Here is a mocked AI itinerary recommendation for ${destination} with a budget of ${budget}.`,
      warning: 'Please do not book travel without confirming prices.'
    };
  }
}
