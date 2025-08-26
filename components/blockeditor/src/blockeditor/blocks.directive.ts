import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['children', 'codeSettings', 'content', 'cssClass', 'id', 'imageSettings', 'indent', 'isChecked', 'isExpanded', 'parentId', 'placeholder', 'template', 'type'];
let outputs: string[] = [];
/**
 * `e-block` directive represent a block of the Angular BlockEditor. 
 * It must be contained in a BlockEditor component(`ejs-blockeditor`). 
 * ```html
 * <ejs-blockeditor>
 *   <e-blocks>
 *    <e-block></e-block>
 *    <e-block></e-block>
 *   </e-blocks>
 * </ejs-blockeditor>
 * ```
 */
@Directive({
    selector: 'e-block',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class BlockDirective extends ComplexBase<BlockDirective> {
    public directivePropList: any;
	


    /** 
     * Specifies the type of the block, which can be a string or a predefined BlockType. 
     * This property determines the type of content the block holds.
     * @default 'Paragraph'
     */
    public type: any;
    /** 
     * Represents the child blocks of the current block. 
     * This property contains an array of block models which are considered 
     * as children of the current block, allowing for hierarchical structures.
     * @default []
     */
    public children: any;
    /** 
     * Specifies the code block configuration associated with this block. 
     * This property defines settings such as language, code content, theme, and syntax highlighting preferences.
     * @default {}
     */
    public codeSettings: any;
    /** 
     * Specifies the content of the block, which can vary based on the block type. 
     * This property holds the actual content of the block.
     * @default []
     */
    public content: any;
    /** 
     * Specifies the CSS class applied to the block. 
     * Allows custom styling by associating one or more CSS class names with the block.
     * @default ''
     */
    public cssClass: any;
    /** 
     * Specifies the unique identifier for the block. 
     * This property is used to uniquely identify each block.
     * @default ''
     */
    public id: any;
    /** 
     * Specifies the image block configuration associated with this block. 
     * This property defines settings such as save format, upload URLs, size constraints, display mode, and read-only preferences.
     * @default {}
     */
    public imageSettings: any;
    /** 
     * Specifies the indent for the block. 
     * This property is used to specify indent for each block.
     * @default 0
     */
    public indent: any;
    /** 
     * Specifies the checked state for the block. 
     * This property is applicable for blocks that support a checked state, such as checklist.
     * @default false
     */
    public isChecked: any;
    /** 
     * Specifies whether the block is expanded or collapsed. 
     * This property controls the visibility of child blocks within a hierarchical structure.
     * @default false
     */
    public isExpanded: any;
    /** 
     * Specifies the unique identifier of the parent block. 
     * This property is used to establish a hierarchical relationship between parent and child blocks.
     * @default ''
     */
    public parentId: any;
    /** 
     * Specifies placeholder text to display when the block is empty. 
     * This property provides a hint to the user about what to write.
     * @default ''
     */
    public placeholder: any;
    /** 
     * Defines the template content for the block.
     * @default ''
     * @angulartype string | object | HTMLElement
     * @reacttype string | function | JSX.Element | HTMLElement
     * @vuetype string | function | HTMLElement
     * @asptype string
     */
    public template: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * Block Array Directive
 * @private
 */
@Directive({
    selector: 'e-blocks',
    queries: {
        children: new ContentChildren(BlockDirective)
    },
})
export class BlocksDirective extends ArrayBase<BlocksDirective> {
    constructor() {
        super('blocks');
    }
}