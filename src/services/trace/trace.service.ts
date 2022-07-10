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

        @InjectModel(TRACE.name) private readonly traceModel: Model<ITrace>,
        @InjectModel(MACHINE.name) private readonly machineModel: Model<IMachine>

    ) { }

    //Crea el trace de la maquina   
    async create(traceDto: TraceDTO, id: string) {
        //Consulta la maquina
        try {
        const getMachine = await this.machineModel.findById(id);
        
        //Destructuring del response
        let { nameProyect, idMachine, _id } = getMachine;
        const newTrace = new this.traceModel({
            ...traceDto,
            nameProyect,
            idMachine,
            idM: _id,
        });
        return await newTrace.save();
     } catch (error) {
        return {
            msg:"false",
            body:{
                msg:"Esta maquina no esta registrada"
            }
        }
     }
    }



    //Obtiene todas los trace
    async findAll() {
        let response = await this.traceModel.find();

        return {
            msg: "ok",
            body: response,
        }
    }
    //Busqueda por el id del trace
    async findOne(id: string) {
        try {

            let response = await this.traceModel.findById(id);
            console.log("rrrr", response);

            return {
                msg: "ok",
                body: response,
            }
        } catch (error) {
            return {
                msg: "ok",
                body: {}
            }
        }
    }

    //Busqueda por el id de la maquina, retorna el o sus traces
    async findByMachine(id: string) {

        let response = await this.traceModel.find({ idM: id });
        return {
            msg: "ok",
            body: response,
        }
    }

}
