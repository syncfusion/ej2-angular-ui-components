import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['animationDuration', 'dataSource', 'enableAnimation', 'enableSmartLabels', 'fill', 'marker', 'name', 'opacity', 'points', 'reactance', 'resistance', 'tooltip', 'visibility', 'width'];
let outputs: string[] = [];

@Directive({
    selector: 'e-seriesCollection>e-series',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class SmithchartSeriesDirective extends ComplexBase<SmithchartSeriesDirective> {


    /** 
     * perform animation of series based on animation duration.

     */
    public animationDuration: any;
    /** 
     *  Specifies the dataSource


     */
    public dataSource: any;
    /** 
     * enable or disable the animation of series.

     */
    public enableAnimation: any;
    /** 
     * avoid the overlap of dataLabels.

     */
    public enableSmartLabels: any;
    /** 
     * color for series.

     */
    public fill: any;
    /** 
     *  options for customizing marker
     */
    public marker: any;
    /** 
     * The name of the series visible in legend.

     */
    public name: any;
    /** 
     * opacity for series.

     */
    public opacity: any;
    /** 
     * points for series.

     */
    public points: any;
    /** 
     * reactance name for dataSource

     */
    public reactance: any;
    /** 
     * resistance name for dataSource

     */
    public resistance: any;
    /** 
     *  options for customizing tooltip
     */
    public tooltip: any;
    /** 
     * visibility for series.

     */
    public visibility: any;
    /** 
     * width for series.

     */
    public width: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
    }
}

/**
 * SmithchartSeries Array Directive
 * @private
 */
@Directive({
    selector: 'ejs-smithchart>e-seriesCollection',
    queries: {
        children: new ContentChildren(SmithchartSeriesDirective)
    },
})
export class SmithchartSeriesCollectionDirective extends ArrayBase<SmithchartSeriesCollectionDirective> {
    constructor() {
        super('series');
    }
}