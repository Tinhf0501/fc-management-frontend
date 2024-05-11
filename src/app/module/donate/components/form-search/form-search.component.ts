import { Component, OnInit, inject } from '@angular/core';
import {
    FormsModule,
    ReactiveFormsModule,
    FormBuilder,
    FormGroup,
} from '@angular/forms';
import { SearchWrapperComponent } from '@fms-module/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'donate-form-search',
    templateUrl: './form-search.component.html',
    styleUrls: ['./form-search.component.scss'],
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule,
        TranslateModule,
        FontAwesomeModule,

        SearchWrapperComponent,
    ],
})
export class DonateFormSearchComponent implements OnInit {
    private formBuilder: FormBuilder = inject(FormBuilder);

    public formGroup: FormGroup;

    public ngOnInit(): void {
        this.buildFormGroup();
    }

    private buildFormGroup(): void {
        this.formGroup = this.formBuilder.group({});
    }
}
