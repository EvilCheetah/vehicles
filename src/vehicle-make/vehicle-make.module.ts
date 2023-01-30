import { Module } from '@nestjs/common';
import { VehicleMakeService } from './vehicle-make.service';
import { VehicleMakeController } from './vehicle-make.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { VehicleMake } from './entities/vehicle-make.entity';


@Module({
    imports:     [MikroOrmModule.forFeature([ VehicleMake ])],
    controllers: [VehicleMakeController],
    providers:   [VehicleMakeService]
})
export class VehicleMakeModule {}