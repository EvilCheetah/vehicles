import { IsString } from "class-validator";


export class CreateVehicleMakeDTO
{
    @IsString()
    make_name: string;
}