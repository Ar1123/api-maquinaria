import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { MachineDTO } from '../../common/dto/machine.dto';
import { MachineService } from '../../services/machine/machine.service';

@ApiTags("Machine")
@Controller('api/v1/machine-dev')

export class MachineController {
    constructor(private readonly machineService: MachineService) { }
    @Post()
    create(@Body() machineDto: MachineDTO) {
        return this.machineService.create(machineDto);
    }

    @Get()
    findAll() {

        return this.machineService.findAll();
    }


    @Get(':id')
    findOne(
        @Param('id') id: string
    ) {
        return this.machineService.findOne(id);
    }


}
