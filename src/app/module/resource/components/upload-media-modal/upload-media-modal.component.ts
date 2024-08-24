import { NgFor, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { getExtension } from '@fms/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { OnModalInit, OnModalSave } from 'src/app/module/shared/fms-modal/hook';
import { ImagePipe } from '../../pipe';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

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
        ImagePipe,
        NzToolTipModule
    ],
})
export class UploadMediaModalComponent implements OnModalInit, OnModalSave {
    @Input() allowsFile: string[] = [];
    @ViewChild('uploader') uploader: ElementRef;

    public files: File[] = [];
    public maxNumberFile: number;
    private modalRef: NzModalRef;

    public get isInvalid(): boolean {
        return this.files.some(this.isInvalidFile.bind(this));
    }

    public ngOnModalInit(ref: NzModalRef): void | Promise<void> {
        this.modalRef = ref;
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

    public ngOnModalSave(): void {
        if (this.isInvalid) return;
        this.modalRef.close(this.files);
    }

    public onRemoveImage(index: number): void {
        this.files.splice(index, 1);
    }

    public isInvalidFile(file: File): boolean {
        const ext = getExtension(file);
        return !this.allowsFile.includes(ext);
    }
}
