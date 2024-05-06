import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SingleSignOn } from 'src/app/module/auth/interface/sso.interface';

@Component({
    selector: 'sso-button',
    templateUrl: './sso-button.component.html',
    styleUrls: ['./sso-button.component.scss'],
    standalone: true,
    imports: [TranslateModule],
})
export class SsoButtonComponent {
    @Input()
    ssoProperty: SingleSignOn;
}
