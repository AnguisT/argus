import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from 'ng2-translate';
import {
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
} from '@angular/material';
import { ArgusSelect2Module } from '../select2/index';

import { ArgusAdvancedComponent } from './argus.advanced.component';
import {
    ArgusConditionComponent
} from './comps/criteria/comps/condition/argus.condition.component';
import { ArgusControlComponent } from './comps/criteria/comps/control/argus.control.component';
import { ArgusFieldComponent } from './comps/criteria/comps/field/argus.field.component';
import { ArgusCriteriaComponent } from './comps/criteria/argus.criteria.component';

@NgModule({
    declarations: [
        ArgusAdvancedComponent,
        ArgusConditionComponent,
        ArgusControlComponent,
        ArgusFieldComponent,
        ArgusCriteriaComponent
    ],
    imports: [
        TranslateModule,
        CommonModule,
        MatCheckboxModule,
        MatInputModule,
        FormsModule,
        ArgusSelect2Module,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule
    ],
    exports: [
        ArgusAdvancedComponent,
        ArgusConditionComponent,
        ArgusControlComponent,
        ArgusFieldComponent,
        ArgusCriteriaComponent
    ],
    entryComponents: [
        // ArgusConditionComponent,
        // ArgusControlComponent,
        // ArgusFieldComponent
    ]
})
export class ArgusAdvancedModule {}
