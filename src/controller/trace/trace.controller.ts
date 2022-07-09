import { Body, Controller, Get, Param, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TraceDTO } from 'src/common/dto/trace.dto';
import { TraceService } from '../../services/trace/trace.service';

@ApiTags("Trace")

@Controller('api/v1/trace-dev')
export class TraceController {

    constructor(private  traceService :TraceService){}


    @Post(":id")
    create(
        @Body() body:TraceDTO,
        @Param('id') id:string
    ){
        return this.traceService.create(body,id);
    }

    @Get()
    findAll(){
        return this.traceService.findAll();
    }

    @Get('by-trace/:id')
    findOne(
        @Param('id') id:string,
    ){
        

        return this.traceService.findOne(id);
    }
    @Get("by-machine")
    findByMachine(
        @Query('id') id:string
    ){
        console.log("UUUUUUUUUUUU");
        
        return this.traceService.findByMachine(id);
    }
}
