import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from 'ng2-translate';
import { AgGridModule } from 'ag-grid-angular';

import { ArgusGridComponent } from './argus.grid.component';
import { BaseComponent } from '../../../views/base/base.component';

@NgModule({
    declarations: [
        ArgusGridComponent,
    ],
    imports: [
        TranslateModule,
        CommonModule,
        AgGridModule.withComponents([BaseComponent])
    ],
    exports: [
        ArgusGridComponent,
    ],
})
export class ArgusGridModule {}
