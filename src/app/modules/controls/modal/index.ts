import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from 'ng2-translate';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { ArgusModalComponent } from './argus.modal.component';

@NgModule({
    declarations: [
        ArgusModalComponent,
    ],
    imports: [
        TranslateModule,
        CommonModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule
    ],
    exports: [
        ArgusModalComponent,
    ],
})
export class ArgusModalModule {}
