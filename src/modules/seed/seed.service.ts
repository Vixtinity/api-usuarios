import { Injectable } from '@nestjs/common';
import seedClientes from './data/clientes.json';
import seedUsuarios from './data/usuario.json';
import { ClienteService } from '../clientes/cliente.service';
import { UsuarioService } from '../usuarios/usuarios.service';

@Injectable()
export class SeedService {
    
    constructor(
        private readonly clientesService: ClienteService,
        private readonly usuariosService: UsuarioService,
    ){}

    async loadData() {
        console.log('Cargando datos de prueba...');

        await this.insertNewClientes();
        await this.insertNewUsuarios();

        return { 
            message: 'Datos cargados',
            data: {
                clientes: seedClientes,
                usuarios: seedUsuarios
            }
        };
    }

    private async insertNewClientes() {
        const insertPromisesClientes: Promise<any>[] = [];

        seedClientes.forEach( (cliente: any) => {
            insertPromisesClientes.push( this.clientesService.create(cliente) );
        });

        await Promise.all(insertPromisesClientes);

        return true;
    }

    private async insertNewUsuarios() {
        const insertPromisesUsuarios: Promise<any>[] = [];

        seedUsuarios.forEach( (usuario: any) => {
            insertPromisesUsuarios.push( this.usuariosService.create(usuario) );
        });

        await Promise.all(insertPromisesUsuarios);

        return true;
    }
}
