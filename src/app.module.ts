import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

import { VehicleMakeModule } from './vehicle-make/vehicle-make.module';


@Module({
    imports: [
        ConfigModule.forRoot(),

        VehicleMakeModule
    ],
})
export class AppModule {}