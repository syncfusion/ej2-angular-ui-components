import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';


let input: string[] = ['option', 'template'];
let outputs: string[] = [];
/**
 * `e-header-rows` directive represent a header rows of the Schedule. 
 * It must be contained in a Schedule component(`ejs-schedule`). 
 * ```html
 * <ejs-schedule>
 *   <e-header-rows>
 *    <e-header-row option='Week'></e-header-row>
 *    <e-header-row option='Date'></e-header-row>
 *   </e-header-rows>
 * </ejs-schedule>
 * ```
 */
@Directive({
    selector: 'e-header-rows>e-header-row',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class HeaderRowDirective extends ComplexBase<HeaderRowDirective> {
    public directivePropList: any;
	


    /** 
     * It defines the header row type, which accepts either of the following values. 
     * * Year 
     * * Month 
     * * Week 
     * * Date 
     * * Hour
     * @default null
     */
    public option: any;
    /** 
     * Template option to customize the individual header rows. It accepts either the string or HTMLElement as template design 
     *  content and parse it appropriately before displaying it onto the header cells. The field that 
     *  can be accessed via this template is `date`.
     * @default null
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
 * HeaderRow Array Directive
 * @private
 */
@Directive({
    selector: 'ejs-schedule>e-header-rows',
    queries: {
        children: new ContentChildren(HeaderRowDirective)
    },
})
export class HeaderRowsDirective extends ArrayBase<HeaderRowsDirective> {
    constructor() {
        super('headerrows');
    }
}