import { NgFor } from '@angular/common';
import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    Output,
    ViewChild,
    inject,
} from '@angular/core';
import { fileToImageUrl } from '@fms-module/common';
import { ToastrService } from 'ngx-toastr';
import { Media } from '../../interface';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MAX_NUMBER_FILES } from '../../constant';

@Component({
    selector: 'list-media',
    templateUrl: './list-media.component.html',
    styleUrls: ['./list-media.component.scss'],
    standalone: true,
    imports: [NgFor, TranslateModule],
})
export class ListMediaComponent {
    private readonly toastrService = inject(ToastrService);
    private readonly translateService = inject(TranslateService);

    @ViewChild('uploader') uploader: ElementRef;

    @Input() media: Media = {
        files: [],
        url: [],
    };
    @Output() changeMedia = new EventEmitter<Media>();

    public onUploadFile(event): void {
        if (this.media.files.length === MAX_NUMBER_FILES) {
            this.toastrService.error(
                this.translateService.instant('RESOURCE.MAX_LENGTH_FILE', {
                    maxLengthFile: MAX_NUMBER_FILES,
                }),
            );
            return;
        }
        const files = event.target.files as FileList;
        if (!files) return;

        if (files.length + this.media.files.length > MAX_NUMBER_FILES) {
            this.toastrService.error(
                this.translateService.instant('RESOURCE.MAX_LENGTH_FILE', {
                    maxLengthFile: MAX_NUMBER_FILES,
                }),
            );
            return;
        }

        Array.from(files).forEach((file) => {
            this.media.files.push(file);
            this.media.url.push(fileToImageUrl(file));
        });
        this.uploader.nativeElement.value = '';
        this.changeMedia.emit(this.media);
    }

    public onRemoveImage(index: number): void {
        this.media.files.splice(index, 1);
        this.media.url.splice(index, 1);
        this.changeMedia.emit(this.media);
    }
}
