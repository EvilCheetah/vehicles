import { Entity, PrimaryKey, Property } from "@mikro-orm/core";


@Entity()
export class VehicleMake
{
    @PrimaryKey()
    make_id: number;

    @Property()
    make_name: string;
}