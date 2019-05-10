import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { MovieInterface } from "../../universal/entities/movie";

@Entity()
export class Movie implements MovieInterface {
    @PrimaryGeneratedColumn()
    public id!: number;
    @Column()
    public title!: string;
    @Column()
    public year!: number;
}
