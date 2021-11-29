import { Injectable } from '@nestjs/common';
import { CreateDonoDto } from './dto/create-dono.dto';
import { UpdateDonoDto } from './dto/update-dono.dto';
import { Dono } from 'src/dono/entities/dono.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DonoService {
 constructor(
  @InjectRepository(Dono)
  private readonly donoRepository: Repository<Dono>
 ) {}

  create(createDonoDto: CreateDonoDto) {
    return 'This action adds a new dono';
  }

  findAll(): Promise<Dono[]> {
    return this.donoRepository.find({relations: ["gatos"]});
  }

  findOne(id: number) {
    return `This action returns a #${id} dono`;
  }

  update(id: number, updateDonoDto: UpdateDonoDto) {
    return `This action updates a #${id} dono`;
  }

  remove(id: number) {
    return `This action removes a #${id} dono`;
  }
}
