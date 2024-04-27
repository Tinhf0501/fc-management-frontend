import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import {
    FormsModule,
    ReactiveFormsModule,
    FormBuilder,
    FormGroup,
    Validators,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FmsInputComponent } from '@fms-module/common';

@Component({
    selector: 'create-member-form',
    templateUrl: './create-member-form.component.html',
    styleUrls: ['./create-member-form.component.scss'],
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule,
        TranslateModule,
        FmsInputComponent,
    ],
})
export class CreateMemberFormComponent implements OnInit {
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

    public ngOnInit(): void {
        this.buildFormGroup();
        this.formInitialized.emit(this.formGroup);
    }

    public onChangeAvatar(event): void {
        const file = event.target.files[0];
        if (!file) return;
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
