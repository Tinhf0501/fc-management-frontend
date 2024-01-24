import {
    Component,
    QueryList,
    ViewChild,
    ViewChildren,
    inject,
} from '@angular/core';
import { SidebarService } from '../../service/sidebar.service';
import { Observable } from 'rxjs';
import { MenuService } from 'src/app/common/menu/menu.service';
import { Menu } from 'src/app/common/menu/menu.interface';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'main-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class MainSidebarComponent {
    @ViewChildren(NgbCollapse)
    private ngbCollapses: QueryList<NgbCollapse>;

    private sidebarService: SidebarService = inject(SidebarService);
    private menuService: MenuService = inject(MenuService);

    public sidebarStatus$: Observable<boolean> =
        this.sidebarService.getSidebarStatus();
    public menu$: Observable<Menu[]> = this.menuService.getMenu();

    public routeLink(link: string, li: HTMLElement): void {}
}
