import { Component, OnInit, inject } from '@angular/core';
import { BASE_MENU, MenuService } from '@fms-module/common';
import { Observable, take } from 'rxjs';
import { SidebarService } from './service/sidebar.service';
import { RouterOutlet } from '@angular/router';
import { MainHeaderComponent } from './components/header/header.component';
import { MainSidebarComponent } from './components/sidebar/sidebar.component';
import { TranslateModule } from '@ngx-translate/core';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'main-layout',
    templateUrl: './main.layout.html',
    styleUrls: ['./main.layout.scss'],
    standalone: true,
    imports: [
        RouterOutlet,
        MainHeaderComponent,
        MainSidebarComponent,
        TranslateModule,
        AsyncPipe,
    ],
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
