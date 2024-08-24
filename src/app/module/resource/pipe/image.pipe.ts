import { Pipe, PipeTransform } from '@angular/core';
import { fileToImageUrl } from '../../shared/common/utils/file.utils';

@Pipe({
    name: 'image',
    standalone: true,
})
export class ImagePipe implements PipeTransform {
    transform(value: File): string {
        return fileToImageUrl(value);
    }
}
