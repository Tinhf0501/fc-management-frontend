import { Component, OnInit, QueryList, ViewChildren, inject } from '@angular/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { SidebarService } from '../../service/sidebar.service';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { Language } from '../../model/language.interface';
import { LANGUAGES } from '@fms-common';

@Component({
    selector: 'main-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class MainHeaderComponent implements OnInit {
    @ViewChildren(NgbCollapse) ngbCollapses: QueryList<NgbCollapse>;

    private sidebarService: SidebarService = inject(SidebarService);
    private translateService: TranslateService = inject(TranslateService);

    public language: string;
    public languages: Language[] = LANGUAGES;

    public title$: Observable<string> = this.sidebarService.getValueTitle();

    public ngOnInit(): void {
        this.language = localStorage.getItem('language') ?? this.translateService.getDefaultLang();
    }

    public onChangeLanguage(language: Language): void {
        this.translateService.use(language.value);
        localStorage.setItem('language', language.value);
    }

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
