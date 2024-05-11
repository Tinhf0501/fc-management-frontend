import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { fileToImageUrl } from '@fms-module/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { MAX_NUMBER_FILES } from '../../constant';
import { Media } from '../../interface';
import { UploadMediaModalComponent } from '../upload-media-modal/upload-media-modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'list-media',
    templateUrl: './list-media.component.html',
    styleUrls: ['./list-media.component.scss'],
    standalone: true,
    imports: [NgFor, TranslateModule, FontAwesomeModule],
})
export class ListMediaComponent {
    @Input() allowsFile: string[];
    @Input() media: Media = {
        files: [],
        url: [],
    };
    @Output() changeMedia = new EventEmitter<Media>();

    private readonly modalService = inject(NgbModal);

    public maxNumberFile = MAX_NUMBER_FILES;

    public onOpenUploadModal(): void {
        const modalRef = this.modalService.open(UploadMediaModalComponent, {
            centered: true,
            size: 'lg',
        });
        modalRef.componentInstance.allowsFile = this.allowsFile;
        modalRef.componentInstance.maxNumberFile =
            this.maxNumberFile - this.media.url.length;
        modalRef.closed.subscribe((files) => {
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
