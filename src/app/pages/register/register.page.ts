import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { RegisterFormComponent } from "src/app/module/auth/register-form/register-form.component";

@Component({
    selector: 'register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
    standalone: true,
    imports: [
        RouterLink,

        RegisterFormComponent,
    ]
})
export class RegisterPage { }