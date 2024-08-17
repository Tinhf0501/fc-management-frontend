/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {
    provideRouter,
    withComponentInputBinding,
    withInMemoryScrolling,
} from '@angular/router';
import { routes } from './app/router';
import {
    HTTP_INTERCEPTORS,
    HttpClient,
    provideHttpClient,
    withInterceptorsFromDi,
} from '@angular/common/http';
import { APP_INITIALIZER, importProvidersFrom } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptor, LoaderInterceptor } from '@fms-module/common';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

const translateLoaderFactory = (
    httpClient: HttpClient,
): TranslateHttpLoader => {
    return new TranslateHttpLoader(httpClient, 'assets/i18n/', '.json');
};

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(
            routes,
            withComponentInputBinding(),
            withInMemoryScrolling({
                scrollPositionRestoration: 'enabled',
            }),
        ),
        provideHttpClient(withInterceptorsFromDi()),
        importProvidersFrom([
            ToastrModule.forRoot(),
            TranslateModule.forRoot({
                defaultLanguage: localStorage.getItem('language') ?? 'vn',
                loader: {
                    provide: TranslateLoader,
                    useFactory: translateLoaderFactory,
                    deps: [HttpClient],
                },
            }),
        ]),
        {
            provide: APP_INITIALIZER,
            useFactory: (library: FaIconLibrary) => {
                library.addIconPacks(fas);
            },
            deps: [FaIconLibrary],
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoaderInterceptor,
            multi: true,
        },
    ],
}).catch((err) => console.error(err));
