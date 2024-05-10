import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms';
import { FmsInputComponent, FmsSelectComponent } from '@fms-module/common';
import { TranslateModule } from '@ngx-translate/core';
import { SearchFcRequest } from '../../interface';
import { FC_STATUS } from '../../constant';

@Component({
    selector: 'fc-form-search',
    templateUrl: './form-search.component.html',
    styleUrls: ['./form-search.component.scss'],
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,

        FmsInputComponent,
        FmsSelectComponent,
    ],
})
export class FcFormSearchComponent implements OnInit {
    @Output() formInitialized = new EventEmitter<FormGroup>();

    @Output() search = new EventEmitter<SearchFcRequest>();

    private formBuilder: FormBuilder = inject(FormBuilder);

    public formGroup: FormGroup;
    public status = FC_STATUS;

    public ngOnInit(): void {
        this.buildFormGroup();
        this.formInitialized.emit(this.formGroup);
    }

    public ngOnSearch(): void {
        const searchFcRequest = this.formGroup.getRawValue() as SearchFcRequest;
        this.search.emit(searchFcRequest);
    }

    private buildFormGroup(): void {
        this.formGroup = this.formBuilder.group({
            fcName: [null],
            fcStatus: [null],
            fromDate: [null],
            toDate: [null],
        });
    }
}
