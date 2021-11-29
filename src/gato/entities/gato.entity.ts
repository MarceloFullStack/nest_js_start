import { Dono } from "src/dono/entities/dono.entity";
import {Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne, ManyToOne, OneToMany} from "typeorm";
@Entity()
export class Gato {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    idade: number;

    @ManyToOne(type => Dono, (dono: Dono) => dono.gatos, {eager: true, cascade: true})
    @JoinColumn({name: 'dono_id'})
    dono: Dono;

}
