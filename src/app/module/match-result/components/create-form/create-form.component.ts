import { Component, OnInit, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import {
    FormsModule,
    ReactiveFormsModule,
    FormGroup,
    FormBuilder,
    Validators,
} from '@angular/forms';
import { FmsSelectComponent } from '@fms/select';
import { FmsInputComponent } from '@fms/input';
import { SignalPipe } from '@fms/core';

@Component({
    selector: 'match-result-create-form',
    templateUrl: './create-form.component.html',
    styleUrls: ['./create-form.component.scss'],
    standalone: true,
    imports: [
        TranslateModule,
        FormsModule,
        ReactiveFormsModule,

        FmsSelectComponent,
        FmsInputComponent,
        SignalPipe
    ],
})
export class MatchResultCreateFormComponent implements OnInit {
    private formBuilder: FormBuilder = inject(FormBuilder);

    public formGroup: FormGroup;
    public items = [];

    public ngOnInit(): void {
        this.buildFormGroup();
    }

    private buildFormGroup(): void {
        this.formGroup = this.formBuilder.group({
            resultName: [null, [Validators.required]],
            fc1: [null, [Validators.required]],
            resultScore1: [null, [Validators.required]],
            fc2: [null, [Validators.required]],
            resultScore2: [null, [Validators.required]]
        });
    }
}
