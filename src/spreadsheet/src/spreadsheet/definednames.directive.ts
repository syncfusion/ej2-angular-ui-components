import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['comment', 'name', 'refersTo', 'scope'];
let outputs: string[] = [];
/**
 * `e-definedname` directive represent a defined name of the Angular Spreadsheet.
 * It must be contained in a Spreadsheet component(`ejs-spreadsheet`).
 * ```html
 * <ejs-spreadsheet>
 *   <e-definednames>
 *    <e-definedname></e-definedname>
 *    <e-definedname></e-definedname>
 *   </e-definednames>
 * </ejs-spreadsheet>
 * ```
 */
@Directive({
    selector: 'e-definednames>e-definedname',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class DefinedNameDirective extends ComplexBase<DefinedNameDirective> {
    public directivePropList: any;
	


    /** 
     * Specifies comment for the defined name.
     * @default ''
     */
    public comment: any;
    /** 
     * Specifies name for the defined name, which can be used in formula.
     * @default ''
     */
    public name: any;
    /** 
     * Specifies reference for the defined name.
     * @default ''
     */
    public refersTo: any;
    /** 
     * Specifies scope for the defined name.
     * @default ''
     */
    public scope: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * DefinedName Array Directive
 * @private
 */
@Directive({
    selector: 'ejs-spreadsheet>e-definednames',
    queries: {
        children: new ContentChildren(DefinedNameDirective)
    },
})
export class DefinedNamesDirective extends ArrayBase<DefinedNamesDirective> {
    constructor() {
        super('definednames');
    }
}