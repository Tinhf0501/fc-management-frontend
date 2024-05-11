import { Routes } from '@angular/router';
import { MainLayout } from './main.layout';
import { router as fcRouter } from '../../pages/football-club/router';
import { router as homeRouter } from '../../pages/home/router';
import { router as memberRouter } from '../../pages/member/router';
import { router as donateRouter } from '../../pages/donate/router';
import { router as matchResultRouter } from '../../pages/match-result/router';
import { router as fundingRouter } from '../../pages/funding/router';
import { router as spendingRouter } from '../../pages/spending/router';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        children: [
            homeRouter,
            fcRouter,
            memberRouter,
            donateRouter,
            matchResultRouter,
            fundingRouter,
            spendingRouter,
        ],
    },
];
