import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';


let input: string[] = ['address', 'dataSource', 'query', 'showFieldAsHeader', 'startCell', 'template'];
let outputs: string[] = [];
/**
 * `e-range` directive represent a range of the Angular Spreadsheet.
 * It must be contained in a `e-sheet` directive.
 * ```html
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-ranges>
 *    <e-range [dataSource]='data'></e-range>
 *    </e-ranges>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
@Directive({
    selector: 'e-ranges>e-range',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class RangeDirective extends ComplexBase<RangeDirective> {
    public directivePropList: any;
	


    /** 
     * Specifies the address for updating the dataSource or template.
     * @default 'A1'
     */
    public address: any;
    /** 
     * Specifies the data as JSON / Data manager to the sheet.
     * @default null
     */
    public dataSource: any;
    /** 
     * Defines the external [`Query`](https://ej2.syncfusion.com/documentation/data/api-query.html) 
     * that will be executed along with data processing.
     * @default null
     */
    public query: any;
    /** 
     * Show/Hide the field of the datasource as header.
     * @default true
     */
    public showFieldAsHeader: any;
    /** 
     * Specifies the start cell from which the datasource will be populated.
     * @default 'A1'
     */
    public startCell: any;
    /** 
     * Template helps to compiles the given HTML String (or HTML Element ID) into HtML Element and append to the Cell.
     * 
     *  @default ''
     *     
     */
    @ContentChild('template')
    @Template()
    public template: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * Range Array Directive
 * @private
 */
@Directive({
    selector: 'e-sheet>e-ranges',
    queries: {
        children: new ContentChildren(RangeDirective)
    },
})
export class RangesDirective extends ArrayBase<RangesDirective> {
    constructor() {
        super('ranges');
    }
}