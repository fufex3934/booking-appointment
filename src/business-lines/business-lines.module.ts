import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BusinessLineService } from './business-lines.service';
import { BusinessLineController } from './business-lines.controller';
import {
  BusinessLine,
  BusinessLineSchema,
} from './schemas/business-lines.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BusinessLine.name, schema: BusinessLineSchema },
    ]),
  ],
  providers: [BusinessLineService],
  controllers: [BusinessLineController],
  exports: [BusinessLineService],
})
export class BusinessLineModule {}
