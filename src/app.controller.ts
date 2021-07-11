import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { LoggingInterceptor } from './common/interceptors/logger.interceptor';

@Controller()
@UseInterceptors(LoggingInterceptor)
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get('ping')
    ping(): any {
        return {
            isAlive: true,
        };
    }
}
