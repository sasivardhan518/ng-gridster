import {
    GridsterConfig, DisplayGrid
}

    from 'angular-gridster2';
export const gridSterOptions: GridsterConfig = {
    gridType: 'fit',
    draggable: {
        enabled: true
    }
    ,
    resizable: {
        enabled: true
    }
    ,
    fixedColWidth: 120,
    fixedRowHeight: 100,
    mobileBreakpoint: 50,
    minRows: 6,
    minCols: 5,
    maxRows: 6,
    maxCols: 5,
    enableEmptyCellDrop: true,
    displayGrid: DisplayGrid.OnDragAndResize
}