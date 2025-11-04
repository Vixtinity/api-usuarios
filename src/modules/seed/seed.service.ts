import { Injectable } from '@nestjs/common';

import * as seedClientes from './data/clientes.json';
import { ClienteService } from '../clientes/cliente.service';

@Injectable()
export class SeedService {
    
    constructor(
        private readonly clientesService: ClienteService
    ){}
    
    async loadData() {
        console.log('Cargando datos de prueba...');
        
        await this.insertNewClientes();

        return { 
            message: 'Data loaded successfully',
            data: seedClientes
        };
    }

    private async insertNewClientes() {

        // declarar tipo → Promise<any>[]
        const insertPromisesClientes: Promise<any>[] = [];                

        seedClientes.forEach( (cliente: any) => {
            insertPromisesClientes.push( this.clientesService.create(cliente) );
            console.log(cliente.nombre);
        });

        await Promise.all(insertPromisesClientes);

        return true;
    }
}
