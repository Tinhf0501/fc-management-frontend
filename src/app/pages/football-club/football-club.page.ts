import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
    FcFormSearchComponent,
    FootballClubGridComponent,
    FootballClubService,
    SearchFcRequest,
    SearchFcResponse,
} from '@fms-module/football-club';
import { FmsBoxComponent } from '@fms/box';
import { DestroyService, Pagination } from '@fms/core';
import { PaginationComponent } from '@fms/pagination';
import { ActionEvent } from '@fms/table';
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
    private readonly router = inject(Router);

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

    public clickAction(action: { event: ActionEvent; data?: any }): void {
        if (action.event === ActionEvent.CREATE) {
            this.router.navigate(['/football-club', 'create-football-club']);
        }
    }
}
