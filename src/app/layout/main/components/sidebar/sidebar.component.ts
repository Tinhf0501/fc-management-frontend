import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BASE_MENU } from '@fms/core';
import { FmsIconComponent } from '@fms/icon';
import { TranslateModule } from '@ngx-translate/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@Component({
    selector: 'main-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    standalone: true,
    imports: [
        RouterLink,
        NgTemplateOutlet,
        TranslateModule,
        NgIf,
        NgFor,
        FmsIconComponent,

        NzMenuModule,
        NzToolTipModule,
    ],
})
export class MainSidebarComponent {
    @Input() isCollapsed: boolean;

    public menus = BASE_MENU;
}
