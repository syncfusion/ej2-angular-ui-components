import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['format', 'formula', 'index', 'style', 'value'];
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

    }
})
export class CellDirective extends ComplexBase<CellDirective> {


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
     * Specifies the index of the cell.
     * @default 0
     * @asptype int
     */
    public index: any;
    /** 
     * Specifies the cell style options. 
     *  
     * @default {}
     */
    public style: any;
    /** 
     * Defines the value of the cell which can be text or number with formatting.
     * @default ''
     */
    public value: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
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