import { Component, OnInit, inject } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { SignalPipe } from '@fms/core';
import { FmsInputComponent } from '@fms/input';
import { FmsSelectComponent } from '@fms/select';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'spending-create-form',
    templateUrl: './create-form.component.html',
    styleUrls: ['./create-form.component.scss'],
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        FmsSelectComponent,
        FmsInputComponent,
        SignalPipe
    ],
})
export class SpendingCreateFormComponent implements OnInit {
    private formBuilder: FormBuilder = inject(FormBuilder);
    public formGroup: FormGroup;
    public items = [];

    public ngOnInit(): void {
        this.buildFormGroup();
    }

    private buildFormGroup(): void {
        this.formGroup = this.formBuilder.group({
            spender: [null, [Validators.required]],
            amt: [null, [Validators.required]],
            fc: [null, [Validators.required]],
            desc: [null, [Validators.required]],
        });
    }
}
