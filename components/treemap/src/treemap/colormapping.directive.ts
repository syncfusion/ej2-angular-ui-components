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

     */
    public color: any;
    /** 
     * Specifies the from


     */
    public from: any;
    /** 
     * Specifies the label text.

     */
    public label: any;
    /** 
     * maxOpacity

     */
    public maxOpacity: any;
    /** 
     * Specifies the minOpacity

     */
    public minOpacity: any;
    /** 
     * Specifies the visibility of the legend for color mapping

     */
    public showLegend: any;
    /** 
     * Specifies the to


     */
    public to: any;
    /** 
     * Specifies the value

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