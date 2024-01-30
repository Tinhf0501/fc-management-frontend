import { Component, inject } from '@angular/core';
import { MemberGridComponent, CreateMemberModal } from '@fms-module/member';
import { CreateFcFormComponent } from '@fms-module/football-club';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'create-fc-page',
    templateUrl: './create-football-club.page.html',
    styleUrls: ['./create-football-club.page.scss'],
    standalone: true,
    imports: [
        MemberGridComponent,
        CreateFcFormComponent,
        TranslateModule,
    ],
})
export class CreateFootballClubPage {

    private modalService: NgbModal = inject(NgbModal);

    public openAddMemberModal(): void {
        this.modalService.open(CreateMemberModal, {
            size: 'lg',
            centered: true,
        });
    }
}
