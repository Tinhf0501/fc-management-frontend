import { Component, OnInit, inject } from '@angular/core';
import { Observable, take } from 'rxjs';
import { SidebarService } from './service/sidebar.service';
import { MenuService, BASE_MENU } from '@fms-module/common';

@Component({
    selector: 'main-layout',
    templateUrl: './main.layout.html',
    styleUrls: ['./main.layout.scss'],
})
export class MainLayout implements OnInit {
    private sidebarService: SidebarService = inject(SidebarService);
    private menuService: MenuService = inject(MenuService);

    public title$: Observable<string> = this.sidebarService
        .getValueTitle()
        .pipe(take(1));

    public ngOnInit(): void {
        this.menuService.setMenu(BASE_MENU);
    }
}
