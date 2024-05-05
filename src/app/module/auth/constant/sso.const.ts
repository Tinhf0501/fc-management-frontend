import { SingleSignOn, SingleSignOnEnum } from '../interface/sso.interface';

export const SSO_LIST: SingleSignOn[] = [
    {
        label: 'AUTH.LOGIN_WITH_GOOGLE',
        icon: 'fab fa-google fa-fw',
        code: SingleSignOnEnum.GOOGLE,
        classes: ['btn-danger'],
    },
    {
        label: 'AUTH.LOGIN_WITH_FB',
        icon: 'fab fa-facebook-f fa-fw',
        code: SingleSignOnEnum.FACEBOOK,
        classes: ['btn-primary'],
    },
];
