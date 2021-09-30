import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';
import { ColorMappingsDirective } from './colormapping.directive';

let input: string[] = ['animationDelay', 'animationDuration', 'border', 'bubbleType', 'colorMapping', 'colorValuePath', 'dataSource', 'fill', 'highlightSettings', 'maxRadius', 'minRadius', 'opacity', 'query', 'selectionSettings', 'tooltipSettings', 'valuePath', 'visible'];
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
     * Sets and gets the delay in animation for bubble in maps.
     * @default 0
     */
    public animationDelay: any;
    /** 
     * Sets and gets the duration for the animation for bubble in maps.
     * @default 1000
     */
    public animationDuration: any;
    /** 
     * Sets and gets the options to customize the color and width of the border for the bubble in maps.
     */
    public border: any;
    /** 
     * Sets and gets the type of the bubble in maps.
     * @default Circle
     */
    public bubbleType: any;
    /** 
     * Sets and gets the color-mapping for the bubble in maps.
     * @default []
     */
    public colorMapping: any;
    /** 
     * Sets and gets the value from the data source of bubble settings for the color of the bubble in maps.
     * @default null
     */
    public colorValuePath: any;
    /** 
     * Sets and gets the data source for the bubble. 
     * The data source must contain the size value of the bubble that can be bound to the bubble 
     * of the Maps using the valuePath property in the bubbleSettings. 
     * The data source can contain data such as color, and the other information that can be bound to the bubble, and tooltip of the bubble.
     * @isobservable true
     * @default []
     */
    public dataSource: any;
    /** 
     * Sets and gets the color for the bubble in maps.
     * @default ''
     */
    public fill: any;
    /** 
     * Sets and gets the highlight settings for the bubble in maps.
     */
    public highlightSettings: any;
    /** 
     * Sets and gets the maximum radius for the bubble in maps.
     * @default 20
     */
    public maxRadius: any;
    /** 
     * Sets and gets the minimum radius for the bubble in maps.
     * @default 10
     */
    public minRadius: any;
    /** 
     * Sets and gets the opacity of the bubble in maps.
     * @default 1
     */
    public opacity: any;
    /** 
     * Sets and gets the query to select particular data from the bubble data. 
     * This property is applicable only when the data source is created by data manager.
     * @default null
     */
    public query: any;
    /** 
     * Sets and gets the selection settings for the bubble in maps.
     */
    public selectionSettings: any;
    /** 
     * Sets and gets the options to customize the tooltip for the bubbles in maps.
     */
    public tooltipSettings: any;
    /** 
     * Sets and gets the value from the data source of bubble settings for the bubble to be rendered in maps.
     * @default null
     */
    public valuePath: any;
    /** 
     * Enables or disables the visibility state of the bubbles in maps.
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