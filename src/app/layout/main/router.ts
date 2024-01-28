import { Routes } from '@angular/router';
import { MainLayout } from './main.layout';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        children: [
            {
                path: '',
                loadComponent: () => import('../../pages/home/home.page').then((p) => p.HomePage),
                data: {
                    title: 'Trang chủ',
                },
            },
            {
                path: 'football-club',
                children: [
                    {
                        path: '',
                        loadComponent: () => import('../../pages/football-club/football-club.page').then(p => p.FootballClubPage),
                        data: {
                            title: 'FOOTBALL_CLUB.TITLE',
                        },
                    },
                    {
                        path: 'create-football-club',
                        loadComponent: () => import('../../pages/football-club/create-football-club/create-football-club.page').then(p => p.CreateFootballClubPage),
                        data: {
                            title: 'FOOTBALL_CLUB.CREATE.TITLE',
                        },
                    },

                ]
            },
            {
                path: 'member',
                loadComponent: () => import('../../pages/member/member.page').then(p => p.MemberPage),
                data: {
                    title: 'MEMBER.TITLE',
                },
            },
            {
                path: 'donate',
                loadComponent: () => import('../../pages/donate/donate.page').then(p => p.DonatePage),
                data: {
                    title: 'DONATE.TITLE',
                },
            },
        ],
    },
];
