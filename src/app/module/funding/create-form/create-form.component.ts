import { Component } from '@angular/core';
import {
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms';

@Component({
    selector: 'funding-create-form',
    templateUrl: './create-form.component.html',
    styleUrls: ['./create-form.component.scss',],
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
    ],
})
export class FundingCreateForm {
}
