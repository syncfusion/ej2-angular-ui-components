import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';

import { RibbonCollectionsDirective } from './collections.directive';

let input: string[] = ['collections', 'cssClass', 'enableGroupOverflow', 'groupIconCss', 'header', 'id', 'isCollapsed', 'isCollapsible', 'orientation', 'priority', 'showLauncherIcon'];
let outputs: string[] = [];
/**
 * `e-ribbon-group` directive represent a group in the Angular Ribbon. 
 * ```html
 * <ejs-ribbon>
 *   <e-ribbon-tabs>
 *    <e-ribbon-tab></e-ribbon-tab>
 *    <e-ribbon-tab>
 *       <e-ribbon-groups>
 *         <e-ribbon-group></e-ribbon-group>
 *         <e-ribbon-group></e-ribbon-group>
 *       </e-ribbon-groups>
 *    </e-ribbon-tab>
 *   </e-ribbon-tabs>
 * </ejs-ribbon>
 * ```
 */
@Directive({
    selector: 'e-ribbon-group',
    inputs: input,
    outputs: outputs,    
    queries: {
        childCollections: new ContentChild(RibbonCollectionsDirective)
    }
})
export class RibbonGroupDirective extends ComplexBase<RibbonGroupDirective> {
    public directivePropList: any;
	
    public childCollections: any;
    public tags: string[] = ['collections'];
    /** 
     * Defines the list of ribbon collections.
     * @default []
     * @asptype List<RibbonCollection>
     */
    public collections: any;
    /** 
     * Defines one or more CSS classes to customize the appearance of group.
     * @default ''
     */
    public cssClass: any;
    /** 
     * Defines whether to add a separate popup for the overflow items in the group. 
     * If it is set to false, the overflow items will be shown in the common overflow popup present at the right end of the tab content.
     * @default false
     */
    public enableGroupOverflow: any;
    /** 
     * Defines the CSS class for the icons to be shown in the group overflow dropdown button in classic mode. 
     * During overflow, the entire group will be shown in a popup of a dropdown button which appears in the place of the group in ribbon tab.
     * @default ''
     */
    public groupIconCss: any;
    /** 
     * Defines the content of group header.
     * @default ''
     */
    public header: any;
    /** 
     * Defines a unique identifier for the group.
     * @default ''
     */
    public id: any;
    /** 
     * Defines whether the group is in collapsed state or not during classic mode.
     * @default false
     */
    public isCollapsed: any;
    /** 
     * Defines whether the group can be collapsed on resize during classic mode.
     * @default true
     */
    public isCollapsible: any;
    /** 
     * Defines whether to orientation in which the items of the group should be arranged.
     * @isenumeration true
     * @default ItemOrientation.Column
     * @asptype ItemOrientation
     */
    public orientation: any;
    /** 
     * Defines the priority order at which the group should be collapsed or expanded. 
     * For collapsing value is fetched in ascending order and for expanding value is fetched in descending order.
     * @default 0
     */
    public priority: any;
    /** 
     * Defines whether to show or hide the launcher icon for the group.
     * @default false
     */
    public showLauncherIcon: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * RibbonGroup Array Directive
 * @private
 */
@Directive({
    selector: 'e-ribbon-groups',
    queries: {
        children: new ContentChildren(RibbonGroupDirective)
    },
})
export class RibbonGroupsDirective extends ArrayBase<RibbonGroupsDirective> {
    constructor() {
        super('groups');
    }
}