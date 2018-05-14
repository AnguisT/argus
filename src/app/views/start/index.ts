// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from 'ng2-translate';
import { AngularSplitModule } from 'angular-split';
import { MatButtonModule } from '@angular/material';
import { ArgusSelect2Module } from '../../modules/constrols/select2/index';
import { ArgusGridModule } from '../../modules/constrols/grid';
import { ArgusModalModule } from '../../modules/constrols/modal';
import { ArgusColumnModule } from '../../modules/constrols/column';
import { ArgusAdvancedModule } from '../../modules/constrols/advanced';

// components
import { ArgusStartComponent } from './argus.start.component';
import { ArgusModalComponent } from '../../modules/constrols/modal/argus.modal.component';
import { ArgusColumnComponent } from '../../modules/constrols/column/argus.column.component';

@NgModule({
    declarations: [
        ArgusStartComponent,
    ],
    imports: [
        CommonModule,
        TranslateModule,
        ArgusSelect2Module,
        AngularSplitModule,
        ArgusGridModule,
        ArgusModalModule,
        ArgusColumnModule,
        MatButtonModule,
        ArgusAdvancedModule
    ],
    exports: [
        ArgusStartComponent
    ],
    entryComponents: [
        ArgusStartComponent,
        ArgusModalComponent,
        ArgusColumnComponent
    ]
})

export class ArgusStartModule {
}
