import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AllException } from './common/error/http-exception';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  app.useGlobalFilters(new AllException())

  const options = new DocumentBuilder()
                      .setTitle('trace')
                      .setDescription('api de prueba para la maquinaria')
                      .setVersion('0.0.1').build();


  const doc = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api/docs', app, doc);
  
  await app.listen( 4000
    ,()=>{
      console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
      
  });
}
bootstrap();
