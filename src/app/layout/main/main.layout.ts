import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { Observable, take } from 'rxjs';
import { MainHeaderComponent } from './components/header/header.component';
import { MainSidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarService } from './service/sidebar.service';

@Component({
    selector: 'main-layout',
    templateUrl: './main.layout.html',
    styleUrls: ['./main.layout.scss'],
    standalone: true,
    imports: [
        RouterOutlet,
        MainHeaderComponent,
        MainSidebarComponent,

        NzLayoutModule,
    ],
})
export class MainLayout {
    public isCollapsed = true;
    private sidebarService: SidebarService = inject(SidebarService);

    public title$: Observable<string> = this.sidebarService
        .getValueTitle()
        .pipe(take(1));
}
