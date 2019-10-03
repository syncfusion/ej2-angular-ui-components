import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';


let input: string[] = ['collapsed', 'collapsible', 'content', 'max', 'min', 'resizable', 'size'];
let outputs: string[] = [];
/**
 * 'e-panesettings' directive represent a panes of angular splitter 
 * It must be contained in a Splitter component(`ejs-splitter`). 
 * ```html
 * <ejs-splitter id='splitter' > 
 *   <e-panes>
 *    <e-pane size ='150px'></e-pane>
 *    <e-pane size = '20%'></e-pane>
 *   </e-panes>
 * </ejs-splitter>
 * ```
 */
@Directive({
    selector: 'e-panes>e-pane',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class PaneDirective extends ComplexBase<PaneDirective> {


    /** 
     * Specifies whether a pane is collapsed or not collapsed at the initial rendering of splitter.

     */
    public collapsed: any;
    /** 
     * Specifies whether a pane is collapsible or not collapsible.

     */
    public collapsible: any;
    /** 
     * Specifies the maximum size of a pane. The pane cannot be resized if it is more than the specified maximum limit.

     */
    public max: any;
    /** 
     * Specifies the minimum size of a pane. The pane cannot be resized if it is less than the specified minimum size.

     */
    public min: any;
    /** 
     * Specifies the value whether a pane is resizable. By default, the Splitter is resizable in all panes. 
     * You can disable this for any specific panes using this property.

     */
    public resizable: any;
    /** 
     * Configures the properties for each pane.

     */
    public size: any;
    /** 
     * Specifies the content of split pane as plain text, HTML markup, or any other JavaScript controls.


     */
    @ContentChild('content')
    @Template()
    public content: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
    }
}

/**
 * Pane Array Directive
 * @private
 */
@Directive({
    selector: 'ejs-splitter>e-panes',
    queries: {
        children: new ContentChildren(PaneDirective)
    },
})
export class PanesDirective extends ArrayBase<PanesDirective> {
    constructor() {
        super('panesettings');
    }
}