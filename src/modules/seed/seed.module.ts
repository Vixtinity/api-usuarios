import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { ClienteModule } from '../clientes/cliente.module'; // 👈 importa el módulo correcto
import { UsuariosModule } from '../usuarios/usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ClienteModule, 
    UsuariosModule,
    TypeOrmModule.forFeature([])
  ],
  controllers: [ SeedController ],
  providers: [ SeedService ],
  exports: [ SeedService ]
})
export class SeedModule {}
