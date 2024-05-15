import { AsyncPipe, NgIf } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SidebarService } from '@fms-layout/main';
import { DestroyService, FmsBoxComponent } from '@fms-module/common';
import {
    DetailFCResponse,
    FcInformationComponent,
    FootballClubService,
} from '@fms-module/football-club';
import { MemberGridComponent } from '@fms-module/member';
import { Observable } from 'rxjs';

@Component({
    selector: 'detail-football-club',
    templateUrl: './detail-football-club.page.html',
    standalone: true,
    imports: [
        FcInformationComponent,
        MemberGridComponent,
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
