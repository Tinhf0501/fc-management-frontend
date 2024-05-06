import { NgFor, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, ElementRef, Input, ViewChild, inject } from '@angular/core';
import { getExtension } from '@fms-module/common';
import { NgbActiveModal, NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { ImagePipe } from '../../pipe';

@Component({
    selector: 'upload-media-modal',
    templateUrl: './upload-media-modal.component.html',
    styleUrls: ['./upload-media-modal.component.scss'],
    standalone: true,
    imports: [
        NgFor,
        NgSwitch,
        NgSwitchCase,
        NgIf,
        TranslateModule,
        NgbTooltip,
        ImagePipe,
    ],
})
export class UploadMediaModalComponent {
    @Input() allowsFile: string[] = [];
    @ViewChild('uploader') uploader: ElementRef;

    private readonly modal = inject(NgbActiveModal);

    public files: File[] = [];
    public maxNumberFile: number;

    public get isInvalid(): boolean {
        return this.files.some(this.isInvalidFile.bind(this));
    }

    public onCloseModal(): void {
        this.modal.close();
    }

    public onUploadFile(event): void {
        const files = event.target.files as FileList;
        if (!files) return;
        this.files.push(...Array.from(files));
        if (this.files.length > this.maxNumberFile) {
            this.files = this.files.slice(0, this.maxNumberFile + 1);
        }
        this.uploader.nativeElement.value = '';
    }

    public onSave(): void {
        if (this.isInvalid) return;
        this.modal.close(this.files);
    }

    public onRemoveImage(index: number): void {
        this.files.splice(index, 1);
    }

    public isInvalidFile(file: File): boolean {
        const ext = getExtension(file);
        return !this.allowsFile.includes(ext);
    }
}
