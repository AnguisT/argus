// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from 'ng2-translate';
import { AngularSplitModule } from 'angular-split';
import { FormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatIconModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { ArgusSelect2Module } from '../../modules/constrols/select2/index';
import { ArgusGridModule } from '../../modules/constrols/grid';

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
        MatButtonModule,
        MatIconModule,
        FlexLayoutModule,
        PdfViewerModule
    ],
    exports: [
        ArgusDetailComponent
    ],
    entryComponents: [
    ]
})

export class ArgusDetailModule {
}
