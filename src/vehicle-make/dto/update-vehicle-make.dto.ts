import { PartialType } from '@nestjs/mapped-types';
import { CreateVehicleMakeDTO } from './create-vehicle-make.dto';


export class UpdateVehicleMakeDTO extends PartialType(CreateVehicleMakeDTO) {}