import { Type } from "class-transformer";
import { IsArray,IsInt, IsString, Min, Max, IsEmail,
    IsOptional, MinLength, MaxLength,
    ArrayMinSize, ArrayMaxSize,
    IsIn,
    ValidateNested} from "class-validator";
import { AddressDTO } from "src/common/dto/address.dto";
import { CreateDateColumn, UpdateDateColumn } from "typeorm";
//peticion a los roles que hay en la tabla de roles de la api
const roles: string[] = ['administrador', 'usuario', 'invitado'];

export class CreateUserDto {

    //Edad esta comprendidad entre 18 y 58
    @IsInt({message: 'La edad es un entero'}) /* funcion externa que valida que es un número */
    @IsOptional()
    @Min(18, {message: 'La edad minima es 18 años'})
    @Max(58, {message: 'La edad maxima es 58 años'})
    edad: number;

    @IsOptional()
    @IsString() /* funcion externa que valida que es un string */
    @MinLength(5, {message: 'namo: Minimo 5 caracteres'})
    @MaxLength(8, {message: 'name: Maximo 8 caracteres'})
    name: string;

    @IsEmail() /* funcion externa que valida que es un string */
    email: string;

    @IsOptional()
    @IsArray() /* funcion externa que valida que es un array */
    @ArrayMinSize(2, {message: 'Debe tener al menos 2 teléfonos'})
    @ArrayMaxSize(3, {message: 'Debe tener  3 teléfonos'})    
    telefonos: string[];

    @IsOptional()
    @IsString()
    nif: string;

    @IsIn(roles, {message: `El rol debe ser uno de los siguientes: ${roles}`})
    rol: string;

    @ValidateNested()
    @Type(() => AddressDTO)
    address: AddressDTO;


    //SON MECANISMOS DE SEGURIDAD
    // @CreateDateColumn()
    // createdAt: Date;

    // @UpdateDateColumn()
    // updatedAt: Date;


   
}

function IsMinLength(arg0: number, arg1: { message: string; }): (target: CreateUserDto, propertyKey: "name") => void {
    throw new Error("Function not implemented.");
}