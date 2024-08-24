import { Component, OnInit, inject } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms';
import { SignalPipe } from '@fms/core';
import { FmsDateComponent } from '@fms/date-picker';
import { FmsInputComponent } from '@fms/input';
import { SearchWrapperComponent } from '@fms/search-form';
import { FmsSelectComponent } from '@fms/select';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'donate-form-search',
    templateUrl: './form-search.component.html',
    styleUrls: ['./form-search.component.scss'],
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,

        FmsSelectComponent,
        FmsInputComponent,
        FmsDateComponent,
        SearchWrapperComponent,
        SignalPipe
    ],
})
export class DonateFormSearchComponent implements OnInit {
    private formBuilder: FormBuilder = inject(FormBuilder);

    public formGroup: FormGroup;

    items = []
    public ngOnInit(): void {
        this.buildFormGroup();
    }

    private buildFormGroup(): void {
        this.formGroup = this.formBuilder.group({
            donator: [null],
            status: [null],
            fc: [null],
            fromDate: [null],
            toDate: [null]
        });
    }
}
