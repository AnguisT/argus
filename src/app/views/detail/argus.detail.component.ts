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
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

import { ArgusModalComponent } from '../../modules/constrols/modal/argus.modal.component';
import { ArgusColumnComponent } from '../../modules/constrols/column/argus.column.component';
import { ArgusGridProvider } from '../../modules/constrols/grid/provider/argus.grid.provider';
import { ArgusDetailService } from './service/argus.detail.service';
import { ArgusDetailProvider } from './provider/argus.detail.provider';

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
    public rowData: any;

    public gridOptions = <GridOptions>{
        enableSorting: true,
        enableFilter: false,
        enableColResize: true,
        pagination: false,
    };

    public isShow: boolean = false;

    public details: any;
    public isLoaded: boolean = false;
    private id: number;

    constructor(private gridProvider: ArgusGridProvider,
                private cdr: ChangeDetectorRef,
                private detailProvider: ArgusDetailProvider,
                private router: ActivatedRoute,
                private argusDetailProvider: ArgusDetailProvider,
                private location: Location) {
        this.gridProvider.gridOptions = this.gridOptions;
        this.argusDetailProvider.gridProvider = this.gridProvider;
        this.argusDetailProvider.compContext = this;
        this.router.params.subscribe((params) => {
            this.id = params.id;
        });
    }

    ngAfterViewInit() {
        let self = this;
        this.argusDetailProvider.init(this.id);
        this.cdr.detectChanges();
    }

    gridColumnsChanged() {
        let allColumnIds: any = [];
        this.columnDefs.forEach( function(columnDef: any) {
            allColumnIds.push(columnDef.field);
        });
        this.gridOptions.columnApi.autoSizeColumns(allColumnIds);
    }

    showPdfFile() {
        this.isShow = true;
    }

    goToBack() {
        this.location.back();
    }
}
