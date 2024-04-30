import { Component, OnInit, inject } from '@angular/core';
import {
    FormsModule,
    ReactiveFormsModule,
    FormBuilder,
    FormGroup,
    Validators,
} from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'fc-form-search',
    templateUrl: './form-search.component.html',
    styleUrls: ['./form-search.component.scss'],
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule,
        TranslateModule,
    ],
})
export class FcFormSearchComponent implements OnInit {
    private formBuilder: FormBuilder = inject(FormBuilder);

    public formGroup: FormGroup;
    public status = [
        {
            code: 0,
            name: 'Không hoạt đông',
        },
        {
            code: 1,
            name: 'Hoạt động',
        },
    ];

    public ngOnInit(): void {
        this.buildFormGroup();
    }

    private buildFormGroup(): void {
        this.formGroup = this.formBuilder.group({
            name: [null, [Validators.required]],
            status: [null, [Validators.required]],
            fromDate: [null, [Validators.required]],
            toDate: [null, [Validators.required]],
        });
    }
}
