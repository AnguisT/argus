import { Routes } from '@angular/router';
import { ArgusStartComponent } from './views/start/argus.start.component';
import { ArgusDetailComponent } from './views/detail/argus.detail.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: ArgusStartComponent,
    },
    {
        path: 'detail/:id',
        component: ArgusDetailComponent
    }
];
