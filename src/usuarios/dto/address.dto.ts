import { IsNumber, IsString } from "class-validator";

export class AddressDTO{
    @IsString()
    calle: string;
    @IsNumber()
    numero: number;
    @IsString()
    ciudad: string;
    @IsString()
    pais: string;
}