import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";

@Entity('usuario')
export class Usuario{
    @PrimaryColumn()
    id: number;

    @Column({length: '8'})
    name: string;

    @Column()
    edad: number;

    @Column({unique: true })
    email: string;

    @Column()
    nif: string;

    @Column()
    rol: string;

    @BeforeInsert()
    checkName(){
        if(!this.name){
            this.name = 'invitado';
        }
        this.name = this.name.toLowerCase();
    }

}