// NG Modules
import { ApplicationRef, ChangeDetectorRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule, TranslateStaticLoader } from 'ng2-translate';
import { AngularSplitModule } from 'angular-split';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

// Modules
import { ROUTES } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArgusStartModule } from './views/start/index';

import { BaseComponent } from './views/base/base.component';
import { BaseLanguageComponent } from './views/base/comps/argus.language/argus.language.component';
import { InMemoryDataService } from './mock-service/in-memory-data.service';
import { HttpService } from './modules/service/http.service/http.service';
import { ArgusDetailModule } from './views/detail';

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
    bootstrap: [BaseComponent],
    declarations: [
        BaseComponent,
        BaseLanguageComponent
        // SettingsColumnComponent
        // directives
        // ModalDirective
    ],
    imports: [ // import Angular's modules
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
        AngularSplitModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, { dataEncapsulation: false, passThruUnknownUrl: true }
        ),
        BrowserAnimationsModule,
        ArgusDetailModule
    ],
    providers: [ // expose our Services and Providers into Angular's dependency injection
        HttpService
    ],
    exports: [
    ],
    entryComponents: [
    ]
})
export class AppModule {
    constructor(public appRef: ApplicationRef) {
    }
}

