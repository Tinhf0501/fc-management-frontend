import { Component, OnInit, inject } from '@angular/core';
import {
    FormsModule,
    ReactiveFormsModule,
    FormBuilder,
    FormGroup,
} from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'create-donate-form',
    templateUrl: './create-donate-form.component.html',
    styleUrls: ['./create-donate-form.component.scss'],
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule,
        TranslateModule
    ],
})
export class CreateDonateFormComponent implements OnInit {

    private formBuilder: FormBuilder = inject(FormBuilder);

    public formGroup: FormGroup;

    public ngOnInit(): void {
        this.buildFormGroup();
    }

    private buildFormGroup(): void {
        this.formGroup = this.formBuilder.group({});
    }
}
