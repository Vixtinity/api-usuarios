import { Injectable } from '@nestjs/common';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb';
import { iUser } from './interfaces/IUsuario';

type Data = {
    users: iUser[]
}
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
    

    async findOne(id:string){
        const data = await this.db.read();
        this.db.data.users.find(usuario => usuario.id === id);
    }

    async new(usuario: iUser){
        await this.db.read();
        this.db.data.users.push(usuario);
        this.db.write();
        console.log(this.db.data.users);
        return {
            msg: 'Usuario creado correctamente',
            data: this.db.data.uses
        }
    }
}
