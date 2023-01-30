import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { VehicleMakeService } from './vehicle-make.service';
import { CreateVehicleMakeDTO } from './dto/create-vehicle-make.dto';
import { UpdateVehicleMakeDTO } from './dto/update-vehicle-make.dto';


@Controller('vehicle-make')
export class VehicleMakeController
{
    constructor(
        private readonly vehicleMakeService: VehicleMakeService
    ) {}


    @Post()
    create(
        @Body()
        createVehicleMakeDTO: CreateVehicleMakeDTO
    )
    {
        return this.vehicleMakeService.create(createVehicleMakeDTO);
    }


    @Get()
    findAll()
    {
        return this.vehicleMakeService.findAll();
    }


    @Get(':id')
    findOne(
        @Param('id', ParseIntPipe)
        make_id: number
    )
    {
        return this.vehicleMakeService.findOne(make_id);
    }


    @Patch(':id')
    update(
        @Param('id', ParseIntPipe)
        make_id: number,
        
        @Body()
        updateVehicleMakeDTO: UpdateVehicleMakeDTO
    )
    {
        return this.vehicleMakeService.update(make_id, updateVehicleMakeDTO);
    }

    
    @Delete(':id')
    remove(
        @Param('id', ParseIntPipe)
        make_id: number
    )
    {
        return this.vehicleMakeService.remove(make_id);
    }
}