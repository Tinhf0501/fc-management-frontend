import { Component, OnInit, inject } from '@angular/core';
import { MenuService, BASE_MENU } from '@fms-common';
import * as vn from '../assets/i18n/vn.json';
import * as en from '../assets/i18n/en.json';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    private menuService: MenuService = inject(MenuService);
    private translateService: TranslateService = inject(TranslateService);

    public ngOnInit(): void {
        this.menuService.setMenu(BASE_MENU);
        this.translateService.setTranslation('vn', vn);
        this.translateService.setTranslation('en', en);
    }
}
