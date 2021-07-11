import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppConfigService } from './appConfig.service';
import configuration from './configuration';

if (process.argv.length > 2) {
    const env = process.argv[2];
    process.env.APP_ENV = env;
}

@Global()
@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration],
            envFilePath: `env/${process.env.APP_ENV}.env`,
            isGlobal: true,
        }),
    ],
    providers: [ConfigService, AppConfigService],
    exports: [ConfigService, AppConfigService],
})
export class AppConfigModule {}
