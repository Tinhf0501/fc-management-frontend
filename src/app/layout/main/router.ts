import { Routes } from '@angular/router';
import { MainLayout } from './main.layout';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        children: [
            {
                path: '',
                loadComponent: () =>
                    import('../../pages/home/home.page').then(
                        (p) => p.HomePage,
                    ),
                title: 'Trang chủ | FMS',
                data: {
                    title: 'Trang chủ',
                },
            },
            {
                path: 'football-club',
                loadComponent: () =>
                    import('../../pages/football-club/football-club.page').then(
                        (p) => p.FootballClubPage,
                    ),
                title: 'Quản lý đội bóng | FMS',
                data: {
                    title: 'Quản lý đội bóng',
                },
            },
            {
                path: 'create-football-club',
                loadComponent: () =>
                    import(
                        '../../pages/football-club/create-football-club/create-football-club.page'
                    ).then((p) => p.CreateFootballClubPage),
                title: 'Tạo đội bóng | FMS',
                data: {
                    title: 'Tạo mới đội bóng',
                },
            },
        ],
    },
];
