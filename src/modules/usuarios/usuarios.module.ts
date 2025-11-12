import { Module } from '@nestjs/common';
import { UsuarioService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { ClienteModule } from '../clientes/cliente.module';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario]),
  ClienteModule
],
  controllers: [UsuariosController],
  providers: [UsuarioService],
  exports: [UsuarioService],
})
export class UsuariosModule {}