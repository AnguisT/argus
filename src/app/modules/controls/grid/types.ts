import DevExpress from 'devextreme/bundles/dx.all';

export type GridConfig = {
    compContext?: any,
    rowData?: Array<any>,
    columnDef?: Array<DevExpress.ui.dxDataGridColumn>,
    isExport?: boolean,
    fileNameExport?: string,
    isMultiSelection?: boolean,
    isHeaderFilter?: boolean,
    isFilterRow?: boolean,
    isColumnChooser?: boolean,
    isGroupPanel?: boolean,
    contextMenu?: boolean,
    isPaging?: boolean,
    isPager?: boolean,
};
