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
     * Items rendering with random colors.
     * @default false
     */
    public autoFill: any;
    /** 
     * Specifies the border
     */
    public border: any;
    /** 
     * Specifies the colorMapping
     */
    public colorMapping: any;
    /** 
     * Specifies the background of level.
     * @default null
     */
    public fill: any;
    /** 
     * Specifies the padding.
     * @default 0
     */
    public groupGap: any;
    /** 
     * Specifies the padding.
     * @default 10
     */
    public groupPadding: any;
    /** 
     * Specifies the field name from the dataSource.
     * @default null
     */
    public groupPath: any;
    /** 
     * Customize the text alignment
     * @default 'Near'
     */
    public headerAlignment: any;
    /** 
     * Specifies the header format.
     * @default null
     */
    public headerFormat: any;
    /** 
     * To specifies the height of header.
     * @default 20
     */
    public headerHeight: any;
    /** 
     * Customize the header style.
     */
    public headerStyle: any;
    /** 
     * Specifies the opacity for color.
     * @default 1
     */
    public opacity: any;
    /** 
     * To Show or hide the header in level.
     * @default true
     */
    public showHeader: any;
    /** 
     * Specifies the label position in level.
     * @default 'TopLeft'
     */
    public templatePosition: any;
    /** 
     * Specifies the template for header rendering.
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