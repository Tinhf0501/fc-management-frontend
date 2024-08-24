import { Type } from '@angular/core';

export interface ColumnTable<T> {
    label?: string;
    name?: keyof T;
    showCheckbox?: boolean;
    customColumn?: Type<any>;
    customColumnParams?: any;
    valueGetter?: (data: T, rowIndex?: number) => any;
    pinned?: 'left' | 'right';
}

export interface TableOptions<T> {
    uniqueKey: keyof T;
    isCreate?: boolean;
    isExport?: boolean;
    action?: Action[];
}

export interface Action {
    icon?: string;
    text?: string;
    event: ActionEvent;
    data?: any;
}

export enum ActionEvent {
    CREATE = 'CREATE:click',
    EXPORT = 'EXPORT:click',
}
