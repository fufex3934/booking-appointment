import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { AvailabilityService } from './availability.service';

@Controller('availability')
export class AvailabilityController {
  constructor(private readonly availabilityService: AvailabilityService) {}

  @Post()
  create(
    @Body()
    body: {
      userId: string;
      businessLineId: string;
      day: string;
      start: string;
      end: string;
    },
  ) {
    return this.availabilityService.create(
      body.userId,
      body.businessLineId,
      body.day,
      body.start,
      body.end,
    );
  }

  @Get('user/:userId')
  findByUser(@Param('userId') userId: string) {
    return this.availabilityService.findByUser(userId);
  }

  @Get('business-line/:blId')
  findByBusinessLine(@Param('blId') blId: string) {
    return this.availabilityService.findByBusinessLine(blId);
  }

  @Get()
  findAll() {
    return this.availabilityService.findAll();
  }
}
