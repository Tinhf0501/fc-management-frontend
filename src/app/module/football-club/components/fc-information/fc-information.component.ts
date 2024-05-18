import { DatePipe, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DetailFCResponse } from '../../interface';

@Component({
    selector: 'fc-information',
    templateUrl: './fc-information.component.html',
    standalone: true,
    imports: [NgIf, DatePipe],
})
export class FcInformationComponent {
    @Input() footballClub: DetailFCResponse;
}
