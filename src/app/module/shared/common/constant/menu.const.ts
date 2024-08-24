import { Menu } from '../interface/menu.interface';

export const BASE_MENU: Menu[] = [
    {
        label: 'Dashboard',
        icon: 'dashboard',
        link: '/dashboard',
    },
    {
        title: 'Interface',
        label: 'Components',
        icon: 'setting',
        children: [
            {
                icon: 'setting',
                label: 'Buttons',
            },
            {
                icon: 'setting',
                label: 'Cards',
            },
        ],
    },
    {
        label: 'FOOTBALL_CLUB.TITLE',
        icon: 'table',
        link: '/football-club',
    },
    {
        label: 'MEMBER.TITLE',
        icon: 'table',
        link: '/member',
    },
    {
        label: 'DONATE.TITLE',
        icon: 'table',
        link: 'donate',
    },
    {
        label: 'MATCH_RESULT.TITLE',
        icon: 'table',
        link: 'match-result',
    },
    {
        label: 'FUNDING.TITLE',
        icon: 'table',
        link: 'funding',
    },
    {
        label: 'SPENDING.TITLE',
        icon: 'table',
        link: 'spending',
    },
];
