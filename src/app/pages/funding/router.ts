import { Route } from '@angular/router';

export const router: Route = {
    path: 'funding',
    loadComponent: () =>
        import('../../pages/funding/funding.page').then((p) => p.FundingPage),
    data: {
        title: 'FUNDING.TITLE',
    },
};
