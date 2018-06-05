import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from 'ng2-translate';

import { ArgusAccordionComponent } from './argus.accordion.component';

@NgModule({
    declarations: [
        ArgusAccordionComponent,
    ],
    imports: [
        TranslateModule,
        CommonModule,
    ],
    exports: [
        ArgusAccordionComponent,
    ],
})
export class ArgusAccordionModule {}
