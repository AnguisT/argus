import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from 'ng2-translate';

import { ArgusAdvancedComponent } from './argus.advanced.component';
import { MatCheckboxModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ArgusConditionComponent } from './comps/condition/argus.condition.component';
import { ArgusControlComponent } from './comps/control/argus.control.component';
import { ArgusFieldComponent } from './comps/field/argus.field.component';

@NgModule({
    declarations: [
        ArgusAdvancedComponent,
        ArgusConditionComponent,
        ArgusControlComponent,
        ArgusFieldComponent
    ],
    imports: [
        TranslateModule,
        CommonModule,
        MatCheckboxModule,
        MatInputModule,
        FormsModule
    ],
    exports: [
        ArgusAdvancedComponent,
        ArgusConditionComponent,
        ArgusControlComponent,
        ArgusFieldComponent
    ],
    entryComponents: [
        // ArgusConditionComponent,
        // ArgusControlComponent,
        // ArgusFieldComponent
    ]
})
export class ArgusAdvancedModule {}
