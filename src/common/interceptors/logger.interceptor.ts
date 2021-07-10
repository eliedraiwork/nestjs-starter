import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { WinstonLogger } from 'src/utils/logger/winston.logger';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    constructor(private logger: WinstonLogger) {
        this.logger.setContext(LoggingInterceptor.name);
    }

    async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
        const req = context.getArgByIndex(0);
        this.logger.http(`${req.method} ${req.url}\n\
QueryParams: ${JSON.stringify(req.query, null, 2)}\n\
Body: ${JSON.stringify(req.body, null, 2)}
`);

        return next.handle();
    }
}
