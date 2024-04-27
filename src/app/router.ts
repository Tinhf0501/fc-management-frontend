import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('@fms-layout/auth').then((m) => m.AuthModule),
    },
    {
        path: '',
        loadChildren: () => import('@fms-layout/main').then((m) => m.MainModule),
    },
    {
        path: '**',
        loadComponent: () => import('./pages/error/404/not-found.page').then((p) => p.NotFoundPage),
    },
];
