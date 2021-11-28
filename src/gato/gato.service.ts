import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateGatoDto } from './dto/create-gato.dto';
import { UpdateGatoDto } from './dto/update-gato.dto';

const gatus = [{
  id: 1,
  name: 'Gato 1',
  age: 1,
  breed: ['Persa', 'Siamês'],
}]

@Injectable()
export class GatoService {
  create(createGatoDto: CreateGatoDto) {
    gatus.push(createGatoDto);
    return 'This action adds a new gato';
  }

  findAll() {
    return gatus;
  }

  findOne(id: number) {
    let encontrado = gatus.find(gato => gato.id === id);
    if (!encontrado) {
      throw new HttpException('Gato não encontrado', HttpStatus.NOT_FOUND);
    }
    return encontrado
  }

  update(id: number, updateGatoDto: UpdateGatoDto) {
    console.log("chegou na atualizacao")
    let gatoIndex = gatus.findIndex(gato => gato.id === id);

    gatus[gatoIndex] =  {...gatus[gatoIndex], ...updateGatoDto };
    return `This action updates a #${id} gato`;
  }

  remove(id: number) {
    let gatoIndex = gatus.findIndex(gato => gato.id === id);
    gatus.splice(gatoIndex, 1);
    return `This action removes a #${id} gato`;
  }
}
