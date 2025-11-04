import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Cliente } from './entities/cliente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ICliente } from './interfaces/ICliente';
import { CreateClienteDto } from './dto/clientes.dto';

type Data = {
    users: ICliente[]
}
@Injectable()
export class ClienteService {

  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepo: Repository<Cliente>,
  ) {}

  async create(dto: CreateClienteDto) {
    const cliente = this.clienteRepo.create(dto);
    return await this.clienteRepo.save(cliente);
  }

  async findAll() {
    return await this.clienteRepo.find();
  }
}
