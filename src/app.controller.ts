import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  //inyectar el servicio AppService en AppController
  constructor(private readonly appService: AppService) {}

  /*Esto son endpoint*/
  @Get("/")
  getHello(): string {
    return this.appService.getHello();
  }
}
