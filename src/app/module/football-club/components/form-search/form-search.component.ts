import {
    Component,
    EventEmitter,
    OnInit,
    Output,
    inject,
    signal,
} from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';
import { SearchFcRequest } from '../../interface';
import { FC_STATUS } from '../../constant';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { FmsInputComponent } from '@fms/input';
import { FmsSelectComponent } from '@fms/select';
import { SearchWrapperComponent } from '@fms/search-form';
import { FmsDateComponent } from '@fms/date-picker';

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
        SearchWrapperComponent,
        FmsDateComponent,
        NzGridModule,
    ],
})
export class FcFormSearchComponent implements OnInit {
    @Output() formInitialized = new EventEmitter<FormGroup>();

    @Output() search = new EventEmitter<SearchFcRequest>();

    private formBuilder: FormBuilder = inject(FormBuilder);

    public formGroup: FormGroup;
    public status = signal(FC_STATUS);
    public ngOnInit(): void {
        this.buildFormGroup();
        this.formInitialized.emit(this.formGroup);
    }

    public ngOnSearch(formGroup: FormGroup): void {
        const searchFcRequest = formGroup.getRawValue() as SearchFcRequest;
        this.search.emit(searchFcRequest);
    }

    private buildFormGroup(): void {
        this.formGroup = this.formBuilder.group({
            fcName: [null],
            fcStatus: [null],
            fromDate: [],
            toDate: [null],
        });
    }
}
