import { Component, Input } from "@angular/core";
import { SingleSignOn } from "src/app/common/sso/sso.interface";

@Component({
    selector: 'sso-button',
    templateUrl: './sso-button.component.html',
    styleUrls: ['./sso-button.component.scss'],
    standalone: true
})
export class SsoButtonComponent {

    @Input()
    ssoProperty: SingleSignOn;

}
