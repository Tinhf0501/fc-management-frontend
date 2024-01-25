import { Component, OnInit, inject } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import {
    FormsModule,
    ReactiveFormsModule,
    FormGroup,
    FormBuilder,
} from '@angular/forms';
import { MemberGridComponent } from '@fms-module/member';

@Component({
    selector: 'member-form-search',
    templateUrl: './form-search.component.html',
    styleUrls: ['./form-search.component.scss'],
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule,
    ],
})
export class MemberFormSearchComponent implements OnInit {

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
