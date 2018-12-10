import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';


let input: string[] = ['content', 'max', 'min', 'resizable', 'size'];
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
     * Specifies the maximum size of a pane. The pane cannon be resized greater than the specified maximum size.
     * @default null
     */
    public max: any;
    /** 
     * Specifies the minimum size of a pane. The pane cannon be resized less than the specified minimum size.
     * @default null
     */
    public min: any;
    /** 
     * Specifies whether a pane is resizable or not resizable.
     * @default true
     */
    public resizable: any;
    /** 
     * Specifies Configure the properties for each pane.
     * @default ''
     */
    public size: any;
    /** 
     * Specifies the content of split pane.
     * @default ''
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