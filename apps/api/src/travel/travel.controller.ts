import { Controller, Get, Post, Put, Delete, Body, Param, Headers } from '@nestjs/common';
import { TravelService } from './travel.service.js';

@Controller('travel')
export class TravelController {
  constructor(private readonly travelService: TravelService) {}

  @Post('trips')
  createTrip(@Headers('x-user-id') userId: string, @Body() data: any) {
    return this.travelService.createTrip(userId, data);
  }

  @Get('trips')
  getTrips(@Headers('x-user-id') userId: string) {
    return this.travelService.getTrips(userId);
  }

  @Get('trips/:id')
  getTrip(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.travelService.getTrip(userId, id);
  }

  @Put('trips/:id')
  updateTrip(@Headers('x-user-id') userId: string, @Param('id') id: string, @Body() data: any) {
    return this.travelService.updateTrip(userId, id, data);
  }

  @Delete('trips/:id')
  deleteTrip(@Headers('x-user-id') userId: string, @Param('id') id: string) {
    return this.travelService.deleteTrip(userId, id);
  }
}
