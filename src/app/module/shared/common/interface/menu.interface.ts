export interface Menu {
    title?: string;
    icon: string;
    label: string;
    role?: string[];
    link?: string;
    children?: Menu[];
}
