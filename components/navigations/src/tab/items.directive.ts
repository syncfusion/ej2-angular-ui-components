import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';


let input: string[] = ['content', 'cssClass', 'disabled', 'header', 'headerTemplate'];
let outputs: string[] = [];
/**
 * TabItemDirective represent a item of the EJ2 Angular Tab.
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


    /** 
     * Sets the CSS classes to the Tab item to customize its styles.

     */
    public cssClass: any;
    /** 
     * Sets true to disable user interactions of the Tab item.

     */
    public disabled: any;
    /** 
     * The object used for configuring the Tab item header properties.

     */
    public header: any;
    /** 
     * Specifies the content of Tab item, that is displayed when concern item header is selected.

     */
    @ContentChild('content')
    @Template()
    public content: any;
    @ContentChild('headerText')
    @Template()
    public header_text: any;
    /** 
     * Specifies the header text of Tab item.

     */
    @ContentChild('headerTemplate')
    @Template()
    public headerTemplate: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
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