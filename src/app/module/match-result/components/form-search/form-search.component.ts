import { Component, OnInit, inject } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms';
import { SignalPipe } from '@fms/core';
import { FmsDateComponent } from '@fms/date-picker';
import { SearchWrapperComponent } from '@fms/search-form';
import { FmsSelectComponent } from '@fms/select';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'match-result-form-search',
    templateUrl: './form-search.component.html',
    styleUrls: ['./form-search.component.scss'],
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,

        FmsSelectComponent,
        FmsDateComponent,
        SearchWrapperComponent,
        SignalPipe
    ],
})
export class MatchResultFormSearchComponent implements OnInit {
    private formBuilder: FormBuilder = inject(FormBuilder);

    public formGroup: FormGroup;
    public items = []

    public ngOnInit(): void {
        this.buildFormGroup();
    }

    private buildFormGroup(): void {
        this.formGroup = this.formBuilder.group({
            fc: [null],
            status: [null],
            fromDate: [null],
            toDate: [null]
        });
    }
}
