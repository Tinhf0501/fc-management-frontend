import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'funding-form-search',
    templateUrl: './form-search.component.html',
    styleUrls: ['./form-search.component.scss',],
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        NgSelectModule,
    ],
})
export class FundingFormSearchComponent implements OnInit {
    
    private formBuilder: FormBuilder = inject(FormBuilder);
    public formGroup: FormGroup;

    public ngOnInit(): void {
        this.buildFormGroup();
    }

    private buildFormGroup(): void {
        this.formGroup = this.formBuilder.group({
        });
    }
}
