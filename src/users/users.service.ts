import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  create(name: string, email: string) {
    return this.userModel.create({ name, email });
  }

  findAll() {
    return this.userModel.find();
  }

  findById(id: string) {
    return this.userModel.findById(id);
  }

  async updateZoomToken(userId: string, zoomData: {
  accessToken: string;
  refreshToken: string;
  expiryDate: number;
}) {
  return this.userModel.findByIdAndUpdate(
    userId,
    { zoomOAuth: zoomData },
    { new: true }
  );
}
}
