import { Component, OnInit, inject, signal } from '@angular/core';
import {
    FormsModule,
    ReactiveFormsModule,
    FormBuilder,
    FormGroup,
    Validators,
} from '@angular/forms';
import { SignalPipe } from '@fms/core';
import { FmsInputComponent } from '@fms/input';
import { FmsSelectComponent } from '@fms/select';
import { TranslateModule } from '@ngx-translate/core';
import { OnModalSave } from 'src/app/module/shared/fms-modal/hook';

@Component({
    selector: 'create-donate-form',
    templateUrl: './create-donate-form.component.html',
    styleUrls: ['./create-donate-form.component.scss'],
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,

        FmsInputComponent,
        FmsSelectComponent,
        SignalPipe
    ],
})
export class CreateDonateFormComponent implements OnInit {
    private formBuilder: FormBuilder = inject(FormBuilder);

    public currency = signal(['VND'])
    public formGroup: FormGroup;
    items = []
    public ngOnInit(): void {
        this.buildFormGroup();
    }

    private buildFormGroup(): void {
        this.formGroup = this.formBuilder.group({
            donator: [null, [Validators.required]],
            amt: [null, [Validators.required]],
            currency: [null, [Validators.required]],
            fc: [null, [Validators.required]],
            desc: [null, [Validators.required]]
        });
    }
}
