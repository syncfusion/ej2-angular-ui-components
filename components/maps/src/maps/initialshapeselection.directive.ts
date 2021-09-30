import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['shapePath', 'shapeValue'];
let outputs: string[] = [];
/**
 * Layer Directive
 * ```html
 * <e-layers>
 * <e-layer>
 * <e-initialShapeSelections>
 * <e-initialShapeSelection>
 * </e-initialShapeSelection>
 * </e-initialShapeSelections>
 * </e-layer>
 * </e-layers>
 * ```
 */
@Directive({
    selector: 'e-layer>e-initialShapeSelections>e-initialShapeSelection',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class InitialShapeSelectionDirective extends ComplexBase<InitialShapeSelectionDirective> {
    public directivePropList: any;
	


    /** 
     * Sets and gets the property name from the data source in maps.
     * @default null
     */
    public shapePath: any;
    /** 
     * Sets and gets the value for the shape from data source in maps.
     * @default null
     */
    public shapeValue: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * InitialShapeSelection Array Directive
 * @private
 */
@Directive({
    selector: 'e-layer>e-initialShapeSelections',
    queries: {
        children: new ContentChildren(InitialShapeSelectionDirective)
    },
})
export class InitialShapeSelectionsDirective extends ArrayBase<InitialShapeSelectionsDirective> {
    constructor() {
        super('initialshapeselection');
    }
}