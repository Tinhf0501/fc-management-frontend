import { Component, QueryList, ViewChildren, inject } from '@angular/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { SidebarService } from '@fms-layout/main';
import { Observable } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';
import { AsyncPipe } from '@angular/common';
import { LanguageComponent } from '@fms/select/language';
import { FmsButtonComponent } from '@fms/button';

@Component({
    selector: 'main-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports: [
        NgbCollapse,
        TranslateModule,
        AsyncPipe,
        LanguageComponent,
        FmsButtonComponent,
    ],
})
export class MainHeaderComponent {
    @ViewChildren(NgbCollapse) ngbCollapses: QueryList<NgbCollapse>;

    private sidebarService: SidebarService = inject(SidebarService);

    public title$: Observable<string> = this.sidebarService.getValueTitle();

    public openSidebarMobile() {
        this.sidebarService.toggleSidebar();
    }

    public toggleDropdown(self: NgbCollapse): void {
        this.ngbCollapses.forEach((x) => {
            if (x !== self && !x['_isCollapsed']) {
                x.toggle();
            }
        });
        self.toggle();
    }
}
