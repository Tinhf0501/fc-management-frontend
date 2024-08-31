import { Menu } from '../interface/menu.interface';

export const BASE_MENU: Menu[] = [
    {
        label: 'Dashboard',
        icon: 'dashboard',
        link: '/dashboard',
    },
    {
        label: 'FOOTBALL_CLUB.TITLE',
        icon: 'team',
        link: '/football-club',
    },
    {
        label: 'MEMBER.TITLE',
        icon: 'user',
        link: '/member',
    },
    {
        label: 'DONATE.TITLE',
        icon: 'dollar',
        link: 'donate',
    },
    {
        label: 'MATCH_RESULT.TITLE',
        icon: 'table',
        link: 'match-result',
    },
    {
        label: 'FUNDING.TITLE',
        icon: 'fund',
        link: 'funding',
    },
    {
        label: 'SPENDING.TITLE',
        icon: 'shopping-cart',
        link: 'spending',
    },
];
