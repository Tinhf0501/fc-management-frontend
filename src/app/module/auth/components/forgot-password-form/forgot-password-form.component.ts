import { Component, OnInit, inject } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { FmsButtonComponent } from '@fms/button';
import { FmsInputComponent } from '@fms/input';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'forgot-password-form',
    templateUrl: './forgot-password-form.component.html',
    styleUrls: ['./forgot-password-form.component.scss'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, TranslateModule, FmsInputComponent, FmsButtonComponent],
})
export class ForgotPasswordFormComponent implements OnInit {
    private formBuilder: FormBuilder = inject(FormBuilder);

    public forgotPasswordFormGroup: FormGroup;

    public ngOnInit(): void {
        this.buildForm();
    }

    private buildForm(): void {
        this.forgotPasswordFormGroup = this.formBuilder.group({
            email: [null, [Validators.required, Validators.email]],
        });
    }
}
