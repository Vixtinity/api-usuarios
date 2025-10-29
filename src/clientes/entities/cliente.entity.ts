
//**** ORM --> Mapeo Objeto - Relacional ***** */

import { BeforeInsert, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

//create table usuario (id ....)
//LOGICA DE NEGOCIO DE LA ENTIDAD USUARIO. Hola
export class Address{
    @Column() calle: string;
    @Column() pais: string;
    @Column() numero: number;
}

@Entity('Cliente')
export class Cliente {
    
    @PrimaryColumn()
    nif: string;


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