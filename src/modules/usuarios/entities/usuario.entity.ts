
//**** ORM --> Mapeo Objeto - Relacional ***** */

import { Address } from "src/common/entities/address";
import { Cliente } from "../../clientes/entities/cliente.entity";
import { BeforeInsert, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

//create table usuario (id ....)
//LOGICA DE NEGOCIO DE LA ENTIDAD USUARIO. Hola

@Entity('usuario')
export class Usuario {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true })
    nif: string;

    @OneToOne(() => Cliente, { cascade: true })
    @JoinColumn()
    cliente: Cliente;


    @Column({ nullable:true,  length: 30})
    name: string;

    @Column('int', {default: 18})
    edad: number;
    
    @Column({nullable: false, unique: true})
    email: string;
    
    @Column()
    rol: string;

    @Column( () => Address, {prefix: 'addr_'}) address: Address;
  
    @BeforeInsert()
    checkName() {
        console.log('Antes de insertar el usuario en la BD');
        if (!this.name){
            this.name = 'invitado';
        }

        this.name = this.name
                    .replaceAll(' ', '_')
                    .toUpperCase();  
    }
}