import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
    constructor(private configService: ConfigService) {}

    get port(): number {
        return Number(this.configService.get<number>('port')) || 3000;
    }

    get env(): string {
        return this.configService.get<string>('env');
    }

    get defaultLanguage(): string {
        return this.configService.get<string>('defaultLanguage');
    }
}
