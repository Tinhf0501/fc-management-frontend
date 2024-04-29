import { ICellRendererParams } from 'ag-grid-community';
export interface ActionColumn {
    i18Key?: string;
    label?: string;
    onClick: (params: ICellRendererParams) => void;
    icon: ActionColumnIcon;
    classes?: string;
}

export enum ActionColumnIcon {
    DELETE = 'fas fa-trash',
    EDIT = 'fas fa-edit',
    VIEW_DETAIL = 'fas fa-eye',
}
