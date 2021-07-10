import { INestApplication, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as ip from 'ip';
import { AppConfigService } from './config/app/appConfig.service';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const appConfig: AppConfigService = app.get('AppConfigService');

    generateSwaggerApi(
        app,
        'api/doc',
        'API Docs',
        'Clienteling  API',
        'Middleware API for Clienteling Mobile App',
        '1.0.0'
    );

    await app.listen(appConfig.port);

    Logger.log(`Server running on http://${ip.address()}:${appConfig.port}`, 'Bootstrap');
    Logger.log(`Environment: ${appConfig.env.toUpperCase()}`, 'Bootstrap');
}

function generateSwaggerApi(
    app: INestApplication,
    route: string,
    siteTitle: string,
    title: string,
    description: string,
    version: string
) {
    const appDocumentSwagger = new DocumentBuilder()
        .setTitle(title)
        .setDescription(description)
        .setVersion(version)
        .build();
    const document = SwaggerModule.createDocument(app, appDocumentSwagger);
    SwaggerModule.setup(route, app, document, {
        customSiteTitle: siteTitle,
    });
}

//  Bootstrap the app
bootstrap();
