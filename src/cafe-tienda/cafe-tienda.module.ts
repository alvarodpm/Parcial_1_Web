import { Module } from '@nestjs/common';
import { CafeEntity } from 'src/cafe/cafe.entity';
import { TiendaEntity } from 'src/tienda/tienda.entity';
import { CafeTiendaService } from './cafe-tienda.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [CafeTiendaService],
  imports: [TypeOrmModule.forFeature([CafeEntity, TiendaEntity])],
})
export class CafeTiendaModule { }
