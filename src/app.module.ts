import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { get_db_config } from '@/config';
import { validationSchema } from '@/validation';
import { VehicleMakeModule } from './vehicle-make/vehicle-make.module';


@Module({
    imports: [
        ConfigModule.forRoot({ validationSchema }),
        MikroOrmModule.forRootAsync( get_db_config() ),

        VehicleMakeModule
    ],
})
export class AppModule {}