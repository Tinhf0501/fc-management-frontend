import { Component, OnInit, inject } from '@angular/core';
import { MenuService, BASE_MENU } from '@fms-common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    private menuService: MenuService = inject(MenuService);

    public ngOnInit(): void {
        this.menuService.setMenu(BASE_MENU);
    }
}
