import { IsNumber, IsString, Min, IsInt, Max, IsOptional, IsEmail, IsArray, ArrayMinSize, ArrayMaxSize, IsIn, IsBoolean, IsUUID, MinLength, MaxLength, Validate, ValidateNested } from "class-validator";
import { AddressDTO } from "./address.dto";
import { Type } from "class-transformer";
 //peticion a los roles que hay en la tabla de roles
const roles: string[] = ['admin', 'usuario', 'invitado'];

export class CreateUserDto{

    @IsUUID()
    id: number;

    @IsOptional()
    @IsString()
    @MinLength(3, {message: 'El nombre debe tener al menos 3 caracteres'})
    @MaxLength(50, {message: 'El nombre debe tener como maximo 50 caracteres'})
    name: string;

    @IsEmail({}, {message: 'El email debe ser valido'})
    @IsString()
    email: string;

    @IsString({message: 'El nif debe ser un string'})
    nif: string;

    @IsInt({message: 'El id debe ser un número entero'})
    @Min (18, {message: 'La edad minima es 18 años'})
    @Max (100, {message: 'La edad maxima es 100 años'})
    edad: number;

    @IsArray()
    @ArrayMinSize(1, {message: 'Debe tener al menos un telefono'})
    @ArrayMaxSize(3, {message: 'Debe tener como maximo 3 telefonos'})
    telefonos: string[];

    @IsIn(roles, {message: `El rol debe ser uno de los siguientes: ${roles.join(', ')}`})
    rol: string;
    @IsBoolean()
    esdelMadrid: boolean;

    @IsArray()
    @ValidateNested({each: true})
    @Type(() => AddressDTO)
    direcciones: AddressDTO[];

}