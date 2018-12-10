import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockChartTrendlineDirective, StockChartTrendlinesDirective } from './trendlines.directive';
import { StockChartSeriesDirective, StockChartSeriesCollectionDirective } from './series.directive';
import { StockChartStripLineDirective, StockChartStripLinesDirective } from './striplines.directive';
import { StockChartAxisDirective, StockChartAxesDirective } from './axes.directive';
import { StockChartRowDirective, StockChartRowsDirective } from './rows.directive';
import { StockChartAnnotationDirective, StockChartAnnotationsDirective } from './annotations.directive';
import { StockChartSelectedDataIndexDirective, StockChartSelectedDataIndexesDirective } from './selecteddataindexes.directive';
import { StockChartPeriodDirective, StockChartPeriodsDirective } from './periods.directive';
import { StockChartIndicatorDirective, StockChartIndicatorsDirective } from './indicators.directive';
import { StockChartComponent } from './stockchart.component';

/**
 * NgModule definition for the StockChart component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        StockChartComponent,
        StockChartTrendlineDirective,
        StockChartTrendlinesDirective,
        StockChartSeriesDirective,
        StockChartSeriesCollectionDirective,
        StockChartStripLineDirective,
        StockChartStripLinesDirective,
        StockChartAxisDirective,
        StockChartAxesDirective,
        StockChartRowDirective,
        StockChartRowsDirective,
        StockChartAnnotationDirective,
        StockChartAnnotationsDirective,
        StockChartSelectedDataIndexDirective,
        StockChartSelectedDataIndexesDirective,
        StockChartPeriodDirective,
        StockChartPeriodsDirective,
        StockChartIndicatorDirective,
        StockChartIndicatorsDirective
    ],
    exports: [
        StockChartComponent,
        StockChartTrendlineDirective,
        StockChartTrendlinesDirective,
        StockChartSeriesDirective,
        StockChartSeriesCollectionDirective,
        StockChartStripLineDirective,
        StockChartStripLinesDirective,
        StockChartAxisDirective,
        StockChartAxesDirective,
        StockChartRowDirective,
        StockChartRowsDirective,
        StockChartAnnotationDirective,
        StockChartAnnotationsDirective,
        StockChartSelectedDataIndexDirective,
        StockChartSelectedDataIndexesDirective,
        StockChartPeriodDirective,
        StockChartPeriodsDirective,
        StockChartIndicatorDirective,
        StockChartIndicatorsDirective
    ]
})
export class StockChartModule { }