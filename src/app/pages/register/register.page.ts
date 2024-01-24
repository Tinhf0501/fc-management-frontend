import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RegisterFormComponent } from '@fms-module/auth';

@Component({
    selector: 'register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
    standalone: true,
    imports: [RouterLink, RegisterFormComponent],
})
export class RegisterPage {}
