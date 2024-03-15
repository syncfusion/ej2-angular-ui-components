import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['point', 'series'];
let outputs: string[] = [];
/**
 * Selected Data Directive
 * ```html
 * <e-selecteddataindexes><e-selecteddataindex></e-selecteddataindex><e-selecteddataindexes>
 * ```
 */
@Directive({
    selector: 'e-circularchart3d-selecteddataindexes>e-circularchart3d-selecteddataindex',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class CircularChart3DSelectedDataIndexDirective extends ComplexBase<CircularChart3DSelectedDataIndexDirective> {
    public directivePropList: any;
	


    /** 
     * Specifies the point index.
     * @default 0
     * @asptype int
     */
    public point: any;
    /** 
     * Specifies the series index.
     * @default 0
     * @asptype int
     */
    public series: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * CircularChart3DSelectedDataIndex Array Directive
 * @private
 */
@Directive({
    selector: 'ejs-circularchart3d>e-circularchart3d-selecteddataindexes',
    queries: {
        children: new ContentChildren(CircularChart3DSelectedDataIndexDirective)
    },
})
export class CircularChart3DSelectedDataIndexesDirective extends ArrayBase<CircularChart3DSelectedDataIndexesDirective> {
    constructor() {
        super('selecteddataindexes');
    }
}