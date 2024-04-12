import { Routes } from '@angular/router';

import { APP_ENUMS } from './app-routes.enum';

enum APP_ENUM {
    home = 'home',
}

export const routes: Routes = [
    {
        path: 'about',
        loadChildren: () => import('./about/about.routes'),
    },
    {
        path: 'home',
        loadComponent: () => import('./home/home.component'),
    },
    { path: '', redirectTo: APP_ENUMS.home, pathMatch: 'full' },
    { path: '**', redirectTo: APP_ENUM.home, pathMatch: 'full' },
];
