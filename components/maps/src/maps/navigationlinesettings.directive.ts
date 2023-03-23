import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';


let input: string[] = ['angle', 'arrowSettings', 'color', 'dashArray', 'highlightSettings', 'latitude', 'longitude', 'selectionSettings', 'visible', 'width'];
let outputs: string[] = [];
/**
 * Represents the directive to define the navigation lines in the maps.
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
     * Gets or sets the angle of the curve connecting different locations in maps.
     * @default 0
     */
    public angle: any;
    /** 
     * Gets or sets the options to customize the arrow for the navigation line in maps.
     */
    public arrowSettings: any;
    /** 
     * Gets or sets the color for the navigation lines in maps.
     * @default 'black'
     */
    public color: any;
    /** 
     * Gets or sets the dash-array for the navigation lines drawn in maps.
     * @default ''
     */
    public dashArray: any;
    /** 
     * Gets or sets the highlight settings of the navigation line in maps.
     */
    public highlightSettings: any;
    /** 
     * Gets or sets the latitude value for the navigation lines to be drawn in maps.
     * @default []
     */
    public latitude: any;
    /** 
     * Gets or sets the longitude for the navigation lines to be drawn in maps.
     * @default []
     */
    public longitude: any;
    /** 
     * Gets or sets the selection settings of the navigation line in maps.
     */
    public selectionSettings: any;
    /** 
     * Enables or disables the navigation lines to be drawn in maps.
     * @default false
     */
    public visible: any;
    /** 
     * Gets or sets the width of the navigation lines in maps.
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