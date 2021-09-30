import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['color', 'from', 'label', 'maxOpacity', 'minOpacity', 'showLegend', 'to', 'value'];
let outputs: string[] = [];

@Directive({
    selector: 'e-levels>e-colorMappings>e-colorMapping',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class ColorMappingDirective extends ComplexBase<ColorMappingDirective> {
    public directivePropList: any;
	


    /** 
     * Sets and gets the color for the color-mapping in treemap.
     * @default null
     */
    public color: any;
    /** 
     * Sets and gets the value from which the range of color mapping starts.
     * @default null
     */
    public from: any;
    /** 
     * Sets and gets the label text for the legend based on color mapping.
     * @default null
     */
    public label: any;
    /** 
     * Sets and gets the maximum opacity for the color-mapping in the treemap component.
     * @default null
     */
    public maxOpacity: any;
    /** 
     * Sets and gets the minimum opacity for the color-mapping in the treemap component.
     * @default null
     */
    public minOpacity: any;
    /** 
     * Enables or disables the visibility of the legend for color mapping in the treemap component.
     * @default true
     */
    public showLegend: any;
    /** 
     * Sets and gets the value to which the range of color mapping ends.
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
    selector: 'e-levels>e-colorMappings',
    queries: {
        children: new ContentChildren(ColorMappingDirective)
    },
})
export class ColorMappingsDirective extends ArrayBase<ColorMappingsDirective> {
    constructor() {
        super('colormapping');
    }
}