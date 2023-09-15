import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';


let input: string[] = ['activeSize', 'allowedSizes', 'buttonSettings', 'checkBoxSettings', 'colorPickerSettings', 'comboBoxSettings', 'cssClass', 'disabled', 'displayOptions', 'dropDownSettings', 'groupButtonSettings', 'id', 'itemTemplate', 'ribbonTooltipSettings', 'splitButtonSettings', 'type'];
let outputs: string[] = [];
/**
 * `e-ribbon-item` directive represent a item in the Angular Ribbon.
 * ```html
 * <ejs-ribbon>
 *   <e-ribbon-tabs>
 *    <e-ribbon-tab></e-ribbon-tab>
 *    <e-ribbon-tab>
 *       <e-ribbon-groups>
 *         <e-ribbon-group>
 *             <e-ribbon-collections>
 *                 <e-ribbon-collection>
 *                     <e-ribbon-items>
 *                         <e-ribbon-item></e-ribbon-item>
 *                         <e-ribbon-item></e-ribbon-item>
 *                     </e-ribbon-items>
 *                 </e-ribbon-collection>
 *             </e-ribbon-collections>
 *         </e-ribbon-group>
 *       </e-ribbon-groups>
 *    </e-ribbon-tab>
 *   </e-ribbon-tabs>
 * </ejs-ribbon>
 * ```
 */
@Directive({
    selector: 'e-ribbon-item',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class RibbonItemDirective extends ComplexBase<RibbonItemDirective> {
    public directivePropList: any;
	


    /** 
     * Defines the type of control to be added as the Ribbon Item.
     * @isenumeration true
     * @default RibbonItemType.Button
     * @asptype RibbonItemType
     */
    public type: any;
    /** 
     * Defines the active size of the ribbon item.
     * @default 'Medium'
     * @aspnumberenum 
     */
    public activeSize: any;
    /** 
     * Defines the sizes that are allowed for the ribbon item on ribbon resize.
     * @default null
     * @aspnumberenum 
     */
    public allowedSizes: any;
    /** 
     * Defines the settings for the ribbon button.
     * @default {}
     */
    public buttonSettings: any;
    /** 
     * Defines the settings for the ribbon checkbox.
     * @default {}
     */
    public checkBoxSettings: any;
    /** 
     * Defines the settings for the ribbon color picker.
     * @default {}
     */
    public colorPickerSettings: any;
    /** 
     * Defines the settings for the ribbon combobox.
     * @default {}
     */
    public comboBoxSettings: any;
    /** 
     * Defines one or more CSS classes to customize the appearance of item.
     * @default ''
     */
    public cssClass: any;
    /** 
     * Defines whether the item is disabled or not.
     * @default false
     */
    public disabled: any;
    /** 
     * Defines the display options for the ribbon item.
     * @default 'Auto'
     * @aspnumberenum 
     */
    public displayOptions: any;
    /** 
     * Defines the settings for the ribbon dropdown button.
     * @default {}
     */
    public dropDownSettings: any;
    /** 
     * Defines the properties for group button in Ribbon
     * @default {}
     */
    public groupButtonSettings: any;
    /** 
     * Defines a unique identifier for the item.
     * @default ''
     */
    public id: any;
    /** 
     * Defines the settings for the tooltip of the item.
     * @default {}
     */
    public ribbonTooltipSettings: any;
    /** 
     * Defines the settings for the ribbon split button.
     * @default {}
     */
    public splitButtonSettings: any;
    /** 
     * Defines the template content for the ribbon item. 
     * `ActiveSize` property is passed as string in template context.
     * @default ''
     * @angulartype string | object | HTMLElement
     * @reacttype string | function | JSX.Element | HTMLElement
     * @vuetype string | function | HTMLElement
     * @asptype string
     */
    @ContentChild('itemTemplate')
    @Template()
    public itemTemplate: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * RibbonItem Array Directive
 * @private
 */
@Directive({
    selector: 'e-ribbon-items',
    queries: {
        children: new ContentChildren(RibbonItemDirective)
    },
})
export class RibbonItemsDirective extends ArrayBase<RibbonItemsDirective> {
    constructor() {
        super('items');
    }
}