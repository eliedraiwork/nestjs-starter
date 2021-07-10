import { Routes } from 'nest-router';
import { AgendaModule } from 'src/api/agenda/agenda.module';
import { ApiModule } from 'src/api/api.module';
import { CatalogModule } from 'src/api/catalog/catalog.module';
import { CustomerModule } from 'src/api/customer/customer.module';
import { UserModule } from 'src/api/user/user.module';

export const clientelingApiRoutes: Routes = [
    {
        path: 'api/clienteling',
        module: ApiModule,
        children: [
            {
                path: 'v1/customer',
                module: CustomerModule,
            },
            {
                path: 'v1/catalog',
                module: CatalogModule,
            },
            {
                path: 'v1/user',
                module: UserModule,
            },
            {
                path: 'v1/agenda',
                module: AgendaModule,
            },
        ],
    },
];
