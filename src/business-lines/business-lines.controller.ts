import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { BusinessLineService } from './business-lines.service';
@Controller('business-lines')
export class BusinessLineController {
  constructor(private readonly blService: BusinessLineService) {}

  @Post()
  create(@Body() body: { name: string; ownerId: string; types?: string[] }) {
    return this.blService.create(body.name, body.ownerId, body.types);
  }

  @Get()
  findAll() {
    return this.blService.findAll();
  }

  @Get('user/:id')
  findByUser(@Param('id') id: string) {
    return this.blService.findByUser(id);
  }
}
