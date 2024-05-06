import { Component, Input } from '@angular/core';
import { ButtonBackComponent, DestroyService } from '@fms-module/common';
import {
    CreateFcFormComponent,
    UpdateFcRequest,
} from '@fms-module/football-club';
import { MemberGridWrapperComponent } from '@fms-module/member';
import { ListMediaComponent } from '@fms-module/resource';
import { TranslateModule } from '@ngx-translate/core';
import { CreateFootballClubPage } from '../create-football-club/create-football-club.page';
import { takeUntil } from 'rxjs';

@Component({
    selector: 'update-football-club',
    templateUrl: '../create-football-club/create-football-club.page.html',
    styleUrls: ['../create-football-club/create-football-club.page.scss'],
    standalone: true,
    imports: [
        TranslateModule,

        CreateFcFormComponent,
        ButtonBackComponent,
        ListMediaComponent,
        MemberGridWrapperComponent,
    ],
    providers: [DestroyService],
})
export class UpdateFootballClubPage extends CreateFootballClubPage {
    @Input() fcId: number;

    public override ngOnInit(): void {
        super.ngOnInit();
        // todo: call api to get FC Detail By fcId
    }

    public override onSubmitForm(): void {
        const updateFcRequest: UpdateFcRequest = {
            fcId: this.fcId,
            fcName: '',
            description: '',
            fcMembers: this.members,
            logo: this.avatar,
            media: this.media.files,
            pathMediaIdsDelete: [''],
            fcMemberIdsDelete: [1],
        };

        this.fcService
            .updateFc(updateFcRequest)
            .pipe(takeUntil(this.destroyService.$destroy))
            .subscribe((res) => {});
    }
}
