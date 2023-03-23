import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';

import { RibbonGroupsDirective } from './groups.directive';

let input: string[] = ['cssClass', 'groups', 'header', 'id'];
let outputs: string[] = [];
/**
 * `e-ribbon-tab` directive represent a tab of the Angular Ribbon. 
 * It must be contained in a Ribbon component(`ejs-ribbon`). 
 * ```html
 * <ejs-ribbon>
 *   <e-ribbon-tabs>
 *    <e-ribbon-tab></e-ribbon-tab>
 *    <e-ribbon-tab></e-ribbon-tab>
 *   </e-ribbon-tabs>
 * </ejs-ribbon>
 * ```
 */
@Directive({
    selector: 'e-ribbon-tab',
    inputs: input,
    outputs: outputs,    
    queries: {
        childGroups: new ContentChild(RibbonGroupsDirective)
    }
})
export class RibbonTabDirective extends ComplexBase<RibbonTabDirective> {
    public directivePropList: any;
	
    public childGroups: any;
    public tags: string[] = ['groups'];
    /** 
     * Defines one or more CSS classes to customize the appearance of tab.
     * @default ''
     */
    public cssClass: any;
    /** 
     * Defines the list of ribbon groups.
     * @default []
     * @asptype List<RibbonGroup>
     */
    public groups: any;
    /** 
     * Defines the content of tab header.
     * @default ''
     */
    public header: any;
    /** 
     * Defines a unique identifier for the tab.
     * @default ''
     */
    public id: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * RibbonTab Array Directive
 * @private
 */
@Directive({
    selector: 'e-ribbon-tabs',
    queries: {
        children: new ContentChildren(RibbonTabDirective)
    },
})
export class RibbonTabsDirective extends ArrayBase<RibbonTabsDirective> {
    constructor() {
        super('tabs');
    }
}