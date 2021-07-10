import { Controller, Get, Put, UseInterceptors } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { LoggingInterceptor } from 'src/common/interceptors/logger.interceptor';

@Controller()
@UseInterceptors(LoggingInterceptor)
export class UserController {
    @Get('profile')
    @ApiOperation({
        summary: 'Get user profile',
        tags: ['User'],
    })
    async getUserProfile() {
        return 'My Profile';
    }

    @Put('language')
    @ApiOperation({
        summary: 'Update user language',
        tags: ['User'],
        parameters: [
            {
                name: 'lang',
                in: 'query',
            },
        ],
    })
    async updateUserLanguage() {
        return 'Language';
    }
}
