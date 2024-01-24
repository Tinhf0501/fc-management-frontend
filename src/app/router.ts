import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () =>
            import('./layout/auth/auth.module').then((m) => m.AuthModule),
    },
    {
        path: '',
        loadChildren: () =>
            import('./layout/main/man.module').then((m) => m.MainModule),
    },
    {
        path: '**',
        loadComponent: () =>
            import('./pages/error/404/not-found.page').then(
                (p) => p.NotFoundPage,
            ),
    },
];
