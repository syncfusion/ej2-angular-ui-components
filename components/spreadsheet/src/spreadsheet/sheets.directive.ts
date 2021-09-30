import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';

import { RowsDirective } from './rows.directive';
import { ColumnsDirective } from './columns.directive';
import { RangesDirective } from './ranges.directive';
import { ConditionalFormatsDirective } from './conditionalformats.directive';

let input: string[] = ['activeCell', 'colCount', 'columns', 'conditionalFormats', 'frozenColumns', 'frozenRows', 'index', 'isProtected', 'name', 'paneTopLeftCell', 'password', 'protectSettings', 'ranges', 'rowCount', 'rows', 'selectedRange', 'showGridLines', 'showHeaders', 'state', 'topLeftCell', 'usedRange'];
let outputs: string[] = [];
/**
 * `e-sheet` directive represent a sheet of the Angular Spreadsheet.
 * It must be contained in a Spreadsheet component(`ejs-spreadsheet`).
 * ```html
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet></e-sheet>
 *    <e-sheet></e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
@Directive({
    selector: 'e-sheets>e-sheet',
    inputs: input,
    outputs: outputs,    
    queries: {
        childRows: new ContentChild(RowsDirective), 
        childColumns: new ContentChild(ColumnsDirective), 
        childRanges: new ContentChild(RangesDirective), 
        childConditionalFormats: new ContentChild(ConditionalFormatsDirective)
    }
})
export class SheetDirective extends ComplexBase<SheetDirective> {
    public directivePropList: any;
	
    public childRows: any;
    public childColumns: any;
    public childRanges: any;
    public childConditionalFormats: any;
    public tags: string[] = ['rows', 'columns', 'ranges', 'conditionalFormats'];
    /** 
     * Specifies active cell within `selectedRange` in the sheet.
     * @default 'A1'
     */
    public activeCell: any;
    /** 
     * Defines the number of columns to be rendered in the sheet.
     * @default 100
     * @asptype int
     */
    public colCount: any;
    /** 
     * Configures column and its properties for the sheet.
     * @default null
     */
    public columns: any;
    /** 
     * Specifies the conditional formatting for the sheet.
     * @default []
     */
    public conditionalFormats: any;
    /** 
     * Gets or sets the number of frozen columns.
     * @default 0
     * @asptype int
     */
    public frozenColumns: any;
    /** 
     * Gets or sets the number of frozen rows.
     * @default 0
     * @asptype int
     */
    public frozenRows: any;
    /** 
     * Specifies index of the sheet. Based on the index, sheet properties are applied.
     * @default 0
     * @asptype int
     */
    public index: any;
    /** 
     * Specifies to  protect the cells in the sheet.
     * @default false
     */
    public isProtected: any;
    /** 
     * Specifies the name of the sheet, the name will show in the sheet tabs.
     * @default ''
     */
    public name: any;
    /** 
     * Represents the freeze pane top left cell. Its default value would be based on the number of freeze rows and columns.
     * @default 'A1'
     */
    public paneTopLeftCell: any;
    /** 
     * Specifies the password.
     * @default ''
     */
    public password: any;
    /** 
     * Configures protect and its options.
     * @default { selectCells: false, formatCells: false, formatRows: false, formatColumns: false, insertLink: false  }
     */
    public protectSettings: any;
    /** 
     * Specifies the collection of range for the sheet.
     * @default []
     */
    public ranges: any;
    /** 
     * Defines the number of rows to be rendered in the sheet.
     * @default 100
     * @asptype int
     */
    public rowCount: any;
    /** 
     * Configures row and its properties for the sheet.
     * @default null
     */
    public rows: any;
    /** 
     * Specifies selected range in the sheet. 
     *  
     * @default 'A1:A1'
     */
    public selectedRange: any;
    /** 
     * Specifies to show / hide grid lines in the sheet.
     * @default true
     */
    public showGridLines: any;
    /** 
     * Specifies to show / hide column and row headers in the sheet.
     * @default true
     */
    public showHeaders: any;
    /** 
     * Specifies the sheet visibility state. There must be at least one visible sheet in Spreadsheet.
     * @default 'Visible'
     */
    public state: any;
    /** 
     * Specified cell will be positioned at the upper-left corner of the sheet.
     * @default 'A1'
     */
    public topLeftCell: any;
    /** 
     * Defines the used range of the sheet.
     * @default { rowIndex: 0, colIndex: 0 }
     */
    public usedRange: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * Sheet Array Directive
 * @private
 */
@Directive({
    selector: 'ejs-spreadsheet>e-sheets',
    queries: {
        children: new ContentChildren(SheetDirective)
    },
})
export class SheetsDirective extends ArrayBase<SheetsDirective> {
    constructor() {
        super('sheets');
    }
}