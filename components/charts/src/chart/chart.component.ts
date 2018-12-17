import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { Chart } from '@syncfusion/ej2-charts';
import { Template } from '@syncfusion/ej2-angular-base';
import { SeriesCollectionDirective } from './series.directive';
import { AxesDirective } from './axes.directive';
import { RowsDirective } from './rows.directive';
import { ColumnsDirective } from './columns.directive';
import { AnnotationsDirective } from './annotations.directive';
import { SelectedDataIndexesDirective } from './selecteddataindexes.directive';
import { IndicatorsDirective } from './indicators.directive';

export const inputs: string[] = ['annotations','axes','background','border','chartArea','columns','crosshair','currencyCode','dataSource','description','enableAnimation','enableExport','enablePersistence','enableRtl','enableSideBySidePlacement','height','indicators','isMultiSelect','isTransposed','legendSettings','locale','margin','palettes','primaryXAxis','primaryYAxis','rows','selectedDataIndexes','selectionMode','series','subTitle','subTitleStyle','tabIndex','theme','title','titleStyle','tooltip','useGroupingSeparator','width','zoomSettings'];
export const outputs: string[] = ['animationComplete','annotationRender','axisLabelRender','axisMultiLabelRender','axisRangeCalculated','beforePrint','chartMouseClick','chartMouseDown','chartMouseLeave','chartMouseMove','chartMouseUp','dragComplete','legendRender','load','loaded','pointClick','pointMove','pointRender','resized','scrollChanged','scrollEnd','scrollStart','seriesRender','textRender','tooltipRender','zoomComplete'];
export const twoWays: string[] = [''];

/**
 * Chart Component
 * ```html
 * <ejschart></ejschart>
 * ```
 */
@Component({
    selector: 'ejs-chart',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childSeries: new ContentChild(SeriesCollectionDirective), 
        childAxes: new ContentChild(AxesDirective), 
        childRows: new ContentChild(RowsDirective), 
        childColumns: new ContentChild(ColumnsDirective), 
        childAnnotations: new ContentChild(AnnotationsDirective), 
        childSelectedDataIndexes: new ContentChild(SelectedDataIndexesDirective), 
        childIndicators: new ContentChild(IndicatorsDirective)
    }
})
@ComponentMixins([ComponentBase])
export class ChartComponent extends Chart implements IComponentBase {
    public childSeries: any;
    public childAxes: any;
    public childRows: any;
    public childColumns: any;
    public childAnnotations: any;
    public childSelectedDataIndexes: any;
    public childIndicators: any;
    public tags: string[] = ['series', 'axes', 'rows', 'columns', 'annotations', 'selectedDataIndexes', 'indicators'];

    @ContentChild('tooltipTemplate')
    @Template()
    public tooltip_template: any;

    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try{ this.injectedModules.push(this.injector.get('ChartsLineSeries')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsScatterSeries')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsColumnSeries')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsSplineSeries')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsSplineAreaSeries')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsStripLine')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsAreaSeries')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsScrollBar')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsStepLineSeries')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsStepAreaSeries')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsStackingColumnSeries')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsStackingAreaSeries')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsBarSeries')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsStackingBarSeries')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsRangeColumnSeries')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsBubbleSeries')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsTooltip')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsCrosshair')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsCategory')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsDateTime')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsLogarithmic')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsLegend')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsZoom')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsDataLabel')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsSelection')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsChartAnnotation')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsHiloSeries')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsHiloOpenCloseSeries')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsWaterfallSeries')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsRangeAreaSeries')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsCandleSeries')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsPolarSeries')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsRadarSeries')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsSmaIndicator')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsTmaIndicator')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsEmaIndicator')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsAccumulationDistributionIndicator')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsMacdIndicator')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsAtrIndicator')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsRsiIndicator')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsMomentumIndicator')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsStochasticIndicator')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsBollingerBands')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsBoxAndWhiskerSeries')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsHistogramSeries')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsErrorBar')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsTrendlines')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsDateTimeCategory')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsMultiColoredLineSeries')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsMultiColoredAreaSeries')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsMultiLevelLabel')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsParetoSeries')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsExport')); }catch {} 

        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
    }

    public ngOnInit() {
    }

    public ngAfterViewInit(): void {
    }

    public ngOnDestroy(): void {
    }

    public ngAfterContentChecked(): void {
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

