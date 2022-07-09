import { Injectable } from '@nestjs/common';
import { ASSIGN } from '../../common/models/models';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { AsignDto } from '../../common/dto/assign.dto';
import { IASsign } from 'src/common/interface/assign.interface';

@Injectable()
export class AssignService {
    constructor(

        @InjectModel(ASSIGN.name) private readonly assignModel: Model<IASsign>,

    ) { }
    //Crear asiganacion
    async create(assignDtro: AsignDto,) {
        console.log(assignDtro);
        
        const asign = new this.assignModel({
            assignDtro
        });
        return await asign.save();
    }
    //Listar asignaciones
    async findAll(): Promise<IASsign[]> {
        return await this.assignModel.find();
    }
//Buscar por asignacion
    async findOne(id: string): Promise<IASsign> {
        console.log(id);

        return await this.assignModel.findById(id);
    }
//Buscar asignacion por personID
async findByPerson(id: string)  {
    console.log(id);

    return  this.assignModel.find({personId:id});
}

}
