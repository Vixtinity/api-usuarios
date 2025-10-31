import { Injectable } from '@nestjs/common';
import { CreateSeedDto } from './dto/create-seed.dto';
import { UpdateSeedDto } from './dto/update-seed.dto';
import { ClienteService } from '../clientes/cliente.service';

@Injectable()
export class SeedService {

  constructor(private readonly ClientesService: ClienteService) {}
  loadData() {
    console.log('Loading seed data...');
    this.insertNewClientes();
    return {
      message: 'Data loaded successfully',
      data: seedCLientes
    };
  }
  private insertNewClientes() {
    const insertPromisesClientes = [];
    seedClientes.forEach((cliente: any) =>  {
      insertPromisesClientes.push(this.ClientesService.new(cliente));
      console.log(cliente.apellidos);
    });
  }
}
