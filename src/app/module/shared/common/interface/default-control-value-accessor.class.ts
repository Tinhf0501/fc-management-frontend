import { inject } from '@angular/core';
import { ControlContainer, ControlValueAccessor } from '@angular/forms';

export class DefaultControlValueAccessor implements ControlValueAccessor {
    protected controlContainer = inject(ControlContainer);

    protected value: any;
    protected disabled: boolean;
    protected onChangeFn: Function;
    protected onTouchedFn: Function;

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
        this.disabled = isDisabled;
    }
}
