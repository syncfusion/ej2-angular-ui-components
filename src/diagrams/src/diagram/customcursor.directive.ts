import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['action', 'cursor'];
let outputs: string[] = [];
/**
 * Cursor Maps Directive
 * ```html
 * <e-cusrsormaps>
 * <e-cursormap></e-cursormap>
 * </e-cursormaps>
 * ```
 */
@Directive({
    selector: 'e-cursormaps>e-cursormap',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class CustomCursorDirective extends ComplexBase<CustomCursorDirective> {
    public directivePropList: any;
	


    /** 
     * Defines the property of a Data Map Items
     */
    public action: any;
    /** 
     * Defines the Fields for the Data Map Items
     * @default ''
     */
    public cursor: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * CustomCursor Array Directive
 * @private
 */
@Directive({
    selector: 'ej-diagram>e-cursormaps',
    queries: {
        children: new ContentChildren(CustomCursorDirective)
    },
})
export class CustomCursorsDirective extends ArrayBase<CustomCursorsDirective> {
    constructor() {
        super('customcursor');
    }
}