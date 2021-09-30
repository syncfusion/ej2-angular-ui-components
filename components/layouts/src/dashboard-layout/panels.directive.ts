import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';


let input: string[] = ['col', 'content', 'cssClass', 'enabled', 'header', 'id', 'maxSizeX', 'maxSizeY', 'minSizeX', 'minSizeY', 'row', 'sizeX', 'sizeY', 'zIndex'];
let outputs: string[] = [];
/**
 * 'e-panels' directive represent a panels of angular dashboardlayout 
 * It must be contained in a dashboardlayout component(`ej-dashboardlayout`). 
 * ```html
 * <ejs-dashboardlayout> 
 *   <e-panels>
 *    <e-panel></e-panel>
 *    <e-panel></e-panel>
 *   </e-panels>
 * </ejs-dashboardlayout>
 * ```
 */
@Directive({
    selector: 'e-panels>e-panel',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class PanelDirective extends ComplexBase<PanelDirective> {
    public directivePropList: any;
	


    /** 
     * Defines the column value where the panel to be placed.
     * @default 0
     * @asptype int
     */
    public col: any;
    /** 
     * Defines the CSS class name that can be appended with each panel element.
     * @default ''
     */
    public cssClass: any;
    /** 
     * Defines whether to the panel should be enabled or not.
     * @default true
     */
    public enabled: any;
    /** 
     * Defines the id of the panel.
     * @default ''
     */
    public id: any;
    /** 
     * Specifies the maximum width of the panel in cells count.
     * @default null
     * @asptype int
     */
    public maxSizeX: any;
    /** 
     * Specifies the maximum height of the panel in cells count.
     * @default null
     * @asptype int

     */
    public maxSizeY: any;
    /** 
     * Specifies the minimum width of the panel in cells count.
     * @default 1
     */
    public minSizeX: any;
    /** 
     * Specifies the minimum height of the panel in cells count.
     * @default 1
     */
    public minSizeY: any;
    /** 
     * Defines a row value where the panel should be placed.
     * @default 0
     * @asptype int
     */
    public row: any;
    /** 
     * Specifies the width of the panel in the layout in cells count.
     * @default 1
     */
    public sizeX: any;
    /** 
     * Specifies the height of the panel in the layout in cells count.
     * @default 1
     */
    public sizeY: any;
    /** 
     * Specifies the z-index of the panel
     * @default 1000
     * @asptype double
     */
    public zIndex: any;
    /** 
     * Defines the template value that should be displayed as the panel's header.
     */
    @ContentChild('header')
    @Template()
    public header: any;
    /** 
     * Defines the template value that should be displayed as the panel's content.
     */
    @ContentChild('content')
    @Template()
    public content: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * Panel Array Directive
 * @private
 */
@Directive({
    selector: 'ejs-dashboardlayout>e-panels',
    queries: {
        children: new ContentChildren(PanelDirective)
    },
})
export class PanelsDirective extends ArrayBase<PanelsDirective> {
    constructor() {
        super('panels');
    }
}