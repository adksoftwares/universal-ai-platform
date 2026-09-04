import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';

@Injectable()
export class TravelService {
  constructor(private readonly prisma: PrismaService) {}

  async createTrip(userId: string, data: any) {
    return this.prisma.trip.create({
      data: { ...data, userId },
    });
  }

  async getTrips(userId: string) {
    return this.prisma.trip.findMany({
      where: { userId },
      include: { itinerary: true, checklists: true },
    });
  }

  async getTrip(userId: string, tripId: string) {
    return this.prisma.trip.findUnique({
      where: { id: tripId, userId },
      include: { itinerary: true, checklists: true },
    });
  }

  async updateTrip(userId: string, tripId: string, data: any) {
    return this.prisma.trip.update({
      where: { id: tripId, userId },
      data,
    });
  }

  async deleteTrip(userId: string, tripId: string) {
    return this.prisma.trip.delete({
      where: { id: tripId, userId },
    });
  }
}
