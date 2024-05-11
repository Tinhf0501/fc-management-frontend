import { AfterViewChecked, Component, Input, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ButtonBackComponent, DestroyService } from '@fms-module/common';
import {
    CreateFcFormComponent,
    UpdateFcRequest,
} from '@fms-module/football-club';
import { MemberGridWrapperComponent } from '@fms-module/member';
import { ListMediaComponent } from '@fms-module/resource';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { takeUntil } from 'rxjs';
import { CreateFootballClubPage } from '../create-football-club/create-football-club.page';
import { SidebarService } from '@fms-layout/main';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'update-football-club',
    templateUrl: '../create-football-club/create-football-club.page.html',
    styleUrls: ['../create-football-club/create-football-club.page.scss'],
    standalone: true,
    imports: [
        TranslateModule,
        FontAwesomeModule,

        CreateFcFormComponent,
        ButtonBackComponent,
        ListMediaComponent,
        MemberGridWrapperComponent,
    ],
    providers: [DestroyService],
})
export class UpdateFootballClubPage extends CreateFootballClubPage {
    @Input() fcId: number;
    @Input() fcName: string;

    private readonly titleService = inject(Title);
    private readonly sidebarService = inject(SidebarService);
    private readonly translateService = inject(TranslateService);

    public override ngOnInit(): void {
        super.ngOnInit();
        this.fcName ??= 'FOOTBALL_CLUB.UPDATE.TITLE';
        this.sidebarService.changeTitle(this.fcName);
        this.titleService.setTitle(
            `${this.translateService.instant(this.fcName).toUpperCase()} | FMS`,
        );
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
