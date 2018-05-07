import { Component, ViewEncapsulation, Input, ViewChild, Inject, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GridOptions, ColDef } from 'ag-grid';
import { Observable, Subscription } from 'rxjs';
import { HttpService } from '../../modules/service/http.service/http.service';
import { Response } from '@angular/http';
import { MatDialog } from '@angular/material';
import { ArgusModalComponent } from '../../modules/constrols/modal/argus.modal.component';
import { ArgusColumnComponent } from '../../modules/constrols/column/argus.column.component';
import { ArgusGridProvider } from '../../modules/constrols/grid/provider/argus.grid.provider';

@Component({
    selector: 'argus-start',
    templateUrl: './tpl/index.html',
    styleUrls: [
        './styles/index.scss'
    ],
    encapsulation: ViewEncapsulation.None,
    providers: [
        HttpService,
        MatDialog,
        ArgusGridProvider
    ]
})

export class ArgusStartComponent {
    private data: any = [];
    private data1: any = [];
    private views: any = [];
    @ViewChild('viewSelect') private viewSelect: any;

    public columnDefs = <Array<ColDef>>[
    ];

    rowData: any;

    private gridOptions = <GridOptions>{
        enableSorting: true,
        enableFilter: false,
        enableColResize: true,
        pagination: true,
        paginationPageSize: 10,
        rowSelection: 'multiple',
        // onGridReady: () => {
        // }
    };

    constructor(private httpService: HttpService,
                public dialog: MatDialog,
                public gridProvider: ArgusGridProvider,
                public cdr: ChangeDetectorRef) {
        this.gridProvider.gridOptions = this.gridOptions;
    }

    ngOnInit() {
        let self = this;
        this.getUserViews().subscribe((data) => {
            self.views = data;
        });
        this.getViewGrid().subscribe((data) => {
            let column = self.gridProvider.viewColumnsToGridColumns(data);
            self.columnDefs = self.gridProvider.getFrozenColumn(column);
        });
        this.getDataGrid().subscribe((data) => {
            this.rowData = data;
        });
        this.getSelectData().subscribe((data) => {
            this.data = data;
        });
        this.getMultiSelectData().subscribe((data) => {
            this.data1 = data;
        });
    }

    ngAfterViewInit() {
    }

    openDialog() {
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

    onSelect() {
        let self = this;
        let id = this.viewSelect.getSelected();
        // console.log($event);
        this.getUserView(id).subscribe((data) => {
            let column = self.gridProvider.viewColumnsToGridColumns(data.columns);
            self.columnDefs = self.gridProvider.getFrozenColumn(column);
            self.gridOptions.api.refreshCells();
        });
    }

    gridColumnsChanged() {
        let allColumnIds: any = [];
        this.columnDefs.forEach( function(columnDef: any) {
            allColumnIds.push(columnDef.field);
        });
        this.gridOptions.columnApi.autoSizeColumns(allColumnIds);
    }

    getDataGrid(): Observable<any> {
        return this.httpService.getMock('api/grid');
    }

    getViewGrid(): Observable<any> {
        return this.httpService.getMock('api/view');
    }

    getUserViews(): Observable<any> {
        return this.httpService.getMock('api/userViews');
    }

    getUserView(id: number): Observable<any> {
        return this.httpService.getMock(`api/userView/${id}`);
    }

    getSelectData(): Observable<any> {
        return this.httpService.getMock('api/data');
    }

    getMultiSelectData(): Observable<any> {
        return this.httpService.getMock('api/data1');
    }
}
