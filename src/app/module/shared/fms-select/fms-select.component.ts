import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, computed, forwardRef, Input, Signal, TemplateRef } from '@angular/core';
import { ControlContainer, FormGroupDirective, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FmsInputComponent } from '../fms-input/fms-input.component';
import { FmsMessageErrorComponent } from '../fms-message-error/fms-message-error.component';

@Component({
    selector: 'fms-select',
    templateUrl: './fms-select.component.html',
    styleUrls: ['./fms-select.component.scss'],
    standalone: true,
    imports: [
        NgIf,
        NgFor,
        NzSelectModule,
        TranslateModule,
        FormsModule,
        NgTemplateOutlet,
        FmsMessageErrorComponent,
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: FmsSelectComponent,
            multi: true,
        }
    ],
})
export class FmsSelectComponent<T> extends FmsInputComponent {
    @Input({ required: true }) items: Signal<T[]>;
    @Input() bindLabel: string;
    @Input() bindValue: string;
    @Input() multiple: boolean = false;
    @Input() clearable: boolean = true;
    @Input() group: keyof T;

    @Input() customOptionTemplate: TemplateRef<any>;

    options: Signal<any[]> = computed(() => {
        const items = this.items();
        if (this.group) {
            const map = items.reduce((pre, cur) => {
                const items = pre.get(cur[this.group]) ?? [];
                items.push({
                    label: cur[this.bindLabel],
                    value: cur[this.bindValue],
                    ...cur,
                });
                pre.set(cur[this.group], items);
                return pre;
            }, new Map());
            return Array.from(map, ([key, value]) => ({
                groupLabel: key,
                items: value,
            }));
        }
        return items.map((x) => ({
            label: x[this.bindLabel],
            value: x[this.bindValue],
            ...x,
        }));
    });
}
