import { Module } from '@nestjs/common';
import { GatoService } from './gato.service';
import { GatoController } from './gato.controller';

@Module({
  controllers: [GatoController],
  providers: [GatoService]
})
export class GatoModule {}
