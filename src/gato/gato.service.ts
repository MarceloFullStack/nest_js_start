import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGatoDto } from './dto/create-gato.dto';
import { UpdateGatoDto } from './dto/update-gato.dto';
import { Gato } from './entities/gato.entity';


@Injectable()
export class GatoService {

  constructor(
    @InjectRepository(Gato)
    private readonly gatoRepository: Repository<Gato>,
  ) {}

  create(createGatoDto: CreateGatoDto) {
    let gato = this.gatoRepository.create(createGatoDto)
    return this.gatoRepository.save(gato);
  }

  findAll() {
    return this.gatoRepository.find();
  }

  findOne(id: number) {
    let encontrado = this.gatoRepository.findOne(id);
    if (!encontrado) {
      throw new HttpException('Gato não encontrado', HttpStatus.NOT_FOUND);
    }
    return encontrado
  }

  async update(id: number, updateGatoDto: UpdateGatoDto) {
    let encontrado = await this.gatoRepository.preload(
      { 
        id: +id,
        ...updateGatoDto
      }
      );

    if (!encontrado) {
      throw new HttpException('Gato não encontrado', HttpStatus.NOT_FOUND);
    }
    return this.gatoRepository.save(encontrado);
  }

  async remove(id: number) {
    let encontrado = await this.gatoRepository.findOne(id);
    if (!encontrado) {
      throw new HttpException('Gato não encontrado', HttpStatus.NOT_FOUND);
    }
    return this.gatoRepository.remove(encontrado);
  }
}
