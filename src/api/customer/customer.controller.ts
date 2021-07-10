import { Controller, Get, Param, Post, UseInterceptors } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { LoggingInterceptor } from 'src/common/interceptors/logger.interceptor';

@Controller()
@UseInterceptors(LoggingInterceptor)
export class CustomerController {
    @Get(':id')
    @ApiOperation({
        summary: 'Get customer information',
        tags: ['Customer'],
        parameters: [
            {
                name: 'id',
                in: 'path',
            },
        ],
    })
    async getCustomer(@Param('id') customerId: string) {
        return customerId;
    }

    @Post('search')
    @ApiOperation({
        summary: 'Search for customers',
        tags: ['Customer'],
    })
    async searchAllCustomers() {
        return null;
    }
}
