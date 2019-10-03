import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['iconCss', 'id', 'items', 'separator', 'text', 'url'];
let outputs: string[] = [];

@Directive({
    selector: 'ejs-menu>e-menu-items>e-menu-item>',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class MenuItemDirective extends ComplexBase<MenuItemDirective> {


    /** 
     * Defines class/multiple classes separated by a space for the menu Item that is used to include an icon. 
     * Menu Item can include font icon and sprite image.

     */
    public iconCss: any;
    /** 
     * Specifies the id for menu item.

     */
    public id: any;
    /** 
     * Specifies the sub menu items that is the array of MenuItem model.

     */
    public items: any;
    /** 
     * Specifies separator between the menu items. Separator are either horizontal or vertical lines used to group menu items.

     */
    public separator: any;
    /** 
     * Specifies text for menu item.

     */
    public text: any;
    /** 
     * Specifies url for menu item that creates the anchor link to navigate to the url provided.

     */
    public url: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
    }
}

/**
 * MenuItem Array Directive
 * @private
 */
@Directive({
    selector: 'ejs-menu>e-menu-items',
    queries: {
        children: new ContentChildren(MenuItemDirective)
    },
})
export class MenuItemsDirective extends ArrayBase<MenuItemsDirective> {
    constructor() {
        super('items');
    }
}