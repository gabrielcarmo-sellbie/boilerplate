import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export function setupSwagger (docRoute: string, app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('API example')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('api')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup(docRoute, app, document);
}