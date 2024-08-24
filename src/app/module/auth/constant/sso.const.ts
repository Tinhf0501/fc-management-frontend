import { SingleSignOn, SingleSignOnEnum } from '../interface/sso.interface';

export const SSO_LIST: SingleSignOn[] = [
    {
        label: 'AUTH.LOGIN_WITH_GOOGLE',
        icon: 'google',
        code: SingleSignOnEnum.GOOGLE,
        classes: ['btn-danger'],
    },
    {
        label: 'AUTH.LOGIN_WITH_FB',
        icon: 'facebook',
        code: SingleSignOnEnum.FACEBOOK,
        classes: ['btn-primary'],
    },
];
