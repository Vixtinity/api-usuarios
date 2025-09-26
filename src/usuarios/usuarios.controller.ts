import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import type { iUser } from './interfaces/IUsuario';

@Controller('usuarios')
export class UsuariosController {
  //inyectar el servicio UsuariosService en UsuariosController
  constructor(private readonly usuariosService: UsuariosService) {}
  @Get()
  getHome(){
    return 'home de la seccion de usuarios'
  }
  @Get('all')
  getAll(){
    return this.usuariosService.findAll();
  }
  //metodo interno para borrar usuarios, NO ES NDPOINT, necesita decorador
  delete(){
    return 'Borrado de usuarios'
  }
  @Post('new')
  add(@Body() usuario: iUser){
    let esNumber: boolean = false;
    let esmayor18: boolean = false;
    let msgerror: string='';
    if(typeof usuario.edad !== 'number'){
      esNumber = false;
      msgerror = 'La edad debe ser un numero';
      if(usuario.edad < 18){
        esmayor18 = false;
        msgerror = msgerror + ' y debes ser mayor a 18';
      }
      if(!esNumber || !esmayor18){
        esmayor18 = false;
        msgerror = msgerror;
      }
    }
    if(usuario.edad < 18){
      throw new BadRequestException({
        success: false,
        message: msgerror
      });
    }
  }
}
