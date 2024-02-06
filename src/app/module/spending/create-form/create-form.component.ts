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
    selector: 'spending-create-form',
    templateUrl: './create-form.component.html',
    styleUrls: ['./create-form.component.scss',],
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        NgSelectModule,
    ],
})
export class SpendingCreateFormComponent implements OnInit {

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
