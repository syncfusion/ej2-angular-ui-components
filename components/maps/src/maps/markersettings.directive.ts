import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';


let input: string[] = ['animationDelay', 'animationDuration', 'border', 'dashArray', 'dataSource', 'fill', 'height', 'highlightSettings', 'imageUrl', 'legendText', 'offset', 'opacity', 'selectionSettings', 'shape', 'template', 'tooltipSettings', 'visible', 'width'];
let outputs: string[] = [];
/**
 * Layer Directive
 * ```html
 * <e-layers>
 * <e-layer>
 * <e-markerSettings>
 * <e-markerSetting>
 * </e-markerSetting>
 * </e-markerSettings>
 * </e-layer>
 * </e-layers>
 * ```
 */
@Directive({
    selector: 'e-layer>e-markerSettings>e-markerSetting',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class MarkerDirective extends ComplexBase<MarkerDirective> {


    /** 
     * Animation delay time
     * @default 0
     */
    public animationDelay: any;
    /** 
     * Animation duration time
     * @default 1000
     */
    public animationDuration: any;
    /** 
     * Options for customizing the color and width of the marker.
     */
    public border: any;
    /** 
     * Options for customizing the dash array options
     */
    public dashArray: any;
    /** 
     * To configure the dataSource of the marker.
     * @isdatamanager false
     * @isobservable true
     * @default []
     */
    public dataSource: any;
    /** 
     * To customize the fill color of the marker.
     * @default '#FF471A'
     */
    public fill: any;
    /** 
     * To customize the height of the marker.
     * @default 10
     */
    public height: any;
    /** 
     * To configure the highlight settings of the maps.
     */
    public highlightSettings: any;
    /** 
     * To provide the image url for rendering marker image
     */
    public imageUrl: any;
    /** 
     * To provide the dataSource field to display legend text
     * @default ''
     */
    public legendText: any;
    /** 
     * To move the marker by setting offset values
     */
    public offset: any;
    /** 
     * To customize the opacity of the marker.
     * @default 1
     */
    public opacity: any;
    /** 
     * To configure the selection settings of the maps.
     */
    public selectionSettings: any;
    /** 
     * To customize the shape of the marker.
     * @default Balloon
     */
    public shape: any;
    /** 
     * To configure the tooltip settings of the maps marker.
     */
    public tooltipSettings: any;
    /** 
     * Toggle the visibility of the marker.
     * @default false
     */
    public visible: any;
    /** 
     * To customize the width of the marker.
     * @default 10
     */
    public width: any;
    /** 
     * To customize the template of the marker.
     * @default null
     */
    @ContentChild('template')
    @Template()
    public template: any;
    @ContentChild('tooltipSettingsTemplate')
    @Template()
    public tooltipSettings_template: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
    }
}

/**
 * Marker Array Directive
 * @private
 */
@Directive({
    selector: 'e-layer>e-markerSettings',
    queries: {
        children: new ContentChildren(MarkerDirective)
    },
})
export class MarkersDirective extends ArrayBase<MarkersDirective> {
    constructor() {
        super('markersettings');
    }
}