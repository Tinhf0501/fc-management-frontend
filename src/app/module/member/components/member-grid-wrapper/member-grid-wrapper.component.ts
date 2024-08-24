import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ModalService, ModalSize } from '@fms/modal';
import { ActionEvent } from '@fms/table';
import { TranslateService } from '@ngx-translate/core';
import { CreateFCMemberRequest } from '../../interface';
import { CreateMemberFormComponent } from '../create-member-form/create-member-form.component';
import { MemberGridComponent } from '../member-grid/member-grid.component';
import { Pagination } from '@fms/core';

@Component({
    selector: 'member-grid-wrapper',
    templateUrl: './member-grid-wrapper.component.html',
    standalone: true,
    imports: [MemberGridComponent],
})
export class MemberGridWrapperComponent {
    private readonly modalService = inject(ModalService);
    private readonly translateService = inject(TranslateService);

    @Input() members: CreateFCMemberRequest[] = [];
    @Output() changeMember = new EventEmitter<CreateFCMemberRequest[]>();

    public pagination = new Pagination(1, this.members.length ?? 10);

    public onUpdateMember(param: {
        data: CreateFCMemberRequest;
        index: number;
    }): void {
        this.members[param.index] = param.data;
        this.members = [...this.members];
        this.changeMember.emit(this.members);
    }

    public onDeleteMember(rowIndex: number): void {
        this.members = this.members.filter((_, index) => index !== rowIndex);
        this.changeMember.emit(this.members);
    }

    public openAddMemberModal(): void {
        this.modalService.openModal({
            size: ModalSize.LARGE,
            title: this.translateService.instant('MEMBER.CREATE_TITLE'),
            content: CreateMemberFormComponent
        })
        .afterClose
        .subscribe((res) => {
            if (!res) return;
            this.members = [res, ...this.members];
            this.changeMember.emit(this.members);
        })
    }

    public clickAction(data: {event: ActionEvent, data?: any}): void {
        if (data.event === ActionEvent.CREATE) {
            this.openAddMemberModal();
            return;
        }
    }
}
