import { SingleSignOn, SingleSignOnEnum } from "./sso.interface";

export const SSO_LIST: SingleSignOn[] = [
    {
        label: 'Login with Google',
        icon: 'fab fa-google fa-fw',
        code: SingleSignOnEnum.GOOGLE,
        classes: ['btn-danger']
    },
    {
        label: 'Login with Facebook',
        icon: 'fab fa-facebook-f fa-fw',
        code: SingleSignOnEnum.FACEBOOK,
        classes: ['btn-primary']
    }
]