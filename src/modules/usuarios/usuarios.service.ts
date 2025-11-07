import { Injectable } from '@nestjs/common';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb';
import { iUser } from './interfaces/IUsuario';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/new-user.dto';
import { ClienteService } from '../clientes/cliente.service';

type Data = {
    users: iUser[]
}
@Injectable()
export class UsuarioService {

  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepo: Repository<Usuario>,
    private readonly clienteService: ClienteService
  ) {}

  async create(dto: CreateUserDto) {
    const usuario = this.usuarioRepo.create(dto);
    return await this.usuarioRepo.save(usuario);
  }

  async findAll() {
    return await this.usuarioRepo.find();
  }

  async findOne(id: string) {
    return await this.usuarioRepo.findOneBy({ id });
  }
}

