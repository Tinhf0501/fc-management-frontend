import { Component, inject } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { SpinnerService } from './fms-sprinner.service';

@Component({
    selector: 'fms-spinner',
    templateUrl: './fms-spinner.component.html',
    styleUrls: ['./fms-spinner.component.scss'],
    standalone: true,
    imports: [NgIf, AsyncPipe],
})
export class SpinnerComponent {
    private spinnerService = inject(SpinnerService);

    public $spinner = this.spinnerService.spinnerObservable;
}
