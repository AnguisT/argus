import DevExpress from 'devextreme/bundles/dx.all';

export type GridConfig = {
    compContext: any,
    rowData: Array<any>,
    columnDef: Array<DevExpress.ui.dxDataGridColumn>,
    allowPagination: boolean,
    itemZiseInPage: number,
    allowGrouping: boolean,
    allowGroupPanel: boolean,
    allowExport: boolean,
    allowExportSelectData: boolean,
    fileNameExport: string,
    allowMultiSelection: boolean,
};
