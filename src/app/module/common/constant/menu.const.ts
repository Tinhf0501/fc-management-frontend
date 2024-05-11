import { Menu } from '../interface/menu.interface';
import {
    faTachometerAlt,
    faCog,
    faTable,
} from '@fortawesome/free-solid-svg-icons';

export const BASE_MENU: Menu[] = [
    {
        label: 'Dashboard',
        icon: faTachometerAlt,
        link: '/dashboard',
    },
    {
        title: 'Interface',
        label: 'Components',
        icon: faCog,
        children: [
            {
                icon: faCog,
                label: 'Buttons',
            },
            {
                icon: faCog,
                label: 'Cards',
            },
        ],
    },
    {
        label: 'FOOTBALL_CLUB.TITLE',
        icon: faTable,
        link: '/football-club',
    },
    {
        label: 'MEMBER.TITLE',
        icon: faTable,
        link: '/member',
    },
    {
        label: 'DONATE.TITLE',
        icon: faTable,
        link: 'donate',
    },
    {
        label: 'MATCH_RESULT.TITLE',
        icon: faTable,
        link: 'match-result',
    },
    {
        label: 'FUNDING.TITLE',
        icon: faTable,
        link: 'funding',
    },
    {
        label: 'SPENDING.TITLE',
        icon: faTable,
        link: 'spending',
    },
];
