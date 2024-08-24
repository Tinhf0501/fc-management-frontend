import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
    selector: 'fms-icon',
    templateUrl: './fms-icon.component.html',
    styleUrls: ['./fms-icon.component.scss'],
    standalone: true,
    imports: [NzIconModule],
})
export class FmsIconComponent {
    @Input({ required: true }) iconName: string;
    @Input() theme: 'fill' | 'outline' | 'twotone';

    @Output() click = new EventEmitter<void>();
}
