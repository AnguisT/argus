import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from 'ng2-translate';
import { AgGridModule } from 'ag-grid-angular';

import { ArgusGridComponent } from './argus.grid.component';
import { ArgusBaseComponent } from '../../../views/base/base.component';
import { ArgusExpansionPanelFormatterModule } from './formatter/expansion.panel';
import {
    ArgusExpansionPanelFormatterComponent
} from './formatter/expansion.panel/argus.expansion.panel.component';

@NgModule({
    declarations: [
        ArgusGridComponent,
    ],
    imports: [
        TranslateModule,
        CommonModule,
        AgGridModule.withComponents([
            ArgusBaseComponent,
            ArgusExpansionPanelFormatterComponent
        ]),
        ArgusExpansionPanelFormatterModule
    ],
    exports: [
        ArgusGridComponent,
    ],
    entryComponents: [
        ArgusExpansionPanelFormatterComponent
    ]
})
export class ArgusGridModule {}
