import { Component, Input, inject } from '@angular/core';
import { Location } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'button-back',
    templateUrl: './button-back.component.html',
    styleUrls: ['./button-back.component.scss'],
    standalone: true,
    imports: [TranslateModule, FontAwesomeModule],
})
export class ButtonBackComponent {
    @Input()
    public class: string[] = ['btn', 'btn-sm', 'btn-danger'];

    private location: Location = inject(Location);

    public goBack(): void {
        this.location.back();
    }
}
