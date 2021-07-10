import { Injectable } from '@nestjs/common';
import { AppConfigService } from 'src/config/app/appConfig.service';
import { DEFAULT_TRANSLATED_VALUE } from '../constants';
import { ExceptionService } from '../exceptions/exception.service';

@Injectable()
export class TranslationService {
    public constructor(private configService: AppConfigService, private exceptionService: ExceptionService) {}

    public async translate(key: string, language: string = this.configService.defaultLanguage): Promise<string> {
        try {
            if (!key) {
                return DEFAULT_TRANSLATED_VALUE;
            }
        } catch (error) {}
        return DEFAULT_TRANSLATED_VALUE;
    }
}
