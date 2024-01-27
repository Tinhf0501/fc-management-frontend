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
                title: 'Trang chủ | FMS',
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
                        title: 'Quản lý đội bóng | FMS',
                        data: {
                            title: 'Quản lý đội bóng',
                        },
                    },
                    {
                        path: 'create-football-club',
                        loadComponent: () => import('../../pages/football-club/create-football-club/create-football-club.page').then(p => p.CreateFootballClubPage),
                        title: 'Tạo đội báo | FMS',
                        data: {
                            title: 'Tạo mới đội bóng',
                        },
                    },

                ]
            },
            {
                path: 'member',
                loadComponent: () => import('../../pages/member/member.page').then(p => p.MemberPage),
                title: 'Quản lý thành viên | FMS',
                data: {
                    title: 'MEMBER.TITLE',
                },
            },
            {
                path: 'donate',
                loadComponent: () => import('../../pages/donate/donate.page').then(p => p.DonatePage),
                title: 'Quản lý donate | FMS',
                data: {
                    title: 'DONATE.TITLE',
                },
            },
        ],
    },
];
