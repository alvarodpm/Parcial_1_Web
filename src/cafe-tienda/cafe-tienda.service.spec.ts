import { Test, TestingModule } from '@nestjs/testing';
import { CafeEntity } from 'src/cafe/cafe.entity';
import { Repository } from 'typeorm';
import { CafeTiendaService } from './cafe-tienda.service';

describe('CafeTiendaService', () => {
  let service: CafeTiendaService;
  let repository: Repository<CafeEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CafeTiendaService],
    }).compile();

    service = module.get<CafeTiendaService>(CafeTiendaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
