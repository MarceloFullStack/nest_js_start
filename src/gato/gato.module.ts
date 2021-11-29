import { Module } from '@nestjs/common';
import { GatoService } from './gato.service';
import { GatoController } from './gato.controller';
import { Gato } from './entities/gato.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dono } from 'src/dono/entities/dono.entity';


@Module({
imports: [TypeOrmModule.forFeature([Gato, Dono])],
controllers: [GatoController],
  providers: [GatoService]
})
export class GatoModule {}
