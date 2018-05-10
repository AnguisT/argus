import { Routes } from '@angular/router';
import { BaseComponent } from './views/base/base.component';
import { ArgusStartComponent } from './views/start/argus.start.component';
import { ArgusDetailComponent } from './views/detail/argus.detail.component';
// import { appRouter } from './constants/appRouter';

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
