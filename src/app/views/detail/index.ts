// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from 'ng2-translate';
import { AngularSplitModule } from 'angular-split';
import { MatButtonModule } from '@angular/material';
import { ArgusSelect2Module } from '../../modules/constrols/select2/index';
import { ArgusGridModule } from '../../modules/constrols/grid';

// components
import { BaseComponent } from '../base/base.component';
import { ArgusDetailComponent } from './argus.detail.component';

@NgModule({
    declarations: [
        ArgusDetailComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        ArgusGridModule,
        MatButtonModule,
    ],
    exports: [
        ArgusDetailComponent
    ],
    entryComponents: [
    ]
})

export class ArgusDetailModule {
}
