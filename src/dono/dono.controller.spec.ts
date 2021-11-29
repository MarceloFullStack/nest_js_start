import { Test, TestingModule } from '@nestjs/testing';
import { DonoController } from './dono.controller';
import { DonoService } from './dono.service';

describe('DonoController', () => {
  let controller: DonoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DonoController],
      providers: [DonoService],
    }).compile();

    controller = module.get<DonoController>(DonoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
