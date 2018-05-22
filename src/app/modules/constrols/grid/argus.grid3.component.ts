import {
    Component,
    ViewEncapsulation,
    Input,
    ChangeDetectionStrategy,
    ViewChild,
    Output,
    EventEmitter,
    ComponentFactoryResolver,
    ViewContainerRef,
    ChangeDetectorRef
} from '@angular/core';
import * as $ from 'jquery';
import { DxDataGridComponent } from 'devextreme-angular';
import DevExpress from 'devextreme/bundles/dx.all';
import 'style-loader!devextreme/dist/css/dx.material.blue.light.css';
import 'style-loader!devextreme/dist/css/dx.common.css';
import {
    ArgusExpansionPanelFormatterComponent
} from './formatter/expansion.panel/argus.expansion.panel.component';
import { GridConfig } from './types';

@Component({
    selector: 'argus-grid3',
    templateUrl: './tpl/extrem.html',
    styleUrls: [
        './styles/index.scss',
        './styles/grid.scss'
    ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ArgusGrid3Component {

    @ViewChild('dataGrid') private dataGrid: DxDataGridComponent;

    @Input('gridConfig') private gridConfig: GridConfig;

    @Output() rowDoubleClicked: EventEmitter<any> = new EventEmitter<any>();

    constructor(private resolver: ComponentFactoryResolver,
                private viewContainer: ViewContainerRef,
                private cdr: ChangeDetectorRef) {
    }

    ngAfterViewInit() {
        this.gridConfig.compContext.dataLoaded.subscribe(() => {
            this.componentToElement();
        });
        this.dataGrid.onRowClick.subscribe((data: any) => {
            this.rowDoubleClick(data);
        });
    }

    componentToElement() {
        this.gridConfig.columnDef.push(
            {
                dataField: 'Test custom template',
                allowSorting: false,
                allowReordering: false,
                allowResizing: false,
                minWidth: 300,
                allowFiltering: false,
                allowGrouping: false,
                allowHeaderFiltering: false,
                cellTemplate: (elem) => {
                    let component = ArgusExpansionPanelFormatterComponent;
                    let factory = this.resolver.resolveComponentFactory(component);
                    let comp = this.viewContainer.createComponent(factory);
                    elem.appendChild(comp.instance.expansivePanel.nativeElement);
                }
            }
        );
        this.dataGrid.showRowLines = true;
        this.dataGrid.columnChooser = {
            allowSearch: true,
            enabled: true,
            mode: 'select',
        };
        this.dataGrid.headerFilter = {
            allowSearch: true,
            visible: true,
        };
        this.dataGrid.filterRow = {
            applyFilter: 'auto',
            visible: true,
        };
        this.cdr.detectChanges();
    }

    rowDoubleClick(e: any) {
        let component = e.component;
        let prevClickTime = component.lastClickTime;
        component.lastClickTime = new Date();
        if (prevClickTime && (component.lastClickTime - prevClickTime < 300)) {
            this.rowDoubleClickedHandler(e);
        }
    }

    private rowDoubleClickedHandler(p: any) {
        this.rowDoubleClicked.emit(p);
    }
}
