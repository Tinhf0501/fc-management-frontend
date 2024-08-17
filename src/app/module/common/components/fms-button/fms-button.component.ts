import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FmsIconComponent } from '../fms-icon/fms-icon.component';
import { NzSpaceModule } from 'ng-zorro-antd/space';

@Component({
    selector: 'fms-button',
    templateUrl: './fms-button.component.html',
    standalone: true,
    imports: [NzButtonModule, FmsIconComponent, NzSpaceModule],
})
export class FmsButtonComponent {
    @Input() label: string;
    @Input() icon: string;
    @Input() disabled: boolean;

    @Output() click = new EventEmitter<void>();
}
