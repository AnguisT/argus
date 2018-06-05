import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArgusExpansionPanelComponent } from './argus.expansion.panel.component';
import { MatExpansionModule } from '@angular/material';

@NgModule({
    declarations: [
        ArgusExpansionPanelComponent,
    ],
    imports: [
        CommonModule,
        MatExpansionModule
    ],
    exports: [
        ArgusExpansionPanelComponent,
    ],
})

export class ArgusExpansionPanelModule {}
