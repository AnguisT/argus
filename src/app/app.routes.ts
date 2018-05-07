import { Routes } from '@angular/router';
import { BaseComponent } from './views/base/base.component';
import { ArgusStartComponent } from './views/start/argus.start.component';
// import { appRouter } from './constants/appRouter';

export const ROUTES: Routes = [
    {
        path: '',
        component: ArgusStartComponent,
    },
];
