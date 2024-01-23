import { Component, OnInit, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { SSO_LIST } from "src/app/common/sso/sso.const";
import { SsoService } from "src/app/common/sso/sso.service";
import { LoginFormComponent } from "src/app/module/auth/login-form/login-form.component";

@Component({
    selector: 'login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
    standalone: true,
    imports: [
        RouterLink,
        LoginFormComponent
    ],
})
export class LoginPage implements OnInit {

    private ssoService: SsoService = inject(SsoService);

    public ngOnInit(): void {
        this.ssoService.cacheSsoList(SSO_LIST);
    }
}