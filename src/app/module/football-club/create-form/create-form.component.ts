import { NgIf } from '@angular/common';
import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import {
    FormsModule,
    ReactiveFormsModule,
    FormBuilder,
    FormGroup,
    Validators,
} from '@angular/forms';

@Component({
    selector: 'create-fc-form',
    templateUrl: './create-form.component.html',
    styleUrls: ['./create-form.component.scss'],
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        NgIf
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
        this.imageUrl = URL.createObjectURL(event.target.files[0])
    }

    private buildFormGroup(): void {
        this.formGroup = this.formBuilder.group({
            name: [null, [Validators.required]],
            description: [null, [Validators.required]],
        });
    }
}
