import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateDonateFormComponent } from '@fms-module/donate';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'create-donate-modal',
    templateUrl: './create-donate-modal.component.html',
    styleUrls: ['./create-donate-modal.component.scss'],
    standalone: true,
    imports: [CreateDonateFormComponent, TranslateModule],
})
export class CreateDonateModalComponent {
    private activeModal: NgbActiveModal = inject(NgbActiveModal);

    public closeModal(): void {
        this.activeModal.dismiss();
    }
}
