//define la estructura de datos de un objeto
//interfaces --> a las estructuras de datos que se transmiten por la red
//tipos --> se sueles aplicar para defini estructuras de datos internas o esquemas de datos
//dtos --> para valida estructuras de datos que se reciben por la red
export interface IAddress{
    calle:string;
    numero:string;
    ciudad:string;
    pais:string;
}
export interface iUser{
    id:number;
    name:string;
    emal:string;
    edad:number;
    rol: string;
    telefonos?:string[];
    nif?:string;
    esdelMadrid?:boolean;
    direcciones:IAddress[];
}

type tUsuario = {
    id:number;
    name:string;
    emal:string;
    edad:number;
}