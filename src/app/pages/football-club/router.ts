import { Route } from '@angular/router';

export const router: Route = {
    path: 'football-club',
    children: [
        {
            path: '',
            loadComponent: () =>
                import('../../pages/football-club/football-club.page').then(
                    (p) => p.FootballClubPage,
                ),
            data: {
                title: 'FOOTBALL_CLUB.TITLE',
            },
        },
        {
            path: 'detail/:slug',
            loadComponent: () =>
                import(
                    '../../pages/football-club/detail-football-club/detail-football-club.page'
                ).then((p) => p.DetailFootballClubPage),
        },
        {
            path: 'create-football-club',
            loadComponent: () =>
                import(
                    '../../pages/football-club/create-football-club/create-football-club.page'
                ).then((p) => p.CreateFootballClubPage),
            data: {
                title: 'FOOTBALL_CLUB.CREATE.TITLE',
            },
        },

        {
            path: 'update-football-club/:slug',
            loadComponent: () =>
                import(
                    '../../pages/football-club/update-football-club/update-football-club.page'
                ).then((p) => p.UpdateFootballClubPage),
        },
    ],
};
