import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { ClienteModule } from '../clientes/cliente.module'; // 👈 importa el módulo correcto

@Module({
  imports: [ClienteModule],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule {}
