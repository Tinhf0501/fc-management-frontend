import { Component } from '@angular/core';
import { MatchResultCreateFormComponent } from '@fms-module/match-result';
import { ScorerGridComponent } from '@fms-module/scorer';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonBackComponent } from '@fms-module/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'create-match-result-page',
    templateUrl: './create-match-result.page.html',
    styleUrls: ['./create-match-result.page.scss'],
    standalone: true,
    imports: [
        MatchResultCreateFormComponent,
        ScorerGridComponent,
        TranslateModule,
        ButtonBackComponent,
        FontAwesomeModule,
    ],
})
export class CreateMatchResultPage {}
