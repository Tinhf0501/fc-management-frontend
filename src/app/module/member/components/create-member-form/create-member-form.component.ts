import { NgIf } from '@angular/common';
import {
    Component,
    EventEmitter,
    inject,
    Input,
    OnInit,
    Output,
} from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { fileToImageUrl } from '@fms/core';
import { FmsInputComponent } from '@fms/input';
import { FmsSelectComponent } from '@fms/select';
import { TranslateModule } from '@ngx-translate/core';
import { OnModalInit, OnModalSave } from 'src/app/module/shared/fms-modal/hook';
import { PositionSelectComponent } from '../position-select/position-select.component';
import { CreateFCMemberRequest } from './../../interface';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
    selector: 'create-member-form',
    templateUrl: './create-member-form.component.html',
    styleUrls: ['./create-member-form.component.scss'],
    standalone: true,
    imports: [
        NgIf,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        FmsInputComponent,
        FmsSelectComponent,

        PositionSelectComponent,
    ],
})
export class CreateMemberFormComponent implements OnInit, OnModalInit, OnModalSave {
    @Input() member: CreateFCMemberRequest;

    @Output() formInitialized = new EventEmitter<FormGroup>();

    private formBuilder: FormBuilder = inject(FormBuilder);
    private modalRef: NzModalRef;
    private avatar: File;

    public formGroup: FormGroup;
    public previewAvatarUrl: string;

    public ngOnInit(): void {
        this.buildFormGroup();
        if (this.member) {
            this.formGroup.patchValue(this.member);
            if (this.member.avatar) {
                this.previewAvatarUrl = fileToImageUrl(this.member.avatar);
            }
        }
        this.formInitialized.emit(this.formGroup);
    }

    public ngOnModalInit(ref: NzModalRef): void | Promise<void> {
        this.modalRef = ref;
    }

    public onChangeAvatar(event): void {
        const file = event.target.files[0];
        if (!file) return;
        this.avatar = file;
        this.previewAvatarUrl = fileToImageUrl(file);
    }

    private buildFormGroup(): void {
        this.formGroup = this.formBuilder.group({
            fullName: [null, [Validators.required, Validators.maxLength(255)]],
            nameShirt: [null, [Validators.required, Validators.maxLength(255)]],
            numberShirt: [null, [Validators.required]],
            phoneNumber: [
                null,
                [
                    Validators.required,
                    Validators.maxLength(10),
                    Validators.pattern('^0\\d{9}'),
                ],
            ],
            position: [null, [Validators.required]],
            address: [null, [Validators.maxLength(2000)]],
        });
    }

    ngOnModalSave(): void | Promise<void> {
        this.formGroup.markAllAsTouched();
        if (this.formGroup.invalid) {
            return;
        }
        const member = this.formGroup.getRawValue();
        if (this.avatar) {
            member.avatar = this.avatar;
        }
        this.modalRef.close(this.member);
    }
}
