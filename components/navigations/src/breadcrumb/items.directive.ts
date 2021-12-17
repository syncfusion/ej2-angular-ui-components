import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['disabled', 'iconCss', 'text', 'url'];
let outputs: string[] = [];
/**
 * `e-breadcrumb-item` directive represent a item of the Angular Breadcrumb.
 * It must be contained in a Breadcrumb component(`ejs-breadcrumb`).
 * ```html
 * <ejs-breadcrumb>
 *   <e-breadcrumb-items>
 *    <e-breadcrumb-item text='Home' url='/'></e-breadcrumb-item>
 *    <e-breadcrumb-item text='Index' url='./index'></e-breadcrumb-item>
 *   </e-breadcrumb-items>
 * </ejs-breadcrumb>
 * ```
 */
@Directive({
    selector: 'ejs-breadcrumb>e-breadcrumb-items>e-breadcrumb-item',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class BreadcrumbItemDirective extends ComplexBase<BreadcrumbItemDirective> {
    public directivePropList: any;
	


    /** 
     * Enable or disable the breadcrumb item, when set to true, the breadcrumb item will be disabled.
     * @default false
     */
    public disabled: any;
    /** 
     * Defines a class/multiple classes separated by a space for the item that is used to include an icon.
     * @default null
     */
    public iconCss: any;
    /** 
     * Specifies the text content of the Breadcrumb item.
     * @default ''
     */
    public text: any;
    /** 
     * Specifies the Url of the Breadcrumb item that will be activated when clicked.
     * @default ''
     */
    public url: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * BreadcrumbItem Array Directive
 * @private
 */
@Directive({
    selector: 'ejs-breadcrumb>e-breadcrumb-items',
    queries: {
        children: new ContentChildren(BreadcrumbItemDirective)
    },
})
export class BreadcrumbItemsDirective extends ArrayBase<BreadcrumbItemsDirective> {
    constructor() {
        super('items');
    }
}