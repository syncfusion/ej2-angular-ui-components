import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['colors', 'end', 'label', 'start'];
let outputs: string[] = [];
/**
 * RangeColorSetting Directive
 * ```html
 * <e-rangeColorSettings><e-rangeColorSetting></e-rangeColorSetting><e-rangeColorSettings>
 * ```
 */
@Directive({
    selector: 'e-rangecolorsettings>e-rangecolorsetting',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class RangeColorSettingDirective extends ComplexBase<RangeColorSettingDirective> {
    public directivePropList: any;
	


    /** 
     * Specify the fill colors of point those lies on the given range, if multiple colors mentioned, then we need to fill gradient
     */
    public colors: any;
    /** 
     * Specify the end value of color mapping range
     */
    public end: any;
    /** 
     * Specify name for the range mapping item.
     */
    public label: any;
    /** 
     * Specify the start value of color mapping range
     */
    public start: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * RangeColorSetting Array Directive
 * @private
 */
@Directive({
    selector: 'ejs-chart>e-rangecolorsettings',
    queries: {
        children: new ContentChildren(RangeColorSettingDirective)
    },
})
export class RangeColorSettingsDirective extends ArrayBase<RangeColorSettingsDirective> {
    constructor() {
        super('rangecolorsettings');
    }
}