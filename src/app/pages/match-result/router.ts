import { Route } from '@angular/router';

export const router: Route = {
    path: 'match-result',
    children: [
        {
            path: '',
            loadComponent: () =>
                import('../../pages/match-result/match-result.page').then(
                    (p) => p.MatchResultPage,
                ),
            data: {
                title: 'MATCH_RESULT.TITLE',
            },
        },
        {
            path: 'create',
            loadComponent: () =>
                import(
                    '../../pages/match-result/create/create-match-result.page'
                ).then((p) => p.CreateMatchResultPage),
            data: {
                title: 'MATCH_RESULT.CREATE.TITLE',
            },
        },
    ],
};
