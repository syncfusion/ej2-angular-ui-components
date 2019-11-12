var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, Directive, ElementRef, Injector, NgModule, Renderer2, ViewContainerRef } from '@angular/core';
import { ArrayBase, ComplexBase, ComponentBase, ComponentMixins, Template, setValue } from '@syncfusion/ej2-angular-base';
import { AccumulationAnnotation, AccumulationChart, AccumulationDataLabel, AccumulationDistributionIndicator, AccumulationLegend, AccumulationSelection, AccumulationTooltip, AreaSeries, AtrIndicator, BarSeries, BollingerBands, BoxAndWhiskerSeries, BubbleSeries, CandleSeries, Category, Chart, ChartAnnotation, ColumnSeries, Crosshair, DataEditing, DataLabel, DateTime, DateTimeCategory, EmaIndicator, ErrorBar, Export, FunnelSeries, HiloOpenCloseSeries, HiloSeries, HistogramSeries, Legend, LineSeries, Logarithmic, MacdIndicator, MomentumIndicator, MultiColoredAreaSeries, MultiColoredLineSeries, MultiLevelLabel, ParetoSeries, PeriodSelector, PieSeries, PolarSeries, PyramidSeries, RadarSeries, RangeAreaSeries, RangeColumnSeries, RangeNavigator, RangeTooltip, RsiIndicator, ScatterSeries, ScrollBar, Selection, SmaIndicator, Smithchart, SmithchartLegend, Sparkline, SparklineTooltip, SplineAreaSeries, SplineSeries, StackingAreaSeries, StackingBarSeries, StackingColumnSeries, StackingLineSeries, StepAreaSeries, StepLineSeries, StochasticIndicator, StockChart, StripLine, TmaIndicator, Tooltip, TooltipRender, Trendlines, WaterfallSeries, Zoom } from '@syncfusion/ej2-charts';
import { CommonModule } from '@angular/common';
var input = ['animation', 'backwardForecast', 'dashArray', 'enableTooltip', 'fill', 'forwardForecast', 'intercept', 'legendShape', 'marker', 'name', 'period', 'polynomialOrder', 'type', 'visible', 'width'];
var outputs = [];
/**
 * Series Directive
 * ```html
 * <e-series-collection>
 * <e-series>
 * <e-trendlines>
 * <e-trendline>
 * </e-trendline>
 * </e-trendlines>
 * </e-series-collection>
 * ```
 */
var TrendlineDirective = /** @class */ (function (_super) {
    __extends(TrendlineDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function TrendlineDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs);
        return _this;
    }
    return TrendlineDirective;
}(ComplexBase));
TrendlineDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-series>e-trendlines>e-trendline',
                inputs: input,
                outputs: outputs,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
TrendlineDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * Trendline Array Directive
 */
