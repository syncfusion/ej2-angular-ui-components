import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['fields', 'headerText', 'type'];
let outputs: string[] = [];
/**
 * `e-edit-dialog-field` directive represent a edit dialog fields collection in Gantt task add dialog. 
 * It must be contained in a Gantt component(`ejs-gantt`). 
 * ```html
 * <ejs-gantt [dataSource]='data' allowSelection='true' allowSorting='true'> 
 *   <e-edit-dialog-fields>
 *     <e-edit-dialog-field type='General' headerText='General'></e-edit-dialog-field>
 *     <e-edit-dialog-field type='Dependency' headerText='Dependency'></e-edit-dialog-field>
 *   </e-edit-dialog-fields>
 * </ejs-gantt>
 * ```
 */
@Directive({
    selector: 'ejs-gantt>e-edit-dialog-fields>e-edit-dialog-field',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class EditDialogFieldDirective extends ComplexBase<EditDialogFieldDirective> {
    public directivePropList: any;
	


    /** 
     * Defines types of tab which contains editor for columns. 
     * * `General` - Defines tab container type as general. 
     * * `Dependency` - Defines tab as dependency editor. 
     * * `Resources` - Defines tab as resources editor. 
     * * `Notes` - Defines tab as notes editor. 
     * * `Custom` - Defines tab as custom column editor.
     * @default null
     */
    public type: any;
    /** 
     * Defines edited column fields placed inside the tab.
     * @default null
     */
    public fields: any;
    /** 
     * Defines header text of tab item.
     * @default null
     */
    public headerText: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * EditDialogField Array Directive
 * @private
 */
@Directive({
    selector: 'ejs-gantt>e-edit-dialog-fields',
    queries: {
        children: new ContentChildren(EditDialogFieldDirective)
    },
})
export class EditDialogFieldsDirective extends ArrayBase<EditDialogFieldsDirective> {
    constructor() {
        super('editdialogfields');
    }
}