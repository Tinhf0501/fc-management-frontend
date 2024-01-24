import { Component } from "@angular/core";
import { MemberGridComponent } from "../../../module/member";

@Component({
    selector: 'create-fc-page',
    templateUrl: './create-football-club.page.html',
    styleUrls: ['./create-football-club.page.scss'],
    standalone: true,
    imports: [
        MemberGridComponent,
    ],
})
export class CreateFootballClubPage {

}

