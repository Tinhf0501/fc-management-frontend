import { NgIf } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FmsInputComponent, fileToImageUrl } from '@fms-module/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'create-fc-form',
    templateUrl: './create-form.component.html',
    styleUrls: ['./create-form.component.scss'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, NgIf, TranslateModule, FmsInputComponent],
})
export class CreateFcFormComponent implements OnInit {
    @Output() changeAvatar = new EventEmitter<File>();

    @Output() formInitialized = new EventEmitter<FormGroup>();

    @ViewChild('avatarUploader') avatarUploader: ElementRef;

    private readonly formBuilder = inject(FormBuilder);

    public formGroup: FormGroup;
    public imageUrl: string;

    public ngOnInit(): void {
        this.formGroup = this.formBuilder.group({
            fcName: [null, [Validators.required, Validators.maxLength(255)]],
            description: [null, [Validators.maxLength(2000)]],
        });
        this.formInitialized.emit(this.formGroup);
    }

    public onChangeAvatar(event): void {
        const file = event.target.files[0];
        if (!file) return;
        this.imageUrl = fileToImageUrl(file);
        this.avatarUploader.nativeElement.value = '';
        this.changeAvatar.emit(file);
    }
}
