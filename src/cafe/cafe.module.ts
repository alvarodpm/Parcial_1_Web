import { Module } from '@nestjs/common';
import { CafeEntity } from './cafe.entity';
import { CafeService } from './cafe.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [CafeService],
  imports: [TypeOrmModule.forFeature([CafeEntity])],
})
export class CafeModule {}
