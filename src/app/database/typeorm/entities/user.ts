import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column({ unique: true, name: 'username' })
    username!: string;

    @Column({ unique: true, name: 'email' })
    email!: string;

    @Column()
    password!: string;

    @Column({ default: false })
    isActive: boolean;
}