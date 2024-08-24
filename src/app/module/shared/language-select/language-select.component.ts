import { NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignalPipe } from '@fms/core';
import { FmsSelectComponent } from '@fms/select';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Language, LANGUAGES } from './model';

@Component({
    selector: 'select-language',
    templateUrl: './language-select.component.html',
    styleUrls: ['./language-select.component.scss'],
    standalone: true,
    imports: [
        NgIf,
        FmsSelectComponent,
        TranslateModule,
        FormsModule,
        ReactiveFormsModule,
        SignalPipe
    ],
})
export class LanguageComponent implements OnInit {
    private translateService: TranslateService = inject(TranslateService);
    private formBuilder = inject(FormBuilder)

    public languages: Language[] = LANGUAGES;
    public formGroup: FormGroup;

    public ngOnInit(): void {
        const language =
            localStorage.getItem('language') ??
            this.translateService.getDefaultLang();
        this.formGroup = this.formBuilder.group({
            language: [language]
        })
    }

    public onChangeLanguage(language: string): void {
        this.translateService.use(language);
        localStorage.setItem('language', language);
    }
}
