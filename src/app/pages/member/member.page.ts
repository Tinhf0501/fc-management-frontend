import { Component, inject, OnInit } from '@angular/core';
import {
    CreateMemberFormComponent,
    MemberFormSearchComponent,
    MemberGridComponent
} from '@fms-module/member';
import { FmsBoxComponent } from '@fms/box';
import { FmsButtonComponent } from '@fms/button';
import { Pagination } from '@fms/core';
import { ModalService, ModalSize } from '@fms/modal';
import { ActionEvent } from '@fms/table';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { title } from 'process';

@Component({
    selector: 'member-page',
    templateUrl: './member.page.html',
    styleUrls: ['./member.page.scss'],
    standalone: true,
    imports: [
        MemberGridComponent,
        MemberFormSearchComponent,
        TranslateModule,

        FmsBoxComponent
    ],
})
export class MemberPage implements OnInit {
    public pagination: Pagination = new Pagination(1, 70);

    private readonly modalService = inject(ModalService);
    private readonly translateService = inject(TranslateService)

    public ngOnInit(): void {}

    public openAddMemberModal(): void {
        this.modalService.openModal({
            size: ModalSize.LARGE,
            title: this.translateService.instant('MEMBER.CREATE_TITLE'),
            content: CreateMemberFormComponent
        });
    }

    public clickAction(data: {event: ActionEvent, data?: any}): void {
        if (data.event === ActionEvent.CREATE) {
            this.openAddMemberModal();
            return;
        }
    }
}
