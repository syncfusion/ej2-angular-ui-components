import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['content', 'cssClass', 'id', 'indent', 'parentId', 'props', 'template', 'type'];
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
     * @isenumeration true
     * @default BlockType.Paragraph
     * @asptype BlockType
     */
    public type: any;
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
     * Specifies the indent for the block. 
     * This property is used to specify indentation for each block.
     * @default 0
     * @asptype int
     */
    public indent: any;
    /** 
     * Specifies the unique identifier of the parent block. 
     * This property is used to establish a hierarchical relationship between parent and child blocks.
     * @default ''
     */
    public parentId: any;
    /** 
     * Specifies the type specific properties for the block.
     * @default null
     * @asptype object
     */
    public props: any;
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