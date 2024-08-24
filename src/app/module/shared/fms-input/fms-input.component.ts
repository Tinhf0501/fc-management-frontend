import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
    AbstractControl,
    FormsModule,
    NG_VALUE_ACCESSOR
} from '@angular/forms';
import { DefaultControlValueAccessor } from '@fms/core';
import { FmsIconComponent } from '@fms/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FmsMessageErrorComponent } from '../fms-message-error/fms-message-error.component';

@Component({
    selector: 'fms-input',
    templateUrl: './fms-input.component.html',
    styleUrls: ['./fms-input.component.scss'],
    standalone: true,
    imports: [
        NgIf,
        FormsModule,
        NgSwitch,
        NgSwitchCase,
        NzInputModule,
        FmsIconComponent,
        FmsMessageErrorComponent,
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: FmsInputComponent,
        }
    ],
})
export class FmsInputComponent extends DefaultControlValueAccessor {
    @Input({ required: true }) control: AbstractControl;
    @Input() label: string;

    @Input() type: string = 'text';

    @Input() variant: 'input' | 'textarea' = 'input';

    @Input() placeholder: string = '';

    @Input() errorsMessage: { [name: string]: string };

    @Input() required: boolean = false;


    touched = false;
    

    onChangeValue(): void {
        this.onChangeFn(this.value);
        this.markAsTouched();
    }

    markAsTouched() {
        if (!this.touched) {
            this.onTouchedFn();
            this.touched = true;
        }
    }
}
