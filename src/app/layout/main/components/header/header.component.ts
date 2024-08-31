import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SidebarService } from '@fms-layout/main';
import { FmsButtonComponent } from '@fms/button';
import { LanguageComponent } from '@fms/select/language';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'main-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports: [
        TranslateModule,
        AsyncPipe,
        LanguageComponent,
        FmsButtonComponent,
    ],
})
export class MainHeaderComponent {
    private sidebarService: SidebarService = inject(SidebarService);

    public title$: Observable<string> = this.sidebarService.getValueTitle();
}
