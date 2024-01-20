import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ForgotPasswordFormComponent } from "src/app/module/auth/forgot-password-form/forgot-password-form.component";

@Component({
    selector: 'forgot-password',
    templateUrl: './forgot-password.page.html',
    styleUrls: ['./forgot-password.page.scss'],
    standalone: true,
    imports: [
        RouterLink,
        ForgotPasswordFormComponent,
    ]
})
export class ForgotPasswordPage {

}