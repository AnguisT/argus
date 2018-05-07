import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from 'ng2-translate';
import { AngularSplitModule } from 'angular-split';
import { ArgusStartComponent } from './argus.start.component';
import { ArgusSelect2Module } from '../../modules/constrols/select2/index';
import { BaseComponent } from '../base/base.component';
import { ArgusGridModule } from '../../modules/constrols/grid';
import { ArgusModalModule } from '../../modules/constrols/modal';
import { ArgusModalComponent } from '../../modules/constrols/modal/argus.modal.component';
import { ArgusColumnModule } from '../../modules/constrols/column';
import { ArgusColumnComponent } from '../../modules/constrols/column/argus.column.component';
import { MatButtonModule } from '@angular/material';

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
        MatButtonModule
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
