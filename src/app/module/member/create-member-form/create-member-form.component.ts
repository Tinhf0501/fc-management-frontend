import { Component, inject, OnInit } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import {
    FormsModule,
    ReactiveFormsModule,
    FormBuilder,
    FormGroup,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

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
    ],
})
export class CreateMemberFormComponent implements OnInit {

    public accounts = [
        {
            username: 'tinhf',
            name: 'Hùng Tình Cute'
        },
        {
            username: 'suongnv',
            name: 'Sướng NV'
        }
    ]

    public positions = [
        {
            code: 'ST',
            name: 'ST',
        }
    ]

    public footballClubs = [
        {
            name: 'FC 2000',
            id: 1,
        }
    ]


    private formBuilder: FormBuilder = inject(FormBuilder);

    public formGroup: FormGroup;

    public ngOnInit(): void {
        this.buildFormGroup();
    }

    private buildFormGroup(): void {
        this.formGroup = this.formBuilder.group({
            account: [null],
            footballClub: [null],
            fullName: [null],
            printedName: [null],
            dob: [null],
            printedNumber: [null],
            phone: [null],
            position: [null],
            address: [null],
        });
    }

}
