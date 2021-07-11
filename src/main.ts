import { INestApplication, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as ip from 'ip';
import { AppConfigService } from './config/app/appConfig.service';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as fs from 'fs';
import * as path from 'path';
import * as helmet from 'helmet';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const appConfig: AppConfigService = app.get('AppConfigService');

    //  generate api doc
    const appVersion = appConfig.version;
    generateSwaggerApi(app, 'api/docs', 'API Docs', 'API', 'Middleware for App', appVersion);

    //  use helmet for security
    app.use(helmet());

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
    const fileName = path.resolve(process.cwd(), 'docs', 'swagger.json');
    fs.writeFileSync(fileName, JSON.stringify(document));
}

//  Bootstrap the app
bootstrap();
