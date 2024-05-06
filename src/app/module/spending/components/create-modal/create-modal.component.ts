import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SpendingCreateFormComponent } from '../create-form/create-form.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'spending-create-modal',
    templateUrl: './create-modal.component.html',
    styleUrls: ['./create-modal.component.scss'],
    standalone: true,
    imports: [TranslateModule, SpendingCreateFormComponent],
})
export class SpendingCreateModalComponent {
    private activeModal: NgbActiveModal = inject(NgbActiveModal);

    public closeModal(): void {
        this.activeModal.close();
    }
}
