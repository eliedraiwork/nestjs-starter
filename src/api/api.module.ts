import { Module } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { CatalogModule } from './catalog/catalog.module';
import { UserModule } from './user/user.module';
import { AgendaModule } from './agenda/agenda.module';

@Module({
    controllers: [],
    providers: [],
    imports: [CustomerModule, CatalogModule, UserModule, AgendaModule],
})
export class ApiModule {}
