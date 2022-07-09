import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TraceDTO } from '../../common/dto/trace.dto';
import { Model } from 'mongoose';
import { TRACE } from 'src/common/models/models';
import { MACHINE } from '../../common/models/models';
import { ITrace } from 'src/common/interface/trace.interface';
import { IMachine } from 'src/common/interface/machine.interface';

@Injectable()
export class TraceService {

    constructor(
        
        @InjectModel(TRACE.name) private readonly traceModel:Model<ITrace> ,
        @InjectModel(MACHINE.name) private readonly machineModel:Model<IMachine> 
        
        ){}

     //Crea el trace de la maquina   
    async create(traceDto:TraceDTO, id:string){
        //Consulta la maquina
    const getMachine = await this.machineModel.findById(id);
    //Destructuring del response
           let  {nameProyect,idMachine,_id} = getMachine;
    const newTrace = new this.traceModel({
        ...traceDto,
        nameProyect,
        idMachine,
        idM:_id,
    });    
    return await newTrace.save();
    }

 
 
    //Obtiene todas los trace
    async findAll(){
        return this.traceModel.find();
    }
    //Busqueda por el id del trace
    async findOne(id:string){
        return this.traceModel.findById(id);
    }

    //Busqueda por el id de la maquina, retorna el o sus traces
    async findByMachine(id:string){
        return this.traceModel.find({idM:id});
    }

}
