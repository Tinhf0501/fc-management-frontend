/// <reference types="@angular/localize" />

import {
    HTTP_INTERCEPTORS,
    HttpClient,
    provideHttpClient,
    withInterceptorsFromDi,
} from '@angular/common/http';
import { APP_INITIALIZER, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
    provideRouter,
    withComponentInputBinding,
    withInMemoryScrolling,
} from '@angular/router';
import { AuthInterceptor, LoaderInterceptor } from '@fms/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { AppComponent } from './app/app.component';
import { routes } from './app/router';

const translateLoaderFactory = (
    httpClient: HttpClient,
): TranslateHttpLoader => {
    return new TranslateHttpLoader(httpClient, 'assets/i18n/', '.json');
};

bootstrapApplication(AppComponent, {
    providers: [
        provideNzI18n(en_US),
        provideAnimations(),
        provideRouter(
            routes,
            withComponentInputBinding(),
            withInMemoryScrolling({
                scrollPositionRestoration: 'enabled',
            }),
        ),
        provideHttpClient(withInterceptorsFromDi()),
        importProvidersFrom([
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
