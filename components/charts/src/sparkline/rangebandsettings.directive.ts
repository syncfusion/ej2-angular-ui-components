import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['color', 'endRange', 'opacity', 'startRange'];
let outputs: string[] = [];

@Directive({
    selector: 'e-rangeBandSettings>e-rangeBandSetting',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class RangeBandSettingDirective extends ComplexBase<RangeBandSettingDirective> {


    /** 
     * To configure sparkline rangeband color
     */
    public color: any;
    /** 
     * To configure sparkline end range

     */
    public endRange: any;
    /** 
     * To configure sparkline rangeband opacity

     */
    public opacity: any;
    /** 
     * To configure sparkline start range

     */
    public startRange: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
    }
}

/**
 * RangeBandSetting Array Directive
 * @private
 */
@Directive({
    selector: 'ejs-sparkline>e-rangeBandSettings',
    queries: {
        children: new ContentChildren(RangeBandSettingDirective)
    },
})
export class RangeBandSettingsDirective extends ArrayBase<RangeBandSettingsDirective> {
    constructor() {
        super('rangebandsettings');
    }
}