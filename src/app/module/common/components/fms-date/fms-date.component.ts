import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { DefaultControlValueAccessor } from '../../interface';
import { formatDate } from '../../utils';
import { FmsMessageErrorComponent } from '../fms-message-error/fms-message-error.component';

const OUTPUT_FORMAT = 'yyyy-MM-dd';

@Component({
    selector: 'fms-date',
    templateUrl: './fms-date.component.html',
    styleUrls: ['./fms-date.component.scss'],
    standalone: true,
    imports: [NgIf, NzDatePickerModule, FormsModule, FmsMessageErrorComponent],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: FmsDateComponent,
        },
    ],
})
export class FmsDateComponent extends DefaultControlValueAccessor {
    @Input() label: string;
    @Input() formControlName: string;
    @Input() required: boolean;
    @Input() errorsMessage: { [name: string]: string };
    @Input() placeholder: string;
    @Input() min: string | Date;
    @Input() max: string | Date;

    disableDateFn = (date: Date): boolean => {
        const dateFmt = formatDate(date, OUTPUT_FORMAT);
        if (this.min && !this.max) {
            return formatDate(this.min, OUTPUT_FORMAT) > dateFmt;
        }
        if (this.max && !this.min) {
            return formatDate(this.max, OUTPUT_FORMAT) < dateFmt;
        }
        if (this.min && this.max) {
            return (
                formatDate(this.max, OUTPUT_FORMAT) < dateFmt ||
                formatDate(this.min, OUTPUT_FORMAT) > dateFmt
            );
        }
        return false;
    };

    get control() {
        const formGroup = this.controlContainer.control as FormGroup;
        return formGroup.controls[this.formControlName];
    }

    onChange(value): void {
        this.onChangeFn(formatDate(value, OUTPUT_FORMAT));
        this.onTouchedFn();
    }
}
