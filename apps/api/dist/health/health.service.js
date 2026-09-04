var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';
let HealthService = class HealthService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    getHealthProfile(userId) {
        return this.prisma.healthProfile.findUnique({ where: { userId } });
    }
    upsertHealthProfile(userId, data) {
        return this.prisma.healthProfile.upsert({
            where: { userId },
            update: data,
            create: { ...data, userId },
        });
    }
    getMedications(userId) {
        return this.prisma.medication.findMany({ where: { userId } });
    }
    createMedication(userId, data) {
        return this.prisma.medication.create({ data: { ...data, userId } });
    }
    updateMedication(userId, id, data) {
        return this.prisma.medication.updateMany({
            where: { id, userId },
            data,
        });
    }
    deleteMedication(userId, id) {
        return this.prisma.medication.deleteMany({
            where: { id, userId },
        });
    }
    getAppointments(userId) {
        return this.prisma.healthAppointment.findMany({ where: { userId } });
    }
    createAppointment(userId, data) {
        return this.prisma.healthAppointment.create({ data: { ...data, userId } });
    }
    updateAppointment(userId, id, data) {
        return this.prisma.healthAppointment.updateMany({
            where: { id, userId },
            data,
        });
    }
    deleteAppointment(userId, id) {
        return this.prisma.healthAppointment.deleteMany({
            where: { id, userId },
        });
    }
    getWellnessRecords(userId) {
        return this.prisma.wellnessRecord.findMany({ where: { userId } });
    }
    createWellnessRecord(userId, data) {
        return this.prisma.wellnessRecord.create({ data: { ...data, userId } });
    }
    updateWellnessRecord(userId, id, data) {
        return this.prisma.wellnessRecord.updateMany({
            where: { id, userId },
            data,
        });
    }
    deleteWellnessRecord(userId, id) {
        return this.prisma.wellnessRecord.deleteMany({
            where: { id, userId },
        });
    }
};
HealthService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], HealthService);
export { HealthService };
//# sourceMappingURL=health.service.js.map