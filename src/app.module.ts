import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TraceModule } from './controller/trace.module';
import { TraceService } from './services/trace/trace.service';
import { MachineService } from './services/machine/machine.service';
import { AssignService } from './services/assign/assign.service';
@Module({
  imports: [TraceModule, ConfigModule.forRoot({
    envFilePath:['.env.dev'],
    isGlobal:true,
  }),
  MongooseModule.forRoot(process.env.URI_MONGODB),
  
],
  controllers: [AppController],
  providers: [AppService, ],
})
export class AppModule {}
