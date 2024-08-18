import { KeyValuePipe, NgIf, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'fms-message-error',
    templateUrl: './fms-message-error.component.html',
    standalone: true,
    imports: [NgIf, NgFor, TranslateModule, KeyValuePipe],
})
export class FmsMessageErrorComponent {
    @Input() isError: boolean = false;
    @Input({ required: true }) errorsMessage: { [key: string]: string };
    @Input({ required: true }) errors: { [key: string]: any };
}
