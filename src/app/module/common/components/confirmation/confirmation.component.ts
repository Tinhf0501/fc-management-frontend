import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Confirmation } from '../../interface';
import { SafePipe } from '../../pipe';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'confirmation',
    templateUrl: './confirmation.component.html',
    standalone: true,
    imports: [NgIf, TranslateModule, SafePipe],
})
export class ConfirmationComponent {
    private readonly activeModal = inject(NgbActiveModal);

    public confirmation: Confirmation;

    public onCancel(): void {
        this.activeModal.close(false);
    }

    public onAccept(): void {
        this.activeModal.close(true);
    }
}
