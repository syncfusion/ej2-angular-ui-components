import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['cssClass', 'from', 'label', 'to'];
let outputs: string[] = [];
/**
 * `e-holidays` directive represent a holidays collection in Gantt. 
 * It must be contained in a Gantt component(`ejs-gantt`). 
 * ```html
 * <ejs-gantt [dataSource]='data' allowSelection='true' allowSorting='true'> 
 *   <e-holidays>
 *     <e-holiday from='02/20/2018' label='Holiday 1'></e-holiday>
 *     <e-holiday from='05/15/2018' label='Holiday 2'></e-holiday>
 *   </e-holidays>
 * </ejs-gantt>
 * ```
 */
@Directive({
    selector: 'ejs-gantt>e-holidays>e-holidays',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class HolidayDirective extends ComplexBase<HolidayDirective> {
    public directivePropList: any;
	


    /** 
     * Defines custom css class of holiday to customize background and label.
     * @default null
     */
    public cssClass: any;
    /** 
     * Defines start date of holiday.
     * @default null
     */
    public from: any;
    /** 
     * Defines label of holiday.
     * @default null
     */
    public label: any;
    /** 
     * Defines end date of holiday.
     * @default null
     */
    public to: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * Holiday Array Directive
 * @private
 */
@Directive({
    selector: 'ejs-gantt>e-holidays',
    queries: {
        children: new ContentChildren(HolidayDirective)
    },
})
export class HolidaysDirective extends ArrayBase<HolidaysDirective> {
    constructor() {
        super('holidays');
    }
}