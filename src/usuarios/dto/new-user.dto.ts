import { IsNumber, IsString, Min, IsInt, Max } from "class-validator";

export class CreateUserDto{
   
    @IsNumber()
    id: number;
    
    @IsString()
    name: string;

    @IsString()
    email: string;

    @IsInt({message: 'El id debe ser un número entero'})
    @Min (18, {message: 'La edad minima es 18 años'})
    @Max (100, {message: 'La edad maxima es 100 años'})
    edad: number;
}