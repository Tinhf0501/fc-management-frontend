import { Component, Input } from '@angular/core';
import { FmsIconComponent } from '@fms/icon';
import { TranslateModule } from '@ngx-translate/core';
import { SingleSignOn } from 'src/app/module/auth/interface/sso.interface';

@Component({
    selector: 'sso-button',
    templateUrl: './sso-button.component.html',
    styleUrls: ['./sso-button.component.scss'],
    standalone: true,
    imports: [TranslateModule, FmsIconComponent],
})
export class SsoButtonComponent {
    @Input()
    ssoProperty: SingleSignOn;
}
