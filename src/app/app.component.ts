import { Component, OnInit, inject } from '@angular/core';
import { MenuService, BASE_MENU, LANGUAGES } from '@fms-common';
import { TranslateService } from '@ngx-translate/core';
import { Language } from './layout/main/model/language.interface';

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
        LANGUAGES.forEach(({ value, resourceUrl }: Language) => {
            import(resourceUrl)
                .then(resource => {
                    this.translateService.setTranslation(value, resource);
                })
        })
    }
}
