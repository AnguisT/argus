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
import { MatDialog } from '@angular/material';
import { locale, loadMessages, formatMessage } from 'devextreme/localization';
import { TranslateService, LangChangeEvent } from 'ng2-translate';
import 'style-loader!devextreme/dist/css/dx.material.blue.light.css';
import 'style-loader!devextreme/dist/css/dx.common.css';
import 'devextreme-intl';

import {
    ArgusExpansionPanelComponent
} from './formatter/expansion.panel/argus.expansion.panel.component';
import { GridConfig } from './types';
import { ArgusGridProvider } from './provider/argus.grid.provider';

const enMessages = require('devextreme/localization/messages/en.json');
const ruMessages = require('devextreme/localization/messages/ru.json');

const dictionary = {
    'en-EN': {
        'id': '№',
        'number': 'Number',
        'Name_Сompany': 'Name Сompany',
        'Type_Certified_Activity': 'Type certified activity',
        'country': 'Сountry',
        'region': 'Region',
        'area': 'Area',
        'address': 'Address',
        'activities': 'Activities',
        'Product_Type': 'Product type',
        'Production': 'Production',
        'View_Product': 'View product',
        'Product_Group': 'Product group',
        'status': 'Status',
        'date': 'Date',
        'Number_Date': 'Number date'
    },
    'ru-RU': {
        'id': '№',
        'number': 'Номер',
        'Name_Сompany': 'Название компании',
        'Type_Certified_Activity': 'Тип сертификации',
        'country': 'Страна',
        'region': 'Регион',
        'area': 'Район',
        'address': 'Адрес',
        'activities': 'Вид деятельности',
        'Product_Type': 'Тип продукции',
        'Production': 'Продукция',
        'View_Product': 'Вид продукции',
        'Product_Group': 'Группа продукции',
        'status': 'Статус',
        'date': 'Начало действия указания',
        'Number_Date': 'Номер и дата указания'
    }
};

@Component({
    selector: 'argus-grid',
    templateUrl: './tpl/index.html',
    styleUrls: [
        './styles/index.scss',
    ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        MatDialog
    ]
})

export class ArgusGridComponent {
    private ready: boolean = true;
    formatMessage = formatMessage;

    @ViewChild('dataGrid') private dataGrid: DxDataGridComponent;

    @Input('gridConfig') public gridConfig: GridConfig;

    @Output() rowDoubleClicked: EventEmitter<any> = new EventEmitter<any>();

    private defaultConfig: GridConfig = {
        fileNameExport: 'Export',
        isMultiSelection: false,
        contextMenu: false,
        isColumnChooser: false,
        isExport: false,
        isFilterRow: false,
        isGroupPanel: false,
        isHeaderFilter: false,
        isPager: false,
        isPaging: false,
    };

    constructor(public dialog: MatDialog,
                private resolver: ComponentFactoryResolver,
                private viewContainer: ViewContainerRef,
                private cdr: ChangeDetectorRef,
                private translate: TranslateService,
                private gridProvider: ArgusGridProvider) {
        this.gridProvider.gridContext = this;
        loadMessages(enMessages);
        loadMessages(ruMessages);
        if (this.translate.currentLang === 'ru-RU') {
            locale('ru');
        } else {
            locale('en');
        }
    }

    ngAfterViewInit() {
        let self = this;
        this.translate.onLangChange.subscribe((data: LangChangeEvent) => {
            self.ready = false;
            self.cdr.detectChanges();
            if (data.lang === 'ru-RU') {
                locale('ru');
            } else {
                locale('en');
            }
            self.ready = true;
            self.changeCaption();
            self.cdr.detectChanges();
        });
        this.gridConfig.compContext.dataLoaded.subscribe(() => {
            self.componentToElement();
            self.gridProvider.dataGrid = self.dataGrid;
        });
    }

    onToolbarPreparing($event: any) {
        if (this.gridConfig.isExport) {
            $event.toolbarOptions.items.unshift(
                {
                    location: 'after',
                    locateInMenu: 'auto',
                    widget: 'dxButton',
                    showText: 'inMenu',
                    options: {
                        hint: this.translate.instant('grid.export_selected_data'),
                        text: this.translate.instant('grid.export_selected_data'),
                        icon: 'export',
                        onClick: this.export.bind(this)
                    }
                }
            );
        }
    }

    export() {
        this.gridProvider.openExport();
    }

    changeCaption() {
        if (this.gridConfig.columnDef) {
            this.gridConfig.columnDef.forEach((element) => {
                element.caption = dictionary[this.translate.currentLang][element.dataField];
            });
        }
    }

    componentToElement() {
        this.gridConfig.columnDef.push(
            {
                dataField: 'custom',
                caption: 'Test custom template',
                allowSorting: false,
                allowReordering: false,
                allowResizing: false,
                minWidth: 300,
                allowFiltering: false,
                allowGrouping: false,
                allowHeaderFiltering: false,
                cellTemplate: (elem, info) => {
                    let component = ArgusExpansionPanelComponent;
                    let factory = this.resolver.resolveComponentFactory(component);
                    let comp = this.viewContainer.createComponent(factory);
                    elem.appendChild(comp.instance.expansivePanel.nativeElement);
                }
            }
        );
        this.changeCaption();
        this.gridConfig = Object.assign(this.defaultConfig, this.gridConfig);
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
