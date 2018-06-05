import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from 'ng2-translate';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DxDataGridModule } from 'devextreme-angular';

import { ArgusGridComponent } from './argus.grid.component';
import { ArgusBaseComponent } from '../../../views/base/argus.base.component';
import { ArgusExpansionPanelModule } from './formatter/expansion.panel';
import {
    ArgusExpansionPanelComponent
} from './formatter/expansion.panel/argus.expansion.panel.component';
import { ArgusExportComponent } from '../export/argus.export.component';

@NgModule({
    declarations: [
        ArgusGridComponent,
    ],
    imports: [
        TranslateModule,
        CommonModule,
        ArgusExpansionPanelModule,
        DxDataGridModule,
        MatCheckboxModule
    ],
    exports: [
        ArgusGridComponent,
    ],
    entryComponents: [
        ArgusExpansionPanelComponent,
        ArgusExportComponent
    ]
})
export class ArgusGridModule {}
