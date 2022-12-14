import { Module } from '@nestjs/common';
import { TiendaEntity } from './tienda.entity';
import { TiendaService } from './tienda.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [TiendaService],
  imports: [TypeOrmModule.forFeature([TiendaEntity])]
})
export class TiendaModule { }
