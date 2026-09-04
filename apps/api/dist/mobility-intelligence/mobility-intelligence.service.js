var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';
let MobilityIntelligenceService = class MobilityIntelligenceService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createVehicle(userId, data) {
        return this.prisma.vehicle.create({
            data: { ...data, userId },
        });
    }
    async getVehicles(userId) {
        return this.prisma.vehicle.findMany({
            where: { userId },
        });
    }
    async getVehicle(userId, id) {
        const vehicle = await this.prisma.vehicle.findFirst({
            where: { id, userId },
        });
        if (!vehicle)
            throw new NotFoundException('Vehicle not found');
        return vehicle;
    }
    async updateVehicle(userId, id, data) {
        await this.getVehicle(userId, id);
        return this.prisma.vehicle.update({
            where: { id },
            data,
        });
    }
    async deleteVehicle(userId, id) {
        await this.getVehicle(userId, id);
        return this.prisma.vehicle.delete({
            where: { id },
        });
    }
    async createCommuteProfile(userId, data) {
        return this.prisma.commuteProfile.create({
            data: { ...data, userId },
        });
    }
    async getCommuteProfiles(userId) {
        return this.prisma.commuteProfile.findMany({
            where: { userId },
        });
    }
    async getCommuteProfile(userId, id) {
        const profile = await this.prisma.commuteProfile.findFirst({
            where: { id, userId },
        });
        if (!profile)
            throw new NotFoundException('CommuteProfile not found');
        return profile;
    }
    async updateCommuteProfile(userId, id, data) {
        await this.getCommuteProfile(userId, id);
        return this.prisma.commuteProfile.update({
            where: { id },
            data,
        });
    }
    async deleteCommuteProfile(userId, id) {
        await this.getCommuteProfile(userId, id);
        return this.prisma.commuteProfile.delete({
            where: { id },
        });
    }
    async searchRoutes(userId, query) {
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
};
MobilityIntelligenceService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], MobilityIntelligenceService);
export { MobilityIntelligenceService };
//# sourceMappingURL=mobility-intelligence.service.js.map