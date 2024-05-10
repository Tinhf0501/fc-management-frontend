import { Route } from '@angular/router';

export const router: Route = {
    path: '',
    loadComponent: () =>
        import('../../pages/home/home.page').then((p) => p.HomePage),
    data: {
        title: 'Trang chủ',
    },
};
