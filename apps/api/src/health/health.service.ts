import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';

@Injectable()
export class HealthService {
  constructor(private prisma: PrismaService) {}

  // HealthProfile
  getHealthProfile(userId: string) {
    return this.prisma.healthProfile.findUnique({ where: { userId } });
  }

  upsertHealthProfile(userId: string, data: any) {
    return this.prisma.healthProfile.upsert({
      where: { userId },
      update: data,
      create: { ...data, userId },
    });
  }

  // Medication
  getMedications(userId: string) {
    return this.prisma.medication.findMany({ where: { userId } });
  }

  createMedication(userId: string, data: any) {
    return this.prisma.medication.create({ data: { ...data, userId } });
  }

  updateMedication(userId: string, id: string, data: any) {
    return this.prisma.medication.updateMany({
      where: { id, userId },
      data,
    });
  }

  deleteMedication(userId: string, id: string) {
    return this.prisma.medication.deleteMany({
      where: { id, userId },
    });
  }

  // HealthAppointment
  getAppointments(userId: string) {
    return this.prisma.healthAppointment.findMany({ where: { userId } });
  }

  createAppointment(userId: string, data: any) {
    return this.prisma.healthAppointment.create({ data: { ...data, userId } });
  }

  updateAppointment(userId: string, id: string, data: any) {
    return this.prisma.healthAppointment.updateMany({
      where: { id, userId },
      data,
    });
  }

  deleteAppointment(userId: string, id: string) {
    return this.prisma.healthAppointment.deleteMany({
      where: { id, userId },
    });
  }

  // WellnessRecord
  getWellnessRecords(userId: string) {
    return this.prisma.wellnessRecord.findMany({ where: { userId } });
  }

  createWellnessRecord(userId: string, data: any) {
    return this.prisma.wellnessRecord.create({ data: { ...data, userId } });
  }

  updateWellnessRecord(userId: string, id: string, data: any) {
    return this.prisma.wellnessRecord.updateMany({
      where: { id, userId },
      data,
    });
  }

  deleteWellnessRecord(userId: string, id: string) {
    return this.prisma.wellnessRecord.deleteMany({
      where: { id, userId },
    });
  }
}
