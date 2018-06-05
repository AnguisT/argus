import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from 'ng2-translate';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { ArgusPdfComponent } from './argus.pdf.component';
import { MatButtonModule, MatIconModule } from '@angular/material';

@NgModule({
    declarations: [
        ArgusPdfComponent,
    ],
    imports: [
        TranslateModule,
        CommonModule,
        PdfViewerModule,
        MatButtonModule,
        MatIconModule,
    ],
    exports: [
        ArgusPdfComponent,
    ],
})
export class ArgusPdfModule {}
