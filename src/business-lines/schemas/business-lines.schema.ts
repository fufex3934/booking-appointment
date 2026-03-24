import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Types } from 'mongoose';

export type BusinessLineDocument = HydratedDocument<BusinessLine>;

@Schema({ timestamps: true })
export class BusinessLine {
  @Prop({ required: true })
  name: string;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  ownerId: Types.ObjectId;

  @Prop({ default: ['zoom', 'google_meet', 'phone'] })
  allowedMeetingTypes: string[];
}

export const BusinessLineSchema = SchemaFactory.createForClass(BusinessLine);
