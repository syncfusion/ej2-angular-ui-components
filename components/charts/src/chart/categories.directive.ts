import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['customAttributes', 'end', 'maximumTextWidth', 'start', 'text', 'type'];
let outputs: string[] = [];
/**
 * MultiLevelLabels Directive
 * ```html
 * <e-multilevellabels>
 * <e-multilevellabel>
 * <e-Categories>
 * <e-Category>
 * </e-Category>
 * </e-Categories>
 * </e-multilevellabel>
 * </e-multilevellabels>
 * ```
 */
@Directive({
    selector: 'e-multilevellabel>e-categories>e-category',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class CategoryDirective extends ComplexBase<CategoryDirective> {
    public directivePropList: any;
	


    /** 
     * Border type for labels 
     * * Rectangle 
     * * Without Top Border 
     * * Without Top and Bottom Border 
     * * Without Border 
     * * Brace 
     * * Curly Brace
     * @default 'Rectangle'
     * @aspdefaultvalueignore 
     * @blazordefaultvalueignore 
     */
    public type: any;
    /** 
     * Custom data for multi-level labels.
     * @default null
     */
    public customAttributes: any;
    /** 
     * End value of the multi-level labels.
     * @default null
     * @aspdefaultvalueignore 
     */
    public end: any;
    /** 
     * Maximum width of the text for multi-level labels.
     * @default null
     * @aspdefaultvalueignore 
     */
    public maximumTextWidth: any;
    /** 
     * Start value of the multi level labels.
     * @default null
     * @aspdefaultvalueignore 
     */
    public start: any;
    /** 
     * Multi level labels text.
     * @default ''
     */
    public text: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * Category Array Directive
 * @private
 */
@Directive({
    selector: 'e-multilevellabel>e-categories',
    queries: {
        children: new ContentChildren(CategoryDirective)
    },
})
export class CategoriesDirective extends ArrayBase<CategoriesDirective> {
    constructor() {
        super('categories');
    }
}