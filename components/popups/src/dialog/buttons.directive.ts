import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['buttonModel', 'isFlat', 'type'];
let outputs: string[] = ['click'];
/**
 * 'e-button' directive represent a button of angular dialog 
 * It must be contained in a Dialog component(`ej-dialog`). 
 * ```html
 * <ejs-dialog id='dialog' showCloseIcon=true> 
 *   <e-buttons>
 *    <e-dialogbutton [buttonModal]='okButton'></e-button>
 *    <e-dialogbutton [buttonModal]='cancelButton'></e-button>
 *   </e-buttons>
 * </ejs-dialog>
 * ```
 */
@Directive({
    selector: 'e-buttons>e-dialogbutton',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class DialogButtonDirective extends ComplexBase<DialogButtonDirective> {
    public directivePropList: any;
	public click: any;


    /** 
     * Specify the type of the button. 
     * Possible values are Button, Submit and Reset.
     * @default 'Button'
     * @asptype string
     * @blazortype string
     */
    public type: any;
    /** 
     * Specifies the button component properties to render the dialog buttons.
     */
    public buttonModel: any;
    /** 
     * Specifies the flat appearance of the dialog buttons
     * @default true
     */
    public isFlat: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * DialogButton Array Directive
 * @private
 */
@Directive({
    selector: 'ejs-dialog>e-buttons',
    queries: {
        children: new ContentChildren(DialogButtonDirective)
    },
})
export class ButtonsDirective extends ArrayBase<ButtonsDirective> {
    constructor() {
        super('buttons');
    }
}