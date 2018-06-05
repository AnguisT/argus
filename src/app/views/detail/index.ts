// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from 'ng2-translate';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule, MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ArgusGridModule } from '../../modules/controls/grid/index';
import { ArgusPdfModule } from '../../modules/controls/pdf/index';
import { ArgusAccordionModule } from '../../modules/controls/accordion/index';

// components
import { ArgusDetailComponent } from './argus.detail.component';

@NgModule({
    declarations: [
        ArgusDetailComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        TranslateModule,
        ArgusGridModule,
        FlexLayoutModule,
        MatProgressSpinnerModule,
        ArgusPdfModule,
        MatButtonModule,
        ArgusAccordionModule
    ],
    exports: [
        ArgusDetailComponent
    ],
    entryComponents: [
    ]
})

export class ArgusDetailModule {
}
