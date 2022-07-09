import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class TraceDTO {
   
   @ApiProperty()
   @IsNotEmpty({ message: "Debe ingresar los datos de salida" })
   @IsString({ message: "No es una cadena de caracteres" })
   @MinLength(15, { message: "Limite de caracteres no aceptado para la salida" })
   @MaxLength(15, { message: "Limite de caracteres no aceptado para la salida" })
   readonly output: string;
   
   
   @ApiProperty()
   @IsNotEmpty({ message: "Debe ingresar los datos de salida" })
   @IsString({ message: "No es una cadena de caracteres" })
   @MinLength(7, { message: "Limite de caracteres no aceptado para la entrada" })
   @MaxLength(7, { message: "Limite de caracteres no aceptado para la entrada" })
   readonly input: string;
   
   
   @ApiProperty()
   readonly location: {
      readonly lat: number;
      readonly lng: number;
      readonly precisition: number;
   };
   
   
   @IsNotEmpty({ message: "Debe ingresar los datos de salida" })
   @ApiProperty()
   readonly battery: number;

   
   readonly nameProyect:string;
   readonly idMachine:string;
   readonly idM:string;


}
