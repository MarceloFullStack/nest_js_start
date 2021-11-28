import { Test, TestingModule } from '@nestjs/testing';
import { GatoController } from './gato.controller';
import { GatoService } from './gato.service';

describe('GatoController', () => {
  let controller: GatoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GatoController],
      providers: [GatoService],
    }).compile();

    controller = module.get<GatoController>(GatoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
