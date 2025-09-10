import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['addInfo', 'id', 'lock', 'objects', 'visible', 'zIndex'];
let outputs: string[] = [];
/**
 * Layers Directive
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

    }
})
export class LayerDirective extends ComplexBase<LayerDirective> {
    public directivePropList: any;
	


    /** 
     * Defines the description of the layer 
     * 
     * @aspdefaultvalueignore 
     * @default undefined
     */
    public addInfo: any;
    /** 
     * Defines the id of a diagram layer
     * @default ''
     */
    public id: any;
    /** 
     * Enables or disables editing objects in a particular layer
     * @default false
     */
    public lock: any;
    /** 
     * Defines the collection of the objects that are added to a particular layer
     * @aspdefaultvalueignore 
     * @default undefined
     */
    public objects: any;
    /** 
     * Enables or disables the visibility of objects in a particular layer
     * @default true
     */
    public visible: any;
    /** 
     * Defines the zOrder of the layer
     * @default -1
     */
    public zIndex: any;

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
    selector: 'ej-diagram>e-layers',
    queries: {
        children: new ContentChildren(LayerDirective)
    },
})
export class LayersDirective extends ArrayBase<LayersDirective> {
    constructor() {
        super('layers');
    }
}