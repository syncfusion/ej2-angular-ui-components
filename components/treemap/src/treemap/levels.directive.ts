import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';
import { ColorMappingsDirective } from './colormapping.directive';

let input: string[] = ['autoFill', 'border', 'colorMapping', 'fill', 'groupGap', 'groupPadding', 'groupPath', 'headerAlignment', 'headerFormat', 'headerHeight', 'headerStyle', 'headerTemplate', 'opacity', 'showHeader', 'templatePosition'];
let outputs: string[] = [];
/**
 * Level Directive
 * ```html
 * <e-levels>
 * <e-level></e-level>
 * </e-levels>
 * ```
 */
@Directive({
    selector: 'e-levels>e-level',
    inputs: input,
    outputs: outputs,    
    queries: {
        childColorMapping: new ContentChild(ColorMappingsDirective)
    }
})
export class LevelDirective extends ComplexBase<LevelDirective> {
    public directivePropList: any;
	
    public childColorMapping: any;
    public tags: string[] = ['colorMapping'];
    /** 
     * Enables or disables the automatic filling of the colors in the items in the treemap component.
     * @default false
     */
    public autoFill: any;
    /** 
     * Sets and gets the options for customizing the color and width of the border of 
     * the levels of the treemap component.
     */
    public border: any;
    /** 
     * Sets and gets the options for customizing the color-mapping in the treemap component.
     */
    public colorMapping: any;
    /** 
     * Sets and gets the fill color of the level in the treemap component.
     * @default null
     */
    public fill: any;
    /** 
     * Sets and gets the gap between the levels in the treemap component.
     * @default 0
     */
    public groupGap: any;
    /** 
     * Sets and gets the padding of levels in the treemap component.
     * @default 10
     */
    public groupPadding: any;
    /** 
     * Sets and gets the value path from the data source in the treemap component to render the item.
     * @default null
     */
    public groupPath: any;
    /** 
     * Sets and gets the alignment of the header of the treemap component.
     * @default 'Near'
     */
    public headerAlignment: any;
    /** 
     * Sets and gets the format of header of the levels in the treemap component.
     * @default null
     */
    public headerFormat: any;
    /** 
     * Sets and gets the height of header in the treemap component.
     * @default 20
     */
    public headerHeight: any;
    /** 
     * Sets and gets the options for customizing the style of header of the treemap component.
     */
    public headerStyle: any;
    /** 
     * Sets and gets the opacity in the treemap component.
     * @default 1
     */
    public opacity: any;
    /** 
     * Shows or hides the header in level of the treemap component.
     * @default true
     */
    public showHeader: any;
    /** 
     * Sets and gets the options for customizing the template position of the treemap component.
     * @default 'TopLeft'
     */
    public templatePosition: any;
    /** 
     * Sets and gets the template for header in the treemap component.
     * @default null
     */
    @ContentChild('headerTemplate')
    @Template()
    public headerTemplate: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * Level Array Directive
 * @private
 */
@Directive({
    selector: 'ej-treemap>e-levels',
    queries: {
        children: new ContentChildren(LevelDirective)
    },
})
export class LevelsDirective extends ArrayBase<LevelsDirective> {
    constructor() {
        super('levels');
    }
}