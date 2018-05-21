import {
    Component,
    ViewEncapsulation,
    Input,
    ViewChild,
    ChangeDetectorRef,
    EventEmitter
} from '@angular/core';
import { GridOptions, ColDef } from 'ag-grid';
import { Response } from '@angular/http';
import { MatDialog } from '@angular/material';
import { ArgusModalComponent } from '../../modules/constrols/modal/argus.modal.component';
import { ArgusColumnComponent } from '../../modules/constrols/column/argus.column.component';
import { ArgusGridProvider } from '../../modules/constrols/grid/provider/argus.grid.provider';
import { ArgusStartService } from './service/argus.start.service';
import { ArgusStartProvider } from './provider/argus.start.provider';
import { Router } from '@angular/router';
import { ArgusExportComponent } from '../../modules/constrols/export/argus.export.component';
import { GridConfig } from '../../modules/constrols/grid/types';
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
    public data: any = [];
    public data1: any = [];
    public views: any = [];
    public dataLoaded: EventEmitter<any> = new EventEmitter<any>();
    @ViewChild('viewSelect') private viewSelect: any;

    public columnDefs = <Array<ColDef>>[
    ];

    public columns: Array<DevExpress.ui.dxDataGridColumn> = [];

    rowData: any;

    public gridOptions = <GridOptions>{
        enableSorting: true,
        enableFilter: false,
        enableColResize: true,
        pagination: true,
        paginationPageSize: 10,
        rowSelection: 'multiple',
        // onGridReady: () => {
        // }
    };

    public gridConfig = <GridConfig>{
        compContext: this,
    };

    public isLoaded: boolean = false;

    constructor(private dialog: MatDialog,
                private gridProvider: ArgusGridProvider,
                private cdr: ChangeDetectorRef,
                private argusStartProvider: ArgusStartProvider,
                private router: Router) {
        this.gridProvider.gridOptions = this.gridOptions;
        this.argusStartProvider.compContext = this;
        this.argusStartProvider.gridProvider = this.gridProvider;
    }

    ngOnInit() {
        let self = this;
        this.argusStartProvider.init();
        this.dataLoaded.subscribe(() => {
            self.cdr.detectChanges();
        });
    }

    ngAfterViewInit() {
    }

    openSetUpColumn() {
        let self = this;
        let dialogRef = this.dialog.open(ArgusModalComponent, {
            width: '500px',
            closeOnNavigation: true,
            data: { title: 'Search column', component: ArgusColumnComponent },
        });
        dialogRef.componentInstance.modalEvents.subscribe((e: any) => {
            if (e.name === 'ok') {
                dialogRef.close();
            } else if (e.name === 'close') {
                dialogRef.close();
            }
        });

        dialogRef.afterClosed().subscribe(() => {
            self.columnDefs = self.gridOptions.columnDefs;
            self.gridOptions.api.refreshCells();
        });
    }

    openExport() {
        let self = this;
        let dialogRef = this.dialog.open(ArgusModalComponent, {
            width: '500px',
            closeOnNavigation: true,
            data: { title: 'Export', buttonTitle: 'Export', component: ArgusExportComponent },
        });
        dialogRef.componentInstance.modalEvents.subscribe((e: any) => {
            if (e.name === 'ok') {
                // let typePage = dialogRef.componentInstance.componentRef.instance.typePage;
                // let typeExport = dialogRef.componentInstance.componentRef.instance.typeExport;
                dialogRef.componentInstance.componentRef.instance.export();
                dialogRef.close();
            } else if (e.name === 'close') {
                dialogRef.close();
            }
        });
    }

    onSelect() {
        let self = this;
        let id = this.viewSelect.getSelected();
        this.argusStartProvider.onSelect(id);
        // this.getUserView(id).subscribe((data) => {
        //     let column = self.gridProvider.viewColumnsToGridColumns(data.columns);
        //     self.columnDefs = self.gridProvider.getFrozenColumn(column);
        //     self.gridOptions.api.refreshCells();
        // });
    }

    gridColumnsChanged() {
        let allColumnIds: any = [];
        this.columnDefs.forEach( function(columnDef: any) {
            allColumnIds.push(columnDef.field);
        });
        this.gridOptions.columnApi.autoSizeColumns(allColumnIds);
    }

    goDetailPage($event: any) {
        this.router.navigate(['detail', $event.data.id]);
    }
}
