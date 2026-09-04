import { Controller, Get, Post, Body, Patch, Param, Delete, Headers, Query } from '@nestjs/common';
import { TravelIntelligenceService } from './travel-intelligence.service.js';

@Controller('travel-intelligence')
export class TravelIntelligenceController {
  constructor(private readonly service: TravelIntelligenceService) {}

  // ---- Search Places ----

  @Get('places/search')
  searchPlaces(@Query('query') query: string) {
    return this.service.searchPlaces(query);
  }

  // ---- TripDestination ----

  @Post('destinations')
  createTripDestination(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.service.createTripDestination(userId, data);
  }

  @Get('destinations')
  getTripDestinations(@Headers('x-user-id') userId: string, @Query('tripId') tripId?: string) {
    return this.service.getTripDestinations(userId, tripId);
  }

  @Get('destinations/:id')
  getTripDestination(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.service.getTripDestination(userId, id);
  }

  @Patch('destinations/:id')
  updateTripDestination(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.service.updateTripDestination(userId, id, data);
  }

  @Delete('destinations/:id')
  deleteTripDestination(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.service.deleteTripDestination(userId, id);
  }

  // ---- TravelBooking ----

  @Post('bookings')
  createTravelBooking(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.service.createTravelBooking(userId, data);
  }

  @Get('bookings')
  getTravelBookings(@Headers('x-user-id') userId: string, @Query('tripId') tripId?: string) {
    return this.service.getTravelBookings(userId, tripId);
  }

  @Get('bookings/:id')
  getTravelBooking(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.service.getTravelBooking(userId, id);
  }

  @Patch('bookings/:id')
  updateTravelBooking(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.service.updateTravelBooking(userId, id, data);
  }

  @Delete('bookings/:id')
  deleteTravelBooking(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.service.deleteTravelBooking(userId, id);
  }

  // ---- SavedPlace ----

  @Post('saved-places')
  createSavedPlace(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.service.createSavedPlace(userId, data);
  }

  @Get('saved-places')
  getSavedPlaces(@Headers('x-user-id') userId: string) {
    return this.service.getSavedPlaces(userId);
  }

  @Get('saved-places/:id')
  getSavedPlace(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.service.getSavedPlace(userId, id);
  }

  @Patch('saved-places/:id')
  updateSavedPlace(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.service.updateSavedPlace(userId, id, data);
  }

  @Delete('saved-places/:id')
  deleteSavedPlace(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.service.deleteSavedPlace(userId, id);
  }
}
