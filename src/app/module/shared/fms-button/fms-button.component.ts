import { NgIf } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { FmsIconComponent } from '@fms/icon';

@Component({
    selector: 'fms-button',
    templateUrl: './fms-button.component.html',
    standalone: true,
    imports: [
        NgIf,
        NzButtonModule,
        FmsIconComponent,
        NzSpaceModule,
        NzToolTipModule,

        RouterLink,
    ],
})
export class FmsButtonComponent {
    @Input() label: string;
    @Input() link: string;
    @Input() icon: string;
    @Input() disabled: boolean;
    @Input() tooltip: string;
    @Input() transparent: boolean;

    private readonly router = inject(Router);

    onClick(event: Event): void {
        if (this.link) {
            event.preventDefault();
            event.stopPropagation();
            this.router.navigateByUrl(this.link);
        }
    }
}
