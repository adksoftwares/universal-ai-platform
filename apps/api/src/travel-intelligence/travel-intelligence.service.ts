import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';

@Injectable()
export class TravelIntelligenceService {
  constructor(private prisma: PrismaService) {}

  // ---- TripDestination ----

  async createTripDestination(userId: string, data: any) {
    const trip = await this.prisma.trip.findFirst({
      where: { id: data.tripId, userId }
    });
    if (!trip) throw new NotFoundException('Trip not found or access denied');
    
    return this.prisma.tripDestination.create({
      data
    });
  }

  async getTripDestinations(userId: string, tripId?: string) {
    return this.prisma.tripDestination.findMany({
      where: {
        ...(tripId ? { tripId } : {}),
        trip: {
          userId
        }
      }
    });
  }

  async getTripDestination(userId: string, id: string) {
    const dest = await this.prisma.tripDestination.findFirst({
      where: {
        id,
        trip: {
          userId
        }
      }
    });
    if (!dest) throw new NotFoundException('TripDestination not found');
    return dest;
  }

  async updateTripDestination(userId: string, id: string, data: any) {
    await this.getTripDestination(userId, id); // Ensure access
    return this.prisma.tripDestination.update({
      where: { id },
      data
    });
  }

  async deleteTripDestination(userId: string, id: string) {
    await this.getTripDestination(userId, id); // Ensure access
    return this.prisma.tripDestination.delete({
      where: { id }
    });
  }

  // ---- TravelBooking ----

  async createTravelBooking(userId: string, data: any) {
    const trip = await this.prisma.trip.findFirst({
      where: { id: data.tripId, userId }
    });
    if (!trip) throw new NotFoundException('Trip not found or access denied');

    return this.prisma.travelBooking.create({
      data
    });
  }

  async getTravelBookings(userId: string, tripId?: string) {
    return this.prisma.travelBooking.findMany({
      where: {
        ...(tripId ? { tripId } : {}),
        trip: {
          userId
        }
      }
    });
  }

  async getTravelBooking(userId: string, id: string) {
    const booking = await this.prisma.travelBooking.findFirst({
      where: {
        id,
        trip: {
          userId
        }
      }
    });
    if (!booking) throw new NotFoundException('TravelBooking not found');
    return booking;
  }

  async updateTravelBooking(userId: string, id: string, data: any) {
    await this.getTravelBooking(userId, id); // Ensure access
    return this.prisma.travelBooking.update({
      where: { id },
      data
    });
  }

  async deleteTravelBooking(userId: string, id: string) {
    await this.getTravelBooking(userId, id); // Ensure access
    return this.prisma.travelBooking.delete({
      where: { id }
    });
  }

  // ---- SavedPlace ----

  async createSavedPlace(userId: string, data: any) {
    return this.prisma.savedPlace.create({
      data: { ...data, userId }
    });
  }

  async getSavedPlaces(userId: string) {
    return this.prisma.savedPlace.findMany({
      where: { userId }
    });
  }

  async getSavedPlace(userId: string, id: string) {
    const place = await this.prisma.savedPlace.findFirst({
      where: { id, userId }
    });
    if (!place) throw new NotFoundException('SavedPlace not found');
    return place;
  }

  async updateSavedPlace(userId: string, id: string, data: any) {
    const place = await this.getSavedPlace(userId, id); // Ensure access
    return this.prisma.savedPlace.update({
      where: { id },
      data
    });
  }

  async deleteSavedPlace(userId: string, id: string) {
    const place = await this.getSavedPlace(userId, id); // Ensure access
    return this.prisma.savedPlace.delete({
      where: { id }
    });
  }

  // ---- Search Places (Mock) ----

  async searchPlaces(query: string) {
    // Mock response for Location Intelligence AI context
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
}
