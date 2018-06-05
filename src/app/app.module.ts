import { ApplicationRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule, TranslateStaticLoader } from 'ng2-translate';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { ROUTES } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArgusStartModule } from './views/start/index';

import { ArgusBaseComponent } from './views/base/argus.base.component';
import {
    ArgusTranslateComponent
} from './views/base/comps/argus.language/argus.language.component';
import { InMemoryDataService } from './mock-service/in-memory-data.service';
import { HttpService } from './modules/service/http.service/http.service';
import { ArgusDetailModule } from './views/detail';

@NgModule({
    bootstrap: [ArgusBaseComponent],
    declarations: [
        ArgusBaseComponent,
        ArgusTranslateComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot(ROUTES, {useHash: true}),
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, './assets/i18n', '.json'),
            deps: [Http]
        }),
        ArgusStartModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, { dataEncapsulation: false, passThruUnknownUrl: true }
        ),
        BrowserAnimationsModule,
        ArgusDetailModule
    ],
    providers: [
        HttpService
    ],
})
export class AppModule {
}
