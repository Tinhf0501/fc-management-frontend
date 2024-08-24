export interface Confirmation {
    title: string;
    content: string;
    isHtml?: boolean;
    onOk?: () => void;
    onCancel?: () => void;
}
