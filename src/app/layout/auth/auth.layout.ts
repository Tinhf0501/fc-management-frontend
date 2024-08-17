import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageComponent } from '@fms-module/common';

@Component({
    selector: 'auth-layout',
    templateUrl: './auth.layout.html',
    styleUrls: ['./auth.layout.scss'],
    standalone: true,
    imports: [RouterOutlet, LanguageComponent],
})
export class AuthLayout {}
