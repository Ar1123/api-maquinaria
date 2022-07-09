import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { create } from 'domain';
import { AsignDto } from 'src/common/dto/assign.dto';
import { AssignService } from '../../services/assign/assign.service';
@ApiTags("assign employee ")

@Controller('assign')
export class AssignController {

    constructor (private assignservice: AssignService){}

@Post()
create(
    @Body() body:AsignDto
){
    return this.assignservice.create(body);
}
@Get()
findAll(){
    return this.assignservice.findAll();
}

@Get('by-assigen/:id')
findOne(
    @Param('id') id:string,
){
    

    return this.assignservice.findOne(id);
}
@Get("by-assigen/person")
findByMachine(
    @Query('id') id:string
){
    console.log("UUUUUUUUUUUU");
    
    return this.assignservice.findByPerson(id);
}

}
