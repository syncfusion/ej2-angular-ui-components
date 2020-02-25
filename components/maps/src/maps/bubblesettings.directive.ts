import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';
import { ColorMappingsDirective } from './colormapping.directive';

let input: string[] = ['animationDelay', 'animationDuration', 'border', 'bubbleType', 'colorMapping', 'colorValuePath', 'dataSource', 'fill', 'highlightSettings', 'maxRadius', 'minRadius', 'opacity', 'selectionSettings', 'tooltipSettings', 'valuePath', 'visible'];
let outputs: string[] = [];
/**
 * Layer Directive
 * ```html
 * <e-layers>
 * <e-layer>
 * <e-bubbleSettings>
 * <e-bubbleSetting>
 * </e-bubbleSetting>
 * </e-bubbleSettings>
 * </e-layer>
 * </e-layers>
 * ```
 */
@Directive({
    selector: 'e-layer>e-bubbleSettings>e-bubbleSetting',
    inputs: input,
    outputs: outputs,    
    queries: {
        childColorMapping: new ContentChild(ColorMappingsDirective)
    }
})
export class BubbleDirective extends ComplexBase<BubbleDirective> {
    public directivePropList: any;
    public childColorMapping: any;
    public tags: string[] = ['colorMapping'];
    /** 
     * Animation duration
     * @default 0
     */
    public animationDelay: any;
    /** 
     * To configure bubble animation duration
     * @default 1000
     */
    public animationDuration: any;
    /** 
     * Configures the bubble border
     */
    public border: any;
    /** 
     * To configure bubble shape type
     * @default Circle
     */
    public bubbleType: any;
    /** 
     * To configure bubble colorMapping
     * @default []
     */
    public colorMapping: any;
    /** 
     * To configure bubble colorValuePath
     * @default null
     */
    public colorValuePath: any;
    /** 
     * * Specifies dataSource for the bubble. 
     * * The datasource must contain the size value of the bubble that can be bound to the bubble 
     * of the Maps using the valuePath property in the bubbleSettings. 
     * * The datasource can contain data such as color, and the other information that can be bound to the color, and tooltip of the bubble.
     * @isdatamanager false
     * @isobservable true
     * @default []
     */
    public dataSource: any;
    /** 
     * To configure bubble fill color
     * @default ''
     */
    public fill: any;
    /** 
     * To configure the highlight settings of the maps.
     */
    public highlightSettings: any;
    /** 
     * To configure bubble maxRadius
     * @default 20
     */
    public maxRadius: any;
    /** 
     * To configure bubble minRadius
     * @default 10
     */
    public minRadius: any;
    /** 
     * To configure bubble opacity
     * @default 1
     */
    public opacity: any;
    /** 
     * To configure the selection settings of the maps.
     */
    public selectionSettings: any;
    /** 
     * To configure the tooltip settings of the bubble .
     */
    public tooltipSettings: any;
    /** 
     * To configure bubble valuePath
     * @default null
     */
    public valuePath: any;
    /** 
     * Toggle the visibility of bubble
     * @default false
     */
    public visible: any;
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
 * Bubble Array Directive
 * @private
 */
@Directive({
    selector: 'e-layer>e-bubbleSettings',
    queries: {
        children: new ContentChildren(BubbleDirective)
    },
})
export class BubblesDirective extends ArrayBase<BubblesDirective> {
    constructor() {
        super('bubblesettings');
    }
}