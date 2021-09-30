import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';


let input: string[] = ['animationDelay', 'animationDuration', 'border', 'colorValuePath', 'dashArray', 'dataSource', 'fill', 'height', 'highlightSettings', 'imageUrl', 'imageUrlValuePath', 'initialMarkerSelection', 'latitudeValuePath', 'legendText', 'longitudeValuePath', 'offset', 'opacity', 'query', 'selectionSettings', 'shape', 'shapeValuePath', 'template', 'tooltipSettings', 'visible', 'width'];
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
    public directivePropList: any;
	


    /** 
     * Sets and gets the delay time for the animation in marker.
     * @default 0
     */
    public animationDelay: any;
    /** 
     * Sets and gets the duration time for animating the marker.
     * @default 1000
     */
    public animationDuration: any;
    /** 
     * Sets and gets the options for customizing the color and width of the border for the marker in maps.
     */
    public border: any;
    /** 
     * Sets and gets the value path from the marker data source to apply color for the marker.
     * @default null
     */
    public colorValuePath: any;
    /** 
     * Sets and gets the dash-array for the marker.
     */
    public dashArray: any;
    /** 
     * Sets and gets the data source for the marker. 
     * The data source for the marker will contain latitude and longitude values to specify the location 
     * of the marker. 
     * The data source can contain data such as color, shape, and other details that can be bound to the color, shape, 
     * and tooltip of the marker.
     * @isobservable true
     * @default []
     */
    public dataSource: any;
    /** 
     * Sets and gets the color for the marker in maps.
     * @default '#FF471A'
     */
    public fill: any;
    /** 
     * Sets and gets the height of the marker in maps.
     * @default 10
     */
    public height: any;
    /** 
     * Sets and gets the options to customize the marker while the mouse has hovered on the marker in maps.
     */
    public highlightSettings: any;
    /** 
     * Sets and gets the URL for rendering the marker as image.
     */
    public imageUrl: any;
    /** 
     * Sets and gets the value path from the marker data source for the image of the marker.
     * @default null
     */
    public imageUrlValuePath: any;
    /** 
     * To select the shape at the rendering time.
     */
    public initialMarkerSelection: any;
    /** 
     * Defines the value path from the marker data source for setting latitude for a set of markers.
     */
    public latitudeValuePath: any;
    /** 
     * Sets and gets the text for the legend from the marker data source.
     * @default ''
     */
    public legendText: any;
    /** 
     * Defines the value path from the marker data source for setting longitude for a set of markers.
     */
    public longitudeValuePath: any;
    /** 
     * Sets and gets the position to move the marker by setting specific value.
     */
    public offset: any;
    /** 
     * Sets and gets the opacity for the marker in maps.
     * @default 1
     */
    public opacity: any;
    /** 
     * Sets and gets the query to select particular data from the marker data. 
     * This property is applicable only when the data source is created by data manager.
     * @default null
     */
    public query: any;
    /** 
     * Sets and gets the options to customize the marker while selecting the marker in maps.
     */
    public selectionSettings: any;
    /** 
     * Sets and gets the shape of the marker in maps.
     * @default Balloon
     */
    public shape: any;
    /** 
     * Sets and gets the value path from the marker data source to set the shape of the marker.
     * @default null
     */
    public shapeValuePath: any;
    /** 
     * Sets and gets the options to customize the tooltip for the marker in maps.
     */
    public tooltipSettings: any;
    /** 
     * Enables or disables the visibility state of the marker based on the marker data source in maps.
     * @default false
     */
    public visible: any;
    /** 
     * Sets and gets the width of the marker in maps.
     * @default 10
     */
    public width: any;
    /** 
     * Sets and gets the template for the marker.
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
        this.directivePropList = input;
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