import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['avatarIconCss', 'avatarText', 'cssClass', 'enabled', 'leadingIconCss', 'text', 'trailingIconCss'];
let outputs: string[] = [];
/**
 * `e-chip` directive represent a chip of the Angular ChipList.
 * ```html
 * <ejs-chiplist > 
 *   <e-chips>
 *    <e-chip text='chip1'></e-chip>
 *    <e-chip text='chip2'></e-chip>
 *   </e-chips>
 * </ejs-chiplist>
 * ```
 */
@Directive({
    selector: 'e-chips>e-chip',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class ChipDirective extends ComplexBase<ChipDirective> {


    /** 
     * This avatarIconCss property helps to customize avatar element.
     * @default ''
     */
    public avatarIconCss: any;
    /** 
     * This avatarText property helps to customize avatar content.
     * @default ''
     */
    public avatarText: any;
    /** 
     * This cssClass property helps to customize ChipList component.
     * @default ''
     */
    public cssClass: any;
    /** 
     * This enabled property helps to enable/disable ChipList component.
     * @default true
     * @blazordefaultvalue null
     * @blazortype bool?
     */
    public enabled: any;
    /** 
     * This leadingIconCss property helps to customize leading icon element.
     * @default ''
     */
    public leadingIconCss: any;
    /** 
     * This text property helps to render ChipList component.
     * @default ''
     */
    public text: any;
    /** 
     * This trailingIconCss property helps to customize trailing icon element.
     * @default ''
     */
    public trailingIconCss: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
    }
}

/**
 * Chip Array Directive
 * @private
 */
@Directive({
    selector: 'ejs-chiplist>e-chips',
    queries: {
        children: new ContentChildren(ChipDirective)
    },
})
export class ChipsDirective extends ArrayBase<ChipsDirective> {
    constructor() {
        super('chips');
    }
}