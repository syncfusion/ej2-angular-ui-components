import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['iconCss', 'name', 'type', 'viewTemplate'];
let outputs: string[] = [];
/**
 * Represents the Essential JS 2 Angular AIAssistView Component.
 * ```html
 * <ejs-aiassistview> 
 *   <e-views>
 *     <e-view>
 *      </e-view>
 *    </e-views>
 * </ejs-aiassistview>
 * ```
 */
@Directive({
    selector: 'ejs-aiassistview>e-views>e-view',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class ViewDirective extends ComplexBase<ViewDirective> {
    public directivePropList: any;
	


    /** 
     * Specifies the type of the assist view.
     * @isenumeration true
     * @default AssistViewType.Assist
     * @asptype AssistViewType
     */
    public type: any;
    /** 
     * Specifies the icon CSS for the assist view. 
     * Represents the CSS class for the icon of the assist view.
     * @default null
     */
    public iconCss: any;
    /** 
     * Specifies the name of the assist view. 
     * Represents the name displayed in the assist view.
     * @default ''
     */
    public name: any;
    /** 
     * Specifies the template for the view of the assist view. 
     * Represents the template for rendering the view, which can be a string or a function.
     * @default ''
     * @angulartype string | object
     * @reacttype string | function | JSX.Element
     * @vuetype string | function
     * @asptype string
     */
    public viewTemplate: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * View Array Directive
 * @private
 */
@Directive({
    selector: 'ejs-aiassistview>e-views',
    queries: {
        children: new ContentChildren(ViewDirective)
    },
})
export class ViewsDirective extends ArrayBase<ViewsDirective> {
    constructor() {
        super('views');
    }
}