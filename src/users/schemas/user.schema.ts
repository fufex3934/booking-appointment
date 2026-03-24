import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  // --- OAuth2 Tokens ---
  @Prop({ type: Object })
  googleOAuth?: {
    accessToken: string;
    refreshToken: string;
    expiryDate: number;
  };

  @Prop({ type: Object })
  zoomOAuth?: {
    accessToken: string;
    refreshToken: string;
    expiryDate: number;
  };
}

export const UserSchema = SchemaFactory.createForClass(User);
