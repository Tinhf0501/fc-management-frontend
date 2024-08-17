import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FmsButtonComponent } from '../fms-button/fms-button.component';

@Component({
    selector: 'search-wrapper',
    templateUrl: './search-wrapper.component.html',
    standalone: true,
    imports: [TranslateModule, FmsButtonComponent, ReactiveFormsModule],
})
export class SearchWrapperComponent {
    @Input() formGroup: FormGroup;

    @Output() search = new EventEmitter<FormGroup>();

    public ngOnSearch(): void {
        this.search.emit(this.formGroup);
    }
}
