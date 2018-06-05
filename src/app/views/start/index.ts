// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from 'ng2-translate';
import { MatButtonModule, MatProgressSpinnerModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ArgusGridModule } from '../../modules/controls/grid';
import { ArgusModalModule } from '../../modules/controls/modal';

// components
import { ArgusStartComponent } from './argus.start.component';
import { ArgusModalComponent } from '../../modules/controls/modal/argus.modal.component';
import { ArgusExportComponent } from '../../modules/controls/export/argus.export.component';
import { ArgusExportModule } from '../../modules/controls/export';

@NgModule({
    declarations: [
        ArgusStartComponent,
    ],
    imports: [
        CommonModule,
        TranslateModule,
        ArgusGridModule,
        ArgusModalModule,
        ArgusExportModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        FlexLayoutModule
    ],
    exports: [
        ArgusStartComponent
    ],
    entryComponents: [
        ArgusStartComponent,
        ArgusModalComponent,
        ArgusExportComponent
    ]
})

export class ArgusStartModule {
}
