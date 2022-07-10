import { Module } from '@nestjs/common';
import { TraceController } from './trace/trace.controller';
import { TraceService } from '../services/trace/trace.service';
import { MachineController } from './machine/machine.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ASSIGN, MACHINE, TRACE } from '../common/models/models';
import { MachineSchema } from '../common/schema/machine.schema';
import { MachineService } from '../services/machine/machine.service';
import { TraceSchema } from '../common/schema/trace.schema';
import { AssignService } from 'src/services/assign/assign.service';
import { AssignController } from './assign/assign.controller';
import { AssignSchema } from '../common/schema/assign.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: MACHINE.name,
        schema: MachineSchema,
      },
      {
        name: TRACE.name,
        schema: TraceSchema,
      },
      {
        name: ASSIGN.name,
        schema:AssignSchema,
      },
    ],),
  ],
  controllers: [TraceController, MachineController, AssignController],
  providers: [TraceService, MachineService,AssignService],
})
export class TraceModule { }
