import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from 'ng2-translate';

import { ArgusColumnComponent } from './argus.column.component';
import { MatCheckboxModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ArgusColumnComponent,
    ],
    imports: [
        TranslateModule,
        CommonModule,
        MatCheckboxModule,
        MatInputModule,
        FormsModule
    ],
    exports: [
        ArgusColumnComponent,
    ],
})
export class ArgusColumnModule {}
