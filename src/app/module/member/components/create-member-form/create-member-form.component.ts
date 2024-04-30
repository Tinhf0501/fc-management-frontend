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
import {
    fileToImageUrl,
    FmsInputComponent,
    FmsSelectComponent,
} from '@fms-module/common';
import { CreateFCMemberRequest } from './../../interface';
import { TranslateModule } from '@ngx-translate/core';
import { PositionSelectComponent } from '../position-select/position-select.component';

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
export class CreateMemberFormComponent implements OnInit {
    @Input() member: CreateFCMemberRequest;

    @Output() formInitialized = new EventEmitter<FormGroup>();

    @Output() changeAvatar = new EventEmitter<File>();

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
}
