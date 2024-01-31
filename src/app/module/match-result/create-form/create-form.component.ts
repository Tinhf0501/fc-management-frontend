import { Component, OnInit, inject } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';
import {
    FormsModule,
    ReactiveFormsModule,
    FormGroup,
    FormBuilder,
} from '@angular/forms';

@Component({
    selector: 'match-result-create-form',
    templateUrl: './create-form.component.html',
    styleUrls: ['./create-form.component.scss',],
    standalone: true,
    imports: [
        TranslateModule,
        NgSelectModule,
        FormsModule,
        ReactiveFormsModule,
    ],
})
export class MatchResultCreateFormComponent implements OnInit {

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
