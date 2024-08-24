export interface ActionColumn<T> {
    i18Key?: string;
    label?: string;
    onClick: (params: T, rowIndex?: number) => void;
    icon: string;
    classes?: string;
}
