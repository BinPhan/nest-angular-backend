import { Role } from "../roles/entities/role.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique('username', ['username'])
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    username: string

    @Column()
    password: string

    @ManyToMany(() => Role, {
        eager: true
    })
    @JoinTable()
    roles: Role[]
}