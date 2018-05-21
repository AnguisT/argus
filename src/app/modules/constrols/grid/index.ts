import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from 'ng2-translate';
import { AgGridModule } from 'ag-grid-angular';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DxDataGridModule } from 'devextreme-angular';

import { ArgusGridComponent } from './argus.grid.component';
import { ArgusBaseComponent } from '../../../views/base/base.component';
import { ArgusExpansionPanelFormatterModule } from './formatter/expansion.panel';
import {
    ArgusExpansionPanelFormatterComponent
} from './formatter/expansion.panel/argus.expansion.panel.component';
import { ArgusGrid2Component } from './argus.grid2.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ArgusGrid3Component } from './argus.grid3.component';

@NgModule({
    declarations: [
        ArgusGridComponent,
        ArgusGrid2Component,
        ArgusGrid3Component
    ],
    imports: [
        TranslateModule,
        CommonModule,
        AgGridModule.withComponents([
            ArgusBaseComponent,
            ArgusExpansionPanelFormatterComponent
        ]),
        ArgusExpansionPanelFormatterModule,
        NgxDatatableModule,
        DxDataGridModule,
        MatCheckboxModule
    ],
    exports: [
        ArgusGridComponent,
        ArgusGrid2Component,
        ArgusGrid3Component
    ],
    entryComponents: [
        ArgusExpansionPanelFormatterComponent
    ]
})
export class ArgusGridModule {}
