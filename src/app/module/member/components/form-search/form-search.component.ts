import { Component, OnInit, inject, signal } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { FmsDateComponent } from '@fms/date-picker';
import { FmsInputComponent } from '@fms/input';
import { SearchWrapperComponent } from '@fms/search-form';
import { FmsSelectComponent } from '@fms/select';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { POSITIONS } from '../../constant';
import { PositionSelectComponent } from '../position-select/position-select.component';

@Component({
    selector: 'member-form-search',
    templateUrl: './form-search.component.html',
    styleUrls: ['./form-search.component.scss'],
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        
        SearchWrapperComponent,
        FmsSelectComponent,
        FmsInputComponent,
        FmsSelectComponent,
        FmsDateComponent,
        PositionSelectComponent,
        NzGridModule,
    ],
})
export class MemberFormSearchComponent implements OnInit {
    private formBuilder: FormBuilder = inject(FormBuilder);

    public formGroup: FormGroup;

    items = signal([]);
    positions = signal(POSITIONS);

    public ngOnInit(): void {
        this.buildFormGroup();
    }

    private buildFormGroup(): void {
        this.formGroup = this.formBuilder.group({
            fullName: [],
            fromDate: [],
            toDate: [],
            status: [],
            account: [],
            position: [],
            fc: [],
        });
    }
}
