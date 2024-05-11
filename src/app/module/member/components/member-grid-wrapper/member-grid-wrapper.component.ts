import { Component, EventEmitter, Output, inject, Input } from '@angular/core';
import { MemberGridComponent } from '../member-grid/member-grid.component';
import { TranslateModule } from '@ngx-translate/core';
import { CreateMemberModal } from '../create-member-modal/create-member-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateFCMemberRequest } from '../../interface';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'member-grid-wrapper',
    templateUrl: './member-grid-wrapper.component.html',
    standalone: true,
    imports: [MemberGridComponent, TranslateModule, FontAwesomeModule],
})
export class MemberGridWrapperComponent {
    private readonly modalService = inject(NgbModal);

    @Input() members: CreateFCMemberRequest[] = [];
    @Output() changeMember = new EventEmitter<CreateFCMemberRequest[]>();

    public openAddMemberModal(): void {
        this.modalService
            .open(CreateMemberModal, {
                size: 'lg',
                centered: true,
            })
            .closed.subscribe((res) => {
                if (!res) return;
                this.members = [res, ...this.members];
                this.changeMember.emit(this.members);
            });
    }

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
}
