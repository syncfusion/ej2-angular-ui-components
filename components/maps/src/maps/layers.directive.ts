import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';

import { InitialShapeSelectionsDirective } from './initialshapeselection.directive';
import { MarkersDirective } from './markersettings.directive';
import { BubblesDirective } from './bubblesettings.directive';
import { NavigationLinesDirective } from './navigationlinesettings.directive';

let input: string[] = ['animationDuration', 'bingMapType', 'bubbleSettings', 'dataLabelSettings', 'dataSource', 'geometryType', 'highlightSettings', 'initialShapeSelection', 'key', 'layerType', 'markerClusterSettings', 'markerSettings', 'navigationLineSettings', 'query', 'selectionSettings', 'shapeData', 'shapeDataPath', 'shapePropertyPath', 'shapeSettings', 'staticMapType', 'toggleLegendSettings', 'tooltipSettings', 'type', 'urlTemplate', 'visible'];
let outputs: string[] = [];
/**
 * Layer Directive
 * ```html
 * <e-layers>
 * <e-layer></e-layer>
 * </e-layers>
 * ```
 */
@Directive({
    selector: 'e-layers>e-layer',
    inputs: input,
    outputs: outputs,    
    queries: {
        childInitialShapeSelection: new ContentChild(InitialShapeSelectionsDirective), 
        childMarkerSettings: new ContentChild(MarkersDirective), 
        childBubbleSettings: new ContentChild(BubblesDirective), 
        childNavigationLineSettings: new ContentChild(NavigationLinesDirective)
    }
})
export class LayerDirective extends ComplexBase<LayerDirective> {
    public directivePropList: any;
	
    public childInitialShapeSelection: any;
    public childMarkerSettings: any;
    public childBubbleSettings: any;
    public childNavigationLineSettings: any;
    public tags: string[] = ['initialShapeSelection', 'markerSettings', 'bubbleSettings', 'navigationLineSettings'];
    /** 
     * Sets and gets the type of the layer in maps.
     * @default Layer
     */
    public type: any;
    /** 
     * Sets and gets the duration for the animation of layers in maps.
     * @default 0
     */
    public animationDuration: any;
    /** 
     * Sets and gets the Bing map type for the layer. If you use shape data with BingMapType without using layer type as Bing, 
     * then the map will render based on shape data since default layer type will be set as Geometry.
     * @default Aerial
     */
    public bingMapType: any;
    /** 
     * Sets and gets the options for customizing the bubble in maps.
     */
    public bubbleSettings: any;
    /** 
     * Sets and gets the options for customizing the data-label in maps.
     */
    public dataLabelSettings: any;
    /** 
     * * Sets and gets the data source for the layer. 
     * * The data source can contain data that can be bound to the tooltip, marker, and bubble.
     * @isobservable true
     * @default []
     */
    public dataSource: any;
    /** 
     * Sets and gets the geometry type for the layer in maps.
     * @default Geographic
     */
    public geometryType: any;
    /** 
     * Sets and gets the options for customizing the shapes when the mouse has hovered on maps.
     */
    public highlightSettings: any;
    /** 
     * Sets and gets the settings for shapes that is selected at the time of rendering.
     */
    public initialShapeSelection: any;
    /** 
     * Sets and gets the key for the tile map layer in maps.
     * @default ''
     */
    public key: any;
    /** 
     * Sets and gets the type of the layer in maps. If we use layer type with shape data property in layer of the maps 
     * then map will render based on the provided layer type.
     * @default Geometry
     */
    public layerType: any;
    /** 
     * Sets and gets the options for customizing the cluster of markers in maps.
     */
    public markerClusterSettings: any;
    /** 
     * Sets and gets the options for customizing the marker in maps.
     */
    public markerSettings: any;
    /** 
     * Sets and gets the options for customizing the navigation line in maps.
     */
    public navigationLineSettings: any;
    /** 
     * Sets and gets the query to select particular data from the shape data. 
     * This property is applicable only when the data source is created by data manager.
     * @default null
     */
    public query: any;
    /** 
     * Sets and gets the options for customizing the shapes when clicking the shapes in maps.
     */
    public selectionSettings: any;
    /** 
     * Sets and gets the shape data for the maps to render.
     * @isobservable true
     * @default null
     */
    public shapeData: any;
    /** 
     * Sets and gets the path for the shape from the shape data in maps.
     * @default 'name'
     */
    public shapeDataPath: any;
    /** 
     * Sets and gets the path for the layers from the layer data source in maps.
     * @default 'name'
     */
    public shapePropertyPath: any;
    /** 
     * Sets and gets the options to customize the shape of the maps.
     */
    public shapeSettings: any;
    /** 
     * Sets and gets the type of the static maps.
     * @default RoadMap
     */
    public staticMapType: any;
    /** 
     * Sets and gets the options for customizing the toggle state of shapes when selecting the legend in maps.
     */
    public toggleLegendSettings: any;
    /** 
     * Sets and gets the options for customizing the tooltip for the layers, markers, and bubbles in maps.
     */
    public tooltipSettings: any;
    /** 
     * Sets and gets the template for the map using the url.
     * @default 'https://a.tile.openstreetmap.org/level/tileX/tileY.png'
     */
    public urlTemplate: any;
    /** 
     * Enables or disables the visibility state for the layers in maps.
     * @default true
     */
    public visible: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * Layer Array Directive
 * @private
 */
@Directive({
    selector: 'ej-maps>e-layers',
    queries: {
        children: new ContentChildren(LayerDirective)
    },
})
export class LayersDirective extends ArrayBase<LayersDirective> {
    constructor() {
        super('layers');
    }
}