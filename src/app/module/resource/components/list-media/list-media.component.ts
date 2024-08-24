import { title } from 'process';
import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FmsButtonComponent } from '@fms/button';
import { fileToImageUrl } from '@fms/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MAX_NUMBER_FILES } from '../../constant';
import { Media } from '../../interface';
import { UploadMediaModalComponent } from '../upload-media-modal/upload-media-modal.component';
import { ModalService, ModalSize } from '@fms/modal';

@Component({
    selector: 'list-media',
    templateUrl: './list-media.component.html',
    styleUrls: ['./list-media.component.scss'],
    standalone: true,
    imports: [NgFor, TranslateModule, NgIf, FmsButtonComponent],
})
export class ListMediaComponent {
    @Input() allowsFile: string[];
    @Input() media: Media = {
        files: [],
        url: [],
    };
    @Input() readonly: boolean = false;
    @Input() showTitle: boolean = true;

    @Output() changeMedia = new EventEmitter<Media>();

    private readonly modalService = inject(ModalService);
    private readonly translateService = inject(TranslateService);

    public maxNumberFile = MAX_NUMBER_FILES;

    public onOpenUploadModal(): void {
        const modalRef = this.modalService.openModal({
            title: this.translateService.instant('RESOURCE.UPLOAD_FILE_TITLE'),
            content: UploadMediaModalComponent,
            size: ModalSize.LARGE,
            data: {
                allowsFile: this.allowsFile,
                maxNumberFile: this.maxNumberFile - this.media.url.length
            }
        });
        modalRef.afterClose.subscribe((files) => {
            files.forEach((file) => {
                this.media.files.push(file);
                this.media.url.push(fileToImageUrl(file));
            });
            this.changeMedia.emit(this.media);
        });
    }

    public onRemoveImage(index: number): void {
        this.media.files.splice(index, 1);
        this.media.url.splice(index, 1);
        this.changeMedia.emit(this.media);
    }
}
