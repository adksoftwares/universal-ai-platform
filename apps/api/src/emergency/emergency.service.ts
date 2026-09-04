import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';

@Injectable()
export class EmergencyService {
  constructor(private prisma: PrismaService) {}

  // EmergencyProfile
  getProfile(userId: string) {
    return this.prisma.emergencyProfile.findUnique({ where: { userId } });
  }

  upsertProfile(userId: string, data: any) {
    return this.prisma.emergencyProfile.upsert({
      where: { userId },
      update: data,
      create: { ...data, userId },
    });
  }

  // EmergencyContact
  getContacts(userId: string) {
    return this.prisma.emergencyContact.findMany({ where: { userId } });
  }

  createContact(userId: string, data: any) {
    return this.prisma.emergencyContact.create({ data: { ...data, userId } });
  }

  updateContact(userId: string, id: string, data: any) {
    return this.prisma.emergencyContact.updateMany({ where: { id, userId }, data });
  }

  deleteContact(userId: string, id: string) {
    return this.prisma.emergencyContact.deleteMany({ where: { id, userId } });
  }

  // EmergencyPlan
  getPlans(userId: string) {
    return this.prisma.emergencyPlan.findMany({ where: { userId } });
  }

  createPlan(userId: string, data: any) {
    return this.prisma.emergencyPlan.create({ data: { ...data, userId } });
  }

  updatePlan(userId: string, id: string, data: any) {
    return this.prisma.emergencyPlan.updateMany({ where: { id, userId }, data });
  }

  deletePlan(userId: string, id: string) {
    return this.prisma.emergencyPlan.deleteMany({ where: { id, userId } });
  }

  // SafetyCheckIn
  getSafetyCheckIns(userId: string) {
    return this.prisma.safetyCheckIn.findMany({ where: { userId } });
  }

  createSafetyCheckIn(userId: string, data: any) {
    return this.prisma.safetyCheckIn.create({ data: { ...data, userId } });
  }

  updateSafetyCheckIn(userId: string, id: string, data: any) {
    return this.prisma.safetyCheckIn.updateMany({ where: { id, userId }, data });
  }

  deleteSafetyCheckIn(userId: string, id: string) {
    return this.prisma.safetyCheckIn.deleteMany({ where: { id, userId } });
  }
}
