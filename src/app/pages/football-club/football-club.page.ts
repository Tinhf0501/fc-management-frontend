import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
    DestroyService,
    FmsBoxComponent,
    Pagination,
    PaginationComponent,
} from '@fms-module/common';
import {
    FcFormSearchComponent,
    FootballClubGridComponent,
    FootballClubService,
    SearchFcRequest,
    SearchFcResponse,
} from '@fms-module/football-club';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { takeUntil } from 'rxjs';
@Component({
    selector: 'football-club',
    templateUrl: './football-club.page.html',
    styleUrls: ['./football-club.page.scss'],
    standalone: true,
    imports: [
        FcFormSearchComponent,
        FootballClubGridComponent,
        PaginationComponent,
        FmsBoxComponent,

        RouterLink,
        TranslateModule,
        FontAwesomeModule,
    ],
    providers: [DestroyService],
})
export class FootballClubPage implements OnInit {
    private readonly fcService = inject(FootballClubService);
    private readonly destroyService = inject(DestroyService);

    public pagination: Pagination = new Pagination(1, 0);
    public footballClubs: SearchFcResponse[];

    private searchFcRequest: SearchFcRequest = {};

    public ngOnInit(): void {
        this.paginate(this.pagination);
    }

    public ngOnSearch(searchFcRequest: SearchFcRequest): void {
        this.searchFcRequest = searchFcRequest;
        this.paginate(this.pagination);
    }

    public paginate(pagination: Pagination): void {
        this.pagination = pagination;
        this.fcService
            .searchFc({
                data: this.searchFcRequest,
                pageNo: pagination.page,
                pageSize: pagination.pageSize,
            })
            .pipe(takeUntil(this.destroyService.$destroy))
            .subscribe((response) => {
                this.pagination.total = response.totalItems;
                this.footballClubs = response.items;
            });
    }
}
