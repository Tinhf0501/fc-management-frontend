import { Routes } from '@angular/router';
import { AuthLayout } from './auth.layout';

export const routes: Routes = [
    {
        path: '',
        component: AuthLayout,
        children: [
            {
                path: 'login',
                loadComponent: () =>
                    import('../../pages/login/login.page').then(
                        (p) => p.LoginPage,
                    ),
            },
            {
                path: 'register',
                loadComponent: () =>
                    import('../../pages/register/register.page').then(
                        (p) => p.RegisterPage,
                    ),
            },
            {
                path: 'forgot-password',
                loadComponent: () =>
                    import(
                        '../../pages/forgot-password/forgot-password.page'
                    ).then((p) => p.ForgotPasswordPage),
            },
        ],
    },
];
