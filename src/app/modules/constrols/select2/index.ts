import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from 'ng2-translate';

import { ArgusSelect2Component } from './argus.select2.component';

@NgModule({
    declarations: [
        ArgusSelect2Component,
    ],
    imports: [
        TranslateModule,
        CommonModule,
    ],
    exports: [
        ArgusSelect2Component,
    ],
})
export class ArgusSelect2Module {}
