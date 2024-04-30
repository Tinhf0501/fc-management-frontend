import { Component, Input } from '@angular/core';
import { FmsInputComponent } from '../fms-input/fms-input.component';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
    KeyValuePipe,
    NgFor,
    NgIf,
    NgSwitch,
    NgSwitchCase,
} from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'fms-select',
    templateUrl: './fms-select.component.html',
    standalone: true,
    imports: [
        NgFor,
        NgIf,
        NgSwitch,
        NgSwitchCase,
        NgSelectModule,
        TranslateModule,
        FormsModule,

        KeyValuePipe,
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: FmsSelectComponent,
            multi: true,
        },
    ],
})
export class FmsSelectComponent extends FmsInputComponent {
    @Input() items: any[];
    @Input() bindLabel: string;
    @Input() bindValue: string;
    @Input() multiple: boolean = false;
}
