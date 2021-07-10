import { Module } from '@nestjs/common';
import { ExceptionService } from './exception.service';

@Module({
    imports: [],
    providers: [ExceptionService],
})
export class ExceptionModule {}
