import { AsyncPipe, NgIf } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SidebarService } from '@fms-layout/main';
import {
    DetailFCResponse,
    FcInformationComponent,
    FootballClubService,
} from '@fms-module/football-club';
import { FundingInformationComponent } from '@fms-module/funding';
import {
    MatchResultGridComponent,
    MatchResultInformationComponent,
} from '@fms-module/match-result';
import { MemberGridComponent } from '@fms-module/member';
import { ListMediaComponent } from '@fms-module/resource';
import { FmsBoxComponent } from '@fms/box';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'detail-football-club',
    templateUrl: './detail-football-club.page.html',
    standalone: true,
    imports: [
        FcInformationComponent,
        MemberGridComponent,
        FundingInformationComponent,
        MatchResultInformationComponent,
        MatchResultGridComponent,
        ListMediaComponent,

        TranslateModule,
        AsyncPipe,
        NgIf,
        FmsBoxComponent,
    ],
})
export class DetailFootballClubPage implements OnInit {
    @Input() fcId: number;

    @Input() fcName: string;

    private readonly sidebarService = inject(SidebarService);
    private readonly titleService = inject(Title);
    private readonly fcService = inject(FootballClubService);

    public $detailFc: Observable<DetailFCResponse>;

    public ngOnInit(): void {
        this.sidebarService.changeTitle(this.fcName);
        this.titleService.setTitle(`${this.fcName.toUpperCase()} | FMS`);
        this.$detailFc = this.fcService.getDetailFc(this.fcId);
    }
}
