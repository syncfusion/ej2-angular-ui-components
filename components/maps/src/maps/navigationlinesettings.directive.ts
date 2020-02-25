import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';


let input: string[] = ['angle', 'arrowSettings', 'color', 'dashArray', 'highlightSettings', 'latitude', 'longitude', 'selectionSettings', 'visible', 'width'];
let outputs: string[] = [];
/**
 * Layer Directive
 * ```html
 * <e-layers>
 * <e-layer>
 * <e-navigationLineSettings>
 * <e-navigationLineSetting>
 * </e-navigationLineSetting>
 * </e-navigationLineSettings>
 * </e-layer>
 * </e-layers>
 * ```
 */
@Directive({
    selector: 'e-layer>e-navigationLineSettings>e-navigationLineSetting',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class NavigationLineDirective extends ComplexBase<NavigationLineDirective> {
    public directivePropList: any;


    /** 
     * Specifies the angle of curve connecting different locations in map
     * @default 0
     */
    public angle: any;
    /** 
     * arrow
     */
    public arrowSettings: any;
    /** 
     * NavigationSelectedLine color
     */
    public color: any;
    /** 
     * dashArray 
     *  @default ''
     */
    public dashArray: any;
    /** 
     * To configure the highlight settings of the maps.
     */
    public highlightSettings: any;
    /** 
     * NavigationSelectedLine latitude 
     *  @default []
     */
    public latitude: any;
    /** 
     * NavigationSelectedLine longitude 
     *  @default []
     */
    public longitude: any;
    /** 
     * To configure the selection settings of the maps.
     */
    public selectionSettings: any;
    /** 
     * NavigationSelectedLine visible 
     *  @default false
     */
    public visible: any;
    /** 
     * Configures the label border
     * @default 1
     */
    public width: any;
    @ContentChild('tooltipSettingsTemplate')
    @Template()
    public tooltipSettings_template: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * NavigationLine Array Directive
 * @private
 */
@Directive({
    selector: 'e-layer>e-navigationLineSettings',
    queries: {
        children: new ContentChildren(NavigationLineDirective)
    },
})
export class NavigationLinesDirective extends ArrayBase<NavigationLinesDirective> {
    constructor() {
        super('navigationlinesettings');
    }
}