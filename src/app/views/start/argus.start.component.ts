import {
    Component,
    ViewEncapsulation,
    Input,
    ViewChild,
    ChangeDetectorRef,
    EventEmitter
} from '@angular/core';
import { Response } from '@angular/http';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

import { ArgusModalComponent } from '../../modules/controls/modal/argus.modal.component';
import { ArgusGridProvider } from '../../modules/controls/grid/provider/argus.grid.provider';
import { ArgusStartService } from './service/argus.start.service';
import { ArgusStartProvider } from './provider/argus.start.provider';
import { ArgusExportComponent } from '../../modules/controls/export/argus.export.component';
import { GridConfig } from '../../modules/controls/grid/types';
import DevExpress from 'devextreme/bundles/dx.all';

@Component({
    selector: 'argus-start',
    templateUrl: './tpl/index.html',
    styleUrls: [
        './styles/index.scss'
    ],
    encapsulation: ViewEncapsulation.None,
    providers: [
        ArgusStartService,
        ArgusStartProvider,
        MatDialog,
        ArgusGridProvider
    ]
})

export class ArgusStartComponent {
    public dataLoaded: EventEmitter<any> = new EventEmitter<any>();

    public columns: Array<DevExpress.ui.dxDataGridColumn> = [];

    rowData: any;

    public gridConfig = <GridConfig>{
        compContext: this,
        isMultiSelection: true,
        isColumnChooser: true,
        isExport: true,
        isFilterRow: true,
        isGroupPanel: true,
        contextMenu: true,
        isHeaderFilter: true,
        isPager: true,
        isPaging: true,
    };

    public isLoaded: boolean = false;

    constructor(private dialog: MatDialog,
                private gridProvider: ArgusGridProvider,
                private cdr: ChangeDetectorRef,
                private argusStartProvider: ArgusStartProvider,
                private router: Router) {
        this.argusStartProvider.compContext = this;
        this.argusStartProvider.gridProvider = this.gridProvider;
    }

    ngOnInit() {
        let self = this;
        this.argusStartProvider.init();
    }

    goDetailPage($event: any) {
        this.router.navigate(['detail', $event.data.id]);
    }
}
