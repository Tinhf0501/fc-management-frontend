import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import {
    ControlContainer,
    ControlValueAccessor,
    FormGroup,
    FormsModule,
    NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FmsIconComponent } from '@fms/icon';
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
        },
    ],
})
export class FmsInputComponent implements ControlValueAccessor {
    @Input() label: string;

    @Input() type: string = 'text';

    @Input() variant: 'input' | 'textarea' = 'input';

    @Input() placeholder: string = '';

    @Input() errorsMessage: { [name: string]: string };

    @Input() formControlName: string;

    @Input() required: boolean = false;

    public controlContainer = inject(ControlContainer);

    public value: any;

    onChangeFn: (value) => void;
    onTouchedFn: () => void;

    isDisabled: boolean = false;
    touched = false;

    get control() {
        const formGroup = this.controlContainer.control as FormGroup;
        return formGroup.controls[this.formControlName];
    }

    onChangeValue(): void {
        this.onChangeFn(this.value);
        this.markAsTouched();
    }

    writeValue(obj: any): void {
        this.value = obj;
    }

    registerOnChange(fn: any): void {
        this.onChangeFn = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouchedFn = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }

    markAsTouched() {
        if (!this.touched) {
            this.onTouchedFn();
            this.touched = true;
        }
    }
}
