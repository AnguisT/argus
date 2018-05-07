import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from 'ng2-translate';

import { ArgusColumnComponent } from './argus.column.component';
import { MatCheckboxModule } from '@angular/material';

@NgModule({
    declarations: [
        ArgusColumnComponent,
    ],
    imports: [
        TranslateModule,
        CommonModule,
        MatCheckboxModule
    ],
    exports: [
        ArgusColumnComponent,
    ],
})
export class ArgusColumnModule {}
