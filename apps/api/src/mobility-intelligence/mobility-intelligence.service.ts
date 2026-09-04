import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';

@Injectable()
export class MobilityIntelligenceService {
  constructor(private prisma: PrismaService) {}

  // --- Vehicle CRUD ---

  async createVehicle(userId: string, data: any) {
    return this.prisma.vehicle.create({
      data: { ...data, userId },
    });
  }

  async getVehicles(userId: string) {
    return this.prisma.vehicle.findMany({
      where: { userId },
    });
  }

  async getVehicle(userId: string, id: string) {
    const vehicle = await this.prisma.vehicle.findFirst({
      where: { id, userId },
    });
    if (!vehicle) throw new NotFoundException('Vehicle not found');
    return vehicle;
  }

  async updateVehicle(userId: string, id: string, data: any) {
    await this.getVehicle(userId, id); // Ensure it exists and belongs to user
    return this.prisma.vehicle.update({
      where: { id },
      data,
    });
  }

  async deleteVehicle(userId: string, id: string) {
    await this.getVehicle(userId, id);
    return this.prisma.vehicle.delete({
      where: { id },
    });
  }

  // --- CommuteProfile CRUD ---

  async createCommuteProfile(userId: string, data: any) {
    return this.prisma.commuteProfile.create({
      data: { ...data, userId },
    });
  }

  async getCommuteProfiles(userId: string) {
    return this.prisma.commuteProfile.findMany({
      where: { userId },
    });
  }

  async getCommuteProfile(userId: string, id: string) {
    const profile = await this.prisma.commuteProfile.findFirst({
      where: { id, userId },
    });
    if (!profile) throw new NotFoundException('CommuteProfile not found');
    return profile;
  }

  async updateCommuteProfile(userId: string, id: string, data: any) {
    await this.getCommuteProfile(userId, id);
    return this.prisma.commuteProfile.update({
      where: { id },
      data,
    });
  }

  async deleteCommuteProfile(userId: string, id: string) {
    await this.getCommuteProfile(userId, id);
    return this.prisma.commuteProfile.delete({
      where: { id },
    });
  }

  // --- Routes Search ---

  async searchRoutes(userId: string, query: any) {
    // Mocked response mimicking an external Maps/Transit provider adapter
    const origin = query?.origin || 'Unknown Origin';
    const destination = query?.destination || 'Unknown Destination';

    return {
      origin,
      destination,
      options: [
        {
          mode: 'driving',
          duration: '35 mins',
          distance: '15 km',
          ecoFriendly: false,
        },
        {
          mode: 'public transport',
          duration: '50 mins',
          distance: '15 km',
          ecoFriendly: true,
          details: 'Take bus 42, then switch to train line A',
        },
        {
          mode: 'walking',
          duration: '3 hrs',
          distance: '14 km',
          ecoFriendly: true,
        },
      ],
    };
  }
}
