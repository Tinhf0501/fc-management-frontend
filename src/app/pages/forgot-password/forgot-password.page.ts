import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ForgotPasswordFormComponent } from '@fms-module/auth';

@Component({
    selector: 'forgot-password',
    templateUrl: './forgot-password.page.html',
    styleUrls: ['./forgot-password.page.scss'],
    standalone: true,
    imports: [RouterLink, ForgotPasswordFormComponent],
})
export class ForgotPasswordPage {}
