import { Gato } from "src/gato/entities/gato.entity";
import {Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn} from "typeorm";
@Entity()
export class Dono {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Gato, (gato: Gato) => gato.dono)
    @JoinColumn()
    gatos: Gato[];
}
