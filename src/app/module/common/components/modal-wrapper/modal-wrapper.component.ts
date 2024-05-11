import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'modal-wrapper',
    templateUrl: './modal-wrapper.component.html',
    standalone: true,
    imports: [TranslateModule],
})
export class ModalWrapperComponent {
    @Input() headerTitle: string;

    @Output() cancel = new EventEmitter<void>();
    @Output() save = new EventEmitter<void>();

    private readonly activeModal = inject(NgbActiveModal);

    public ngOnSave(): void {
        this.save.emit();
    }

    public ngOnCancel(): void {
        this.cancel.emit();
        this.activeModal.close();
    }
}
