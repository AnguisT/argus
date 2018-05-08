import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArgusExpansionPanelFormatterComponent } from './argus.expansion.panel.component';
import { MatExpansionModule } from '@angular/material';

@NgModule({
    declarations: [
        ArgusExpansionPanelFormatterComponent,
    ],
    imports: [
        CommonModule,
        MatExpansionModule
    ],
    exports: [
        ArgusExpansionPanelFormatterComponent,
    ],
})

export class ArgusExpansionPanelFormatterModule {}
