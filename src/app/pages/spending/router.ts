import { Route } from '@angular/router';

export const router: Route = {
    path: 'spending',
    loadComponent: () =>
        import('../../pages/spending/spending.page').then(
            (p) => p.SpendingPage,
        ),
    data: {
        title: 'SPENDING.TITLE',
    },
};
