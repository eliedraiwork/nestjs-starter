import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { LoggerModule } from 'src/utils/logger/logger.module';

@Module({
    imports: [LoggerModule],
    providers: [UserService],
    controllers: [UserController],
})
export class UserModule {}
