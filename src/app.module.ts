import { Module } from '@nestjs/common';
import { ConfigModule, registerAs } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TraceModule } from './controller/trace.module';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
  
    MongooseModule.forRoot('mongodb+srv://andree:HdWhCufiFwLnLIot@cluster0.rjjex.mongodb.net/?retryWrites=true&w=majority',
    
    ),



    TraceModule,

  ],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule { }



