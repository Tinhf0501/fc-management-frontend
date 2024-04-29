import { Component, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
    CreateFCMemberRequest,
    CreateMemberFormComponent,
} from '@fms-module/member';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'create-member-modal',
    templateUrl: './create-member-modal.component.html',
    styleUrls: ['./create-member-modal.component.scss'],
    standalone: true,
    imports: [CreateMemberFormComponent, TranslateModule],
})
export class CreateMemberModal {
    public member: CreateFCMemberRequest;
    public formGroup: FormGroup;
    public avatar: File;
    private activeModal: NgbActiveModal = inject(NgbActiveModal);

    public onSaveMember() {
        if (this.formGroup.invalid) {
            this.formGroup.markAllAsTouched();
            return;
        }
        const member = this.formGroup.getRawValue();
        if (this.avatar) {
            member.avatar = this.avatar;
        }
        this.activeModal.close(member);
    }

    public onCloseModal(): void {
        this.activeModal.dismiss();
    }
}
