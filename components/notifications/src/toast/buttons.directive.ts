import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['model'];
let outputs: string[] = ['click'];
/**
 * 'e-button' directive represent a button of angular toast 
 * It must be contained in a Toast component(`ejs-toast`). 
 * ```html
 * <ejs-toast id='toast' showCloseIcon=true> 
 *   <e-buttons>
 *    <e-button content='Ok' isPrimary=true></e-button>
 *    <e-button content='Cancel'></e-button>
 *   </e-buttons>
 * </ejs-toast>
 * ```
 */
@Directive({
    selector: 'e-buttonmodelprop>e-buttonmodelprops',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class ButtonModelPropsDirective extends ComplexBase<ButtonModelPropsDirective> {


    /** 
     * Specifies the Button component model properties to render the Toast action buttons. 
     * 
     * @default null
     */
    public model: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
    }
}

/**
 * ButtonModelProps Array Directive
 * @private
 */
@Directive({
    selector: 'ejs-toast>e-buttonmodelprop',
    queries: {
        children: new ContentChildren(ButtonModelPropsDirective)
    },
})
export class ButtonModelPropDirective extends ArrayBase<ButtonModelPropDirective> {
    constructor() {
        super('buttons');
    }
}