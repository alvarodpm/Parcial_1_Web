import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';
import { Repository } from 'typeorm';
import { TiendaEntity } from './tienda.entity';

@Injectable()
export class TiendaService {

    constructor(
        @InjectRepository(TiendaEntity)
        private readonly tiendaRepository: Repository<TiendaEntity>
    ) { }

    async create(tienda: TiendaEntity): Promise<TiendaEntity> {

        if (tienda.telefono.length != 10) {
            throw new BusinessLogicException("El teléfono debe tener 10 dígitos", BusinessError.PRECONDITION_FAILED);
        }
        else {
            return await this.tiendaRepository.save(tienda);
        }
    }
}
