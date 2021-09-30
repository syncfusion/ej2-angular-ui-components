import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';


let input: string[] = ['content', 'cssClass', 'disabled', 'header', 'headerTemplate', 'id', 'visible'];
let outputs: string[] = [];
/**
 * 'e-tabitem' directive represent a item of the Angular Tab.
 * It must be contained in a Tab component(`ejs-tab`). 
 * ```html
 * <ejs-tab>
 *  <e-tabitems>
 *   <e-tabitem [header]='Header 1' [content]='Content 1'></e-tabitem>
 *   <e-tabitem [header]='Header 2' [content]='Content 2'></e-tabitem>
 *  <e-tabitems> 
 * </ejs-tab>
 * ```
 */
@Directive({
    selector: 'e-tabitems>e-tabitem',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class TabItemDirective extends ComplexBase<TabItemDirective> {
    public directivePropList: any;
	


    /** 
     * Sets the CSS classes to the Tab item to customize its styles.
     * @default ''
     */
    public cssClass: any;
    /** 
     * Sets true to disable user interactions of the Tab item.
     * @default false
     */
    public disabled: any;
    /** 
     * The object used for configuring the Tab item header properties.
     * @default {}
     */
    public header: any;
    /** 
     * Sets unique ID to Tab item.
     * @default null
     */
    public id: any;
    /** 
     * Sets false to hide the Tab item.
     * @default true
     */
    public visible: any;
    /** 
     * Specifies the content of Tab item, that is displayed when concern item header is selected.
     * @default ''
     */
    @ContentChild('content')
    @Template()
    public content: any;
    @ContentChild('headerText')
    @Template()
    public header_text: any;
    /** 
     * Specifies the header text of Tab item.
     * @default null
     */
    @ContentChild('headerTemplate')
    @Template()
    public headerTemplate: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * TabItem Array Directive
 * @private
 */
@Directive({
    selector: 'ejs-tab>e-tabitems',
    queries: {
        children: new ContentChildren(TabItemDirective)
    },
})
export class TabItemsDirective extends ArrayBase<TabItemsDirective> {
    constructor() {
        super('items');
    }
}