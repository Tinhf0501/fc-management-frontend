import { Routes } from "@angular/router";
import { MainLayout } from "./main.layout";

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        children: [
            {
                path: '',
                loadComponent: () => import('../../pages/home/home.page').then(p => p.HomePage),
                title: 'Trang chủ | FMS',
                data: {
                    title: 'Trang chủ',
                },
            },
            {
                path: 'football-club',
                loadComponent: () => import('../../pages/football-club/football-club.page').then(p => p.FootballClubPage),
                title: 'Quản lý đội bóng | FMS',
                data: {
                    title: 'Quản lý đội bóng',
                },
            },
        ]
    }
]
