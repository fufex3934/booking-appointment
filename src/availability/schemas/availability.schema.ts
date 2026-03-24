import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Types } from 'mongoose';

export type AvailabilityDocument = HydratedDocument<Availability>;

@Schema({ timestamps: true })
export class Availability {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'BusinessLine', required: true })
  businessLineId: Types.ObjectId;

  @Prop({ required: true })
  day: string; // e.g., "Monday"

  @Prop({ required: true })
  start: string; // e.g., "09:00"

  @Prop({ required: true })
  end: string; // e.g., "17:00"
}

export const AvailabilitySchema = SchemaFactory.createForClass(Availability);
