import { Routes } from 'nest-router';
import { ApiModule } from 'src/api/api.module';

export const clientelingApiRoutes: Routes = [
    {
        path: 'api/clienteling',
        module: ApiModule,
        children: [],
    },
];
