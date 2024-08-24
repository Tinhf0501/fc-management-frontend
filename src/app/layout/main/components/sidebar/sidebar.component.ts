import { Component, inject } from '@angular/core';
import { SidebarService } from '@fms-layout/main';
import { Observable } from 'rxjs';
import { MenuService, Menu } from '@fms/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
    AsyncPipe,
    NgFor,
    NgIf,
    NgStyle,
    NgTemplateOutlet,
} from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FmsIconComponent } from '@fms/icon';

@Component({
    selector: 'main-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    standalone: true,
    imports: [
        RouterLink,
        NgTemplateOutlet,
        RouterLinkActive,
        AsyncPipe,
        TranslateModule,
        NgStyle,
        NgIf,
        NgFor,
        FmsIconComponent,
    ],
})
export class MainSidebarComponent {
    private sidebarService: SidebarService = inject(SidebarService);
    private menuService: MenuService = inject(MenuService);

    public sidebarStatus$: Observable<boolean> =
        this.sidebarService.getSidebarStatus();
    public menu$: Observable<Menu[]> = this.menuService.getMenu();

    public routeLink(link: string, li: HTMLElement): void {}
}
