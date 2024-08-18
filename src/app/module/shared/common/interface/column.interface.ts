export interface ActionColumn<T> {
    i18Key?: string;
    label?: string;
    onClick: (params: T) => void;
    icon: string;
    classes?: string;
}
