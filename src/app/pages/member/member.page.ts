import { Component, OnInit } from '@angular/core';
import {
    MemberGridComponent,
    MemberFormSearchComponent,
} from '@fms-module/member';
import {
    PaginationComponent,
    Pagination,
} from '@fms-module/common';

@Component({
    selector: 'member-page',
    templateUrl: './member.page.html',
    styleUrls: ['./member.page.scss'],
    standalone: true,
    imports: [
        MemberGridComponent,
        MemberFormSearchComponent,
        PaginationComponent,
    ],
})
export class MemberPage implements OnInit {

    public pagination: Pagination = new Pagination(1, 70);

    public ngOnInit(): void {

    }
}
