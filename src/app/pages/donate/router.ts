import { Route } from '@angular/router';

export const router: Route = {
    path: 'donate',
    loadComponent: () =>
        import('../../pages/donate/donate.page').then((p) => p.DonatePage),
    data: {
        title: 'DONATE.TITLE',
    },
};
