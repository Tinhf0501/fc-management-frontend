import { Type } from '@angular/core';

export interface ModalOptions {
    title?: string;
    content?: Type<any>;
    data?: any;
    size?: ModalSize;
    hiddenFooter?: boolean;
}

export enum ModalSize {
    SMALL = '300px',
    MEDIUM = '500px',
    LARGE = '800px',
    EXTRA_LARGE = '1140px',
}
