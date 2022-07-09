import { Injectable } from '@nestjs/common';
import { MachineDTO } from '../../common/dto/machine.dto';
import { MACHINE } from '../../common/models/models';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IMachine } from 'src/common/interface/machine.interface';

@Injectable()
export class MachineService {
    constructor(@InjectModel(MACHINE.name) private readonly model:Model<IMachine> ){}

    async create(machineDto:MachineDTO):Promise<IMachine>{

        const newMachine = new this.model({...machineDto,});
        return await newMachine.save();
    }

   async findAll():Promise<IMachine[]>{
        return await this.model.find();
   }

   async findOne(id:string):Promise<IMachine>{
    console.log(id);
    
    return await this.model.findById(id);
   }
}
