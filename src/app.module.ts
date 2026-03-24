import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { BusinessLineModule } from './business-lines/business-lines.module';
import { AvailabilityModule } from './availability/availability.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { IntegrationsModule } from './integrations/integrations.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/appointment-booking'),
    UsersModule,
    BusinessLineModule,
    AvailabilityModule,
    AppointmentsModule,
    IntegrationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
