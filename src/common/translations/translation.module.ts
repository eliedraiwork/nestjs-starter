import { Module } from '@nestjs/common';
import { AppConfigService } from 'src/config/app/appConfig.service';
import { LoggerModule } from 'src/utils/logger/logger.module';
import { ExceptionService } from '../exceptions/exception.service';
import { TranslationService } from './translation.service';

@Module({
    imports: [],
    providers: [AppConfigService, TranslationService, ExceptionService],
})
export class TranslationModule {}
