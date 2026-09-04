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
let LocationIntelligenceService = class LocationIntelligenceService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createGeofenceRule(userId, data) {
        return this.prisma.geofenceRule.create({
            data: { ...data, userId }
        });
    }
    async getGeofenceRules(userId) {
        return this.prisma.geofenceRule.findMany({
            where: { userId }
        });
    }
    async getGeofenceRule(userId, id) {
        const rule = await this.prisma.geofenceRule.findFirst({
            where: { id, userId }
        });
        if (!rule)
            throw new NotFoundException('GeofenceRule not found');
        return rule;
    }
    async updateGeofenceRule(userId, id, data) {
        await this.getGeofenceRule(userId, id);
        return this.prisma.geofenceRule.update({
            where: { id },
            data
        });
    }
    async deleteGeofenceRule(userId, id) {
        await this.getGeofenceRule(userId, id);
        return this.prisma.geofenceRule.delete({
            where: { id }
        });
    }
    async planItinerary(destination, budget) {
        return {
            recommendation: `Here is a mocked AI itinerary recommendation for ${destination} with a budget of ${budget}.`,
            warning: 'Please do not book travel without confirming prices.'
        };
    }
};
LocationIntelligenceService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], LocationIntelligenceService);
export { LocationIntelligenceService };
//# sourceMappingURL=location-intelligence.service.js.map