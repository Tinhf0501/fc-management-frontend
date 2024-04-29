import {
    Component,
    EventEmitter,
    inject,
    Input,
    OnInit,
    Output,
} from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import {
    FormsModule,
    ReactiveFormsModule,
    FormBuilder,
    FormGroup,
    Validators,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { fileToImageUrl, FmsInputComponent } from '@fms-module/common';
import { CreateFCMemberRequest } from '@fms-module/member';
import { NgIf } from '@angular/common';

@Component({
    selector: 'create-member-form',
    templateUrl: './create-member-form.component.html',
    styleUrls: ['./create-member-form.component.scss'],
    standalone: true,
    imports: [
        NgIf,
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule,
        TranslateModule,
        FmsInputComponent,
    ],
})
export class CreateMemberFormComponent implements OnInit {
    @Input() member: CreateFCMemberRequest;

    @Output() formInitialized = new EventEmitter<FormGroup>();

    @Output() changeAvatar = new EventEmitter<File>();

    public positions = [
        {
            code: 'GK',
            name: 'Thủ môn',
        },
        {
            code: 'CB',
            name: 'Trung vệ',
        },
        {
            code: 'CAM',
            name: 'Tiền vệ trung tâm',
        },
        {
            code: 'ST',
            name: 'Tiền đạo cắm',
        },
    ];

    private formBuilder: FormBuilder = inject(FormBuilder);

    public formGroup: FormGroup;
    public previewAvatarUrl: string;

    public ngOnInit(): void {
        this.buildFormGroup();
        if (this.member) {
            this.formGroup.patchValue(this.member);
            if (this.member.avatar) {
                this.previewAvatarUrl = fileToImageUrl(this.member.avatar);
                this.changeAvatar.emit(this.member.avatar);
            }
        }
        this.formInitialized.emit(this.formGroup);
    }

    public onChangeAvatar(event): void {
        const file = event.target.files[0];
        if (!file) return;
        this.previewAvatarUrl = fileToImageUrl(file);
        this.changeAvatar.emit(file);
    }

    private buildFormGroup(): void {
        this.formGroup = this.formBuilder.group({
            fullName: [null, [Validators.required, Validators.maxLength(255)]],
            nameShirt: [null, [Validators.maxLength(255)]],
            numberShirt: [null],
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
}
