import { Component, inject } from '@angular/core';
import { SidebarService } from '@fms-layout/main';
import { Observable } from 'rxjs';
import { MenuService, Menu } from '@fms-module/common';

@Component({
    selector: 'main-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class MainSidebarComponent {
    private sidebarService: SidebarService = inject(SidebarService);
    private menuService: MenuService = inject(MenuService);

    public sidebarStatus$: Observable<boolean> = this.sidebarService.getSidebarStatus();
    public menu$: Observable<Menu[]> = this.menuService.getMenu();

    public routeLink(link: string, li: HTMLElement): void {}
}
