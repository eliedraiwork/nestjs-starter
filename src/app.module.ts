import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { RouterModule } from 'nest-router';
import { clientelingApiRoutes } from './config/router/routes';
import { AppConfigModule } from './config/app/appConfig.module';
import { LoggerModule } from './utils/logger/logger.module';
import { TranslationModule } from './common/translations/translation.module';
import { ExceptionModule } from './common/exceptions/exception.module';

@Module({
    imports: [
        RouterModule.forRoutes(clientelingApiRoutes),
        ApiModule,
        AppConfigModule,
        LoggerModule,
        TranslationModule,
        ExceptionModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
