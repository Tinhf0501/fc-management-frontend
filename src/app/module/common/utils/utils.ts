export function fileToImageUrl(file: File): string {
    if (!file) return '';
    return URL.createObjectURL(file);
}
