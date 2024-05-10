import { Routes } from '@angular/router';
import { MainLayout } from './main.layout';
import { router } from '../../pages/football-club/router';
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
                data: {
                    title: 'Trang chủ',
                },
            },
            router,
            {
                path: 'member',
                loadComponent: () =>
                    import('../../pages/member/member.page').then(
                        (p) => p.MemberPage,
                    ),
                data: {
                    title: 'MEMBER.TITLE',
                },
            },
            {
                path: 'donate',
                loadComponent: () =>
                    import('../../pages/donate/donate.page').then(
                        (p) => p.DonatePage,
                    ),
                data: {
                    title: 'DONATE.TITLE',
                },
            },
            {
                path: 'match-result',
                children: [
                    {
                        path: '',
                        loadComponent: () =>
                            import(
                                '../../pages/match-result/match-result.page'
                            ).then((p) => p.MatchResultPage),
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
            },
            {
                path: 'funding',
                loadComponent: () =>
                    import('../../pages/funding/funding.page').then(
                        (p) => p.FundingPage,
                    ),
                data: {
                    title: 'FUNDING.TITLE',
                },
            },
            {
                path: 'spending',
                loadComponent: () =>
                    import('../../pages/spending/spending.page').then(
                        (p) => p.SpendingPage,
                    ),
                data: {
                    title: 'SPENDING.TITLE',
                },
            },
        ],
    },
];
