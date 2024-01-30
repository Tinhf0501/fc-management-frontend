import { Component, OnInit, inject } from '@angular/core';
import {
    MemberGridComponent,
    MemberFormSearchComponent,
    CreateMemberModal,
} from '@fms-module/member';
import {
    PaginationComponent,
    Pagination,
} from '@fms-module/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'member-page',
    templateUrl: './member.page.html',
    styleUrls: ['./member.page.scss'],
    standalone: true,
    imports: [
        MemberGridComponent,
        MemberFormSearchComponent,
        PaginationComponent,
        TranslateModule,
    ],
})
export class MemberPage implements OnInit {

    public pagination: Pagination = new Pagination(1, 70);

    private modalService: NgbModal = inject(NgbModal);

    public ngOnInit(): void {

    }

    public openAddMemberModal(): void {
        this.modalService.open(CreateMemberModal, {
            size: 'lg',
            centered: true,
        });
    }
}
