import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, isString } from "class-validator";

export class MachineDTO{
    @ApiProperty()
    @IsNotEmpty({message:"Ingrese el nombre del proyecto al cual esta asignada la maquina"})
    @IsString({message:"Ingrese una cadena de caracteres valida"})
    readonly nameProyect:string;
    @ApiProperty()

    @IsNotEmpty({message:"ingrese la duracion de la maquina en el proyecto"})
    @IsString({message:"Ingrese una cadena de caracteres valida"})
    readonly projectDuration:string;
    @IsNotEmpty({message:"indique el id interno de la maquina"})
    @IsString({message:"Ingrese una cadena de caracteres valida"})
    @ApiProperty()
    readonly idMachine:string;

}