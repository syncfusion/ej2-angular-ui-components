import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';

import { ImagesDirective } from './image.directive';
import { ChartsDirective } from './chart.directive';

let input: string[] = ['chart', 'colSpan', 'format', 'formula', 'hyperlink', 'image', 'index', 'isLocked', 'rowSpan', 'style', 'validation', 'value', 'wrap'];
let outputs: string[] = [];
/**
 * `e-cell` directive represent a cell of the Angular Spreadsheet.
 * It must be contained in a `e-row` directive.
 * ```html
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-rows>
 *    <e-row>
 *    <e-cells>
 *    <e-cell value='A1'></e-cell>
 *    </e-cells>
 *    </e-row>
 *    </e-rows>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
@Directive({
    selector: 'e-cells>e-cell',
    inputs: input,
    outputs: outputs,    
    queries: {
        childImage: new ContentChild(ImagesDirective), 
        childChart: new ContentChild(ChartsDirective)
    }
})
export class CellDirective extends ComplexBase<CellDirective> {
    public directivePropList: any;
	
    public childImage: any;
    public childChart: any;
    public tags: string[] = ['image', 'chart'];
    /** 
     * Specifies the chart of the cell.
     * @default []
     */
    public chart: any;
    /** 
     * Specifies the column-wise cell merge count.
     * @default 1
     * @asptype int
     */
    public colSpan: any;
    /** 
     * Specifies the number format code to display value in specified number format.
     * @default 'General'
     */
    public format: any;
    /** 
     * Defines the formula or expression of the cell.
     * @default ''
     */
    public formula: any;
    /** 
     * Specifies the hyperlink of the cell.
     * @default ''
     */
    public hyperlink: any;
    /** 
     * Specifies the image of the cell.
     * @default []
     */
    public image: any;
    /** 
     * Specifies the index of the cell.
     * @default 0
     * @asptype int
     */
    public index: any;
    /** 
     * Specifies the cell is locked or not, for allow edit range in spreadsheet protect option.
     * @default null
     */
    public isLocked: any;
    /** 
     * Specifies the row-wise cell merge count.
     * @default 1
     * @asptype int
     */
    public rowSpan: any;
    /** 
     * Specifies the cell style options. 
     *  
     * @default {}
     */
    public style: any;
    /** 
     * Specifies the validation of the cell.
     * @default ''
     */
    public validation: any;
    /** 
     * Defines the value of the cell which can be text or number.
     * @default ''
     */
    public value: any;
    /** 
     * Wraps the cell text to the next line, if the text width exceeds the column width.
     * @default false
     */
    public wrap: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * Cell Array Directive
 * @private
 */
@Directive({
    selector: 'e-row>e-cells',
    queries: {
        children: new ContentChildren(CellDirective)
    },
})
export class CellsDirective extends ArrayBase<CellsDirective> {
    constructor() {
        super('cells');
    }
}