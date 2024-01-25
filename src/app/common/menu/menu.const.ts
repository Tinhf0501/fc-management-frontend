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
        label: 'Quản lý đội bóng',
        icon: 'fas fa-fw fa-table',
        link: '/football-club',
    },
    {
        label: 'Quản lý thành viên',
        icon: 'fas fa-fw fa-table',
        link: '/member',
    },
];
