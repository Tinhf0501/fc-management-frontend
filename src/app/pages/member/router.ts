import { Route } from '@angular/router';

export const router: Route = {
    path: 'member',
    loadComponent: () =>
        import('../../pages/member/member.page').then((p) => p.MemberPage),
    data: {
        title: 'MEMBER.TITLE',
    },
};
