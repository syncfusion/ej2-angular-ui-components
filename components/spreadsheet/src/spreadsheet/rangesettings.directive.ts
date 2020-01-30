import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['dataSource', 'query', 'range', 'showFieldAsHeader', 'startCell', 'template'];
let outputs: string[] = [];
/**
 * `e-rangesetting` directive represent a range setting of the Angular Spreadsheet.
 * It must be contained in a `e-sheet` directive.
 * ```html
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-rangesettings>
 *    <e-rangesetting [dataSource]='data'></e-rangesetting>
 *    </e-rangesettings>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
@Directive({
    selector: 'e-rangesettings>e-rangesetting',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class RangeSettingDirective extends ComplexBase<RangeSettingDirective> {


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
     * Specifies the range for updating the dataSource or template.
     * @default 'A1'
     */
    public range: any;
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
     *  @default ''
     */
    public template: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
    }
}

/**
 * RangeSetting Array Directive
 * @private
 */
@Directive({
    selector: 'e-sheet>e-rangesettings',
    queries: {
        children: new ContentChildren(RangeSettingDirective)
    },
})
export class RangeSettingsDirective extends ArrayBase<RangeSettingsDirective> {
    constructor() {
        super('rangesettings');
    }
}