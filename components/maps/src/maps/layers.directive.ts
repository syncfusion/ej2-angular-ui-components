import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';

import { MarkersDirective } from './markersettings.directive';
import { BubblesDirective } from './bubblesettings.directive';
import { NavigationLinesDirective } from './navigationlinesettings.directive';

let input: string[] = ['animationDuration', 'bingMapType', 'bubbleSettings', 'dataLabelSettings', 'dataSource', 'geometryType', 'highlightSettings', 'key', 'layerType', 'markerClusterSettings', 'markerSettings', 'navigationLineSettings', 'query', 'selectionSettings', 'shapeData', 'shapeDataPath', 'shapePropertyPath', 'shapeSettings', 'toggleLegendSettings', 'tooltipSettings', 'type', 'urlTemplate', 'visible'];
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
        childMarkerSettings: new ContentChild(MarkersDirective), 
        childBubbleSettings: new ContentChild(BubblesDirective), 
        childNavigationLineSettings: new ContentChild(NavigationLinesDirective)
    }
})
export class LayerDirective extends ComplexBase<LayerDirective> {
    public childMarkerSettings: any;
    public childBubbleSettings: any;
    public childNavigationLineSettings: any;
    public tags: string[] = ['markerSettings', 'bubbleSettings', 'navigationLineSettings'];
    /** 
     * Specifies the type for the layer.

     */
    public type: any;
    /** 
     * Specifies the animation duration for the layer.

     */
    public animationDuration: any;
    /** 
     * Specifies the type for the bing map.

     */
    public bingMapType: any;
    /** 
     * To configure the bubble settings of the maps.
     */
    public bubbleSettings: any;
    /** 
     * To configure the datalabel settings of the maps.
     */
    public dataLabelSettings: any;
    /** 
     * Specifies the data source for the layer.



     */
    public dataSource: any;
    /** 
     * Specifies the geometry type

     */
    public geometryType: any;
    /** 
     * To configure the highlight settings of the maps.
     */
    public highlightSettings: any;
    /** 
     * Specifies the key for the layer.

     */
    public key: any;
    /** 
     * Specifies the layerType for the layer.

     */
    public layerType: any;
    /** 
     * To configure the cluster settings.
     */
    public markerClusterSettings: any;
    /** 
     * To configure the marker settings.
     */
    public markerSettings: any;
    /** 
     * navigationLineSetting
     */
    public navigationLineSettings: any;
    /** 
     * Specifies the query to select particular data from the shape data. 
     * This property is applicable only when the DataSource is `ej.DataManager`.

     */
    public query: any;
    /** 
     * To configure the selection settings of the maps.
     */
    public selectionSettings: any;
    /** 
     * Specifies the shape data for the layer.


     */
    public shapeData: any;
    /** 
     * Specifies the shapeDataPath for the layer.

     */
    public shapeDataPath: any;
    /** 
     * Specifies the shapePropertyPath for the layer.

     */
    public shapePropertyPath: any;
    /** 
     * Specifies the shape properties
     */
    public shapeSettings: any;
    /** 
     * To configure the legend toggle settings.
     */
    public toggleLegendSettings: any;
    /** 
     * To configure the tooltip settings of the maps layer.
     */
    public tooltipSettings: any;
    /** 
     * Specifies the urlTemplate for the layer.

     */
    public urlTemplate: any;
    /** 
     * Toggle the visibility of the layers.

     */
    public visible: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
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