import { Module } from '@nestjs/common';
import { VehicleMakeModule } from './vehicle-make/vehicle-make.module';


@Module({
    imports: [VehicleMakeModule],
})
export class AppModule {}