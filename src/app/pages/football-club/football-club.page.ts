import { DEFAULT_PAGE_SIZE } from './../../module/common/pagination/constant/pagination.const';
import { Component } from "@angular/core";
import {
    FcFormSearchComponent,
    FootballClubGridComponent
} from "../../module/football-club"
import { PaginationComponent } from "src/app/module/common";
import { Pagination } from "src/app/module/common/pagination/model/pagination.model";


@Component({
    selector: 'football-club',
    templateUrl: './football-club.page.html',
    styleUrls: ['./football-club.page.scss'],
    standalone: true,
    imports: [
        FcFormSearchComponent,
        FootballClubGridComponent,
        PaginationComponent
    ]
})
export class FootballClubPage {

    public pagination: Pagination = new Pagination(1, 100);
}
