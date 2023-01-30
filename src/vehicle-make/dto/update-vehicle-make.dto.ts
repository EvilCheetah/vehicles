import { PartialType } from '@nestjs/mapped-types';
import { CreateVehicleMakeDto } from './create-vehicle-make.dto';

export class UpdateVehicleMakeDto extends PartialType(CreateVehicleMakeDto) {}
