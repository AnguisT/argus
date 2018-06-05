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
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

import { ArgusModalComponent } from '../../modules/controls/modal/argus.modal.component';
import { ArgusGridProvider } from '../../modules/controls/grid/provider/argus.grid.provider';
import { ArgusDetailService } from './service/argus.detail.service';
import { ArgusDetailProvider } from './provider/argus.detail.provider';
import { GridConfig } from '../../modules/controls/grid/types';

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
    public dataLoaded: EventEmitter<any> = new EventEmitter<any>();

    public gridConfig = <GridConfig>{
        compContext: this,
    };

    public isShow: boolean = false;
    public details: any;
    public isLoaded: boolean = false;
    public isTabs: boolean = false;

    private id: number;

    private src: string = '/assets/1 - Обзор платформы NodeJS и технологии AJAX.pdf';
    private fileName: string = 'Document';

    constructor(private gridProvider: ArgusGridProvider,
                private cdr: ChangeDetectorRef,
                private detailProvider: ArgusDetailProvider,
                private router: ActivatedRoute,
                private argusDetailProvider: ArgusDetailProvider,
                private location: Location) {
        this.argusDetailProvider.gridProvider = this.gridProvider;
        this.argusDetailProvider.compContext = this;
        this.router.params.subscribe((params) => {
            this.id = params.id;
        });
    }

    ngOnInit() {
        let self = this;
        this.argusDetailProvider.init(this.id);
    }

    goToBack() {
        this.location.back();
    }
}
