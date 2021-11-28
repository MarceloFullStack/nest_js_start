import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GatoService } from './gato.service';
import { CreateGatoDto } from './dto/create-gato.dto';
import { UpdateGatoDto } from './dto/update-gato.dto';

@Controller('gato')
export class GatoController {
  constructor(private readonly gatoService: GatoService) {}

  @Post()
  create(@Body() createGatoDto: CreateGatoDto) {
    return this.gatoService.create(createGatoDto);
  }

  @Get()
  findAll() {
    return this.gatoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gatoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGatoDto: UpdateGatoDto) {
    return this.gatoService.update(+id, updateGatoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gatoService.remove(+id);
  }
}
