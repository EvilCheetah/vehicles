import { Injectable } from '@nestjs/common';
import { CreateVehicleMakeDto } from './dto/create-vehicle-make.dto';
import { UpdateVehicleMakeDto } from './dto/update-vehicle-make.dto';


@Injectable()
export class VehicleMakeService
{
    create(createVehicleMakeDto: CreateVehicleMakeDto)
    {
        return 'This action adds a new vehicleMake';
    }


    findAll()
    {
        return `This action returns all vehicleMake`;
    }


    findOne(id: number)
    {
        return `This action returns a #${id} vehicleMake`;
    }


    update(id: number, updateVehicleMakeDto: UpdateVehicleMakeDto)
    {
        return `This action updates a #${id} vehicleMake`;
    }

    
    remove(id: number)
    {
        return `This action removes a #${id} vehicleMake`;
    }
}