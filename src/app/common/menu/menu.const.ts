import { Menu } from './menu.interface';

export const BASE_MENU: Menu[] = [
    {
        label: 'Dashboard',
        icon: 'fas fa-fw fa-tachometer-alt',
        link: '/dashboard',
    },
    {
        title: 'Interface',
        label: 'Components',
        icon: 'fas fa-fw fa-cog',
        children: [
            {
                icon: 'fas fa-fw fa-cog',
                label: 'Buttons',
            },
            {
                icon: 'fas fa-fw fa-cog',
                label: 'Cards',
            },
        ],
    },
    {
        label: 'FOOTBALL_CLUB.TITLE',
        icon: 'fas fa-fw fa-table',
        link: '/football-club',
    },
    {
        label: 'MEMBER.TITLE',
        icon: 'fas fa-fw fa-table',
        link: '/member',
    },
    {
        label: 'DONATE.TITLE',
        icon: 'fas fa-fw fa-table',
        link: 'donate',
    },
{
        label: 'MATCH_RESULT.TITLE',
        icon: 'fas fa-fw fa-table',
        link: 'match-result',
    },

];
