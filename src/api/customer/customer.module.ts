import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { LoggerModule } from 'src/utils/logger/logger.module';

@Module({
    imports: [LoggerModule],
    providers: [CustomerService],
    controllers: [CustomerController],
})
export class CustomerModule {}
