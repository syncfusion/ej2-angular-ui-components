import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';

import { CellsDirective } from './cells.directive';

let input: string[] = ['cells', 'customHeight', 'format', 'height', 'hidden', 'index'];
let outputs: string[] = [];
/**
 * `e-row` directive represent a row of the Angular Spreadsheet.
 * It must be contained in a `e-sheet` directive.
 * ```html
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-rows>
 *    <e-row></e-row>
 *    </e-rows>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
@Directive({
    selector: 'e-rows>e-row',
    inputs: input,
    outputs: outputs,    
    queries: {
        childCells: new ContentChild(CellsDirective)
    }
})
export class RowDirective extends ComplexBase<RowDirective> {
    public directivePropList: any;
	
    public childCells: any;
    public tags: string[] = ['cells'];
    /** 
     * Specifies cell and its properties for the row.
     * @default []
     */
    public cells: any;
    /** 
     * specifies custom height of the row.
     * @default false
     */
    public customHeight: any;
    /** 
     * Specifies format of the row.
     * @default {}
     */
    public format: any;
    /** 
     * Specifies height of the row.
     * @default 20
     * @asptype int
     */
    public height: any;
    /** 
     * To hide/show the row in spreadsheet.
     * @default false
     */
    public hidden: any;
    /** 
     * Specifies the index to the row. Based on the index, row properties are applied.
     * @default 0
     * @asptype int
     */
    public index: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * Row Array Directive
 * @private
 */
@Directive({
    selector: 'e-sheet>e-rows',
    queries: {
        children: new ContentChildren(RowDirective)
    },
})
export class RowsDirective extends ArrayBase<RowsDirective> {
    constructor() {
        super('rows');
    }
}