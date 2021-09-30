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
     * Sets and gets the angle of curve connecting different locations in maps.
     * @default 0
     */
    public angle: any;
    /** 
     * Sets and gets the options to customize the arrow for the navigation line in maps.
     */
    public arrowSettings: any;
    /** 
     * Sets and gets the color for the navigation lines in maps.
     */
    public color: any;
    /** 
     * Sets and gets the dash-array for the navigation lines drawn in maps.
     * @default ''
     */
    public dashArray: any;
    /** 
     * Sets and gets the highlight settings of the navigation line in maps.
     */
    public highlightSettings: any;
    /** 
     * Sets and gets the latitude value for the navigation lines drawn in maps.
     * @default []
     */
    public latitude: any;
    /** 
     * Sets and gets the longitude for the navigation lines drawn in maps.
     * @default []
     */
    public longitude: any;
    /** 
     * Sets and gets the selection settings of the navigation line in maps.
     */
    public selectionSettings: any;
    /** 
     * Enables or disables the navigation lines to be drawn in maps.
     * @default false
     */
    public visible: any;
    /** 
     * Sets and gets the width of the navigation lines in maps.
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