import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['color', 'from', 'label', 'maxOpacity', 'minOpacity', 'showLegend', 'to', 'value'];
let outputs: string[] = [];
/**
 * ColorMapping Directive
 * ```html
 * <e-layers>
 * <e-layer>
 * <e-bubbleSettings>
 * <e-colorMappings>
 * <e-colorMapping>
 * </e-colorMapping>
 * </e-colorMappings>
 * </e-bubbleSettings>
 * </e-layer>
 * </e-layers>
 * ```
 */
@Directive({
    selector: 'e-bubbleSettings>e-colorMappings>e-colorMapping',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class ColorMappingDirective extends ComplexBase<ColorMappingDirective> {
    public directivePropList: any;
	


    /** 
     * Sets and gets the color for the color-mapping in maps.
     * @default null
     */
    public color: any;
    /** 
     * Sets and gets the value from where the range color-mapping starts.
     * @aspdefaultvalueignore 
     * @default null
     */
    public from: any;
    /** 
     * Sets and gets the label for the color-mapping from the data source in maps.
     * @default null
     */
    public label: any;
    /** 
     * Sets and gets the maximum opacity for the color-mapping in maps.
     * @default null
     */
    public maxOpacity: any;
    /** 
     * Sets and gets the minimum opacity for the color-mapping in maps.
     * @default null
     */
    public minOpacity: any;
    /** 
     * Enables or disables the visibility state of legend for the color-mapping shapes in maps.
     * @default true
     */
    public showLegend: any;
    /** 
     * Sets and gets the value to where the range color-mapping ends.
     * @aspdefaultvalueignore 
     * @default null
     */
    public to: any;
    /** 
     * Sets and gets the value for the color-mapping from the data source.
     * @default null
     */
    public value: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * ColorMapping Array Directive
 * @private
 */
@Directive({
    selector: 'e-bubbleSettings>e-colorMappings',
    queries: {
        children: new ContentChildren(ColorMappingDirective)
    },
})
export class ColorMappingsDirective extends ArrayBase<ColorMappingsDirective> {
    constructor() {
        super('colormapping');
    }
}