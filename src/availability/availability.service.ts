import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import {
  Availability,
  AvailabilityDocument,
} from './schemas/availability.schema';

@Injectable()
export class AvailabilityService {
  constructor(
    @InjectModel(Availability.name)
    private availModel: Model<AvailabilityDocument>,
  ) {}

  // Create availability
  create(
    userId: string,
    businessLineId: string,
    day: string,
    start: string,
    end: string,
  ) {
    return this.availModel.create({
      userId: new Types.ObjectId(userId),
      businessLineId: new Types.ObjectId(businessLineId),
      day,
      start,
      end,
    });
  }

  // Get availability for a user across all business lines
  findByUser(userId: string) {
    return this.availModel.find({ userId });
  }

  // Get availability for a specific business line
  findByBusinessLine(businessLineId: string) {
    return this.availModel.find({ businessLineId });
  }

  // Get all availability
  findAll() {
    return this.availModel.find();
  }
}
