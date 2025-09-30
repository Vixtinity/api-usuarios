import { Injectable } from '@nestjs/common';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb';

@Injectable()
export class UsuariosService {
    private db: Low<any>;
    constructor(){
        const adaptador = new JSONFile('common/db/db.json');
        this.db = new Low(adaptador);
        this.db.data = { usuarios: [] };
    }
    async findAll(){
        await this.db.read(); //se bloquea
        return this.db.data.users;
    }
}
