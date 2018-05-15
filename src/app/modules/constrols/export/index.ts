import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from 'ng2-translate';

import { ArgusExportComponent } from './argus.export.component';
import { MatInputModule, MatRadioModule, MatDividerModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ArgusExportComponent,
    ],
    imports: [
        TranslateModule,
        CommonModule,
        MatInputModule,
        MatRadioModule,
        MatDividerModule,
        FormsModule
    ],
    exports: [
        ArgusExportComponent,
    ],
})
export class ArgusExportModule {}
