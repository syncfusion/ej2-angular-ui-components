import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['address', 'cellLink', 'height', 'inputRange', 'left', 'selectedIndex', 'text', 'top', 'type', 'value', 'width'];
let outputs: string[] = [];
/**
 * `e-formcontrol` directive represent a formcontrol of the Angular Spreadsheet.
 * It must be contained in a `e-sheet` directive.
 * ```html
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-formcontrols>
 *    <e-formcontrol></e-formcontrol>
 *    </e-formcontrols>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
@Directive({
    selector: 'e-formcontrols>e-formcontrol',
    inputs: input,
    outputs: outputs,
    standalone: true,
    queries: {
    }
})
export class FormControlDirective extends ComplexBase<FormControlDirective> {
    public directivePropList: any;
	


    /** 
     * Specifies the type of the form control. 
     * The supported values are `CheckBox`, `RadioButton`, and `DropDown`.
     * @default null
     */
    public declare type: any;
    /** 
     * Specifies the cell address where the form control should be inserted. 
     * The value can be provided as a cell reference string (for example, `C5`) 
     * or as a zero-based row and column index array (for example, `[0, 0]`). 
     * If the top and left properties are not set, those values will be calculated based on the specified cell address.
     * @default null
     */
    public declare address: any;
    /** 
     * Specifies the linked cell reference (for example, `A1` or `Sheet1!A1`). 
     * The linked cell is updated when the form control value changes.
     * @default ''
     */
    public declare cellLink: any;
    /** 
     * Specifies the height of the form control in pixels.
     * @default 0
     */
    public declare height: any;
    /** 
     * Specifies the cell range that provides the items for the **DropDown** control. Applicable to **DropDown** controls.
     * @default ''
     */
    public declare inputRange: any;
    /** 
     * Specifies the left position of the form control in pixels.
     * @default 0
     */
    public declare left: any;
    /** 
     * Specifies the zero-based index of the selected item in the **DropDown** control. Applicable to **DropDown** controls.
     * @default -1
     */
    public declare selectedIndex: any;
    /** 
     * Specifies the label text displayed for the form control. Applicable to **CheckBox** and **RadioButton** controls.
     * @default ''
     */
    public declare text: any;
    /** 
     * Specifies the top position of the form control in pixels.
     * @default 0
     */
    public declare top: any;
    /** 
     * Specifies the state of the form control. Applicable to **CheckBox** and **RadioButton** controls. 
     * - For **CheckBox**, the supported values are `Checked`, `Unchecked`, and `Mixed`. 
     * - For **RadioButton**, the supported values are `Checked` and `Unchecked`.
     * @default 'Unchecked'
     */
    public declare value: any;
    /** 
     * Specifies the width of the form control in pixels.
     * @default 0
     */
    public declare width: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * FormControl Array Directive
 * @private
 */
@Directive({
    selector: 'e-sheet>e-formcontrols',
    standalone: true,
    queries: {
        children: new ContentChildren(FormControlDirective)
    },
})
export class FormControlsDirective extends ArrayBase<FormControlsDirective> {
    constructor() {
        super('formcontrols');
    }
}