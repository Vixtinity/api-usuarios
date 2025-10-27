import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';

@Entity('usuario')
export class CreateUserDto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, nullable: true })
  name: string;

  @Column()
  edad: number;

  @Column({ unique: true })
  email: string;

  @Column()
  nif: string;

  @Column()
  rol: string;

  @BeforeInsert()
  checkName() {
    if (!this.name) {
      this.name = 'invitado';
    }
    this.name = this.name.toLowerCase();
  }
}
