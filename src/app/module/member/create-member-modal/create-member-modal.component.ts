import { Component, OnInit, inject } from '@angular/core';
import { CreateMemberFormComponent } from '@fms-module/member';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';


@Component({
    selector: 'create-member-modal',
    templateUrl: './create-member-modal.component.html',
    styleUrls: ['./create-member-modal.component.scss'],
    standalone: true,
    imports: [
        CreateMemberFormComponent,
        TranslateModule,
    ],
})
export class CreateMemberModal implements OnInit {

    private activeModal: NgbActiveModal = inject(NgbActiveModal);

    public ngOnInit(): void {

    }

    public closeModal(): void {
        this.activeModal.dismiss();
    }
}
