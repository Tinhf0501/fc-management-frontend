import { NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'create-fc-form',
    templateUrl: './create-form.component.html',
    styleUrls: ['./create-form.component.scss'],
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        NgIf,
        TranslateModule,
    ],
})
export class CreateFcFormComponent implements OnInit {
    private formBuilder: FormBuilder = inject(FormBuilder);

    public formGroup: FormGroup;
    public imageUrl: string;

    public ngOnInit(): void {
        this.buildFormGroup();
    }

    public onChangeAvatar(event): void {
        this.imageUrl = URL.createObjectURL(event.target.files[0]);
    }

    private buildFormGroup(): void {
        this.formGroup = this.formBuilder.group({
            name: [null, [Validators.required]],
            description: [null, [Validators.required]],
        });
    }
}
