import { Injectable, NotFoundException } from '@nestjs/common';
import { EntityRepository, wrap } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';

import { VehicleMake } from './entities/vehicle-make.entity';
import { CreateVehicleMakeDTO } from './dto/create-vehicle-make.dto';
import { UpdateVehicleMakeDTO } from './dto/update-vehicle-make.dto';


@Injectable()
export class VehicleMakeService
{
    constructor(
        @InjectRepository(VehicleMake)
        private readonly makeRepository: EntityRepository<VehicleMake>
    ) {}

    async create(createVehicleMakeDTO: CreateVehicleMakeDTO)
    {
        const make = this.makeRepository.create(createVehicleMakeDTO);
        await this.makeRepository.persistAndFlush(make);

        return make;
    }


    findAll()
    {
        return this.makeRepository.findAll();
    }


    async findOne(make_id: number)
    {
        const make = await this.makeRepository.findOne({ make_id });

        if ( !make )
            throw new NotFoundException(`Vehicle make with id '${make_id}' was NOT FOUND`);
        
        return make;
    }


    async update(make_id: number, updateVehicleMakeDTO: UpdateVehicleMakeDTO)
    {
        const make = await this.findOne(make_id);

        wrap(make).assign(updateVehicleMakeDTO);
        await this.makeRepository.persistAndFlush(make);

        return make;
    }

    
    async remove(make_id: number)
    {
        const make = await this.findOne(make_id);
        await this.makeRepository.removeAndFlush(make);

        return make;
    }
}