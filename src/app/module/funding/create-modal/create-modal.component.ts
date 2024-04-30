import { Component, inject } from '@angular/core';
import { FundingCreateFormComponent } from '@fms-module/funding';
import { TranslateModule } from '@ngx-translate/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'funding-create-modal',
    templateUrl: './create-modal.component.html',
    styleUrls: ['./create-modal.component.scss'],
    standalone: true,
    imports: [FundingCreateFormComponent, TranslateModule],
})
export class FundingCreateModalComponent {
    private activeModal: NgbActiveModal = inject(NgbActiveModal);

    public closeModal(): void {
        this.activeModal.close();
    }
}
