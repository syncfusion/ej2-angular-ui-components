import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';

import { CategoriesDirective } from './categories.directive';

let input: string[] = ['alignment', 'border', 'categories', 'overflow', 'textStyle'];
let outputs: string[] = [];
/**
 * MultiLevelLabel Directive
 * ```html
 * <e-axis>
 * <e-multilevellabels>
 * <e-multilevellabel></e-multilevellabel>
 * </e-multilevellabels>
 * </e-axis>
 * ```
 */
@Directive({
    selector: 'e-axis>e-multilevellabels>e-multilevellabel',
    inputs: input,
    outputs: outputs,    
    queries: {
        childCategories: new ContentChild(CategoriesDirective)
    }
})
export class MultiLevelLabelDirective extends ComplexBase<MultiLevelLabelDirective> {
    public directivePropList: any;
	
    public childCategories: any;
    public tags: string[] = ['categories'];
    /** 
     * Defines the position of the multi level labels. They are, 
     * * Near: Places the multi level labels at Near. 
     * * Center: Places the multi level labels at Center. 
     * * Far: Places the multi level labels at Far.
     * @default 'Center'
     */
    public alignment: any;
    /** 
     * Border of the multi level labels.
     */
    public border: any;
    /** 
     * multi level categories for multi level labels.
     */
    public categories: any;
    /** 
     * Defines the textOverFlow for multi level labels. They are, 
     * * Trim: Trim textOverflow for multi level labels. 
     * * Wrap: Wrap textOverflow for multi level labels. 
     * * none: None textOverflow for multi level labels.
     * @default 'Wrap'
     */
    public overflow: any;
    /** 
     * Options to customize the multi level labels.
     */
    public textStyle: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * MultiLevelLabel Array Directive
 * @private
 */
@Directive({
    selector: 'e-axis>e-multilevellabels',
    queries: {
        children: new ContentChildren(MultiLevelLabelDirective)
    },
})
export class MultiLevelLabelsDirective extends ArrayBase<MultiLevelLabelsDirective> {
    constructor() {
        super('multilevellabels');
    }
}