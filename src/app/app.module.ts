import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './router';

import {
    HTTP_INTERCEPTORS,
    HttpClient,
    HttpClientModule,
} from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SpinnerComponent } from './module/common/components';
import { AuthInterceptor, LoaderInterceptor } from './module/common/service';

const translateLoaderFactory = (
    httpClient: HttpClient,
): TranslateHttpLoader => {
    return new TranslateHttpLoader(httpClient, 'assets/i18n/', '.json');
};

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
        HttpClientModule,
        TranslateModule.forRoot({
            defaultLanguage: localStorage.getItem('language') ?? 'vn',
            loader: {
                provide: TranslateLoader,
                useFactory: translateLoaderFactory,
                deps: [HttpClient],
            },
        }),
        SpinnerComponent,
    ],
    providers: [
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
    bootstrap: [AppComponent],
})
export class AppModule {}
