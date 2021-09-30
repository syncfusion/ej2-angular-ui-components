import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['border', 'color', 'dashArray', 'end', 'horizontalAlignment', 'isRepeat', 'isSegmented', 'opacity', 'repeatEvery', 'repeatUntil', 'rotation', 'segmentAxisName', 'segmentEnd', 'segmentStart', 'size', 'sizeType', 'start', 'startFromAxis', 'text', 'textStyle', 'verticalAlignment', 'visible', 'zIndex'];
let outputs: string[] = [];
/**
 * StripLine Directive
 * ```html
 * <e-axis>
 * <e-striplines>
 * <e-stripline></e-stripline>
 * </e-striplines>
 * </e-axis>
 * ```
 */
@Directive({
    selector: 'e-axis>e-striplines>e-stripline',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class StripLineDirective extends ComplexBase<StripLineDirective> {
    public directivePropList: any;
	


    /** 
     * Border of the strip line.
     */
    public border: any;
    /** 
     * Color of the strip line.
     * @default '#808080'
     */
    public color: any;
    /** 
     * Dash Array of the strip line.
     * @default null
     * @aspdefaultvalueignore 
     */
    public dashArray: any;
    /** 
     * End value of the strip line.
     * @default null
     * @aspdefaultvalueignore 
     */
    public end: any;
    /** 
     * Defines the position of the strip line text horizontally. They are, 
     * * Start: Places the strip line text at the start. 
     * * Middle: Places the strip line text in the middle. 
     * * End: Places the strip line text at the end.
     * @default 'Middle'
     */
    public horizontalAlignment: any;
    /** 
     * isRepeat value of the strip line.
     * @default false
     * @aspdefaultvalueignore 
     */
    public isRepeat: any;
    /** 
     * isSegmented value of the strip line
     * @default false
     * @aspdefaultvalueignore 
     */
    public isSegmented: any;
    /** 
     * Strip line Opacity
     * @default 1
     */
    public opacity: any;
    /** 
     * repeatEvery value of the strip line.
     * @default null
     * @aspdefaultvalueignore 
     */
    public repeatEvery: any;
    /** 
     * repeatUntil value of the strip line.
     * @default null
     * @aspdefaultvalueignore 
     */
    public repeatUntil: any;
    /** 
     * The angle to which the strip line text gets rotated.
     * @default null
     * @aspdefaultvalueignore 
     */
    public rotation: any;
    /** 
     * segmentAxisName of the strip line.
     * @default null
     * @aspdefaultvalueignore 
     */
    public segmentAxisName: any;
    /** 
     * segmentEnd value of the strip line.
     * @default null
     * @aspdefaultvalueignore 
     */
    public segmentEnd: any;
    /** 
     * segmentStart value of the strip line.
     * @default null
     * @aspdefaultvalueignore 
     */
    public segmentStart: any;
    /** 
     * Size of the strip line, when it starts from the origin.
     * @default null
     * @aspdefaultvalueignore 
     */
    public size: any;
    /** 
     * Size type of the strip line
     * @default Auto
     */
    public sizeType: any;
    /** 
     * Start value of the strip line.
     * @default null
     * @aspdefaultvalueignore 
     */
    public start: any;
    /** 
     *  If set true, strip line get render from axis origin.
     * 
     *  @default false
     *     
     */
    public startFromAxis: any;
    /** 
     * Strip line text.
     * @default ''
     */
    public text: any;
    /** 
     * Options to customize the strip line text.
     */
    public textStyle: any;
    /** 
     * Defines the position of the strip line text vertically. They are, 
     * * Start: Places the strip line text at the start. 
     * * Middle: Places the strip line text in the middle. 
     * * End: Places the strip line text at the end.
     * @default 'Middle'
     */
    public verticalAlignment: any;
    /** 
     * If set true, strip line for axis renders.
     * @default true
     */
    public visible: any;
    /** 
     * Specifies the order of the strip line. They are, 
     * * Behind: Places the strip line behind the series elements. 
     * * Over: Places the strip line over the series elements.
     * @default 'Behind'
     */
    public zIndex: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * StripLine Array Directive
 * @private
 */
@Directive({
    selector: 'e-axis>e-striplines',
    queries: {
        children: new ContentChildren(StripLineDirective)
    },
})
export class StripLinesDirective extends ArrayBase<StripLinesDirective> {
    constructor() {
        super('striplines');
    }
}