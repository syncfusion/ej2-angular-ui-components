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


    /** 
     * specifies the color
     * @default null
     */
    public color: any;
    /** 
     * Specifies the from
     * @default null
     * @isblazornullabletype true
     */
    public from: any;
    /** 
     * Specifies the label text.
     * @default null
     */
    public label: any;
    /** 
     * maxOpacity
     * @default null
     */
    public maxOpacity: any;
    /** 
     * Specifies the minOpacity
     * @default null
     */
    public minOpacity: any;
    /** 
     * Specifies the visibility of the legend for color mapping
     * @default true
     */
    public showLegend: any;
    /** 
     * Specifies the to
     * @default null
     * @isblazornullabletype true
     */
    public to: any;
    /** 
     * Specifies the value
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