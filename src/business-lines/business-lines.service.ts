import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import {
  BusinessLine,
  BusinessLineDocument,
} from './schemas/business-lines.schema';

@Injectable()
export class BusinessLineService {
  constructor(
    @InjectModel(BusinessLine.name)
    private blModel: Model<BusinessLineDocument>,
  ) {}

  create(name: string, ownerId: string, types?: string[]) {
    return this.blModel.create({
      name,
      ownerId: new Types.ObjectId(ownerId),
      allowedMeetingTypes: types || ['zoom', 'google_meet', 'phone'],
    });
  }

  findAll() {
    return this.blModel.find();
  }

  findByUser(userId: string) {
    return this.blModel.find({ ownerId: userId });
  }
}