var TrendlinesDirective = /** @class */ (function (_super) {
    __extends(TrendlinesDirective, _super);
    function TrendlinesDirective() {
        return _super.call(this, 'trendlines') || this;
    }
    return TrendlinesDirective;
}(ArrayBase));
TrendlinesDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-series>e-trendlines',
                queries: {
                    children: new ContentChildren(TrendlineDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
TrendlinesDirective.ctorParameters = function () { return []; };
var input$1 = ['color', 'dashArray', 'value'];
var outputs$1 = [];
/**
 * Series Directive
 * ```html
 * <e-series-collection>
 * <e-series>
 * <e-segments>
 * <e-segment>
 * </e-segment>
 * </e-segments>
 * </e-series-collection>
 * ```
 */
var SegmentDirective = /** @class */ (function (_super) {
    __extends(SegmentDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function SegmentDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$1);
        return _this;
    }
    return SegmentDirective;
}(ComplexBase));
SegmentDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-series>e-segments>e-segment',
                inputs: input$1,
                outputs: outputs$1,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
SegmentDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * Segment Array Directive
 */
var SegmentsDirective = /** @class */ (function (_super) {
    __extends(SegmentsDirective, _super);
    function SegmentsDirective() {
        return _super.call(this, 'segments') || this;
    }
    return SegmentsDirective;
}(ArrayBase));
SegmentsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-series>e-segments',
                queries: {
                    children: new ContentChildren(SegmentDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
SegmentsDirective.ctorParameters = function () { return []; };
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var input$2 = ['animation', 'bearFillColor', 'binInterval', 'border', 'boxPlotMode', 'bullFillColor', 'cardinalSplineTension', 'close', 'columnSpacing', 'columnWidth', 'connector', 'cornerRadius', 'dashArray', 'dataSource', 'dragSettings', 'drawType', 'emptyPointSettings', 'enableComplexProperty', 'enableSolidCandles', 'enableTooltip', 'errorBar', 'fill', 'high', 'intermediateSumIndexes', 'isClosed', 'legendShape', 'low', 'marker', 'maxRadius', 'minRadius', 'name', 'negativeFillColor', 'opacity', 'open', 'pointColorMapping', 'query', 'segmentAxis', 'segments', 'selectionStyle', 'showMean', 'showNormalDistribution', 'size', 'splineType', 'stackingGroup', 'sumIndexes', 'summaryFillColor', 'tooltipFormat', 'tooltipMappingName', 'trendlines', 'type', 'visible', 'volume', 'width', 'xAxisName', 'xName', 'yAxisName', 'yName', 'zOrder'];
var outputs$2 = [];
/**
 * Series Directive
 * ```html
 * <e-series-collection>
 * <e-series></e-series>
 * </e-series-collection>
 * ```
 */
var SeriesDirective = /** @class */ (function (_super) {
    __extends(SeriesDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function SeriesDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        _this.tags = ['trendlines', 'segments'];
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$2);
        return _this;
    }
    return SeriesDirective;
}(ComplexBase));
SeriesDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-series-collection>e-series',
                inputs: input$2,
                outputs: outputs$2,
                queries: {
                    childTrendlines: new ContentChild(TrendlinesDirective),
                    childSegments: new ContentChild(SegmentsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
SeriesDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
SeriesDirective.propDecorators = {
    'dataLabel_template': [{ type: ContentChild, args: ['dataLabelTemplate',] },],
};
__decorate([
    Template(),
    __metadata("design:type", Object)
], SeriesDirective.prototype, "dataLabel_template", void 0);
/**
 * Series Array Directive
 */
var SeriesCollectionDirective = /** @class */ (function (_super) {
    __extends(SeriesCollectionDirective, _super);
    function SeriesCollectionDirective() {
        return _super.call(this, 'series') || this;
    }
    return SeriesCollectionDirective;
}(ArrayBase));
SeriesCollectionDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ej-chart>e-series-collection',
                queries: {
                    children: new ContentChildren(SeriesDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
SeriesCollectionDirective.ctorParameters = function () { return []; };
var input$3 = ['border', 'color', 'dashArray', 'end', 'horizontalAlignment', 'isRepeat', 'isSegmented', 'opacity', 'repeatEvery', 'repeatUntil', 'rotation', 'segmentAxisName', 'segmentEnd', 'segmentStart', 'size', 'sizeType', 'start', 'startFromAxis', 'text', 'textStyle', 'verticalAlignment', 'visible', 'zIndex'];
var outputs$3 = [];
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
var StripLineDirective = /** @class */ (function (_super) {
    __extends(StripLineDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function StripLineDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$3);
        return _this;
    }
    return StripLineDirective;
}(ComplexBase));
StripLineDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-axis>e-striplines>e-stripline',
                inputs: input$3,
                outputs: outputs$3,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
StripLineDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * StripLine Array Directive
 */
var StripLinesDirective = /** @class */ (function (_super) {
    __extends(StripLinesDirective, _super);
    function StripLinesDirective() {
        return _super.call(this, 'striplines') || this;
    }
    return StripLinesDirective;
}(ArrayBase));
StripLinesDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-axis>e-striplines',
                queries: {
                    children: new ContentChildren(StripLineDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
StripLinesDirective.ctorParameters = function () { return []; };
var input$4 = ['customAttributes', 'end', 'maximumTextWidth', 'start', 'text', 'type'];
var outputs$4 = [];
/**
 * MultiLevelLabels Directive
 * ```html
 * <e-multilevellabels>
 * <e-multilevellabel>
 * <e-Categories>
 * <e-Category>
 * </e-Category>
 * </e-Categories>
 * </e-multilevellabel>
 * </e-multilevellabels>
 * ```
 */
var CategoryDirective = /** @class */ (function (_super) {
    __extends(CategoryDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function CategoryDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$4);
        return _this;
    }
    return CategoryDirective;
}(ComplexBase));
CategoryDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-multilevellabel>e-categories>e-category',
                inputs: input$4,
                outputs: outputs$4,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
CategoryDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * Category Array Directive
 */
var CategoriesDirective = /** @class */ (function (_super) {
    __extends(CategoriesDirective, _super);
    function CategoriesDirective() {
        return _super.call(this, 'categories') || this;
    }
    return CategoriesDirective;
}(ArrayBase));
CategoriesDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-multilevellabel>e-categories',
                queries: {
                    children: new ContentChildren(CategoryDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
CategoriesDirective.ctorParameters = function () { return []; };
var input$5 = ['alignment', 'border', 'categories', 'overflow', 'textStyle'];
var outputs$5 = [];
/**
 * MultiLevelLabel Directive
 * ```html
 * <e-axis>
 * <e-multilevellabels>
 * <e-multilevellabel></e-multilevellabel>
 * </e-multilevellabels>
 * </e-axis>
 * ```
 */
var MultiLevelLabelDirective = /** @class */ (function (_super) {
    __extends(MultiLevelLabelDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function MultiLevelLabelDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        _this.tags = ['categories'];
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$5);
        return _this;
    }
    return MultiLevelLabelDirective;
}(ComplexBase));
MultiLevelLabelDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-axis>e-multilevellabels>e-multilevellabel',
                inputs: input$5,
                outputs: outputs$5,
                queries: {
                    childCategories: new ContentChild(CategoriesDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
MultiLevelLabelDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * MultiLevelLabel Array Directive
 */
var MultiLevelLabelsDirective = /** @class */ (function (_super) {
    __extends(MultiLevelLabelsDirective, _super);
    function MultiLevelLabelsDirective() {
        return _super.call(this, 'multilevellabels') || this;
    }
    return MultiLevelLabelsDirective;
}(ArrayBase));
MultiLevelLabelsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-axis>e-multilevellabels',
                queries: {
                    children: new ContentChildren(MultiLevelLabelDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
MultiLevelLabelsDirective.ctorParameters = function () { return []; };
var input$6 = ['border', 'coefficient', 'columnIndex', 'crossesAt', 'crossesInAxis', 'crosshairTooltip', 'description', 'desiredIntervals', 'edgeLabelPlacement', 'enableAutoIntervalOnZooming', 'enableTrim', 'interval', 'intervalType', 'isIndexed', 'isInversed', 'labelFormat', 'labelIntersectAction', 'labelPlacement', 'labelPosition', 'labelRotation', 'labelStyle', 'lineStyle', 'logBase', 'majorGridLines', 'majorTickLines', 'maximum', 'maximumLabelWidth', 'maximumLabels', 'minimum', 'minorGridLines', 'minorTickLines', 'minorTicksPerInterval', 'multiLevelLabels', 'name', 'opposedPosition', 'placeNextToAxisLine', 'plotOffset', 'plotOffsetBottom', 'plotOffsetLeft', 'plotOffsetRight', 'plotOffsetTop', 'rangePadding', 'rowIndex', 'scrollbarSettings', 'skeleton', 'skeletonType', 'span', 'startAngle', 'stripLines', 'tabIndex', 'tickPosition', 'title', 'titleStyle', 'valueType', 'visible', 'zoomFactor', 'zoomPosition'];
var outputs$6 = [];
/**
 * Axis Directive
 * ```html
 * <e-axes><e-axis></e-axis></e-axes>
 * ```
 */
var AxisDirective = /** @class */ (function (_super) {
    __extends(AxisDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function AxisDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        _this.tags = ['stripLines', 'multiLevelLabels'];
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$6);
        return _this;
    }
    return AxisDirective;
}(ComplexBase));
AxisDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-axes>e-axis',
                inputs: input$6,
                outputs: outputs$6,
                queries: {
                    childStripLines: new ContentChild(StripLinesDirective),
                    childMultiLevelLabels: new ContentChild(MultiLevelLabelsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
AxisDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * Axis Array Directive
 */
var AxesDirective = /** @class */ (function (_super) {
    __extends(AxesDirective, _super);
    function AxesDirective() {
        return _super.call(this, 'axes') || this;
    }
    return AxesDirective;
}(ArrayBase));
AxesDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-chart>e-axes',
                queries: {
                    children: new ContentChildren(AxisDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
AxesDirective.ctorParameters = function () { return []; };
var input$7 = ['border', 'height'];
var outputs$7 = [];
/**
 * Row Directive
 * ```html
 * <e-rows><e-row></e-row><e-rows>
 * ```
 */
var RowDirective = /** @class */ (function (_super) {
    __extends(RowDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function RowDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$7);
        return _this;
    }
    return RowDirective;
}(ComplexBase));
RowDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-rows>e-row',
                inputs: input$7,
                outputs: outputs$7,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
RowDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * Row Array Directive
 */
var RowsDirective = /** @class */ (function (_super) {
    __extends(RowsDirective, _super);
    function RowsDirective() {
        return _super.call(this, 'rows') || this;
    }
    return RowsDirective;
}(ArrayBase));
RowsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-chart>e-rows',
                queries: {
                    children: new ContentChildren(RowDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
RowsDirective.ctorParameters = function () { return []; };
var input$8 = ['border', 'width'];
var outputs$8 = [];
/**
 * Column Directive
 * ```html
 * <e-columns><e-column></e-column><e-columns>
 * ```
 */
var ColumnDirective = /** @class */ (function (_super) {
    __extends(ColumnDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function ColumnDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$8);
        return _this;
    }
    return ColumnDirective;
}(ComplexBase));
ColumnDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-columns>e-column',
                inputs: input$8,
                outputs: outputs$8,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
ColumnDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * Column Array Directive
 */
var ColumnsDirective = /** @class */ (function (_super) {
    __extends(ColumnsDirective, _super);
    function ColumnsDirective() {
        return _super.call(this, 'columns') || this;
    }
    return ColumnsDirective;
}(ArrayBase));
ColumnsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-chart>e-columns',
                queries: {
                    children: new ContentChildren(ColumnDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
ColumnsDirective.ctorParameters = function () { return []; };
var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var input$9 = ['content', 'coordinateUnits', 'description', 'horizontalAlignment', 'region', 'verticalAlignment', 'x', 'xAxisName', 'y', 'yAxisName'];
var outputs$9 = [];
/**
 * Annotation Directive
 * ```html
 * <e-annotations><e-annotation></e-annotation><e-annotations>
 * ```
 */
var AnnotationDirective = /** @class */ (function (_super) {
    __extends(AnnotationDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function AnnotationDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$9);
        return _this;
    }
    return AnnotationDirective;
}(ComplexBase));
AnnotationDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-annotations>e-annotation',
                inputs: input$9,
                outputs: outputs$9,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
AnnotationDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
AnnotationDirective.propDecorators = {
    'content': [{ type: ContentChild, args: ['content',] },],
};
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], AnnotationDirective.prototype, "content", void 0);
/**
 * Annotation Array Directive
 */
var AnnotationsDirective = /** @class */ (function (_super) {
    __extends(AnnotationsDirective, _super);
    function AnnotationsDirective() {
        return _super.call(this, 'annotations') || this;
    }
    return AnnotationsDirective;
}(ArrayBase));
AnnotationsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-chart>e-annotations',
                queries: {
                    children: new ContentChildren(AnnotationDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
AnnotationsDirective.ctorParameters = function () { return []; };
var input$10 = ['point', 'series'];
var outputs$10 = [];
/**
 * Selected Data Directive
 * ```html
 * <e-selecteddataindexes><e-selecteddataindex></e-selecteddataindex><e-selecteddataindexes>
 * ```
 */
var SelectedDataIndexDirective = /** @class */ (function (_super) {
    __extends(SelectedDataIndexDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function SelectedDataIndexDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$10);
        return _this;
    }
    return SelectedDataIndexDirective;
}(ComplexBase));
SelectedDataIndexDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-selecteddataindexes>e-selecteddataindex',
                inputs: input$10,
                outputs: outputs$10,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
SelectedDataIndexDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * SelectedDataIndex Array Directive
 */
var SelectedDataIndexesDirective = /** @class */ (function (_super) {
    __extends(SelectedDataIndexesDirective, _super);
    function SelectedDataIndexesDirective() {
        return _super.call(this, 'selecteddataindexes') || this;
    }
    return SelectedDataIndexesDirective;
}(ArrayBase));
SelectedDataIndexesDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-chart>e-selecteddataindexes',
                queries: {
                    children: new ContentChildren(SelectedDataIndexDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
SelectedDataIndexesDirective.ctorParameters = function () { return []; };
var input$11 = ['animation', 'bandColor', 'close', 'dPeriod', 'dashArray', 'dataSource', 'enableComplexProperty', 'fastPeriod', 'field', 'fill', 'high', 'kPeriod', 'low', 'lowerLine', 'macdLine', 'macdNegativeColor', 'macdPositiveColor', 'macdType', 'open', 'overBought', 'overSold', 'period', 'periodLine', 'pointColorMapping', 'query', 'segmentAxis', 'segments', 'seriesName', 'showZones', 'slowPeriod', 'standardDeviation', 'type', 'upperLine', 'visible', 'volume', 'width', 'xAxisName', 'xName', 'yAxisName'];
var outputs$11 = [];
/**
 * Indicator Directive
 * ```html
 * <e-indicators>
 * <e-indicator></e-indicator>
 * </e-indicators>
 * ```
 */
var IndicatorDirective = /** @class */ (function (_super) {
    __extends(IndicatorDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function IndicatorDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$11);
        return _this;
    }
    return IndicatorDirective;
}(ComplexBase));
IndicatorDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-indicators>e-indicator',
                inputs: input$11,
                outputs: outputs$11,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
IndicatorDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * Indicator Array Directive
 */
var IndicatorsDirective = /** @class */ (function (_super) {
    __extends(IndicatorsDirective, _super);
    function IndicatorsDirective() {
        return _super.call(this, 'indicators') || this;
    }
    return IndicatorsDirective;
}(ArrayBase));
IndicatorsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ej-chart>e-indicators',
                queries: {
                    children: new ContentChildren(IndicatorDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
IndicatorsDirective.ctorParameters = function () { return []; };
var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var inputs = ['allowMultiSelection', 'annotations', 'axes', 'background', 'backgroundImage', 'border', 'chartArea', 'columns', 'crosshair', 'currencyCode', 'dataSource', 'description', 'enableAnimation', 'enableCanvas', 'enableExport', 'enablePersistence', 'enableRtl', 'enableSideBySidePlacement', 'height', 'indicators', 'isMultiSelect', 'isTransposed', 'legendSettings', 'locale', 'margin', 'palettes', 'primaryXAxis', 'primaryYAxis', 'rows', 'selectedDataIndexes', 'selectionMode', 'series', 'subTitle', 'subTitleStyle', 'tabIndex', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width', 'zoomSettings'];
var outputs$12 = ['animationComplete', 'annotationRender', 'axisLabelRender', 'axisMultiLabelRender', 'axisRangeCalculated', 'beforePrint', 'chartMouseClick', 'chartMouseDown', 'chartMouseLeave', 'chartMouseMove', 'chartMouseUp', 'drag', 'dragComplete', 'dragEnd', 'dragStart', 'legendClick', 'legendRender', 'load', 'loaded', 'multiLevelLabelClick', 'pointClick', 'pointMove', 'pointRender', 'resized', 'scrollChanged', 'scrollEnd', 'scrollStart', 'selectionComplete', 'seriesRender', 'textRender', 'tooltipRender', 'zoomComplete', 'dataSourceChange'];
var twoWays = ['dataSource'];
/**
 * Chart Component
 * ```html
 * <ejschart></ejschart>
 * ```
 */
var ChartComponent = /** @class */ (function (_super) {
    __extends(ChartComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function ChartComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.tags = ['series', 'axes', 'rows', 'columns', 'annotations', 'selectedDataIndexes', 'indicators'];
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        try {
            var mod = _this.injector.get('ChartsLineSeries');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            var mod = _this.injector.get('ChartsScatterSeries');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            var mod = _this.injector.get('ChartsColumnSeries');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            var mod = _this.injector.get('ChartsSplineSeries');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            var mod = _this.injector.get('ChartsSplineAreaSeries');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            var mod = _this.injector.get('ChartsStripLine');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        try {
            var mod = _this.injector.get('ChartsAreaSeries');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_g) { }
        try {
            var mod = _this.injector.get('ChartsScrollBar');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_h) { }
        try {
            var mod = _this.injector.get('ChartsStepLineSeries');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_j) { }
        try {
            var mod = _this.injector.get('ChartsStepAreaSeries');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_k) { }
        try {
            var mod = _this.injector.get('ChartsStackingColumnSeries');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_l) { }
        try {
            var mod = _this.injector.get('ChartsStackingLineSeries');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_m) { }
        try {
            var mod = _this.injector.get('ChartsStackingAreaSeries');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_o) { }
        try {
            var mod = _this.injector.get('ChartsBarSeries');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_p) { }
        try {
            var mod = _this.injector.get('ChartsStackingBarSeries');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_q) { }
        try {
            var mod = _this.injector.get('ChartsRangeColumnSeries');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_r) { }
        try {
            var mod = _this.injector.get('ChartsBubbleSeries');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_s) { }
        try {
            var mod = _this.injector.get('ChartsTooltip');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_t) { }
        try {
            var mod = _this.injector.get('ChartsCrosshair');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_u) { }
        try {
            var mod = _this.injector.get('ChartsCategory');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_v) { }
        try {
            var mod = _this.injector.get('ChartsDateTime');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_w) { }
        try {
            var mod = _this.injector.get('ChartsLogarithmic');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_x) { }
        try {
            var mod = _this.injector.get('ChartsLegend');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_y) { }
        try {
            var mod = _this.injector.get('ChartsZoom');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_z) { }
        try {
            var mod = _this.injector.get('ChartsDataLabel');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_0) { }
        try {
            var mod = _this.injector.get('ChartsSelection');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_1) { }
        try {
            var mod = _this.injector.get('ChartsChartAnnotation');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_2) { }
        try {
            var mod = _this.injector.get('ChartsHiloSeries');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_3) { }
        try {
            var mod = _this.injector.get('ChartsHiloOpenCloseSeries');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_4) { }
        try {
            var mod = _this.injector.get('ChartsWaterfallSeries');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_5) { }
        try {
            var mod = _this.injector.get('ChartsRangeAreaSeries');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_6) { }
        try {
            var mod = _this.injector.get('ChartsCandleSeries');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_7) { }
        try {
            var mod = _this.injector.get('ChartsPolarSeries');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_8) { }
        try {
            var mod = _this.injector.get('ChartsRadarSeries');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_9) { }
        try {
            var mod = _this.injector.get('ChartsSmaIndicator');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_10) { }
        try {
            var mod = _this.injector.get('ChartsTmaIndicator');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_11) { }
        try {
            var mod = _this.injector.get('ChartsEmaIndicator');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_12) { }
        try {
            var mod = _this.injector.get('ChartsAccumulationDistributionIndicator');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_13) { }
        try {
            var mod = _this.injector.get('ChartsMacdIndicator');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_14) { }
        try {
            var mod = _this.injector.get('ChartsAtrIndicator');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_15) { }
        try {
            var mod = _this.injector.get('ChartsRsiIndicator');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_16) { }
        try {
            var mod = _this.injector.get('ChartsMomentumIndicator');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_17) { }
        try {
            var mod = _this.injector.get('ChartsStochasticIndicator');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_18) { }
        try {
            var mod = _this.injector.get('ChartsBollingerBands');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_19) { }
        try {
            var mod = _this.injector.get('ChartsBoxAndWhiskerSeries');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_20) { }
        try {
            var mod = _this.injector.get('ChartsHistogramSeries');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_21) { }
        try {
            var mod = _this.injector.get('ChartsErrorBar');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_22) { }
        try {
            var mod = _this.injector.get('ChartsTrendlines');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_23) { }
        try {
            var mod = _this.injector.get('ChartsDateTimeCategory');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_24) { }
        try {
            var mod = _this.injector.get('ChartsMultiColoredLineSeries');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_25) { }
        try {
            var mod = _this.injector.get('ChartsMultiColoredAreaSeries');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_26) { }
        try {
            var mod = _this.injector.get('ChartsMultiLevelLabel');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_27) { }
        try {
            var mod = _this.injector.get('ChartsParetoSeries');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_28) { }
        try {
            var mod = _this.injector.get('ChartsExport');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_29) { }
        try {
            var mod = _this.injector.get('ChartsDataEditing');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_30) { }
        _this.registerEvents(outputs$12);
        _this.addTwoWay.call(_this, twoWays);
        setValue('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @return {?}
     */
    ChartComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    ChartComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    ChartComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    ChartComponent.prototype.ngAfterContentChecked = function () {
    };
    return ChartComponent;
}(Chart));
ChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-chart',
                inputs: inputs,
                outputs: outputs$12,
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
            },] },
];
/**
 * @nocollapse
 */
ChartComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
ChartComponent.propDecorators = {
    'tooltip_template': [{ type: ContentChild, args: ['tooltipTemplate',] },],
};
__decorate$2([
    Template(),
    __metadata$2("design:type", Object)
], ChartComponent.prototype, "tooltip_template", void 0);
ChartComponent = __decorate$2([
    ComponentMixins([ComponentBase]),
    __metadata$2("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], ChartComponent);
/**
 * NgModule definition for the Chart component.
 */
var ChartModule = /** @class */ (function () {
    function ChartModule() {
    }
    return ChartModule;
}());
ChartModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    ChartComponent,
                    TrendlineDirective,
                    TrendlinesDirective,
                    SegmentDirective,
                    SegmentsDirective,
                    SeriesDirective,
                    SeriesCollectionDirective,
                    StripLineDirective,
                    StripLinesDirective,
                    CategoryDirective,
                    CategoriesDirective,
                    MultiLevelLabelDirective,
                    MultiLevelLabelsDirective,
                    AxisDirective,
                    AxesDirective,
                    RowDirective,
                    RowsDirective,
                    ColumnDirective,
                    ColumnsDirective,
                    AnnotationDirective,
                    AnnotationsDirective,
                    SelectedDataIndexDirective,
                    SelectedDataIndexesDirective,
                    IndicatorDirective,
                    IndicatorsDirective
                ],
                exports: [
                    ChartComponent,
                    TrendlineDirective,
                    TrendlinesDirective,
                    SegmentDirective,
                    SegmentsDirective,
                    SeriesDirective,
                    SeriesCollectionDirective,
                    StripLineDirective,
                    StripLinesDirective,
                    CategoryDirective,
                    CategoriesDirective,
                    MultiLevelLabelDirective,
                    MultiLevelLabelsDirective,
                    AxisDirective,
                    AxesDirective,
                    RowDirective,
                    RowsDirective,
                    ColumnDirective,
                    ColumnsDirective,
                    AnnotationDirective,
                    AnnotationsDirective,
                    SelectedDataIndexDirective,
                    SelectedDataIndexesDirective,
                    IndicatorDirective,
                    IndicatorsDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
ChartModule.ctorParameters = function () { return []; };
var LineSeriesService = { provide: 'ChartsLineSeries', useValue: LineSeries };
var ScatterSeriesService = { provide: 'ChartsScatterSeries', useValue: ScatterSeries };
var ColumnSeriesService = { provide: 'ChartsColumnSeries', useValue: ColumnSeries };
var SplineSeriesService = { provide: 'ChartsSplineSeries', useValue: SplineSeries };
var SplineAreaSeriesService = { provide: 'ChartsSplineAreaSeries', useValue: SplineAreaSeries };
var StripLineService = { provide: 'ChartsStripLine', useValue: StripLine };
var AreaSeriesService = { provide: 'ChartsAreaSeries', useValue: AreaSeries };
var ScrollBarService = { provide: 'ChartsScrollBar', useValue: ScrollBar };
var StepLineSeriesService = { provide: 'ChartsStepLineSeries', useValue: StepLineSeries };
var StepAreaSeriesService = { provide: 'ChartsStepAreaSeries', useValue: StepAreaSeries };
var StackingColumnSeriesService = { provide: 'ChartsStackingColumnSeries', useValue: StackingColumnSeries };
var StackingLineSeriesService = { provide: 'ChartsStackingLineSeries', useValue: StackingLineSeries };
var StackingAreaSeriesService = { provide: 'ChartsStackingAreaSeries', useValue: StackingAreaSeries };
var BarSeriesService = { provide: 'ChartsBarSeries', useValue: BarSeries };
var StackingBarSeriesService = { provide: 'ChartsStackingBarSeries', useValue: StackingBarSeries };
var RangeColumnSeriesService = { provide: 'ChartsRangeColumnSeries', useValue: RangeColumnSeries };
var BubbleSeriesService = { provide: 'ChartsBubbleSeries', useValue: BubbleSeries };
var TooltipService = { provide: 'ChartsTooltip', useValue: Tooltip };
var CrosshairService = { provide: 'ChartsCrosshair', useValue: Crosshair };
var CategoryService = { provide: 'ChartsCategory', useValue: Category };
var DateTimeService = { provide: 'ChartsDateTime', useValue: DateTime };
var LogarithmicService = { provide: 'ChartsLogarithmic', useValue: Logarithmic };
var LegendService = { provide: 'ChartsLegend', useValue: Legend };
var ZoomService = { provide: 'ChartsZoom', useValue: Zoom };
var DataLabelService = { provide: 'ChartsDataLabel', useValue: DataLabel };
var SelectionService = { provide: 'ChartsSelection', useValue: Selection };
var ChartAnnotationService = { provide: 'ChartsChartAnnotation', useValue: ChartAnnotation };
var HiloSeriesService = { provide: 'ChartsHiloSeries', useValue: HiloSeries };
var HiloOpenCloseSeriesService = { provide: 'ChartsHiloOpenCloseSeries', useValue: HiloOpenCloseSeries };
var WaterfallSeriesService = { provide: 'ChartsWaterfallSeries', useValue: WaterfallSeries };
var RangeAreaSeriesService = { provide: 'ChartsRangeAreaSeries', useValue: RangeAreaSeries };
var CandleSeriesService = { provide: 'ChartsCandleSeries', useValue: CandleSeries };
var PolarSeriesService = { provide: 'ChartsPolarSeries', useValue: PolarSeries };
var RadarSeriesService = { provide: 'ChartsRadarSeries', useValue: RadarSeries };
var SmaIndicatorService = { provide: 'ChartsSmaIndicator', useValue: SmaIndicator };
var TmaIndicatorService = { provide: 'ChartsTmaIndicator', useValue: TmaIndicator };
var EmaIndicatorService = { provide: 'ChartsEmaIndicator', useValue: EmaIndicator };
var AccumulationDistributionIndicatorService = { provide: 'ChartsAccumulationDistributionIndicator', useValue: AccumulationDistributionIndicator };
var MacdIndicatorService = { provide: 'ChartsMacdIndicator', useValue: MacdIndicator };
var AtrIndicatorService = { provide: 'ChartsAtrIndicator', useValue: AtrIndicator };
var RsiIndicatorService = { provide: 'ChartsRsiIndicator', useValue: RsiIndicator };
var MomentumIndicatorService = { provide: 'ChartsMomentumIndicator', useValue: MomentumIndicator };
var StochasticIndicatorService = { provide: 'ChartsStochasticIndicator', useValue: StochasticIndicator };
var BollingerBandsService = { provide: 'ChartsBollingerBands', useValue: BollingerBands };
var BoxAndWhiskerSeriesService = { provide: 'ChartsBoxAndWhiskerSeries', useValue: BoxAndWhiskerSeries };
var HistogramSeriesService = { provide: 'ChartsHistogramSeries', useValue: HistogramSeries };
var ErrorBarService = { provide: 'ChartsErrorBar', useValue: ErrorBar };
var TrendlinesService = { provide: 'ChartsTrendlines', useValue: Trendlines };
var DateTimeCategoryService = { provide: 'ChartsDateTimeCategory', useValue: DateTimeCategory };
var MultiColoredLineSeriesService = { provide: 'ChartsMultiColoredLineSeries', useValue: MultiColoredLineSeries };
var MultiColoredAreaSeriesService = { provide: 'ChartsMultiColoredAreaSeries', useValue: MultiColoredAreaSeries };
var MultiLevelLabelService = { provide: 'ChartsMultiLevelLabel', useValue: MultiLevelLabel };
var ParetoSeriesService = { provide: 'ChartsParetoSeries', useValue: ParetoSeries };
var ExportService = { provide: 'ChartsExport', useValue: Export };
var DataEditingService = { provide: 'ChartsDataEditing', useValue: DataEditing };
/**
 * NgModule definition for the Chart component with providers.
 */
var ChartAllModule = /** @class */ (function () {
    function ChartAllModule() {
    }
    return ChartAllModule;
}());
ChartAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, ChartModule],
                exports: [
                    ChartModule
                ],
                providers: [
                    LineSeriesService,
                    ScatterSeriesService,
                    ColumnSeriesService,
                    SplineSeriesService,
                    SplineAreaSeriesService,
                    StripLineService,
                    AreaSeriesService,
                    ScrollBarService,
                    StepLineSeriesService,
                    StepAreaSeriesService,
                    StackingColumnSeriesService,
                    StackingLineSeriesService,
                    StackingAreaSeriesService,
                    BarSeriesService,
                    StackingBarSeriesService,
                    RangeColumnSeriesService,
                    BubbleSeriesService,
                    TooltipService,
                    CrosshairService,
                    CategoryService,
                    DateTimeService,
                    LogarithmicService,
                    LegendService,
                    ZoomService,
                    DataLabelService,
                    SelectionService,
                    ChartAnnotationService,
                    HiloSeriesService,
                    HiloOpenCloseSeriesService,
                    WaterfallSeriesService,
                    RangeAreaSeriesService,
                    CandleSeriesService,
                    PolarSeriesService,
                    RadarSeriesService,
                    SmaIndicatorService,
                    TmaIndicatorService,
                    EmaIndicatorService,
                    AccumulationDistributionIndicatorService,
                    MacdIndicatorService,
                    AtrIndicatorService,
                    RsiIndicatorService,
                    MomentumIndicatorService,
                    StochasticIndicatorService,
                    BollingerBandsService,
                    BoxAndWhiskerSeriesService,
                    HistogramSeriesService,
                    ErrorBarService,
                    TrendlinesService,
                    DateTimeCategoryService,
                    MultiColoredLineSeriesService,
                    MultiColoredAreaSeriesService,
                    MultiLevelLabelService,
                    ParetoSeriesService,
                    ExportService,
                    DataEditingService
                ]
            },] },
];
/**
 * @nocollapse
 */
ChartAllModule.ctorParameters = function () { return []; };
var __decorate$3 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var input$12 = ['animation', 'border', 'dataLabel', 'dataSource', 'emptyPointSettings', 'enableTooltip', 'endAngle', 'explode', 'explodeAll', 'explodeIndex', 'explodeOffset', 'gapRatio', 'groupMode', 'groupTo', 'height', 'innerRadius', 'legendShape', 'name', 'neckHeight', 'neckWidth', 'opacity', 'palettes', 'pointColorMapping', 'pyramidMode', 'query', 'radius', 'selectionStyle', 'startAngle', 'tooltipMappingName', 'type', 'visible', 'width', 'xName', 'yName'];
var outputs$13 = [];
/**
 * AccumulationSeries Directive
 * ```html
 * <e-accumulation-series-collection>
 * <e-accumulation-series></e-accumulation-series>
 * </e-accumulation-series-collection>
 * ```
 */
var AccumulationSeriesDirective = /** @class */ (function (_super) {
    __extends(AccumulationSeriesDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function AccumulationSeriesDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$13);
        return _this;
    }
    return AccumulationSeriesDirective;
}(ComplexBase));
AccumulationSeriesDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-accumulation-series-collection>e-accumulation-series',
                inputs: input$12,
                outputs: outputs$13,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
AccumulationSeriesDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
AccumulationSeriesDirective.propDecorators = {
    'dataLabel_template': [{ type: ContentChild, args: ['dataLabelTemplate',] },],
};
__decorate$3([
    Template(),
    __metadata$3("design:type", Object)
], AccumulationSeriesDirective.prototype, "dataLabel_template", void 0);
/**
 * AccumulationSeries Array Directive
 */
var AccumulationSeriesCollectionDirective = /** @class */ (function (_super) {
    __extends(AccumulationSeriesCollectionDirective, _super);
    function AccumulationSeriesCollectionDirective() {
        return _super.call(this, 'series') || this;
    }
    return AccumulationSeriesCollectionDirective;
}(ArrayBase));
AccumulationSeriesCollectionDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ej-accumulationchart>e-accumulation-series-collection',
                queries: {
                    children: new ContentChildren(AccumulationSeriesDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
AccumulationSeriesCollectionDirective.ctorParameters = function () { return []; };
var __decorate$4 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$4 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var input$13 = ['content', 'coordinateUnits', 'description', 'horizontalAlignment', 'region', 'verticalAlignment', 'x', 'y'];
var outputs$14 = [];
/**
 * AccumulationAnnotations Directive
 * ```html
 * <e-accumulation-annotations>
 * <e-accumulation-annotation></e-accumulation-annotation>
 * </e-accumulation-annotations>
 * ```
 */
var AccumulationAnnotationDirective = /** @class */ (function (_super) {
    __extends(AccumulationAnnotationDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function AccumulationAnnotationDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$14);
        return _this;
    }
    return AccumulationAnnotationDirective;
}(ComplexBase));
AccumulationAnnotationDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-accumulation-annotations>e-accumulation-annotation',
                inputs: input$13,
                outputs: outputs$14,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
AccumulationAnnotationDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
AccumulationAnnotationDirective.propDecorators = {
    'content': [{ type: ContentChild, args: ['content',] },],
};
__decorate$4([
    Template(),
    __metadata$4("design:type", Object)
], AccumulationAnnotationDirective.prototype, "content", void 0);
/**
 * AccumulationAnnotation Array Directive
 */
var AccumulationAnnotationsDirective = /** @class */ (function (_super) {
    __extends(AccumulationAnnotationsDirective, _super);
    function AccumulationAnnotationsDirective() {
        return _super.call(this, 'annotations') || this;
    }
    return AccumulationAnnotationsDirective;
}(ArrayBase));
AccumulationAnnotationsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ej-accumulationchart>e-accumulation-annotations',
                queries: {
                    children: new ContentChildren(AccumulationAnnotationDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
AccumulationAnnotationsDirective.ctorParameters = function () { return []; };
var __decorate$5 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$5 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var inputs$1 = ['annotations', 'background', 'backgroundImage', 'border', 'center', 'currencyCode', 'dataSource', 'enableAnimation', 'enableExport', 'enablePersistence', 'enableRtl', 'enableSmartLabels', 'height', 'isMultiSelect', 'legendSettings', 'locale', 'margin', 'selectedDataIndexes', 'selectionMode', 'series', 'subTitle', 'subTitleStyle', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width'];
var outputs$15 = ['animationComplete', 'annotationRender', 'beforePrint', 'chartMouseClick', 'chartMouseDown', 'chartMouseLeave', 'chartMouseMove', 'chartMouseUp', 'legendRender', 'load', 'loaded', 'pointClick', 'pointMove', 'pointRender', 'resized', 'seriesRender', 'textRender', 'tooltipRender', 'dataSourceChange'];
var twoWays$1 = ['dataSource'];
/**
 * AccumulationChart Component
 * ```html
 * <ejs-accumulationchart></ejs-accumulationchart>
 * ```
 */
var AccumulationChartComponent = /** @class */ (function (_super) {
    __extends(AccumulationChartComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function AccumulationChartComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.tags = ['series', 'annotations'];
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        try {
            var mod = _this.injector.get('ChartsPieSeries');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            var mod = _this.injector.get('ChartsFunnelSeries');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            var mod = _this.injector.get('ChartsPyramidSeries');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            var mod = _this.injector.get('ChartsAccumulationTooltip');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            var mod = _this.injector.get('ChartsAccumulationLegend');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            var mod = _this.injector.get('ChartsAccumulationSelection');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        try {
            var mod = _this.injector.get('ChartsAccumulationDataLabel');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_g) { }
        try {
            var mod = _this.injector.get('ChartsAccumulationAnnotation');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_h) { }
        try {
            var mod = _this.injector.get('ChartsExport');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_j) { }
        _this.registerEvents(outputs$15);
        _this.addTwoWay.call(_this, twoWays$1);
        setValue('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @return {?}
     */
    AccumulationChartComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    AccumulationChartComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    AccumulationChartComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    AccumulationChartComponent.prototype.ngAfterContentChecked = function () {
    };
    return AccumulationChartComponent;
}(AccumulationChart));
AccumulationChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-accumulationchart',
                inputs: inputs$1,
                outputs: outputs$15,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {
                    childSeries: new ContentChild(AccumulationSeriesCollectionDirective),
                    childAnnotations: new ContentChild(AccumulationAnnotationsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
AccumulationChartComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
AccumulationChartComponent.propDecorators = {
    'tooltip_template': [{ type: ContentChild, args: ['tooltipTemplate',] },],
};
__decorate$5([
    Template(),
    __metadata$5("design:type", Object)
], AccumulationChartComponent.prototype, "tooltip_template", void 0);
AccumulationChartComponent = __decorate$5([
    ComponentMixins([ComponentBase]),
    __metadata$5("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], AccumulationChartComponent);
/**
 * NgModule definition for the AccumulationChart component.
 */
var AccumulationChartModule = /** @class */ (function () {
    function AccumulationChartModule() {
    }
    return AccumulationChartModule;
}());
AccumulationChartModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    AccumulationChartComponent,
                    AccumulationSeriesDirective,
                    AccumulationSeriesCollectionDirective,
                    AccumulationAnnotationDirective,
                    AccumulationAnnotationsDirective
                ],
                exports: [
                    AccumulationChartComponent,
                    AccumulationSeriesDirective,
                    AccumulationSeriesCollectionDirective,
                    AccumulationAnnotationDirective,
                    AccumulationAnnotationsDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
AccumulationChartModule.ctorParameters = function () { return []; };
var PieSeriesService = { provide: 'ChartsPieSeries', useValue: PieSeries };
var FunnelSeriesService = { provide: 'ChartsFunnelSeries', useValue: FunnelSeries };
var PyramidSeriesService = { provide: 'ChartsPyramidSeries', useValue: PyramidSeries };
var AccumulationTooltipService = { provide: 'ChartsAccumulationTooltip', useValue: AccumulationTooltip };
var AccumulationLegendService = { provide: 'ChartsAccumulationLegend', useValue: AccumulationLegend };
var AccumulationSelectionService = { provide: 'ChartsAccumulationSelection', useValue: AccumulationSelection };
var AccumulationDataLabelService = { provide: 'ChartsAccumulationDataLabel', useValue: AccumulationDataLabel };
var AccumulationAnnotationService = { provide: 'ChartsAccumulationAnnotation', useValue: AccumulationAnnotation };
/**
 * NgModule definition for the AccumulationChart component with providers.
 */
var AccumulationChartAllModule = /** @class */ (function () {
    function AccumulationChartAllModule() {
    }
    return AccumulationChartAllModule;
}());
AccumulationChartAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, AccumulationChartModule],
                exports: [
                    AccumulationChartModule
                ],
                providers: [
                    PieSeriesService,
                    FunnelSeriesService,
                    PyramidSeriesService,
                    AccumulationTooltipService,
                    AccumulationLegendService,
                    AccumulationSelectionService,
                    AccumulationDataLabelService,
                    AccumulationAnnotationService
                ]
            },] },
];
/**
 * @nocollapse
 */
AccumulationChartAllModule.ctorParameters = function () { return []; };
var input$14 = ['animation', 'border', 'dashArray', 'dataSource', 'fill', 'opacity', 'query', 'type', 'width', 'xName', 'yName'];
var outputs$16 = [];
/**
 * RangenavigatorSeries Directive
 * ```html
 * <e-rangenavigator-series-collection>
 * <e-rangenavigator-series></e-rangenavigator-series>
 * </e-rangenavigator-series-collection>
 * ```
 */
var RangenavigatorSeriesDirective = /** @class */ (function (_super) {
    __extends(RangenavigatorSeriesDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function RangenavigatorSeriesDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$16);
        return _this;
    }
    return RangenavigatorSeriesDirective;
}(ComplexBase));
RangenavigatorSeriesDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-rangenavigator-series-collection>e-rangenavigator-series',
                inputs: input$14,
                outputs: outputs$16,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
RangenavigatorSeriesDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * RangenavigatorSeries Array Directive
 */
var RangenavigatorSeriesCollectionDirective = /** @class */ (function (_super) {
    __extends(RangenavigatorSeriesCollectionDirective, _super);
    function RangenavigatorSeriesCollectionDirective() {
        return _super.call(this, 'series') || this;
    }
    return RangenavigatorSeriesCollectionDirective;
}(ArrayBase));
RangenavigatorSeriesCollectionDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ej-rangenavigator>e-rangenavigator-series-collection',
                queries: {
                    children: new ContentChildren(RangenavigatorSeriesDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
RangenavigatorSeriesCollectionDirective.ctorParameters = function () { return []; };
var __decorate$6 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$6 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var inputs$2 = ['allowSnapping', 'animationDuration', 'dataSource', 'disableRangeSelector', 'enableDeferredUpdate', 'enableGrouping', 'enablePersistence', 'enableRtl', 'groupBy', 'height', 'interval', 'intervalType', 'labelFormat', 'labelIntersectAction', 'labelPosition', 'labelStyle', 'locale', 'logBase', 'majorGridLines', 'majorTickLines', 'margin', 'maximum', 'minimum', 'navigatorBorder', 'navigatorStyleSettings', 'periodSelectorSettings', 'query', 'secondaryLabelAlignment', 'series', 'skeleton', 'skeletonType', 'theme', 'tickPosition', 'tooltip', 'useGroupingSeparator', 'value', 'valueType', 'width', 'xName', 'yName'];
var outputs$17 = ['beforePrint', 'changed', 'labelRender', 'load', 'loaded', 'resized', 'selectorRender', 'tooltipRender', 'dataSourceChange'];
var twoWays$2 = ['dataSource'];
/**
 * RangeNavigator Component
 * ```html
 * <ejs-rangenavigator></ejs-rangenavigator>
 * ```
 */
var RangeNavigatorComponent = /** @class */ (function (_super) {
    __extends(RangeNavigatorComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function RangeNavigatorComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.tags = ['series'];
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        try {
            var mod = _this.injector.get('ChartsRangeTooltip');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            var mod = _this.injector.get('ChartsPeriodSelector');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            var mod = _this.injector.get('ChartsAreaSeries');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            var mod = _this.injector.get('ChartsStepLineSeries');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            var mod = _this.injector.get('ChartsDateTime');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            var mod = _this.injector.get('ChartsLogarithmic');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        try {
            var mod = _this.injector.get('ChartsExport');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_g) { }
        _this.registerEvents(outputs$17);
        _this.addTwoWay.call(_this, twoWays$2);
        setValue('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @return {?}
     */
    RangeNavigatorComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    RangeNavigatorComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    RangeNavigatorComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    RangeNavigatorComponent.prototype.ngAfterContentChecked = function () {
    };
    return RangeNavigatorComponent;
}(RangeNavigator));
RangeNavigatorComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-rangenavigator',
                inputs: inputs$2,
                outputs: outputs$17,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {
                    childSeries: new ContentChild(RangenavigatorSeriesCollectionDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
RangeNavigatorComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
RangeNavigatorComponent.propDecorators = {
    'tooltip_template': [{ type: ContentChild, args: ['tooltipTemplate',] },],
};
__decorate$6([
    Template(),
    __metadata$6("design:type", Object)
], RangeNavigatorComponent.prototype, "tooltip_template", void 0);
RangeNavigatorComponent = __decorate$6([
    ComponentMixins([ComponentBase]),
    __metadata$6("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], RangeNavigatorComponent);
/**
 * NgModule definition for the RangeNavigator component.
 */
var RangeNavigatorModule = /** @class */ (function () {
    function RangeNavigatorModule() {
    }
    return RangeNavigatorModule;
}());
RangeNavigatorModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    RangeNavigatorComponent,
                    RangenavigatorSeriesDirective,
                    RangenavigatorSeriesCollectionDirective
                ],
                exports: [
                    RangeNavigatorComponent,
                    RangenavigatorSeriesDirective,
                    RangenavigatorSeriesCollectionDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
RangeNavigatorModule.ctorParameters = function () { return []; };
var RangeTooltipService = { provide: 'ChartsRangeTooltip', useValue: RangeTooltip };
var PeriodSelectorService = { provide: 'ChartsPeriodSelector', useValue: PeriodSelector };
/**
 * NgModule definition for the RangeNavigator component with providers.
 */
var RangeNavigatorAllModule = /** @class */ (function () {
    function RangeNavigatorAllModule() {
    }
    return RangeNavigatorAllModule;
}());
RangeNavigatorAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, RangeNavigatorModule],
                exports: [
                    RangeNavigatorModule
                ],
                providers: [
                    RangeTooltipService,
                    PeriodSelectorService
                ]
            },] },
];
/**
 * @nocollapse
 */
RangeNavigatorAllModule.ctorParameters = function () { return []; };
var input$15 = ['color', 'endRange', 'opacity', 'startRange'];
var outputs$18 = [];
var RangeBandSettingDirective = /** @class */ (function (_super) {
    __extends(RangeBandSettingDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function RangeBandSettingDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$18);
        return _this;
    }
    return RangeBandSettingDirective;
}(ComplexBase));
RangeBandSettingDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-rangeBandSettings>e-rangeBandSetting',
                inputs: input$15,
                outputs: outputs$18,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
RangeBandSettingDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * RangeBandSetting Array Directive
 */
var RangeBandSettingsDirective = /** @class */ (function (_super) {
    __extends(RangeBandSettingsDirective, _super);
    function RangeBandSettingsDirective() {
        return _super.call(this, 'rangebandsettings') || this;
    }
    return RangeBandSettingsDirective;
}(ArrayBase));
RangeBandSettingsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-sparkline>e-rangeBandSettings',
                queries: {
                    children: new ContentChildren(RangeBandSettingDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
RangeBandSettingsDirective.ctorParameters = function () { return []; };
var __decorate$7 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$7 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var inputs$3 = ['axisSettings', 'border', 'containerArea', 'dataLabelSettings', 'dataSource', 'enablePersistence', 'enableRtl', 'endPointColor', 'fill', 'format', 'height', 'highPointColor', 'lineWidth', 'locale', 'lowPointColor', 'markerSettings', 'negativePointColor', 'opacity', 'padding', 'palette', 'query', 'rangeBandSettings', 'startPointColor', 'theme', 'tiePointColor', 'tooltipSettings', 'type', 'useGroupingSeparator', 'valueType', 'width', 'xName', 'yName'];
var outputs$19 = ['axisRendering', 'dataLabelRendering', 'load', 'loaded', 'markerRendering', 'pointRegionMouseClick', 'pointRegionMouseMove', 'pointRendering', 'resize', 'seriesRendering', 'sparklineMouseClick', 'sparklineMouseMove', 'tooltipInitialize'];
var twoWays$3 = [''];
/**
 * Sparkline Component
 * ```html
 * <ejs-sparkline></ejs-sparkline>
 * ```
 */
var SparklineComponent = /** @class */ (function (_super) {
    __extends(SparklineComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function SparklineComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.tags = ['rangeBandSettings'];
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        try {
            var mod = _this.injector.get('ChartsSparklineTooltip');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        _this.registerEvents(outputs$19);
        _this.addTwoWay.call(_this, twoWays$3);
        setValue('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @return {?}
     */
    SparklineComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    SparklineComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    SparklineComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    SparklineComponent.prototype.ngAfterContentChecked = function () {
    };
    return SparklineComponent;
}(Sparkline));
SparklineComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-sparkline',
                inputs: inputs$3,
                outputs: outputs$19,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {
                    childRangeBandSettings: new ContentChild(RangeBandSettingsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
SparklineComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
SparklineComponent = __decorate$7([
    ComponentMixins([ComponentBase]),
    __metadata$7("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], SparklineComponent);
/**
 * NgModule definition for the Sparkline component.
 */
var SparklineModule = /** @class */ (function () {
    function SparklineModule() {
    }
    return SparklineModule;
}());
SparklineModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    SparklineComponent,
                    RangeBandSettingDirective,
                    RangeBandSettingsDirective
                ],
                exports: [
                    SparklineComponent,
                    RangeBandSettingDirective,
                    RangeBandSettingsDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
SparklineModule.ctorParameters = function () { return []; };
var SparklineTooltipService = { provide: 'ChartsSparklineTooltip', useValue: SparklineTooltip };
/**
 * NgModule definition for the Sparkline component with providers.
 */
var SparklineAllModule = /** @class */ (function () {
    function SparklineAllModule() {
    }
    return SparklineAllModule;
}());
SparklineAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, SparklineModule],
                exports: [
                    SparklineModule
                ],
                providers: [
                    SparklineTooltipService
                ]
            },] },
];
/**
 * @nocollapse
 */
SparklineAllModule.ctorParameters = function () { return []; };
var input$16 = ['animationDuration', 'dataSource', 'enableAnimation', 'enableSmartLabels', 'fill', 'marker', 'name', 'opacity', 'points', 'reactance', 'resistance', 'tooltip', 'visibility', 'width'];
var outputs$20 = [];
var SmithchartSeriesDirective = /** @class */ (function (_super) {
    __extends(SmithchartSeriesDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function SmithchartSeriesDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$20);
        return _this;
    }
    return SmithchartSeriesDirective;
}(ComplexBase));
SmithchartSeriesDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-seriesCollection>e-series',
                inputs: input$16,
                outputs: outputs$20,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
SmithchartSeriesDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * SmithchartSeries Array Directive
 */
var SmithchartSeriesCollectionDirective = /** @class */ (function (_super) {
    __extends(SmithchartSeriesCollectionDirective, _super);
    function SmithchartSeriesCollectionDirective() {
        return _super.call(this, 'series') || this;
    }
    return SmithchartSeriesCollectionDirective;
}(ArrayBase));
SmithchartSeriesCollectionDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-smithchart>e-seriesCollection',
                queries: {
                    children: new ContentChildren(SmithchartSeriesDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
SmithchartSeriesCollectionDirective.ctorParameters = function () { return []; };
var __decorate$8 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$8 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var inputs$4 = ['background', 'border', 'elementSpacing', 'enablePersistence', 'enableRtl', 'font', 'height', 'horizontalAxis', 'legendSettings', 'locale', 'margin', 'radialAxis', 'radius', 'renderType', 'series', 'theme', 'title', 'width'];
var outputs$21 = ['animationComplete', 'axisLabelRender', 'beforePrint', 'legendRender', 'load', 'loaded', 'seriesRender', 'subtitleRender', 'textRender', 'titleRender'];
var twoWays$4 = [''];
/**
 * Smithchart Component
 * ```html
 * <ejs-smithchart></ejs-smithchart>
 * ```
 */
var SmithchartComponent = /** @class */ (function (_super) {
    __extends(SmithchartComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function SmithchartComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.tags = ['series'];
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        try {
            var mod = _this.injector.get('ChartsSmithchartLegend');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            var mod = _this.injector.get('ChartsTooltipRender');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        _this.registerEvents(outputs$21);
        _this.addTwoWay.call(_this, twoWays$4);
        setValue('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @return {?}
     */
    SmithchartComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    SmithchartComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    SmithchartComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    SmithchartComponent.prototype.ngAfterContentChecked = function () {
    };
    return SmithchartComponent;
}(Smithchart));
SmithchartComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-smithchart',
                inputs: inputs$4,
                outputs: outputs$21,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {
                    childSeries: new ContentChild(SmithchartSeriesCollectionDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
SmithchartComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
SmithchartComponent = __decorate$8([
    ComponentMixins([ComponentBase]),
    __metadata$8("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], SmithchartComponent);
/**
 * NgModule definition for the Smithchart component.
 */
var SmithchartModule = /** @class */ (function () {
    function SmithchartModule() {
    }
    return SmithchartModule;
}());
SmithchartModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    SmithchartComponent,
                    SmithchartSeriesDirective,
                    SmithchartSeriesCollectionDirective
                ],
                exports: [
                    SmithchartComponent,
                    SmithchartSeriesDirective,
                    SmithchartSeriesCollectionDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
SmithchartModule.ctorParameters = function () { return []; };
var SmithchartLegendService = { provide: 'ChartsSmithchartLegend', useValue: SmithchartLegend };
var TooltipRenderService = { provide: 'ChartsTooltipRender', useValue: TooltipRender };
/**
 * NgModule definition for the Smithchart component with providers.
 */
var SmithchartAllModule = /** @class */ (function () {
    function SmithchartAllModule() {
    }
    return SmithchartAllModule;
}());
SmithchartAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, SmithchartModule],
                exports: [
                    SmithchartModule
                ],
                providers: [
                    SmithchartLegendService,
                    TooltipRenderService
                ]
            },] },
];
/**
 * @nocollapse
 */
SmithchartAllModule.ctorParameters = function () { return []; };
var input$17 = ['animation', 'backwardForecast', 'dashArray', 'enableTooltip', 'fill', 'forwardForecast', 'intercept', 'legendShape', 'marker', 'name', 'period', 'polynomialOrder', 'type', 'visible', 'width'];
var outputs$22 = [];
/**
 * Series Directive
 * ```html
 * <e-stockchart-series-collection>
 * <e-stockchart-series>
 * <e-trendlines>
 * </e-trendline>
 * <e-trendline>
 * </e-trendlines>
 * </e-stockchart-series>
 * </e-stockchart-series-collection>
 * ```
 */
var StockChartTrendlineDirective = /** @class */ (function (_super) {
    __extends(StockChartTrendlineDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function StockChartTrendlineDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$22);
        return _this;
    }
    return StockChartTrendlineDirective;
}(ComplexBase));
StockChartTrendlineDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-stockchart-series>e-trendlines>e-trendline',
                inputs: input$17,
                outputs: outputs$22,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
StockChartTrendlineDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * StockChartTrendline Array Directive
 */
var StockChartTrendlinesDirective = /** @class */ (function (_super) {
    __extends(StockChartTrendlinesDirective, _super);
    function StockChartTrendlinesDirective() {
        return _super.call(this, 'trendlines') || this;
    }
    return StockChartTrendlinesDirective;
}(ArrayBase));
StockChartTrendlinesDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-stockchart-series>e-trendlines',
                queries: {
                    children: new ContentChildren(StockChartTrendlineDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
StockChartTrendlinesDirective.ctorParameters = function () { return []; };
var input$18 = ['animation', 'bearFillColor', 'border', 'bullFillColor', 'cardinalSplineTension', 'close', 'columnSpacing', 'columnWidth', 'cornerRadius', 'dashArray', 'dataSource', 'emptyPointSettings', 'enableSolidCandles', 'enableTooltip', 'fill', 'high', 'low', 'marker', 'name', 'opacity', 'open', 'pointColorMapping', 'query', 'selectionStyle', 'tooltipMappingName', 'trendlines', 'type', 'visible', 'volume', 'width', 'xAxisName', 'xName', 'yAxisName', 'yName'];
var outputs$23 = [];
/**
 * Series Directive
 * ```html
 * <e-stockchart-series-collection>
 * <e-stockchart-series></e-stockchart-series>
 * </e-stockchart-series-collection>
 * ```
 */
var StockChartSeriesDirective = /** @class */ (function (_super) {
    __extends(StockChartSeriesDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function StockChartSeriesDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        _this.tags = ['trendlines'];
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$23);
        return _this;
    }
    return StockChartSeriesDirective;
}(ComplexBase));
StockChartSeriesDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-stockchart-series-collection>e-stockchart-series',
                inputs: input$18,
                outputs: outputs$23,
                queries: {
                    childTrendlines: new ContentChild(StockChartTrendlinesDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
StockChartSeriesDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * StockChartSeries Array Directive
 */
var StockChartSeriesCollectionDirective = /** @class */ (function (_super) {
    __extends(StockChartSeriesCollectionDirective, _super);
    function StockChartSeriesCollectionDirective() {
        return _super.call(this, 'series') || this;
    }
    return StockChartSeriesCollectionDirective;
}(ArrayBase));
StockChartSeriesCollectionDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-stockchart>e-stockchart-series-collection',
                queries: {
                    children: new ContentChildren(StockChartSeriesDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
StockChartSeriesCollectionDirective.ctorParameters = function () { return []; };
var input$19 = ['border', 'color', 'dashArray', 'delay', 'duration', 'enable', 'end', 'horizontalAlignment', 'isRepeat', 'isSegmented', 'opacity', 'repeatEvery', 'repeatUntil', 'rotation', 'segmentAxisName', 'segmentEnd', 'segmentStart', 'size', 'sizeType', 'start', 'startFromAxis', 'text', 'textStyle', 'verticalAlignment', 'visible', 'zIndex'];
var outputs$24 = [];
/**
 * StripLine Directive
 * ```html
 * <e-stockchart-axis>
 * <e-striplines>
 * <e-stripline></e-stripline>
 * </e-striplines>
 * </e-stock-chart-axis>
 * ```
 */
var StockChartStripLineDirective = /** @class */ (function (_super) {
    __extends(StockChartStripLineDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function StockChartStripLineDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$24);
        return _this;
    }
    return StockChartStripLineDirective;
}(ComplexBase));
StockChartStripLineDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-stockchart-axis>e-stockchart-striplines>e-stockchart-stripline',
                inputs: input$19,
                outputs: outputs$24,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
StockChartStripLineDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * StockChartStripLine Array Directive
 */
var StockChartStripLinesDirective = /** @class */ (function (_super) {
    __extends(StockChartStripLinesDirective, _super);
    function StockChartStripLinesDirective() {
        return _super.call(this, 'striplines') || this;
    }
    return StockChartStripLinesDirective;
}(ArrayBase));
StockChartStripLinesDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-stockchart-axis>e-stockchart-striplines',
                queries: {
                    children: new ContentChildren(StockChartStripLineDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
StockChartStripLinesDirective.ctorParameters = function () { return []; };
var input$20 = ['coefficient', 'crossesAt', 'crossesInAxis', 'crosshairTooltip', 'description', 'desiredIntervals', 'edgeLabelPlacement', 'enableAutoIntervalOnZooming', 'enableTrim', 'interval', 'intervalType', 'isInversed', 'labelFormat', 'labelIntersectAction', 'labelPlacement', 'labelPosition', 'labelRotation', 'labelStyle', 'lineStyle', 'logBase', 'majorGridLines', 'majorTickLines', 'maximum', 'maximumLabelWidth', 'maximumLabels', 'minimum', 'minorGridLines', 'minorTickLines', 'minorTicksPerInterval', 'name', 'opposedPosition', 'placeNextToAxisLine', 'plotOffset', 'rangePadding', 'rowIndex', 'skeleton', 'skeletonType', 'span', 'startAngle', 'stripLines', 'tabIndex', 'tickPosition', 'title', 'titleStyle', 'valueType', 'visible', 'zoomFactor', 'zoomPosition'];
var outputs$25 = [];
/**
 * Axis Directive
 * ```html
 * <e-stockchart-axes><e-stockchart-axis></e-stockchart-axis></e-stockchart-axes>
 * ```
 */
var StockChartAxisDirective = /** @class */ (function (_super) {
    __extends(StockChartAxisDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function StockChartAxisDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        _this.tags = ['stripLines'];
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$25);
        return _this;
    }
    return StockChartAxisDirective;
}(ComplexBase));
StockChartAxisDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-stockchart-axes>e-stockchart-axis',
                inputs: input$20,
                outputs: outputs$25,
                queries: {
                    childStripLines: new ContentChild(StockChartStripLinesDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
StockChartAxisDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * StockChartAxis Array Directive
 */
var StockChartAxesDirective = /** @class */ (function (_super) {
    __extends(StockChartAxesDirective, _super);
    function StockChartAxesDirective() {
        return _super.call(this, 'axes') || this;
    }
    return StockChartAxesDirective;
}(ArrayBase));
StockChartAxesDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-stockchart>e-stockchart-axes',
                queries: {
                    children: new ContentChildren(StockChartAxisDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
StockChartAxesDirective.ctorParameters = function () { return []; };
var input$21 = ['border', 'height'];
var outputs$26 = [];
/**
 * Row Directive
 * ```html
 * <e-rows><e-row></e-row><e-rows>
 * ```
 */
var StockChartRowDirective = /** @class */ (function (_super) {
    __extends(StockChartRowDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function StockChartRowDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$26);
        return _this;
    }
    return StockChartRowDirective;
}(ComplexBase));
StockChartRowDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-stockchart-rows>e-striplines>e-stockchart-row',
                inputs: input$21,
                outputs: outputs$26,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
StockChartRowDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * StockChartRow Array Directive
 */
var StockChartRowsDirective = /** @class */ (function (_super) {
    __extends(StockChartRowsDirective, _super);
    function StockChartRowsDirective() {
        return _super.call(this, 'rows') || this;
    }
    return StockChartRowsDirective;
}(ArrayBase));
StockChartRowsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-stockchart>e-stockchart-rows',
                queries: {
                    children: new ContentChildren(StockChartRowDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
StockChartRowsDirective.ctorParameters = function () { return []; };
var __decorate$9 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$9 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var input$22 = ['content', 'coordinateUnits', 'description', 'horizontalAlignment', 'region', 'verticalAlignment', 'x', 'xAxisName', 'y', 'yAxisName'];
var outputs$27 = [];
/**
 * Annotation Directive
 * ```html
 * <e-stockchart-annotations><e-stockchart-annotation></e-stockchart-annotation><e-stockchart-annotations>
 * ```
 */
var StockChartAnnotationDirective = /** @class */ (function (_super) {
    __extends(StockChartAnnotationDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function StockChartAnnotationDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$27);
        return _this;
    }
    return StockChartAnnotationDirective;
}(ComplexBase));
StockChartAnnotationDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-stockchart-annotations>e-stockchart-annotation',
                inputs: input$22,
                outputs: outputs$27,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
StockChartAnnotationDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
StockChartAnnotationDirective.propDecorators = {
    'content': [{ type: ContentChild, args: ['content',] },],
};
__decorate$9([
    Template(),
    __metadata$9("design:type", Object)
], StockChartAnnotationDirective.prototype, "content", void 0);
/**
 * StockChartAnnotation Array Directive
 */
var StockChartAnnotationsDirective = /** @class */ (function (_super) {
    __extends(StockChartAnnotationsDirective, _super);
    function StockChartAnnotationsDirective() {
        return _super.call(this, 'annotations') || this;
    }
    return StockChartAnnotationsDirective;
}(ArrayBase));
StockChartAnnotationsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-stockchart>e-stockchart-annotations',
                queries: {
                    children: new ContentChildren(StockChartAnnotationDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
StockChartAnnotationsDirective.ctorParameters = function () { return []; };
var input$23 = ['point', 'series'];
var outputs$28 = [];
/**
 * Selected Data Directive
 * ```html
 * <e-selecteddataindexes><e-selecteddataindex></e-selecteddataindex><e-selecteddataindexes>
 * ```
 */
var StockChartSelectedDataIndexDirective = /** @class */ (function (_super) {
    __extends(StockChartSelectedDataIndexDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function StockChartSelectedDataIndexDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$28);
        return _this;
    }
    return StockChartSelectedDataIndexDirective;
}(ComplexBase));
StockChartSelectedDataIndexDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-stockchart-selectedDataIndexes>e-stockchart-selectedDataIndex',
                inputs: input$23,
                outputs: outputs$28,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
StockChartSelectedDataIndexDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * StockChartSelectedDataIndex Array Directive
 */
var StockChartSelectedDataIndexesDirective = /** @class */ (function (_super) {
    __extends(StockChartSelectedDataIndexesDirective, _super);
    function StockChartSelectedDataIndexesDirective() {
        return _super.call(this, 'selecteddataindexes') || this;
    }
    return StockChartSelectedDataIndexesDirective;
}(ArrayBase));
StockChartSelectedDataIndexesDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-stockchart>e-stockchart-selectedDataIndexes',
                queries: {
                    children: new ContentChildren(StockChartSelectedDataIndexDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
StockChartSelectedDataIndexesDirective.ctorParameters = function () { return []; };
var input$24 = ['interval', 'intervalType', 'selected', 'text'];
var outputs$29 = [];
/**
 * Indicator Directive
 * ```html
 * <e-stockchart-periods>
 * <e-stockchart-period></e-stockchart-period>
 * </e-stockchart-periods>
 * ```
 */
var StockChartPeriodDirective = /** @class */ (function (_super) {
    __extends(StockChartPeriodDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function StockChartPeriodDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$29);
        return _this;
    }
    return StockChartPeriodDirective;
}(ComplexBase));
StockChartPeriodDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-stockchart-indicators>e-stockchart-period',
                inputs: input$24,
                outputs: outputs$29,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
StockChartPeriodDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * StockChartPeriod Array Directive
 */
var StockChartPeriodsDirective = /** @class */ (function (_super) {
    __extends(StockChartPeriodsDirective, _super);
    function StockChartPeriodsDirective() {
        return _super.call(this, 'periods') || this;
    }
    return StockChartPeriodsDirective;
}(ArrayBase));
StockChartPeriodsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-stockchart>e-stockchart-periods',
                queries: {
                    children: new ContentChildren(StockChartPeriodDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
StockChartPeriodsDirective.ctorParameters = function () { return []; };
var input$25 = ['background', 'border', 'date', 'description', 'placeAt', 'showOnSeries', 'text', 'textStyle', 'type'];
var outputs$30 = [];
/**
 * StockEvents
 * ```html
 * <e-stockchart-stockevents>
 * <e-stockchart-stockevent></e-stockchart-stockevent>
 * </e-stockchart-stockevents>
 * ```
 */
var StockEventDirective = /** @class */ (function (_super) {
    __extends(StockEventDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function StockEventDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$30);
        return _this;
    }
    return StockEventDirective;
}(ComplexBase));
StockEventDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-stockchart-indicators>e-stockchart-stockevent',
                inputs: input$25,
                outputs: outputs$30,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
StockEventDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * StockEvent Array Directive
 */
var StockEventsDirective = /** @class */ (function (_super) {
    __extends(StockEventsDirective, _super);
    function StockEventsDirective() {
        return _super.call(this, 'stockevents') || this;
    }
    return StockEventsDirective;
}(ArrayBase));
StockEventsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-stockchart>e-stockchart-stockevents',
                queries: {
                    children: new ContentChildren(StockEventDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
StockEventsDirective.ctorParameters = function () { return []; };
var input$26 = ['animation', 'bandColor', 'close', 'dPeriod', 'dashArray', 'dataSource', 'fastPeriod', 'field', 'fill', 'high', 'kPeriod', 'low', 'lowerLine', 'macdLine', 'macdNegativeColor', 'macdPositiveColor', 'macdType', 'open', 'overBought', 'overSold', 'period', 'periodLine', 'pointColorMapping', 'query', 'seriesName', 'showZones', 'slowPeriod', 'standardDeviation', 'type', 'upperLine', 'volume', 'width', 'xAxisName', 'xName', 'yAxisName'];
var outputs$31 = [];
/**
 * Indicator Directive
 * ```html
 * <e-stockchart-indicators>
 * <e-stockchart-indicator></e-stockchart-indicator>
 * </e-stockchart-indicators>
 * ```
 */
var StockChartIndicatorDirective = /** @class */ (function (_super) {
    __extends(StockChartIndicatorDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function StockChartIndicatorDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$31);
        return _this;
    }
    return StockChartIndicatorDirective;
}(ComplexBase));
StockChartIndicatorDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-stockchart-indicators>e-stockchart-indicator',
                inputs: input$26,
                outputs: outputs$31,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
StockChartIndicatorDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * StockChartIndicator Array Directive
 */
var StockChartIndicatorsDirective = /** @class */ (function (_super) {
    __extends(StockChartIndicatorsDirective, _super);
    function StockChartIndicatorsDirective() {
        return _super.call(this, 'indicators') || this;
    }
    return StockChartIndicatorsDirective;
}(ArrayBase));
StockChartIndicatorsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-stockchart>e-stockchart-indicators',
                queries: {
                    children: new ContentChildren(StockChartIndicatorDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
StockChartIndicatorsDirective.ctorParameters = function () { return []; };
var __decorate$10 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$10 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var inputs$5 = ['annotations', 'axes', 'background', 'border', 'chartArea', 'crosshair', 'dataSource', 'enableCustomRange', 'enablePeriodSelector', 'enablePersistence', 'enableRtl', 'enableSelector', 'exportType', 'height', 'indicatorType', 'indicators', 'isMultiSelect', 'isSelect', 'isTransposed', 'locale', 'margin', 'periods', 'primaryXAxis', 'primaryYAxis', 'rows', 'selectedDataIndexes', 'selectionMode', 'series', 'seriesType', 'stockEvents', 'theme', 'title', 'titleStyle', 'tooltip', 'trendlineType', 'width', 'zoomSettings'];
var outputs$32 = ['axisLabelRender', 'load', 'loaded', 'pointClick', 'pointMove', 'rangeChange', 'selectorRender', 'seriesRender', 'stockChartMouseClick', 'stockChartMouseDown', 'stockChartMouseLeave', 'stockChartMouseMove', 'stockChartMouseUp', 'stockEventRender', 'tooltipRender', 'dataSourceChange'];
var twoWays$5 = ['dataSource'];
/**
 * Stock Chart Component
 * ```html
 * <ejs-stockchart></ejs-stockchart>
 * ```
 */
var StockChartComponent = /** @class */ (function (_super) {
    __extends(StockChartComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function StockChartComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.tags = ['series', 'axes', 'rows', 'annotations', 'selectedDataIndexes', 'periods', 'stockEvents', 'indicators'];
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        try {
            var mod = _this.injector.get('ChartsLineSeries');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            var mod = _this.injector.get('ChartsColumnSeries');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            var mod = _this.injector.get('ChartsSplineSeries');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            var mod = _this.injector.get('ChartsSplineAreaSeries');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            var mod = _this.injector.get('ChartsStripLine');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            var mod = _this.injector.get('ChartsAreaSeries');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        try {
            var mod = _this.injector.get('ChartsTooltip');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_g) { }
        try {
            var mod = _this.injector.get('ChartsCrosshair');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_h) { }
        try {
            var mod = _this.injector.get('ChartsDateTime');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_j) { }
        try {
            var mod = _this.injector.get('ChartsZoom');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_k) { }
        try {
            var mod = _this.injector.get('ChartsDataLabel');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_l) { }
        try {
            var mod = _this.injector.get('ChartsSelection');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_m) { }
        try {
            var mod = _this.injector.get('ChartsChartAnnotation');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_o) { }
        try {
            var mod = _this.injector.get('ChartsHiloSeries');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_p) { }
        try {
            var mod = _this.injector.get('ChartsHiloOpenCloseSeries');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_q) { }
        try {
            var mod = _this.injector.get('ChartsCandleSeries');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_r) { }
        try {
            var mod = _this.injector.get('ChartsSmaIndicator');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_s) { }
        try {
            var mod = _this.injector.get('ChartsTmaIndicator');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_t) { }
        try {
            var mod = _this.injector.get('ChartsEmaIndicator');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_u) { }
        try {
            var mod = _this.injector.get('ChartsAccumulationDistributionIndicator');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_v) { }
        try {
            var mod = _this.injector.get('ChartsMacdIndicator');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_w) { }
        try {
            var mod = _this.injector.get('ChartsAtrIndicator');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_x) { }
        try {
            var mod = _this.injector.get('ChartsRsiIndicator');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_y) { }
        try {
            var mod = _this.injector.get('ChartsMomentumIndicator');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_z) { }
        try {
            var mod = _this.injector.get('ChartsStochasticIndicator');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_0) { }
        try {
            var mod = _this.injector.get('ChartsBollingerBands');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_1) { }
        try {
            var mod = _this.injector.get('ChartsTrendlines');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_2) { }
        try {
            var mod = _this.injector.get('ChartsRangeTooltip');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_3) { }
        try {
            var mod = _this.injector.get('ChartsExport');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_4) { }
        _this.registerEvents(outputs$32);
        _this.addTwoWay.call(_this, twoWays$5);
        setValue('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @return {?}
     */
    StockChartComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    StockChartComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    StockChartComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    StockChartComponent.prototype.ngAfterContentChecked = function () {
    };
    return StockChartComponent;
}(StockChart));
StockChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-stockchart',
                inputs: inputs$5,
                outputs: outputs$32,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {
                    childSeries: new ContentChild(StockChartSeriesCollectionDirective),
                    childAxes: new ContentChild(StockChartAxesDirective),
                    childRows: new ContentChild(StockChartRowsDirective),
                    childAnnotations: new ContentChild(StockChartAnnotationsDirective),
                    childSelectedDataIndexes: new ContentChild(StockChartSelectedDataIndexesDirective),
                    childPeriods: new ContentChild(StockChartPeriodsDirective),
                    childStockEvents: new ContentChild(StockEventsDirective),
                    childIndicators: new ContentChild(StockChartIndicatorsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
StockChartComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
StockChartComponent.propDecorators = {
    'tooltip_template': [{ type: ContentChild, args: ['tooltipTemplate',] },],
};
__decorate$10([
    Template(),
    __metadata$10("design:type", Object)
], StockChartComponent.prototype, "tooltip_template", void 0);
StockChartComponent = __decorate$10([
    ComponentMixins([ComponentBase]),
    __metadata$10("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], StockChartComponent);
/**
 * NgModule definition for the StockChart component.
 */
var StockChartModule = /** @class */ (function () {
    function StockChartModule() {
    }
    return StockChartModule;
}());
StockChartModule.decorators = [
    { type: NgModule, args: [{
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
                    StockEventDirective,
                    StockEventsDirective,
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
                    StockEventDirective,
                    StockEventsDirective,
                    StockChartIndicatorDirective,
                    StockChartIndicatorsDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
StockChartModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the StockChart component with providers.
 */
var StockChartAllModule = /** @class */ (function () {
    function StockChartAllModule() {
    }
    return StockChartAllModule;
}());
StockChartAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, StockChartModule],
                exports: [
                    StockChartModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
StockChartAllModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { TrendlineDirective, TrendlinesDirective, SegmentDirective, SegmentsDirective, SeriesDirective, SeriesCollectionDirective, StripLineDirective, StripLinesDirective, CategoryDirective, CategoriesDirective, MultiLevelLabelDirective, MultiLevelLabelsDirective, AxisDirective, AxesDirective, RowDirective, RowsDirective, ColumnDirective, ColumnsDirective, AnnotationDirective, AnnotationsDirective, SelectedDataIndexDirective, SelectedDataIndexesDirective, IndicatorDirective, IndicatorsDirective, ChartComponent, ChartModule, ChartAllModule, LineSeriesService, ScatterSeriesService, ColumnSeriesService, SplineSeriesService, SplineAreaSeriesService, StripLineService, AreaSeriesService, ScrollBarService, StepLineSeriesService, StepAreaSeriesService, StackingColumnSeriesService, StackingLineSeriesService, StackingAreaSeriesService, BarSeriesService, StackingBarSeriesService, RangeColumnSeriesService, BubbleSeriesService, TooltipService, CrosshairService, CategoryService, DateTimeService, LogarithmicService, LegendService, ZoomService, DataLabelService, SelectionService, ChartAnnotationService, HiloSeriesService, HiloOpenCloseSeriesService, WaterfallSeriesService, RangeAreaSeriesService, CandleSeriesService, PolarSeriesService, RadarSeriesService, SmaIndicatorService, TmaIndicatorService, EmaIndicatorService, AccumulationDistributionIndicatorService, MacdIndicatorService, AtrIndicatorService, RsiIndicatorService, MomentumIndicatorService, StochasticIndicatorService, BollingerBandsService, BoxAndWhiskerSeriesService, HistogramSeriesService, ErrorBarService, TrendlinesService, DateTimeCategoryService, MultiColoredLineSeriesService, MultiColoredAreaSeriesService, MultiLevelLabelService, ParetoSeriesService, ExportService, DataEditingService, AccumulationSeriesDirective, AccumulationSeriesCollectionDirective, AccumulationAnnotationDirective, AccumulationAnnotationsDirective, AccumulationChartComponent, AccumulationChartModule, AccumulationChartAllModule, PieSeriesService, FunnelSeriesService, PyramidSeriesService, AccumulationTooltipService, AccumulationLegendService, AccumulationSelectionService, AccumulationDataLabelService, AccumulationAnnotationService, RangenavigatorSeriesDirective, RangenavigatorSeriesCollectionDirective, RangeNavigatorComponent, RangeNavigatorModule, RangeNavigatorAllModule, RangeTooltipService, PeriodSelectorService, RangeBandSettingDirective, RangeBandSettingsDirective, SparklineComponent, SparklineModule, SparklineAllModule, SparklineTooltipService, SmithchartSeriesDirective, SmithchartSeriesCollectionDirective, SmithchartComponent, SmithchartModule, SmithchartAllModule, SmithchartLegendService, TooltipRenderService, StockChartTrendlineDirective, StockChartTrendlinesDirective, StockChartSeriesDirective, StockChartSeriesCollectionDirective, StockChartStripLineDirective, StockChartStripLinesDirective, StockChartAxisDirective, StockChartAxesDirective, StockChartRowDirective, StockChartRowsDirective, StockChartAnnotationDirective, StockChartAnnotationsDirective, StockChartSelectedDataIndexDirective, StockChartSelectedDataIndexesDirective, StockChartPeriodDirective, StockChartPeriodsDirective, StockEventDirective, StockEventsDirective, StockChartIndicatorDirective, StockChartIndicatorsDirective, StockChartComponent, StockChartModule, StockChartAllModule, inputs$1 as ɵc, outputs$15 as ɵd, inputs as ɵa, outputs$12 as ɵb, inputs$2 as ɵe, outputs$17 as ɵf, inputs$4 as ɵi, outputs$21 as ɵj, inputs$3 as ɵg, outputs$19 as ɵh, inputs$5 as ɵk, outputs$32 as ɵl };
export { CrosshairSettings, ZoomSettings, Chart, Row, Column, MajorGridLines, MinorGridLines, AxisLine, MajorTickLines, MinorTickLines, CrosshairTooltip, Axis, VisibleLabels, DateTime, Category, Logarithmic, DateTimeCategory, NiceInterval, StripLine, Connector, Font, Border, Offset, ChartArea, Margin, Animation, Indexes, CornerRadius, Index, EmptyPointSettings, DragSettings, TooltipSettings, Periods, PeriodSelectorSettings, LineSeries, ColumnSeries, AreaSeries, BarSeries, PolarSeries, RadarSeries, StackingBarSeries, CandleSeries, StackingColumnSeries, StepLineSeries, StepAreaSeries, StackingAreaSeries, StackingLineSeries, ScatterSeries, RangeColumnSeries, WaterfallSeries, HiloSeries, HiloOpenCloseSeries, RangeAreaSeries, BubbleSeries, SplineSeries, HistogramSeries, SplineAreaSeries, TechnicalIndicator, SmaIndicator, EmaIndicator, TmaIndicator, AccumulationDistributionIndicator, AtrIndicator, MomentumIndicator, RsiIndicator, StochasticIndicator, BollingerBands, MacdIndicator, Trendlines, sort, isBreakLabel, rotateTextSize, removeElement, logBase, showTooltip, inside, withIn, logWithIn, withInRange, sum, subArraySum, subtractThickness, subtractRect, degreeToLocation, getAngle, subArray, valueToCoefficient, TransformToVisible, indexFinder, CoefficientToVector, valueToPolarCoefficient, Mean, PolarArc, createTooltip, createZoomingLabels, withInBounds, getValueXByPoint, getValueYByPoint, findClipRect, firstToLowerCase, getTransform, getMinPointsDelta, getAnimationFunction, linear, markerAnimate, animateRectElement, pathAnimation, appendClipElement, triggerLabelRender, setRange, getActualDesiredIntervalsCount, templateAnimate, drawSymbol, calculateShapes, getRectLocation, minMax, getElement, getTemplateFunction, createTemplate, getFontStyle, measureElementRect, findlElement, getPoint, appendElement, appendChildElement, getDraggedRectLocation, checkBounds, getLabelText, stopTimer, isCollide, isOverlap, containsRect, calculateRect, convertToHexCode, componentToHex, convertHexToColor, colorNameToHex, getSaturationColor, getMedian, calculateLegendShapes, textTrim, lineBreakLabelTrim, stringToNumber, redrawElement, animateRedrawElement, textElement, calculateSize, createSvg, getTitle, titlePositionX, textWrap, blazorTemplatesReset, CustomizeOption, StackValues, RectOption, ImageOption, CircleOption, PolygonOption, ChartLocation, Thickness, ColorValue, PointData, AccPointData, ControlPoints, Crosshair, Tooltip, Zoom, Selection, DataEditing, DataLabel, ErrorBar, DataLabelSettings, MarkerSettings, Points, Trendline, ErrorBarCapSettings, ChartSegment, ErrorBarSettings, SeriesBase, Series, Legend, ChartAnnotation, ChartAnnotationSettings, LabelBorder, MultiLevelCategories, StripLineSettings, MultiLevelLabels, ScrollbarSettingsRange, ScrollbarSettings, BoxAndWhiskerSeries, MultiColoredAreaSeries, MultiColoredLineSeries, MultiColoredSeries, MultiLevelLabel, ScrollBar, ParetoSeries, Export, AccumulationChart, AccumulationAnnotationSettings, AccumulationDataLabelSettings, PieCenter, AccPoints, AccumulationSeries, getSeriesFromIndex, pointByIndex, PieSeries, FunnelSeries, PyramidSeries, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip, AccumulationSelection, AccumulationAnnotation, StockChart, StockChartFont, StockChartBorder, StockChartArea, StockMargin, StockChartStripLineSettings, StockEmptyPointSettings, StockChartConnector, StockSeries, StockChartIndicator, StockChartAxis, StockChartRow, StockChartTrendline, StockChartAnnotationSettings, StockChartIndexes, StockEventsSettings, loaded, legendClick, load, animationComplete, legendRender, textRender, pointRender, seriesRender, axisLabelRender, axisRangeCalculated, axisMultiLabelRender, tooltipRender, chartMouseMove, chartMouseClick, pointClick, pointMove, chartMouseLeave, chartMouseDown, chartMouseUp, zoomComplete, dragComplete, selectionComplete, resized, beforePrint, annotationRender, scrollStart, scrollEnd, scrollChanged, stockEventRender, multiLevelLabelClick, dragStart, drag, dragEnd, Theme, getSeriesColor, getThemeColor, getScrollbarThemeColor, PeriodSelector, RangeNavigator, rangeValueToCoefficient, getXLocation, getRangeValueXByPoint, getExactData, getNearestValue, DataPoint, RangeNavigatorTheme, getRangeThemeColor, RangeNavigatorAxis, RangeSeries, RangeSlider, RangeNavigatorSeries, ThumbSettings, StyleSettings, RangeTooltipSettings, Double, RangeTooltip, Smithchart, SmithchartMajorGridLines, SmithchartMinorGridLines, SmithchartAxisLine, SmithchartAxis, LegendTitle, LegendLocation, LegendItemStyleBorder, LegendItemStyle, LegendBorder, SmithchartLegendSettings, SeriesTooltipBorder, SeriesTooltip, SeriesMarkerBorder, SeriesMarkerDataLabelBorder, SeriesMarkerDataLabelConnectorLine, SeriesMarkerDataLabel, SeriesMarker, SmithchartSeries, TooltipRender, Subtitle, Title, SmithchartFont, SmithchartMargin, SmithchartBorder, SmithchartRect, LabelCollection, LegendSeries, LabelRegion, HorizontalLabelCollection, RadialLabelCollections, LineSegment, PointRegion, Point, ClosestPoint, MarkerOptions, SmithchartLabelPosition, Direction, DataLabelTextOptions, LabelOption, SmithchartSize, GridArcPoints, smithchartBeforePrint, SmithchartLegend, Sparkline, SparklineTooltip, SparklineBorder, SparklineFont, TrackLineSettings, SparklineTooltipSettings, ContainerArea, LineSettings, RangeBandSettings, AxisSettings, Padding, SparklineMarkerSettings, LabelOffset, SparklineDataLabelSettings } from '@syncfusion/ej2-charts';
//# sourceMappingURL=ej2-angular-charts.es5.js.map
