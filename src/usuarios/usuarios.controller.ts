import { Controller, Get } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
  //inyectar el servicio UsuariosService en UsuariosController
  constructor(private readonly usuariosService: UsuariosService) {}
  @Get()
  getHome(){
    return 'home de la seccion de usuarios'
  }
  @Get('listar')
  getAll(){
    return 'Listado de usuarios'
  }
  //metodo interno para borrar usuarios, NO ES NDPOINT, necesita decorador
  delete(){
    return 'Borrado de usuarios'
  }
}
