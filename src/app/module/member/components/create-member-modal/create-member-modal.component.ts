import { Component, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { CreateMemberFormComponent } from '../create-member-form/create-member-form.component';
import { CreateFCMemberRequest } from '../../interface';

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
        this.formGroup.markAllAsTouched();
        if (this.formGroup.invalid) {
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
