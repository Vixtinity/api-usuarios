import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/")
  getHello(): string {
    return this.appService.getHello();
  }
  @Get("/usuarios")
  getUsuarios():any {
    return[
    { id: 1, nombre: "Luis", apellido:"Gonzales"},
    { id: 2, nombre: "Antonio", apellido:"Gonzales"}
  ];
  }
}
