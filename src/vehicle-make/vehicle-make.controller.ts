import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VehicleMakeService } from './vehicle-make.service';
import { CreateVehicleMakeDto } from './dto/create-vehicle-make.dto';
import { UpdateVehicleMakeDto } from './dto/update-vehicle-make.dto';

@Controller('vehicle-make')
export class VehicleMakeController {
  constructor(private readonly vehicleMakeService: VehicleMakeService) {}

  @Post()
  create(@Body() createVehicleMakeDto: CreateVehicleMakeDto) {
    return this.vehicleMakeService.create(createVehicleMakeDto);
  }

  @Get()
  findAll() {
    return this.vehicleMakeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vehicleMakeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVehicleMakeDto: UpdateVehicleMakeDto) {
    return this.vehicleMakeService.update(+id, updateVehicleMakeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vehicleMakeService.remove(+id);
  }
}
