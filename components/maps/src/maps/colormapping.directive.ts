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


    /** 
     * To configure color
     * @default null
     */
    public color: any;
    /** 
     * To configure from
     * @aspdefaultvalueignore 
     * @default null
     */
    public from: any;
    /** 
     * To configure labels
     * @default null
     */
    public label: any;
    /** 
     * To configure max opacity
     * @default null
     */
    public maxOpacity: any;
    /** 
     * To configure min opacity
     * @default null
     */
    public minOpacity: any;
    /** 
     * To enable or disable the legend
     * @default true
     */
    public showLegend: any;
    /** 
     * To configure to
     * @aspdefaultvalueignore 
     * @default null
     */
    public to: any;
    /** 
     * To configure value
     * @default null
     */
    public value: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
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