export interface SingleSignOn {
    label: string;
    icon: string;
    code: SingleSignOnEnum;
    classes?: string[];
}

export enum SingleSignOnEnum {
    GOOGLE, FACEBOOK
}