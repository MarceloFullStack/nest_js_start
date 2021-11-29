import { Module } from '@nestjs/common';
import { DonoService } from './dono.service';
import { DonoController } from './dono.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dono } from './entities/dono.entity';
import { Gato } from 'src/gato/entities/gato.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dono, Gato])],
controllers: [DonoController],
  providers: [DonoService]
})
export class DonoModule {}
