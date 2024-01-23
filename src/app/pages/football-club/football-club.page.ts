import { Component } from "@angular/core";
import { 
    FcFormSearchComponent,
    FootballClubGridComponent
} from "../../module/football-club"


@Component({
    selector: 'football-club',
    templateUrl: './football-club.page.html',
    styleUrls: ['./football-club.page.scss'],
    standalone: true,
    imports: [
        FcFormSearchComponent,
        FootballClubGridComponent,
    ]
})
export class FootballClubPage {

}
