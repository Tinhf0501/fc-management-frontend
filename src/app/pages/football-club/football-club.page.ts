import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
    FcFormSearchComponent,
    FootballClubGridComponent,
} from '@fms-module/football-club';
import { PaginationComponent, Pagination } from '@fms-module/common';

@Component({
    selector: 'football-club',
    templateUrl: './football-club.page.html',
    styleUrls: ['./football-club.page.scss'],
    standalone: true,
    imports: [
        FcFormSearchComponent,
        FootballClubGridComponent,
        PaginationComponent,
        RouterLink,
    ],
})
export class FootballClubPage {
    public pagination: Pagination = new Pagination(1, 100);
}
