import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginFormComponent, SSO_LIST, SsoService } from '@fms-module/auth';

@Component({
    selector: 'login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
    standalone: true,
    imports: [RouterLink, LoginFormComponent],
})
export class LoginPage implements OnInit {
    private ssoService: SsoService = inject(SsoService);

    public ngOnInit(): void {
        this.ssoService.cacheSsoList(SSO_LIST);
    }
}
