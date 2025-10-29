import { IsOptional, IsString, Length } from "class-validator";

export class AddressDTO{
    @IsString()
    @Length(0,50)
    @IsOptional()
    pais?: string;

    @IsString()
    @Length(0,50)
    @IsOptional()
    ciudad?: string;

    @IsString()
    @Length(0,50)
    @IsOptional()
    provincia?: string;

    @IsString()
    @Length(0,50)
    @IsOptional()
    calle?: string;

    @IsString()
    @Length(0,50)
    @IsOptional()
    numero?: string;

    @IsString()
    @Length(0,50)
    @IsOptional()
    cpostal?: string;
}