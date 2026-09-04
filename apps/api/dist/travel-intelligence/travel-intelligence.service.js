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
let TravelIntelligenceService = class TravelIntelligenceService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createTripDestination(userId, data) {
        const trip = await this.prisma.trip.findFirst({
            where: { id: data.tripId, userId }
        });
        if (!trip)
            throw new NotFoundException('Trip not found or access denied');
        return this.prisma.tripDestination.create({
            data
        });
    }
    async getTripDestinations(userId, tripId) {
        return this.prisma.tripDestination.findMany({
            where: {
                ...(tripId ? { tripId } : {}),
                trip: {
                    userId
                }
            }
        });
    }
    async getTripDestination(userId, id) {
        const dest = await this.prisma.tripDestination.findFirst({
            where: {
                id,
                trip: {
                    userId
                }
            }
        });
        if (!dest)
            throw new NotFoundException('TripDestination not found');
        return dest;
    }
    async updateTripDestination(userId, id, data) {
        await this.getTripDestination(userId, id);
        return this.prisma.tripDestination.update({
            where: { id },
            data
        });
    }
    async deleteTripDestination(userId, id) {
        await this.getTripDestination(userId, id);
        return this.prisma.tripDestination.delete({
            where: { id }
        });
    }
    async createTravelBooking(userId, data) {
        const trip = await this.prisma.trip.findFirst({
            where: { id: data.tripId, userId }
        });
        if (!trip)
            throw new NotFoundException('Trip not found or access denied');
        return this.prisma.travelBooking.create({
            data
        });
    }
    async getTravelBookings(userId, tripId) {
        return this.prisma.travelBooking.findMany({
            where: {
                ...(tripId ? { tripId } : {}),
                trip: {
                    userId
                }
            }
        });
    }
    async getTravelBooking(userId, id) {
        const booking = await this.prisma.travelBooking.findFirst({
            where: {
                id,
                trip: {
                    userId
                }
            }
        });
        if (!booking)
            throw new NotFoundException('TravelBooking not found');
        return booking;
    }
    async updateTravelBooking(userId, id, data) {
        await this.getTravelBooking(userId, id);
        return this.prisma.travelBooking.update({
            where: { id },
            data
        });
    }
    async deleteTravelBooking(userId, id) {
        await this.getTravelBooking(userId, id);
        return this.prisma.travelBooking.delete({
            where: { id }
        });
    }
    async createSavedPlace(userId, data) {
        return this.prisma.savedPlace.create({
            data: { ...data, userId }
        });
    }
    async getSavedPlaces(userId) {
        return this.prisma.savedPlace.findMany({
            where: { userId }
        });
    }
    async getSavedPlace(userId, id) {
        const place = await this.prisma.savedPlace.findFirst({
            where: { id, userId }
        });
        if (!place)
            throw new NotFoundException('SavedPlace not found');
        return place;
    }
    async updateSavedPlace(userId, id, data) {
        const place = await this.getSavedPlace(userId, id);
        return this.prisma.savedPlace.update({
            where: { id },
            data
        });
    }
    async deleteSavedPlace(userId, id) {
        const place = await this.getSavedPlace(userId, id);
        return this.prisma.savedPlace.delete({
            where: { id }
        });
    }
    async searchPlaces(query) {
        return [
            {
                id: 'mock-1',
                name: `Mock Place matching "${query}" - Option 1`,
                address: '123 Fake St, Tokyo',
                latitude: 35.6895,
                longitude: 139.6917,
                category: 'hotel'
            },
            {
                id: 'mock-2',
                name: `Mock Place matching "${query}" - Option 2`,
                address: '456 Test Ave, Tokyo',
                latitude: 35.6528,
                longitude: 139.8394,
                category: 'restaurant'
            }
        ];
    }
};
TravelIntelligenceService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], TravelIntelligenceService);
export { TravelIntelligenceService };
//# sourceMappingURL=travel-intelligence.service.js.map