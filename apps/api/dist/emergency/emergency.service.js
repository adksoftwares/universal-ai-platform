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
let EmergencyService = class EmergencyService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    getProfile(userId) {
        return this.prisma.emergencyProfile.findUnique({ where: { userId } });
    }
    upsertProfile(userId, data) {
        return this.prisma.emergencyProfile.upsert({
            where: { userId },
            update: data,
            create: { ...data, userId },
        });
    }
    getContacts(userId) {
        return this.prisma.emergencyContact.findMany({ where: { userId } });
    }
    createContact(userId, data) {
        return this.prisma.emergencyContact.create({ data: { ...data, userId } });
    }
    updateContact(userId, id, data) {
        return this.prisma.emergencyContact.updateMany({ where: { id, userId }, data });
    }
    deleteContact(userId, id) {
        return this.prisma.emergencyContact.deleteMany({ where: { id, userId } });
    }
    getPlans(userId) {
        return this.prisma.emergencyPlan.findMany({ where: { userId } });
    }
    createPlan(userId, data) {
        return this.prisma.emergencyPlan.create({ data: { ...data, userId } });
    }
    updatePlan(userId, id, data) {
        return this.prisma.emergencyPlan.updateMany({ where: { id, userId }, data });
    }
    deletePlan(userId, id) {
        return this.prisma.emergencyPlan.deleteMany({ where: { id, userId } });
    }
    getSafetyCheckIns(userId) {
        return this.prisma.safetyCheckIn.findMany({ where: { userId } });
    }
    createSafetyCheckIn(userId, data) {
        return this.prisma.safetyCheckIn.create({ data: { ...data, userId } });
    }
    updateSafetyCheckIn(userId, id, data) {
        return this.prisma.safetyCheckIn.updateMany({ where: { id, userId }, data });
    }
    deleteSafetyCheckIn(userId, id) {
        return this.prisma.safetyCheckIn.deleteMany({ where: { id, userId } });
    }
};
EmergencyService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], EmergencyService);
export { EmergencyService };
//# sourceMappingURL=emergency.service.js.map