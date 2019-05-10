import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ActorInterface } from "../../universal/entities/actor";

@Entity()
export class Actor implements ActorInterface {
    @PrimaryGeneratedColumn()
    public id!: number;
    @Column()
    public name!: string;
    @Column()
    public yearBorn!: number;
}
