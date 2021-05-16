import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Level extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    number: number;

    @Column()
    name: string;
}