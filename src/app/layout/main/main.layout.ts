import { Component, OnDestroy, OnInit, inject } from "@angular/core";
import { NavigationStart, Router, Scroll } from "@angular/router";
import { Observable, Subject, filter, takeUntil } from "rxjs";
import { Menu } from "src/app/common/menu/menu.interface";
import { MenuService } from "src/app/common/menu/menu.service";
import { SidebarService } from "./service/sidebar.service";

@Component({
    selector: 'main-layout',
    templateUrl: './main.layout.html',
    styleUrls: ['./main.layout.scss']
})
export class MainLayout implements OnInit, OnDestroy {

    private router: Router = inject(Router);
    private menuService: MenuService = inject(MenuService);
    private sidebarService: SidebarService = inject(SidebarService);
    private unsubscribe$: Subject<void> = new Subject();

    public title$: Observable<string> = this.sidebarService.getValueTitle();

    public ngOnInit(): void {
        const menus = this.menuService.getValueMenu();
        this.router.events
            .pipe(
                filter(res => res instanceof NavigationStart || res instanceof Scroll),
                takeUntil(this.unsubscribe$)
            )
            .subscribe((res: (NavigationStart | Scroll)) => {
                const url = res instanceof NavigationStart ? res.url : res.routerEvent.url;
                const menu = this.findTitleByUrl(menus, url)
                this.sidebarService.changeTitle(menu?.label ?? '');
            })
    }

    public findTitleByUrl(menu: Menu[], value: string): Menu {
        return menu.reduce((x, cur) => {
            if (cur.children) {
                const item = this.findTitleByUrl(cur.children, value);
                if (item) return item;
            }
            if (cur.link === value) return cur;
            return x;
        }, null);
    }

    public ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}