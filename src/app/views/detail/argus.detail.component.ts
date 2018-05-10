import {
    Component,
    ViewEncapsulation,
    Input,
    ViewChild,
    ChangeDetectorRef
} from '@angular/core';
import { GridOptions, ColDef } from 'ag-grid';
import { Response } from '@angular/http';
import { MatDialog } from '@angular/material';
import { ArgusModalComponent } from '../../modules/constrols/modal/argus.modal.component';
import { ArgusColumnComponent } from '../../modules/constrols/column/argus.column.component';
import { ArgusGridProvider } from '../../modules/constrols/grid/provider/argus.grid.provider';
import { ArgusDetailService } from './service/argus.detail.service';
import { ArgusDetailProvider } from './provider/argus.detail.provider';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'argus-detail',
    templateUrl: './tpl/index.html',
    styleUrls: [
        './styles/index.scss'
    ],
    encapsulation: ViewEncapsulation.None,
    providers: [
        ArgusDetailService,
        ArgusDetailProvider,
        MatDialog,
        ArgusGridProvider
    ]
})

export class ArgusDetailComponent {
    public columnDefs = <Array<ColDef>>[
    ];

    rowData: any;

    public gridOptions = <GridOptions>{
        enableSorting: true,
        enableFilter: false,
        enableColResize: true,
        pagination: true,
        paginationPageSize: 10,
        rowSelection: 'multiple',
    };

    constructor(private gridProvider: ArgusGridProvider,
                private cdr: ChangeDetectorRef,
                private detailProvider: ArgusDetailProvider,
                private router: ActivatedRoute) {
        this.gridProvider.gridOptions = this.gridOptions;
        this.router.params.subscribe((params) => {
            console.log(params);
        });
    }

    ngOnInit() {
        let self = this;
    }

    ngAfterViewInit() {
    }

    // gridColumnsChanged() {
    //     let allColumnIds: any = [];
    //     this.columnDefs.forEach( function(columnDef: any) {
    //         allColumnIds.push(columnDef.field);
    //     });
    //     this.gridOptions.columnApi.autoSizeColumns(allColumnIds);
    // }
}
