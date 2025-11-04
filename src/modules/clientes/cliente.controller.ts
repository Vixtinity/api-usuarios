import { Controller, Post, Body } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/clientes.dto';

@Controller('cliente')
export class ClienteController {
    constructor(private readonly clienteService: ClienteService) {}
    
      @Post('new')
      add(@Body() clienteDTO: CreateClienteDto){
        return this.clienteService.create(clienteDTO);
      }
}
