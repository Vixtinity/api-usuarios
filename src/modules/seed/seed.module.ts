import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { ClientesModule } from '../clientes/cliente.module'; // 👈 importa el módulo correcto

@Module({
  imports: [ClientesModule],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule {}
