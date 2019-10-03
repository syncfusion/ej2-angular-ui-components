import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['animation', 'border', 'dashArray', 'dataSource', 'fill', 'opacity', 'query', 'type', 'width', 'xName', 'yName'];
let outputs: string[] = [];
/**
 * RangenavigatorSeries Directive
 * ```html
 * <e-rangenavigator-series-collection>
 * <e-rangenavigator-series></e-rangenavigator-series>
 * </e-rangenavigator-series-collection>
 * ```
 */
@Directive({
    selector: 'e-rangenavigator-series-collection>e-rangenavigator-series',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class RangenavigatorSeriesDirective extends ComplexBase<RangenavigatorSeriesDirective> {


    /** 
     * It defines the series type of the range navigator

     */
    public type: any;
    /** 
     * Options to customizing animation for the series.
     */
    public animation: any;
    /** 
     * Options for customizing the color and width of the series border.
     */
    public border: any;
    /** 
     * Defines the pattern of dashes and gaps to stroke the lines in `Line` type series.

     */
    public dashArray: any;
    /** 
     * It defines the data source for a series.

     */
    public dataSource: any;
    /** 
     * The fill color for the series that accepts value in hex and rgba as a valid CSS color string. 
     * It also represents the color of the signal lines in technical indicators. 
     * For technical indicators, the default value is 'blue' and for series, it has null.

     */
    public fill: any;
    /** 
     * The opacity for the background.

     */
    public opacity: any;
    /** 
     * It defines the query for the data source

     */
    public query: any;
    /** 
     * The stroke width for the series that is applicable only for `Line` type series. 
     * It also represents the stroke width of the signal lines in technical indicators.

     */
    public width: any;
    /** 
     * It defines the xName for the series

     */
    public xName: any;
    /** 
     * It defines the yName for the series

     */
    public yName: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
    }
}

/**
 * RangenavigatorSeries Array Directive
 * @private
 */
@Directive({
    selector: 'ej-rangenavigator>e-rangenavigator-series-collection',
    queries: {
        children: new ContentChildren(RangenavigatorSeriesDirective)
    },
})
export class RangenavigatorSeriesCollectionDirective extends ArrayBase<RangenavigatorSeriesCollectionDirective> {
    constructor() {
        super('series');
    }
}