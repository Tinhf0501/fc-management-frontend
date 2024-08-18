import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FmsIconComponent } from '../fms-icon/fms-icon.component';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NgIf } from '@angular/common';

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
    ],
})
export class FmsButtonComponent {
    @Input() label: string;
    @Input() icon: string;
    @Input() disabled: boolean;
    @Input() tooltip: string;
    @Input() transparent: boolean;

    @Output() click = new EventEmitter<void>();
}
