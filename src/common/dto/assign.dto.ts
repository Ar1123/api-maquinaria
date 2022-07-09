import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class AsignDto{
  @ApiProperty()  
  @IsNotEmpty()
  readonly idM:string;
 
  @IsNotEmpty()
  @ApiProperty()  
  readonly projectName:string;
 
  @IsNotEmpty()
  @ApiProperty()  
  readonly hours:number;
 
  @IsNotEmpty()
  @ApiProperty()  
  readonly days:[];
 
  @IsNotEmpty()
  @ApiProperty()  
  readonly personId:string;
 
  @IsNotEmpty()
  @ApiProperty()  
 readonly personName:string;
}