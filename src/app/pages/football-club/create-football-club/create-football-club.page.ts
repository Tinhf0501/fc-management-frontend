import { Component } from '@angular/core';
import { MemberGridComponent } from '@fms-module/member';

import { CreateFcFormComponent } from '@fms-module/football-club';

@Component({
    selector: 'create-fc-page',
    templateUrl: './create-football-club.page.html',
    styleUrls: ['./create-football-club.page.scss'],
    standalone: true,
    imports: [MemberGridComponent, CreateFcFormComponent],
})
export class CreateFootballClubPage {}
