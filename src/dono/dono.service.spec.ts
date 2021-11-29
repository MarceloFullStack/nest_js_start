import { Test, TestingModule } from '@nestjs/testing';
import { DonoService } from './dono.service';

describe('DonoService', () => {
  let service: DonoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DonoService],
    }).compile();

    service = module.get<DonoService>(DonoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
