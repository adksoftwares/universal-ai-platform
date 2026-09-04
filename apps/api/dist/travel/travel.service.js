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
let TravelService = class TravelService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createTrip(userId, data) {
        return this.prisma.trip.create({
            data: { ...data, userId },
        });
    }
    async getTrips(userId) {
        return this.prisma.trip.findMany({
            where: { userId },
            include: { itinerary: true, checklists: true },
        });
    }
    async getTrip(userId, tripId) {
        return this.prisma.trip.findUnique({
            where: { id: tripId, userId },
            include: { itinerary: true, checklists: true },
        });
    }
    async updateTrip(userId, tripId, data) {
        return this.prisma.trip.update({
            where: { id: tripId, userId },
            data,
        });
    }
    async deleteTrip(userId, tripId) {
        return this.prisma.trip.delete({
            where: { id: tripId, userId },
        });
    }
};
TravelService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], TravelService);
export { TravelService };
//# sourceMappingURL=travel.service.js.map