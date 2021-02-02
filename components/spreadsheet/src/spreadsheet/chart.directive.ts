import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['height', 'id', 'isSeriesInRows', 'range', 'theme', 'type', 'width'];
let outputs: string[] = [];

@Directive({
    selector: 'e-charts>e-chart',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class ChartDirective extends ComplexBase<ChartDirective> {
    public directivePropList: any;


    /** 
     * Specifies the type of a chart.
     * @default 'Line'
     */
    public type: any;
    /** 
     * Specifies the height of the chart.
     * @default 290
     * @asptype int
     */
    public height: any;
    /** 
     * Specifies chart element id.
     * @default ''
     */
    public id: any;
    /** 
     * Specifies to switch the row or a column.
     * @default false
     */
    public isSeriesInRows: any;
    /** 
     * Specifies the selected range or specified range.
     * @default ''
     */
    public range: any;
    /** 
     * Specifies the theme of a chart.
     * @default 'Material'
     */
    public theme: any;
    /** 
     * Specifies the width of the chart.
     * @default 480
     * @asptype int
     */
    public width: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * Chart Array Directive
 * @private
 */
@Directive({
    selector: 'e-cell>e-charts',
    queries: {
        children: new ContentChildren(ChartDirective)
    },
})
export class ChartsDirective extends ArrayBase<ChartsDirective> {
    constructor() {
        super('chart');
    }
}