(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@syncfusion/ej2-angular-base'), require('@syncfusion/ej2-charts'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@syncfusion/ej2-angular-base', '@syncfusion/ej2-charts', '@angular/common'], factory) :
	(factory((global['ej2-angular-charts'] = {}),global.ng.core,global.ej2.angular.base,global.ej2.charts,global.ng.common));
}(this, (function (exports,core,ej2AngularBase,ej2Charts,common) { 'use strict';

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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs);
        return _this;
    }
    return TrendlineDirective;
}(ej2AngularBase.ComplexBase));
TrendlineDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
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
}(ej2AngularBase.ArrayBase));
TrendlinesDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-series>e-trendlines',
                queries: {
                    children: new core.ContentChildren(TrendlineDirective)
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$1);
        return _this;
    }
    return SegmentDirective;
}(ej2AngularBase.ComplexBase));
SegmentDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
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
}(ej2AngularBase.ArrayBase));
SegmentsDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-series>e-segments',
                queries: {
                    children: new core.ContentChildren(SegmentDirective)
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$2);
        return _this;
    }
    return SeriesDirective;
}(ej2AngularBase.ComplexBase));
SeriesDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-series-collection>e-series',
                inputs: input$2,
                outputs: outputs$2,
                queries: {
                    childTrendlines: new core.ContentChild(TrendlinesDirective),
                    childSegments: new core.ContentChild(SegmentsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
SeriesDirective.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
]; };
SeriesDirective.propDecorators = {
    'dataLabel_template': [{ type: core.ContentChild, args: ['dataLabelTemplate',] },],
};
__decorate([
    ej2AngularBase.Template(),
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
}(ej2AngularBase.ArrayBase));
SeriesCollectionDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ej-chart>e-series-collection',
                queries: {
                    children: new core.ContentChildren(SeriesDirective)
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$3);
        return _this;
    }
    return StripLineDirective;
}(ej2AngularBase.ComplexBase));
StripLineDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
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
}(ej2AngularBase.ArrayBase));
StripLinesDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-axis>e-striplines',
                queries: {
                    children: new core.ContentChildren(StripLineDirective)
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$4);
        return _this;
    }
    return CategoryDirective;
}(ej2AngularBase.ComplexBase));
CategoryDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
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
}(ej2AngularBase.ArrayBase));
CategoriesDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-multilevellabel>e-categories',
                queries: {
                    children: new core.ContentChildren(CategoryDirective)
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$5);
        return _this;
    }
    return MultiLevelLabelDirective;
}(ej2AngularBase.ComplexBase));
MultiLevelLabelDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-axis>e-multilevellabels>e-multilevellabel',
                inputs: input$5,
                outputs: outputs$5,
                queries: {
                    childCategories: new core.ContentChild(CategoriesDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
MultiLevelLabelDirective.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
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
}(ej2AngularBase.ArrayBase));
MultiLevelLabelsDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-axis>e-multilevellabels',
                queries: {
                    children: new core.ContentChildren(MultiLevelLabelDirective)
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$6);
        return _this;
    }
    return AxisDirective;
}(ej2AngularBase.ComplexBase));
AxisDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-axes>e-axis',
                inputs: input$6,
                outputs: outputs$6,
                queries: {
                    childStripLines: new core.ContentChild(StripLinesDirective),
                    childMultiLevelLabels: new core.ContentChild(MultiLevelLabelsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
AxisDirective.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
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
}(ej2AngularBase.ArrayBase));
AxesDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-chart>e-axes',
                queries: {
                    children: new core.ContentChildren(AxisDirective)
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$7);
        return _this;
    }
    return RowDirective;
}(ej2AngularBase.ComplexBase));
RowDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
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
}(ej2AngularBase.ArrayBase));
RowsDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-chart>e-rows',
                queries: {
                    children: new core.ContentChildren(RowDirective)
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$8);
        return _this;
    }
    return ColumnDirective;
}(ej2AngularBase.ComplexBase));
ColumnDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
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
}(ej2AngularBase.ArrayBase));
ColumnsDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-chart>e-columns',
                queries: {
                    children: new core.ContentChildren(ColumnDirective)
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$9);
        return _this;
    }
    return AnnotationDirective;
}(ej2AngularBase.ComplexBase));
AnnotationDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
]; };
AnnotationDirective.propDecorators = {
    'content': [{ type: core.ContentChild, args: ['content',] },],
};
__decorate$1([
    ej2AngularBase.Template(),
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
}(ej2AngularBase.ArrayBase));
AnnotationsDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-chart>e-annotations',
                queries: {
                    children: new core.ContentChildren(AnnotationDirective)
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$10);
        return _this;
    }
    return SelectedDataIndexDirective;
}(ej2AngularBase.ComplexBase));
SelectedDataIndexDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
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
}(ej2AngularBase.ArrayBase));
SelectedDataIndexesDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-chart>e-selecteddataindexes',
                queries: {
                    children: new core.ContentChildren(SelectedDataIndexDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
SelectedDataIndexesDirective.ctorParameters = function () { return []; };
var input$11 = ['animation', 'bandColor', 'close', 'dPeriod', 'dashArray', 'dataSource', 'enableComplexProperty', 'fastPeriod', 'field', 'fill', 'high', 'kPeriod', 'low', 'lowerLine', 'macdLine', 'macdNegativeColor', 'macdPositiveColor', 'macdType', 'open', 'overBought', 'overSold', 'period', 'periodLine', 'pointColorMapping', 'query', 'segmentAxis', 'segments', 'seriesName', 'showZones', 'slowPeriod', 'standardDeviation', 'type', 'upperLine', 'volume', 'width', 'xAxisName', 'xName', 'yAxisName'];
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$11);
        return _this;
    }
    return IndicatorDirective;
}(ej2AngularBase.ComplexBase));
IndicatorDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
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
}(ej2AngularBase.ArrayBase));
IndicatorsDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ej-chart>e-indicators',
                queries: {
                    children: new core.ContentChildren(IndicatorDirective)
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
var inputs = ['allowMultiSelection', 'annotations', 'axes', 'background', 'border', 'chartArea', 'columns', 'crosshair', 'currencyCode', 'dataSource', 'description', 'enableAnimation', 'enableCanvas', 'enableExport', 'enablePersistence', 'enableRtl', 'enableSideBySidePlacement', 'height', 'indicators', 'isMultiSelect', 'isTransposed', 'legendSettings', 'locale', 'margin', 'palettes', 'primaryXAxis', 'primaryYAxis', 'rows', 'selectedDataIndexes', 'selectionMode', 'series', 'subTitle', 'subTitleStyle', 'tabIndex', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width', 'zoomSettings'];
var outputs$12 = ['animationComplete', 'annotationRender', 'axisLabelRender', 'axisMultiLabelRender', 'axisRangeCalculated', 'beforePrint', 'chartMouseClick', 'chartMouseDown', 'chartMouseLeave', 'chartMouseMove', 'chartMouseUp', 'drag', 'dragComplete', 'dragEnd', 'dragStart', 'legendClick', 'legendRender', 'load', 'loaded', 'multiLevelLabelClick', 'pointClick', 'pointMove', 'pointRender', 'resized', 'scrollChanged', 'scrollEnd', 'scrollStart', 'selectionComplete', 'seriesRender', 'textRender', 'tooltipRender', 'zoomComplete', 'dataSourceChange'];
var twoWays = ['dataSource'];
/**
 * Chart Component
 * ```html
 * <ejschart></ejschart>
 * ```
 */
exports.ChartComponent = /** @class */ (function (_super) {
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
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
}(ej2Charts.Chart));
exports.ChartComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-chart',
                inputs: inputs,
                outputs: outputs$12,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {
                    childSeries: new core.ContentChild(SeriesCollectionDirective),
                    childAxes: new core.ContentChild(AxesDirective),
                    childRows: new core.ContentChild(RowsDirective),
                    childColumns: new core.ContentChild(ColumnsDirective),
                    childAnnotations: new core.ContentChild(AnnotationsDirective),
                    childSelectedDataIndexes: new core.ContentChild(SelectedDataIndexesDirective),
                    childIndicators: new core.ContentChild(IndicatorsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
exports.ChartComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.ChartComponent.propDecorators = {
    'tooltip_template': [{ type: core.ContentChild, args: ['tooltipTemplate',] },],
};
__decorate$2([
    ej2AngularBase.Template(),
    __metadata$2("design:type", Object)
], exports.ChartComponent.prototype, "tooltip_template", void 0);
exports.ChartComponent = __decorate$2([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata$2("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.ChartComponent);
/**
 * NgModule definition for the Chart component.
 */
var ChartModule = /** @class */ (function () {
    function ChartModule() {
    }
    return ChartModule;
}());
ChartModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.ChartComponent,
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
                    exports.ChartComponent,
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
var LineSeriesService = { provide: 'ChartsLineSeries', useValue: ej2Charts.LineSeries };
var ScatterSeriesService = { provide: 'ChartsScatterSeries', useValue: ej2Charts.ScatterSeries };
var ColumnSeriesService = { provide: 'ChartsColumnSeries', useValue: ej2Charts.ColumnSeries };
var SplineSeriesService = { provide: 'ChartsSplineSeries', useValue: ej2Charts.SplineSeries };
var SplineAreaSeriesService = { provide: 'ChartsSplineAreaSeries', useValue: ej2Charts.SplineAreaSeries };
var StripLineService = { provide: 'ChartsStripLine', useValue: ej2Charts.StripLine };
var AreaSeriesService = { provide: 'ChartsAreaSeries', useValue: ej2Charts.AreaSeries };
var ScrollBarService = { provide: 'ChartsScrollBar', useValue: ej2Charts.ScrollBar };
var StepLineSeriesService = { provide: 'ChartsStepLineSeries', useValue: ej2Charts.StepLineSeries };
var StepAreaSeriesService = { provide: 'ChartsStepAreaSeries', useValue: ej2Charts.StepAreaSeries };
var StackingColumnSeriesService = { provide: 'ChartsStackingColumnSeries', useValue: ej2Charts.StackingColumnSeries };
var StackingLineSeriesService = { provide: 'ChartsStackingLineSeries', useValue: ej2Charts.StackingLineSeries };
var StackingAreaSeriesService = { provide: 'ChartsStackingAreaSeries', useValue: ej2Charts.StackingAreaSeries };
var BarSeriesService = { provide: 'ChartsBarSeries', useValue: ej2Charts.BarSeries };
var StackingBarSeriesService = { provide: 'ChartsStackingBarSeries', useValue: ej2Charts.StackingBarSeries };
var RangeColumnSeriesService = { provide: 'ChartsRangeColumnSeries', useValue: ej2Charts.RangeColumnSeries };
var BubbleSeriesService = { provide: 'ChartsBubbleSeries', useValue: ej2Charts.BubbleSeries };
var TooltipService = { provide: 'ChartsTooltip', useValue: ej2Charts.Tooltip };
var CrosshairService = { provide: 'ChartsCrosshair', useValue: ej2Charts.Crosshair };
var CategoryService = { provide: 'ChartsCategory', useValue: ej2Charts.Category };
var DateTimeService = { provide: 'ChartsDateTime', useValue: ej2Charts.DateTime };
var LogarithmicService = { provide: 'ChartsLogarithmic', useValue: ej2Charts.Logarithmic };
var LegendService = { provide: 'ChartsLegend', useValue: ej2Charts.Legend };
var ZoomService = { provide: 'ChartsZoom', useValue: ej2Charts.Zoom };
var DataLabelService = { provide: 'ChartsDataLabel', useValue: ej2Charts.DataLabel };
var SelectionService = { provide: 'ChartsSelection', useValue: ej2Charts.Selection };
var ChartAnnotationService = { provide: 'ChartsChartAnnotation', useValue: ej2Charts.ChartAnnotation };
var HiloSeriesService = { provide: 'ChartsHiloSeries', useValue: ej2Charts.HiloSeries };
var HiloOpenCloseSeriesService = { provide: 'ChartsHiloOpenCloseSeries', useValue: ej2Charts.HiloOpenCloseSeries };
var WaterfallSeriesService = { provide: 'ChartsWaterfallSeries', useValue: ej2Charts.WaterfallSeries };
var RangeAreaSeriesService = { provide: 'ChartsRangeAreaSeries', useValue: ej2Charts.RangeAreaSeries };
var CandleSeriesService = { provide: 'ChartsCandleSeries', useValue: ej2Charts.CandleSeries };
var PolarSeriesService = { provide: 'ChartsPolarSeries', useValue: ej2Charts.PolarSeries };
var RadarSeriesService = { provide: 'ChartsRadarSeries', useValue: ej2Charts.RadarSeries };
var SmaIndicatorService = { provide: 'ChartsSmaIndicator', useValue: ej2Charts.SmaIndicator };
var TmaIndicatorService = { provide: 'ChartsTmaIndicator', useValue: ej2Charts.TmaIndicator };
var EmaIndicatorService = { provide: 'ChartsEmaIndicator', useValue: ej2Charts.EmaIndicator };
var AccumulationDistributionIndicatorService = { provide: 'ChartsAccumulationDistributionIndicator', useValue: ej2Charts.AccumulationDistributionIndicator };
var MacdIndicatorService = { provide: 'ChartsMacdIndicator', useValue: ej2Charts.MacdIndicator };
var AtrIndicatorService = { provide: 'ChartsAtrIndicator', useValue: ej2Charts.AtrIndicator };
var RsiIndicatorService = { provide: 'ChartsRsiIndicator', useValue: ej2Charts.RsiIndicator };
var MomentumIndicatorService = { provide: 'ChartsMomentumIndicator', useValue: ej2Charts.MomentumIndicator };
var StochasticIndicatorService = { provide: 'ChartsStochasticIndicator', useValue: ej2Charts.StochasticIndicator };
var BollingerBandsService = { provide: 'ChartsBollingerBands', useValue: ej2Charts.BollingerBands };
var BoxAndWhiskerSeriesService = { provide: 'ChartsBoxAndWhiskerSeries', useValue: ej2Charts.BoxAndWhiskerSeries };
var HistogramSeriesService = { provide: 'ChartsHistogramSeries', useValue: ej2Charts.HistogramSeries };
var ErrorBarService = { provide: 'ChartsErrorBar', useValue: ej2Charts.ErrorBar };
var TrendlinesService = { provide: 'ChartsTrendlines', useValue: ej2Charts.Trendlines };
var DateTimeCategoryService = { provide: 'ChartsDateTimeCategory', useValue: ej2Charts.DateTimeCategory };
var MultiColoredLineSeriesService = { provide: 'ChartsMultiColoredLineSeries', useValue: ej2Charts.MultiColoredLineSeries };
var MultiColoredAreaSeriesService = { provide: 'ChartsMultiColoredAreaSeries', useValue: ej2Charts.MultiColoredAreaSeries };
var MultiLevelLabelService = { provide: 'ChartsMultiLevelLabel', useValue: ej2Charts.MultiLevelLabel };
var ParetoSeriesService = { provide: 'ChartsParetoSeries', useValue: ej2Charts.ParetoSeries };
var ExportService = { provide: 'ChartsExport', useValue: ej2Charts.Export };
var DataEditingService = { provide: 'ChartsDataEditing', useValue: ej2Charts.DataEditing };
/**
 * NgModule definition for the Chart component with providers.
 */
var ChartAllModule = /** @class */ (function () {
    function ChartAllModule() {
    }
    return ChartAllModule;
}());
ChartAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, ChartModule],
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$13);
        return _this;
    }
    return AccumulationSeriesDirective;
}(ej2AngularBase.ComplexBase));
AccumulationSeriesDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
]; };
AccumulationSeriesDirective.propDecorators = {
    'dataLabel_template': [{ type: core.ContentChild, args: ['dataLabelTemplate',] },],
};
__decorate$3([
    ej2AngularBase.Template(),
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
}(ej2AngularBase.ArrayBase));
AccumulationSeriesCollectionDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ej-accumulationchart>e-accumulation-series-collection',
                queries: {
                    children: new core.ContentChildren(AccumulationSeriesDirective)
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$14);
        return _this;
    }
    return AccumulationAnnotationDirective;
}(ej2AngularBase.ComplexBase));
AccumulationAnnotationDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
]; };
AccumulationAnnotationDirective.propDecorators = {
    'content': [{ type: core.ContentChild, args: ['content',] },],
};
__decorate$4([
    ej2AngularBase.Template(),
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
}(ej2AngularBase.ArrayBase));
AccumulationAnnotationsDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ej-accumulationchart>e-accumulation-annotations',
                queries: {
                    children: new core.ContentChildren(AccumulationAnnotationDirective)
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
var inputs$1 = ['annotations', 'background', 'border', 'center', 'currencyCode', 'dataSource', 'enableAnimation', 'enableExport', 'enablePersistence', 'enableRtl', 'enableSmartLabels', 'height', 'isMultiSelect', 'legendSettings', 'locale', 'margin', 'selectedDataIndexes', 'selectionMode', 'series', 'subTitle', 'subTitleStyle', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width'];
var outputs$15 = ['animationComplete', 'annotationRender', 'beforePrint', 'chartMouseClick', 'chartMouseDown', 'chartMouseLeave', 'chartMouseMove', 'chartMouseUp', 'legendRender', 'load', 'loaded', 'pointClick', 'pointMove', 'pointRender', 'resized', 'seriesRender', 'textRender', 'tooltipRender', 'dataSourceChange'];
var twoWays$1 = ['dataSource'];
/**
 * AccumulationChart Component
 * ```html
 * <ejs-accumulationchart></ejs-accumulationchart>
 * ```
 */
exports.AccumulationChartComponent = /** @class */ (function (_super) {
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
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
}(ej2Charts.AccumulationChart));
exports.AccumulationChartComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-accumulationchart',
                inputs: inputs$1,
                outputs: outputs$15,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {
                    childSeries: new core.ContentChild(AccumulationSeriesCollectionDirective),
                    childAnnotations: new core.ContentChild(AccumulationAnnotationsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
exports.AccumulationChartComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.AccumulationChartComponent.propDecorators = {
    'tooltip_template': [{ type: core.ContentChild, args: ['tooltipTemplate',] },],
};
__decorate$5([
    ej2AngularBase.Template(),
    __metadata$5("design:type", Object)
], exports.AccumulationChartComponent.prototype, "tooltip_template", void 0);
exports.AccumulationChartComponent = __decorate$5([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata$5("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.AccumulationChartComponent);
/**
 * NgModule definition for the AccumulationChart component.
 */
var AccumulationChartModule = /** @class */ (function () {
    function AccumulationChartModule() {
    }
    return AccumulationChartModule;
}());
AccumulationChartModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.AccumulationChartComponent,
                    AccumulationSeriesDirective,
                    AccumulationSeriesCollectionDirective,
                    AccumulationAnnotationDirective,
                    AccumulationAnnotationsDirective
                ],
                exports: [
                    exports.AccumulationChartComponent,
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
var PieSeriesService = { provide: 'ChartsPieSeries', useValue: ej2Charts.PieSeries };
var FunnelSeriesService = { provide: 'ChartsFunnelSeries', useValue: ej2Charts.FunnelSeries };
var PyramidSeriesService = { provide: 'ChartsPyramidSeries', useValue: ej2Charts.PyramidSeries };
var AccumulationTooltipService = { provide: 'ChartsAccumulationTooltip', useValue: ej2Charts.AccumulationTooltip };
var AccumulationLegendService = { provide: 'ChartsAccumulationLegend', useValue: ej2Charts.AccumulationLegend };
var AccumulationSelectionService = { provide: 'ChartsAccumulationSelection', useValue: ej2Charts.AccumulationSelection };
var AccumulationDataLabelService = { provide: 'ChartsAccumulationDataLabel', useValue: ej2Charts.AccumulationDataLabel };
var AccumulationAnnotationService = { provide: 'ChartsAccumulationAnnotation', useValue: ej2Charts.AccumulationAnnotation };
/**
 * NgModule definition for the AccumulationChart component with providers.
 */
var AccumulationChartAllModule = /** @class */ (function () {
    function AccumulationChartAllModule() {
    }
    return AccumulationChartAllModule;
}());
AccumulationChartAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, AccumulationChartModule],
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$16);
        return _this;
    }
    return RangenavigatorSeriesDirective;
}(ej2AngularBase.ComplexBase));
RangenavigatorSeriesDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
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
}(ej2AngularBase.ArrayBase));
RangenavigatorSeriesCollectionDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ej-rangenavigator>e-rangenavigator-series-collection',
                queries: {
                    children: new core.ContentChildren(RangenavigatorSeriesDirective)
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
exports.RangeNavigatorComponent = /** @class */ (function (_super) {
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
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
}(ej2Charts.RangeNavigator));
exports.RangeNavigatorComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-rangenavigator',
                inputs: inputs$2,
                outputs: outputs$17,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {
                    childSeries: new core.ContentChild(RangenavigatorSeriesCollectionDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
exports.RangeNavigatorComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.RangeNavigatorComponent.propDecorators = {
    'tooltip_template': [{ type: core.ContentChild, args: ['tooltipTemplate',] },],
};
__decorate$6([
    ej2AngularBase.Template(),
    __metadata$6("design:type", Object)
], exports.RangeNavigatorComponent.prototype, "tooltip_template", void 0);
exports.RangeNavigatorComponent = __decorate$6([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata$6("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.RangeNavigatorComponent);
/**
 * NgModule definition for the RangeNavigator component.
 */
var RangeNavigatorModule = /** @class */ (function () {
    function RangeNavigatorModule() {
    }
    return RangeNavigatorModule;
}());
RangeNavigatorModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.RangeNavigatorComponent,
                    RangenavigatorSeriesDirective,
                    RangenavigatorSeriesCollectionDirective
                ],
                exports: [
                    exports.RangeNavigatorComponent,
                    RangenavigatorSeriesDirective,
                    RangenavigatorSeriesCollectionDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
RangeNavigatorModule.ctorParameters = function () { return []; };
var RangeTooltipService = { provide: 'ChartsRangeTooltip', useValue: ej2Charts.RangeTooltip };
var PeriodSelectorService = { provide: 'ChartsPeriodSelector', useValue: ej2Charts.PeriodSelector };
/**
 * NgModule definition for the RangeNavigator component with providers.
 */
var RangeNavigatorAllModule = /** @class */ (function () {
    function RangeNavigatorAllModule() {
    }
    return RangeNavigatorAllModule;
}());
RangeNavigatorAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, RangeNavigatorModule],
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$18);
        return _this;
    }
    return RangeBandSettingDirective;
}(ej2AngularBase.ComplexBase));
RangeBandSettingDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
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
}(ej2AngularBase.ArrayBase));
RangeBandSettingsDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-sparkline>e-rangeBandSettings',
                queries: {
                    children: new core.ContentChildren(RangeBandSettingDirective)
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
exports.SparklineComponent = /** @class */ (function (_super) {
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
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
}(ej2Charts.Sparkline));
exports.SparklineComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-sparkline',
                inputs: inputs$3,
                outputs: outputs$19,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {
                    childRangeBandSettings: new core.ContentChild(RangeBandSettingsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
exports.SparklineComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.SparklineComponent = __decorate$7([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata$7("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.SparklineComponent);
/**
 * NgModule definition for the Sparkline component.
 */
var SparklineModule = /** @class */ (function () {
    function SparklineModule() {
    }
    return SparklineModule;
}());
SparklineModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.SparklineComponent,
                    RangeBandSettingDirective,
                    RangeBandSettingsDirective
                ],
                exports: [
                    exports.SparklineComponent,
                    RangeBandSettingDirective,
                    RangeBandSettingsDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
SparklineModule.ctorParameters = function () { return []; };
var SparklineTooltipService = { provide: 'ChartsSparklineTooltip', useValue: ej2Charts.SparklineTooltip };
/**
 * NgModule definition for the Sparkline component with providers.
 */
var SparklineAllModule = /** @class */ (function () {
    function SparklineAllModule() {
    }
    return SparklineAllModule;
}());
SparklineAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, SparklineModule],
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$20);
        return _this;
    }
    return SmithchartSeriesDirective;
}(ej2AngularBase.ComplexBase));
SmithchartSeriesDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
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
}(ej2AngularBase.ArrayBase));
SmithchartSeriesCollectionDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-smithchart>e-seriesCollection',
                queries: {
                    children: new core.ContentChildren(SmithchartSeriesDirective)
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
exports.SmithchartComponent = /** @class */ (function (_super) {
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
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
}(ej2Charts.Smithchart));
exports.SmithchartComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-smithchart',
                inputs: inputs$4,
                outputs: outputs$21,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {
                    childSeries: new core.ContentChild(SmithchartSeriesCollectionDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
exports.SmithchartComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.SmithchartComponent = __decorate$8([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata$8("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.SmithchartComponent);
/**
 * NgModule definition for the Smithchart component.
 */
var SmithchartModule = /** @class */ (function () {
    function SmithchartModule() {
    }
    return SmithchartModule;
}());
SmithchartModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.SmithchartComponent,
                    SmithchartSeriesDirective,
                    SmithchartSeriesCollectionDirective
                ],
                exports: [
                    exports.SmithchartComponent,
                    SmithchartSeriesDirective,
                    SmithchartSeriesCollectionDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
SmithchartModule.ctorParameters = function () { return []; };
var SmithchartLegendService = { provide: 'ChartsSmithchartLegend', useValue: ej2Charts.SmithchartLegend };
var TooltipRenderService = { provide: 'ChartsTooltipRender', useValue: ej2Charts.TooltipRender };
/**
 * NgModule definition for the Smithchart component with providers.
 */
var SmithchartAllModule = /** @class */ (function () {
    function SmithchartAllModule() {
    }
    return SmithchartAllModule;
}());
SmithchartAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, SmithchartModule],
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$22);
        return _this;
    }
    return StockChartTrendlineDirective;
}(ej2AngularBase.ComplexBase));
StockChartTrendlineDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
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
}(ej2AngularBase.ArrayBase));
StockChartTrendlinesDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-stockchart-series>e-trendlines',
                queries: {
                    children: new core.ContentChildren(StockChartTrendlineDirective)
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$23);
        return _this;
    }
    return StockChartSeriesDirective;
}(ej2AngularBase.ComplexBase));
StockChartSeriesDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-stockchart-series-collection>e-stockchart-series',
                inputs: input$18,
                outputs: outputs$23,
                queries: {
                    childTrendlines: new core.ContentChild(StockChartTrendlinesDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
StockChartSeriesDirective.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
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
}(ej2AngularBase.ArrayBase));
StockChartSeriesCollectionDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-stockchart>e-stockchart-series-collection',
                queries: {
                    children: new core.ContentChildren(StockChartSeriesDirective)
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$24);
        return _this;
    }
    return StockChartStripLineDirective;
}(ej2AngularBase.ComplexBase));
StockChartStripLineDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
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
}(ej2AngularBase.ArrayBase));
StockChartStripLinesDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-stockchart-axis>e-stockchart-striplines',
                queries: {
                    children: new core.ContentChildren(StockChartStripLineDirective)
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$25);
        return _this;
    }
    return StockChartAxisDirective;
}(ej2AngularBase.ComplexBase));
StockChartAxisDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-stockchart-axes>e-stockchart-axis',
                inputs: input$20,
                outputs: outputs$25,
                queries: {
                    childStripLines: new core.ContentChild(StockChartStripLinesDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
StockChartAxisDirective.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
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
}(ej2AngularBase.ArrayBase));
StockChartAxesDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-stockchart>e-stockchart-axes',
                queries: {
                    children: new core.ContentChildren(StockChartAxisDirective)
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$26);
        return _this;
    }
    return StockChartRowDirective;
}(ej2AngularBase.ComplexBase));
StockChartRowDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
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
}(ej2AngularBase.ArrayBase));
StockChartRowsDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-stockchart>e-stockchart-rows',
                queries: {
                    children: new core.ContentChildren(StockChartRowDirective)
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$27);
        return _this;
    }
    return StockChartAnnotationDirective;
}(ej2AngularBase.ComplexBase));
StockChartAnnotationDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
]; };
StockChartAnnotationDirective.propDecorators = {
    'content': [{ type: core.ContentChild, args: ['content',] },],
};
__decorate$9([
    ej2AngularBase.Template(),
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
}(ej2AngularBase.ArrayBase));
StockChartAnnotationsDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-stockchart>e-stockchart-annotations',
                queries: {
                    children: new core.ContentChildren(StockChartAnnotationDirective)
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$28);
        return _this;
    }
    return StockChartSelectedDataIndexDirective;
}(ej2AngularBase.ComplexBase));
StockChartSelectedDataIndexDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
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
}(ej2AngularBase.ArrayBase));
StockChartSelectedDataIndexesDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-stockchart>e-stockchart-selectedDataIndexes',
                queries: {
                    children: new core.ContentChildren(StockChartSelectedDataIndexDirective)
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$29);
        return _this;
    }
    return StockChartPeriodDirective;
}(ej2AngularBase.ComplexBase));
StockChartPeriodDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
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
}(ej2AngularBase.ArrayBase));
StockChartPeriodsDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-stockchart>e-stockchart-periods',
                queries: {
                    children: new core.ContentChildren(StockChartPeriodDirective)
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$30);
        return _this;
    }
    return StockEventDirective;
}(ej2AngularBase.ComplexBase));
StockEventDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
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
}(ej2AngularBase.ArrayBase));
StockEventsDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-stockchart>e-stockchart-stockevents',
                queries: {
                    children: new core.ContentChildren(StockEventDirective)
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$31);
        return _this;
    }
    return StockChartIndicatorDirective;
}(ej2AngularBase.ComplexBase));
StockChartIndicatorDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
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
}(ej2AngularBase.ArrayBase));
StockChartIndicatorsDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-stockchart>e-stockchart-indicators',
                queries: {
                    children: new core.ContentChildren(StockChartIndicatorDirective)
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
exports.StockChartComponent = /** @class */ (function (_super) {
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
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
}(ej2Charts.StockChart));
exports.StockChartComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-stockchart',
                inputs: inputs$5,
                outputs: outputs$32,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {
                    childSeries: new core.ContentChild(StockChartSeriesCollectionDirective),
                    childAxes: new core.ContentChild(StockChartAxesDirective),
                    childRows: new core.ContentChild(StockChartRowsDirective),
                    childAnnotations: new core.ContentChild(StockChartAnnotationsDirective),
                    childSelectedDataIndexes: new core.ContentChild(StockChartSelectedDataIndexesDirective),
                    childPeriods: new core.ContentChild(StockChartPeriodsDirective),
                    childStockEvents: new core.ContentChild(StockEventsDirective),
                    childIndicators: new core.ContentChild(StockChartIndicatorsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
exports.StockChartComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.StockChartComponent.propDecorators = {
    'tooltip_template': [{ type: core.ContentChild, args: ['tooltipTemplate',] },],
};
__decorate$10([
    ej2AngularBase.Template(),
    __metadata$10("design:type", Object)
], exports.StockChartComponent.prototype, "tooltip_template", void 0);
exports.StockChartComponent = __decorate$10([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata$10("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.StockChartComponent);
/**
 * NgModule definition for the StockChart component.
 */
var StockChartModule = /** @class */ (function () {
    function StockChartModule() {
    }
    return StockChartModule;
}());
StockChartModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.StockChartComponent,
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
                    exports.StockChartComponent,
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
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, StockChartModule],
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

exports.TrendlineDirective = TrendlineDirective;
exports.TrendlinesDirective = TrendlinesDirective;
exports.SegmentDirective = SegmentDirective;
exports.SegmentsDirective = SegmentsDirective;
exports.SeriesDirective = SeriesDirective;
exports.SeriesCollectionDirective = SeriesCollectionDirective;
exports.StripLineDirective = StripLineDirective;
exports.StripLinesDirective = StripLinesDirective;
exports.CategoryDirective = CategoryDirective;
exports.CategoriesDirective = CategoriesDirective;
exports.MultiLevelLabelDirective = MultiLevelLabelDirective;
exports.MultiLevelLabelsDirective = MultiLevelLabelsDirective;
exports.AxisDirective = AxisDirective;
exports.AxesDirective = AxesDirective;
exports.RowDirective = RowDirective;
exports.RowsDirective = RowsDirective;
exports.ColumnDirective = ColumnDirective;
exports.ColumnsDirective = ColumnsDirective;
exports.AnnotationDirective = AnnotationDirective;
exports.AnnotationsDirective = AnnotationsDirective;
exports.SelectedDataIndexDirective = SelectedDataIndexDirective;
exports.SelectedDataIndexesDirective = SelectedDataIndexesDirective;
exports.IndicatorDirective = IndicatorDirective;
exports.IndicatorsDirective = IndicatorsDirective;
exports.ChartModule = ChartModule;
exports.ChartAllModule = ChartAllModule;
exports.LineSeriesService = LineSeriesService;
exports.ScatterSeriesService = ScatterSeriesService;
exports.ColumnSeriesService = ColumnSeriesService;
exports.SplineSeriesService = SplineSeriesService;
exports.SplineAreaSeriesService = SplineAreaSeriesService;
exports.StripLineService = StripLineService;
exports.AreaSeriesService = AreaSeriesService;
exports.ScrollBarService = ScrollBarService;
exports.StepLineSeriesService = StepLineSeriesService;
exports.StepAreaSeriesService = StepAreaSeriesService;
exports.StackingColumnSeriesService = StackingColumnSeriesService;
exports.StackingLineSeriesService = StackingLineSeriesService;
exports.StackingAreaSeriesService = StackingAreaSeriesService;
exports.BarSeriesService = BarSeriesService;
exports.StackingBarSeriesService = StackingBarSeriesService;
exports.RangeColumnSeriesService = RangeColumnSeriesService;
exports.BubbleSeriesService = BubbleSeriesService;
exports.TooltipService = TooltipService;
exports.CrosshairService = CrosshairService;
exports.CategoryService = CategoryService;
exports.DateTimeService = DateTimeService;
exports.LogarithmicService = LogarithmicService;
exports.LegendService = LegendService;
exports.ZoomService = ZoomService;
exports.DataLabelService = DataLabelService;
exports.SelectionService = SelectionService;
exports.ChartAnnotationService = ChartAnnotationService;
exports.HiloSeriesService = HiloSeriesService;
exports.HiloOpenCloseSeriesService = HiloOpenCloseSeriesService;
exports.WaterfallSeriesService = WaterfallSeriesService;
exports.RangeAreaSeriesService = RangeAreaSeriesService;
exports.CandleSeriesService = CandleSeriesService;
exports.PolarSeriesService = PolarSeriesService;
exports.RadarSeriesService = RadarSeriesService;
exports.SmaIndicatorService = SmaIndicatorService;
exports.TmaIndicatorService = TmaIndicatorService;
exports.EmaIndicatorService = EmaIndicatorService;
exports.AccumulationDistributionIndicatorService = AccumulationDistributionIndicatorService;
exports.MacdIndicatorService = MacdIndicatorService;
exports.AtrIndicatorService = AtrIndicatorService;
exports.RsiIndicatorService = RsiIndicatorService;
exports.MomentumIndicatorService = MomentumIndicatorService;
exports.StochasticIndicatorService = StochasticIndicatorService;
exports.BollingerBandsService = BollingerBandsService;
exports.BoxAndWhiskerSeriesService = BoxAndWhiskerSeriesService;
exports.HistogramSeriesService = HistogramSeriesService;
exports.ErrorBarService = ErrorBarService;
exports.TrendlinesService = TrendlinesService;
exports.DateTimeCategoryService = DateTimeCategoryService;
exports.MultiColoredLineSeriesService = MultiColoredLineSeriesService;
exports.MultiColoredAreaSeriesService = MultiColoredAreaSeriesService;
exports.MultiLevelLabelService = MultiLevelLabelService;
exports.ParetoSeriesService = ParetoSeriesService;
exports.ExportService = ExportService;
exports.DataEditingService = DataEditingService;
exports.AccumulationSeriesDirective = AccumulationSeriesDirective;
exports.AccumulationSeriesCollectionDirective = AccumulationSeriesCollectionDirective;
exports.AccumulationAnnotationDirective = AccumulationAnnotationDirective;
exports.AccumulationAnnotationsDirective = AccumulationAnnotationsDirective;
exports.AccumulationChartModule = AccumulationChartModule;
exports.AccumulationChartAllModule = AccumulationChartAllModule;
exports.PieSeriesService = PieSeriesService;
exports.FunnelSeriesService = FunnelSeriesService;
exports.PyramidSeriesService = PyramidSeriesService;
exports.AccumulationTooltipService = AccumulationTooltipService;
exports.AccumulationLegendService = AccumulationLegendService;
exports.AccumulationSelectionService = AccumulationSelectionService;
exports.AccumulationDataLabelService = AccumulationDataLabelService;
exports.AccumulationAnnotationService = AccumulationAnnotationService;
exports.RangenavigatorSeriesDirective = RangenavigatorSeriesDirective;
exports.RangenavigatorSeriesCollectionDirective = RangenavigatorSeriesCollectionDirective;
exports.RangeNavigatorModule = RangeNavigatorModule;
exports.RangeNavigatorAllModule = RangeNavigatorAllModule;
exports.RangeTooltipService = RangeTooltipService;
exports.PeriodSelectorService = PeriodSelectorService;
exports.RangeBandSettingDirective = RangeBandSettingDirective;
exports.RangeBandSettingsDirective = RangeBandSettingsDirective;
exports.SparklineModule = SparklineModule;
exports.SparklineAllModule = SparklineAllModule;
exports.SparklineTooltipService = SparklineTooltipService;
exports.SmithchartSeriesDirective = SmithchartSeriesDirective;
exports.SmithchartSeriesCollectionDirective = SmithchartSeriesCollectionDirective;
exports.SmithchartModule = SmithchartModule;
exports.SmithchartAllModule = SmithchartAllModule;
exports.SmithchartLegendService = SmithchartLegendService;
exports.TooltipRenderService = TooltipRenderService;
exports.StockChartTrendlineDirective = StockChartTrendlineDirective;
exports.StockChartTrendlinesDirective = StockChartTrendlinesDirective;
exports.StockChartSeriesDirective = StockChartSeriesDirective;
exports.StockChartSeriesCollectionDirective = StockChartSeriesCollectionDirective;
exports.StockChartStripLineDirective = StockChartStripLineDirective;
exports.StockChartStripLinesDirective = StockChartStripLinesDirective;
exports.StockChartAxisDirective = StockChartAxisDirective;
exports.StockChartAxesDirective = StockChartAxesDirective;
exports.StockChartRowDirective = StockChartRowDirective;
exports.StockChartRowsDirective = StockChartRowsDirective;
exports.StockChartAnnotationDirective = StockChartAnnotationDirective;
exports.StockChartAnnotationsDirective = StockChartAnnotationsDirective;
exports.StockChartSelectedDataIndexDirective = StockChartSelectedDataIndexDirective;
exports.StockChartSelectedDataIndexesDirective = StockChartSelectedDataIndexesDirective;
exports.StockChartPeriodDirective = StockChartPeriodDirective;
exports.StockChartPeriodsDirective = StockChartPeriodsDirective;
exports.StockEventDirective = StockEventDirective;
exports.StockEventsDirective = StockEventsDirective;
exports.StockChartIndicatorDirective = StockChartIndicatorDirective;
exports.StockChartIndicatorsDirective = StockChartIndicatorsDirective;
exports.StockChartModule = StockChartModule;
exports.StockChartAllModule = StockChartAllModule;
exports.ɵc = inputs$1;
exports.ɵd = outputs$15;
exports.ɵa = inputs;
exports.ɵb = outputs$12;
exports.ɵe = inputs$2;
exports.ɵf = outputs$17;
exports.ɵi = inputs$4;
exports.ɵj = outputs$21;
exports.ɵg = inputs$3;
exports.ɵh = outputs$19;
exports.ɵk = inputs$5;
exports.ɵl = outputs$32;
exports.CrosshairSettings = ej2Charts.CrosshairSettings;
exports.ZoomSettings = ej2Charts.ZoomSettings;
exports.Chart = ej2Charts.Chart;
exports.Row = ej2Charts.Row;
exports.Column = ej2Charts.Column;
exports.MajorGridLines = ej2Charts.MajorGridLines;
exports.MinorGridLines = ej2Charts.MinorGridLines;
exports.AxisLine = ej2Charts.AxisLine;
exports.MajorTickLines = ej2Charts.MajorTickLines;
exports.MinorTickLines = ej2Charts.MinorTickLines;
exports.CrosshairTooltip = ej2Charts.CrosshairTooltip;
exports.Axis = ej2Charts.Axis;
exports.VisibleLabels = ej2Charts.VisibleLabels;
exports.DateTime = ej2Charts.DateTime;
exports.Category = ej2Charts.Category;
exports.Logarithmic = ej2Charts.Logarithmic;
exports.DateTimeCategory = ej2Charts.DateTimeCategory;
exports.NiceInterval = ej2Charts.NiceInterval;
exports.StripLine = ej2Charts.StripLine;
exports.Connector = ej2Charts.Connector;
exports.Font = ej2Charts.Font;
exports.Border = ej2Charts.Border;
exports.Offset = ej2Charts.Offset;
exports.ChartArea = ej2Charts.ChartArea;
exports.Margin = ej2Charts.Margin;
exports.Animation = ej2Charts.Animation;
exports.Indexes = ej2Charts.Indexes;
exports.CornerRadius = ej2Charts.CornerRadius;
exports.Index = ej2Charts.Index;
exports.EmptyPointSettings = ej2Charts.EmptyPointSettings;
exports.DragSettings = ej2Charts.DragSettings;
exports.TooltipSettings = ej2Charts.TooltipSettings;
exports.Periods = ej2Charts.Periods;
exports.PeriodSelectorSettings = ej2Charts.PeriodSelectorSettings;
exports.LineSeries = ej2Charts.LineSeries;
exports.ColumnSeries = ej2Charts.ColumnSeries;
exports.AreaSeries = ej2Charts.AreaSeries;
exports.BarSeries = ej2Charts.BarSeries;
exports.PolarSeries = ej2Charts.PolarSeries;
exports.RadarSeries = ej2Charts.RadarSeries;
exports.StackingBarSeries = ej2Charts.StackingBarSeries;
exports.CandleSeries = ej2Charts.CandleSeries;
exports.StackingColumnSeries = ej2Charts.StackingColumnSeries;
exports.StepLineSeries = ej2Charts.StepLineSeries;
exports.StepAreaSeries = ej2Charts.StepAreaSeries;
exports.StackingAreaSeries = ej2Charts.StackingAreaSeries;
exports.StackingLineSeries = ej2Charts.StackingLineSeries;
exports.ScatterSeries = ej2Charts.ScatterSeries;
exports.RangeColumnSeries = ej2Charts.RangeColumnSeries;
exports.WaterfallSeries = ej2Charts.WaterfallSeries;
exports.HiloSeries = ej2Charts.HiloSeries;
exports.HiloOpenCloseSeries = ej2Charts.HiloOpenCloseSeries;
exports.RangeAreaSeries = ej2Charts.RangeAreaSeries;
exports.BubbleSeries = ej2Charts.BubbleSeries;
exports.SplineSeries = ej2Charts.SplineSeries;
exports.HistogramSeries = ej2Charts.HistogramSeries;
exports.SplineAreaSeries = ej2Charts.SplineAreaSeries;
exports.TechnicalIndicator = ej2Charts.TechnicalIndicator;
exports.SmaIndicator = ej2Charts.SmaIndicator;
exports.EmaIndicator = ej2Charts.EmaIndicator;
exports.TmaIndicator = ej2Charts.TmaIndicator;
exports.AccumulationDistributionIndicator = ej2Charts.AccumulationDistributionIndicator;
exports.AtrIndicator = ej2Charts.AtrIndicator;
exports.MomentumIndicator = ej2Charts.MomentumIndicator;
exports.RsiIndicator = ej2Charts.RsiIndicator;
exports.StochasticIndicator = ej2Charts.StochasticIndicator;
exports.BollingerBands = ej2Charts.BollingerBands;
exports.MacdIndicator = ej2Charts.MacdIndicator;
exports.Trendlines = ej2Charts.Trendlines;
exports.sort = ej2Charts.sort;
exports.isBreakLabel = ej2Charts.isBreakLabel;
exports.rotateTextSize = ej2Charts.rotateTextSize;
exports.removeElement = ej2Charts.removeElement;
exports.logBase = ej2Charts.logBase;
exports.showTooltip = ej2Charts.showTooltip;
exports.inside = ej2Charts.inside;
exports.withIn = ej2Charts.withIn;
exports.logWithIn = ej2Charts.logWithIn;
exports.withInRange = ej2Charts.withInRange;
exports.sum = ej2Charts.sum;
exports.subArraySum = ej2Charts.subArraySum;
exports.subtractThickness = ej2Charts.subtractThickness;
exports.subtractRect = ej2Charts.subtractRect;
exports.degreeToLocation = ej2Charts.degreeToLocation;
exports.getAngle = ej2Charts.getAngle;
exports.subArray = ej2Charts.subArray;
exports.valueToCoefficient = ej2Charts.valueToCoefficient;
exports.TransformToVisible = ej2Charts.TransformToVisible;
exports.indexFinder = ej2Charts.indexFinder;
exports.CoefficientToVector = ej2Charts.CoefficientToVector;
exports.valueToPolarCoefficient = ej2Charts.valueToPolarCoefficient;
exports.Mean = ej2Charts.Mean;
exports.PolarArc = ej2Charts.PolarArc;
exports.createTooltip = ej2Charts.createTooltip;
exports.createZoomingLabels = ej2Charts.createZoomingLabels;
exports.withInBounds = ej2Charts.withInBounds;
exports.getValueXByPoint = ej2Charts.getValueXByPoint;
exports.getValueYByPoint = ej2Charts.getValueYByPoint;
exports.findClipRect = ej2Charts.findClipRect;
exports.firstToLowerCase = ej2Charts.firstToLowerCase;
exports.getTransform = ej2Charts.getTransform;
exports.getMinPointsDelta = ej2Charts.getMinPointsDelta;
exports.getAnimationFunction = ej2Charts.getAnimationFunction;
exports.linear = ej2Charts.linear;
exports.markerAnimate = ej2Charts.markerAnimate;
exports.animateRectElement = ej2Charts.animateRectElement;
exports.pathAnimation = ej2Charts.pathAnimation;
exports.appendClipElement = ej2Charts.appendClipElement;
exports.triggerLabelRender = ej2Charts.triggerLabelRender;
exports.setRange = ej2Charts.setRange;
exports.getActualDesiredIntervalsCount = ej2Charts.getActualDesiredIntervalsCount;
exports.templateAnimate = ej2Charts.templateAnimate;
exports.drawSymbol = ej2Charts.drawSymbol;
exports.calculateShapes = ej2Charts.calculateShapes;
exports.getRectLocation = ej2Charts.getRectLocation;
exports.minMax = ej2Charts.minMax;
exports.getElement = ej2Charts.getElement;
exports.getTemplateFunction = ej2Charts.getTemplateFunction;
exports.createTemplate = ej2Charts.createTemplate;
exports.getFontStyle = ej2Charts.getFontStyle;
exports.measureElementRect = ej2Charts.measureElementRect;
exports.findlElement = ej2Charts.findlElement;
exports.getPoint = ej2Charts.getPoint;
exports.appendElement = ej2Charts.appendElement;
exports.appendChildElement = ej2Charts.appendChildElement;
exports.getDraggedRectLocation = ej2Charts.getDraggedRectLocation;
exports.checkBounds = ej2Charts.checkBounds;
exports.getLabelText = ej2Charts.getLabelText;
exports.stopTimer = ej2Charts.stopTimer;
exports.isCollide = ej2Charts.isCollide;
exports.isOverlap = ej2Charts.isOverlap;
exports.containsRect = ej2Charts.containsRect;
exports.calculateRect = ej2Charts.calculateRect;
exports.convertToHexCode = ej2Charts.convertToHexCode;
exports.componentToHex = ej2Charts.componentToHex;
exports.convertHexToColor = ej2Charts.convertHexToColor;
exports.colorNameToHex = ej2Charts.colorNameToHex;
exports.getSaturationColor = ej2Charts.getSaturationColor;
exports.getMedian = ej2Charts.getMedian;
exports.calculateLegendShapes = ej2Charts.calculateLegendShapes;
exports.textTrim = ej2Charts.textTrim;
exports.lineBreakLabelTrim = ej2Charts.lineBreakLabelTrim;
exports.stringToNumber = ej2Charts.stringToNumber;
exports.redrawElement = ej2Charts.redrawElement;
exports.animateRedrawElement = ej2Charts.animateRedrawElement;
exports.textElement = ej2Charts.textElement;
exports.calculateSize = ej2Charts.calculateSize;
exports.createSvg = ej2Charts.createSvg;
exports.getTitle = ej2Charts.getTitle;
exports.titlePositionX = ej2Charts.titlePositionX;
exports.textWrap = ej2Charts.textWrap;
exports.blazorTemplatesReset = ej2Charts.blazorTemplatesReset;
exports.CustomizeOption = ej2Charts.CustomizeOption;
exports.StackValues = ej2Charts.StackValues;
exports.RectOption = ej2Charts.RectOption;
exports.CircleOption = ej2Charts.CircleOption;
exports.PolygonOption = ej2Charts.PolygonOption;
exports.ChartLocation = ej2Charts.ChartLocation;
exports.Thickness = ej2Charts.Thickness;
exports.ColorValue = ej2Charts.ColorValue;
exports.PointData = ej2Charts.PointData;
exports.AccPointData = ej2Charts.AccPointData;
exports.ControlPoints = ej2Charts.ControlPoints;
exports.Crosshair = ej2Charts.Crosshair;
exports.Tooltip = ej2Charts.Tooltip;
exports.Zoom = ej2Charts.Zoom;
exports.Selection = ej2Charts.Selection;
exports.DataEditing = ej2Charts.DataEditing;
exports.DataLabel = ej2Charts.DataLabel;
exports.ErrorBar = ej2Charts.ErrorBar;
exports.DataLabelSettings = ej2Charts.DataLabelSettings;
exports.MarkerSettings = ej2Charts.MarkerSettings;
exports.Points = ej2Charts.Points;
exports.Trendline = ej2Charts.Trendline;
exports.ErrorBarCapSettings = ej2Charts.ErrorBarCapSettings;
exports.ChartSegment = ej2Charts.ChartSegment;
exports.ErrorBarSettings = ej2Charts.ErrorBarSettings;
exports.SeriesBase = ej2Charts.SeriesBase;
exports.Series = ej2Charts.Series;
exports.Legend = ej2Charts.Legend;
exports.ChartAnnotation = ej2Charts.ChartAnnotation;
exports.ChartAnnotationSettings = ej2Charts.ChartAnnotationSettings;
exports.LabelBorder = ej2Charts.LabelBorder;
exports.MultiLevelCategories = ej2Charts.MultiLevelCategories;
exports.StripLineSettings = ej2Charts.StripLineSettings;
exports.MultiLevelLabels = ej2Charts.MultiLevelLabels;
exports.ScrollbarSettingsRange = ej2Charts.ScrollbarSettingsRange;
exports.ScrollbarSettings = ej2Charts.ScrollbarSettings;
exports.BoxAndWhiskerSeries = ej2Charts.BoxAndWhiskerSeries;
exports.MultiColoredAreaSeries = ej2Charts.MultiColoredAreaSeries;
exports.MultiColoredLineSeries = ej2Charts.MultiColoredLineSeries;
exports.MultiColoredSeries = ej2Charts.MultiColoredSeries;
exports.MultiLevelLabel = ej2Charts.MultiLevelLabel;
exports.ScrollBar = ej2Charts.ScrollBar;
exports.ParetoSeries = ej2Charts.ParetoSeries;
exports.Export = ej2Charts.Export;
exports.AccumulationChart = ej2Charts.AccumulationChart;
exports.AccumulationAnnotationSettings = ej2Charts.AccumulationAnnotationSettings;
exports.AccumulationDataLabelSettings = ej2Charts.AccumulationDataLabelSettings;
exports.PieCenter = ej2Charts.PieCenter;
exports.AccPoints = ej2Charts.AccPoints;
exports.AccumulationSeries = ej2Charts.AccumulationSeries;
exports.getSeriesFromIndex = ej2Charts.getSeriesFromIndex;
exports.pointByIndex = ej2Charts.pointByIndex;
exports.PieSeries = ej2Charts.PieSeries;
exports.FunnelSeries = ej2Charts.FunnelSeries;
exports.PyramidSeries = ej2Charts.PyramidSeries;
exports.AccumulationLegend = ej2Charts.AccumulationLegend;
exports.AccumulationDataLabel = ej2Charts.AccumulationDataLabel;
exports.AccumulationTooltip = ej2Charts.AccumulationTooltip;
exports.AccumulationSelection = ej2Charts.AccumulationSelection;
exports.AccumulationAnnotation = ej2Charts.AccumulationAnnotation;
exports.StockChart = ej2Charts.StockChart;
exports.StockChartFont = ej2Charts.StockChartFont;
exports.StockChartBorder = ej2Charts.StockChartBorder;
exports.StockChartArea = ej2Charts.StockChartArea;
exports.StockMargin = ej2Charts.StockMargin;
exports.StockChartStripLineSettings = ej2Charts.StockChartStripLineSettings;
exports.StockEmptyPointSettings = ej2Charts.StockEmptyPointSettings;
exports.StockChartConnector = ej2Charts.StockChartConnector;
exports.StockSeries = ej2Charts.StockSeries;
exports.StockChartIndicator = ej2Charts.StockChartIndicator;
exports.StockChartAxis = ej2Charts.StockChartAxis;
exports.StockChartRow = ej2Charts.StockChartRow;
exports.StockChartTrendline = ej2Charts.StockChartTrendline;
exports.StockChartAnnotationSettings = ej2Charts.StockChartAnnotationSettings;
exports.StockChartIndexes = ej2Charts.StockChartIndexes;
exports.StockEventsSettings = ej2Charts.StockEventsSettings;
exports.loaded = ej2Charts.loaded;
exports.legendClick = ej2Charts.legendClick;
exports.load = ej2Charts.load;
exports.animationComplete = ej2Charts.animationComplete;
exports.legendRender = ej2Charts.legendRender;
exports.textRender = ej2Charts.textRender;
exports.pointRender = ej2Charts.pointRender;
exports.seriesRender = ej2Charts.seriesRender;
exports.axisLabelRender = ej2Charts.axisLabelRender;
exports.axisRangeCalculated = ej2Charts.axisRangeCalculated;
exports.axisMultiLabelRender = ej2Charts.axisMultiLabelRender;
exports.tooltipRender = ej2Charts.tooltipRender;
exports.chartMouseMove = ej2Charts.chartMouseMove;
exports.chartMouseClick = ej2Charts.chartMouseClick;
exports.pointClick = ej2Charts.pointClick;
exports.pointMove = ej2Charts.pointMove;
exports.chartMouseLeave = ej2Charts.chartMouseLeave;
exports.chartMouseDown = ej2Charts.chartMouseDown;
exports.chartMouseUp = ej2Charts.chartMouseUp;
exports.zoomComplete = ej2Charts.zoomComplete;
exports.dragComplete = ej2Charts.dragComplete;
exports.selectionComplete = ej2Charts.selectionComplete;
exports.resized = ej2Charts.resized;
exports.beforePrint = ej2Charts.beforePrint;
exports.annotationRender = ej2Charts.annotationRender;
exports.scrollStart = ej2Charts.scrollStart;
exports.scrollEnd = ej2Charts.scrollEnd;
exports.scrollChanged = ej2Charts.scrollChanged;
exports.stockEventRender = ej2Charts.stockEventRender;
exports.multiLevelLabelClick = ej2Charts.multiLevelLabelClick;
exports.dragStart = ej2Charts.dragStart;
exports.drag = ej2Charts.drag;
exports.dragEnd = ej2Charts.dragEnd;
exports.Theme = ej2Charts.Theme;
exports.getSeriesColor = ej2Charts.getSeriesColor;
exports.getThemeColor = ej2Charts.getThemeColor;
exports.getScrollbarThemeColor = ej2Charts.getScrollbarThemeColor;
exports.PeriodSelector = ej2Charts.PeriodSelector;
exports.RangeNavigator = ej2Charts.RangeNavigator;
exports.rangeValueToCoefficient = ej2Charts.rangeValueToCoefficient;
exports.getXLocation = ej2Charts.getXLocation;
exports.getRangeValueXByPoint = ej2Charts.getRangeValueXByPoint;
exports.getExactData = ej2Charts.getExactData;
exports.getNearestValue = ej2Charts.getNearestValue;
exports.DataPoint = ej2Charts.DataPoint;
exports.RangeNavigatorTheme = ej2Charts.RangeNavigatorTheme;
exports.getRangeThemeColor = ej2Charts.getRangeThemeColor;
exports.RangeNavigatorAxis = ej2Charts.RangeNavigatorAxis;
exports.RangeSeries = ej2Charts.RangeSeries;
exports.RangeSlider = ej2Charts.RangeSlider;
exports.RangeNavigatorSeries = ej2Charts.RangeNavigatorSeries;
exports.ThumbSettings = ej2Charts.ThumbSettings;
exports.StyleSettings = ej2Charts.StyleSettings;
exports.RangeTooltipSettings = ej2Charts.RangeTooltipSettings;
exports.Double = ej2Charts.Double;
exports.RangeTooltip = ej2Charts.RangeTooltip;
exports.Smithchart = ej2Charts.Smithchart;
exports.SmithchartMajorGridLines = ej2Charts.SmithchartMajorGridLines;
exports.SmithchartMinorGridLines = ej2Charts.SmithchartMinorGridLines;
exports.SmithchartAxisLine = ej2Charts.SmithchartAxisLine;
exports.SmithchartAxis = ej2Charts.SmithchartAxis;
exports.LegendTitle = ej2Charts.LegendTitle;
exports.LegendLocation = ej2Charts.LegendLocation;
exports.LegendItemStyleBorder = ej2Charts.LegendItemStyleBorder;
exports.LegendItemStyle = ej2Charts.LegendItemStyle;
exports.LegendBorder = ej2Charts.LegendBorder;
exports.SmithchartLegendSettings = ej2Charts.SmithchartLegendSettings;
exports.SeriesTooltipBorder = ej2Charts.SeriesTooltipBorder;
exports.SeriesTooltip = ej2Charts.SeriesTooltip;
exports.SeriesMarkerBorder = ej2Charts.SeriesMarkerBorder;
exports.SeriesMarkerDataLabelBorder = ej2Charts.SeriesMarkerDataLabelBorder;
exports.SeriesMarkerDataLabelConnectorLine = ej2Charts.SeriesMarkerDataLabelConnectorLine;
exports.SeriesMarkerDataLabel = ej2Charts.SeriesMarkerDataLabel;
exports.SeriesMarker = ej2Charts.SeriesMarker;
exports.SmithchartSeries = ej2Charts.SmithchartSeries;
exports.TooltipRender = ej2Charts.TooltipRender;
exports.Subtitle = ej2Charts.Subtitle;
exports.Title = ej2Charts.Title;
exports.SmithchartFont = ej2Charts.SmithchartFont;
exports.SmithchartMargin = ej2Charts.SmithchartMargin;
exports.SmithchartBorder = ej2Charts.SmithchartBorder;
exports.SmithchartRect = ej2Charts.SmithchartRect;
exports.LabelCollection = ej2Charts.LabelCollection;
exports.LegendSeries = ej2Charts.LegendSeries;
exports.LabelRegion = ej2Charts.LabelRegion;
exports.HorizontalLabelCollection = ej2Charts.HorizontalLabelCollection;
exports.RadialLabelCollections = ej2Charts.RadialLabelCollections;
exports.LineSegment = ej2Charts.LineSegment;
exports.PointRegion = ej2Charts.PointRegion;
exports.Point = ej2Charts.Point;
exports.ClosestPoint = ej2Charts.ClosestPoint;
exports.MarkerOptions = ej2Charts.MarkerOptions;
exports.SmithchartLabelPosition = ej2Charts.SmithchartLabelPosition;
exports.Direction = ej2Charts.Direction;
exports.DataLabelTextOptions = ej2Charts.DataLabelTextOptions;
exports.LabelOption = ej2Charts.LabelOption;
exports.SmithchartSize = ej2Charts.SmithchartSize;
exports.GridArcPoints = ej2Charts.GridArcPoints;
exports.smithchartBeforePrint = ej2Charts.smithchartBeforePrint;
exports.SmithchartLegend = ej2Charts.SmithchartLegend;
exports.Sparkline = ej2Charts.Sparkline;
exports.SparklineTooltip = ej2Charts.SparklineTooltip;
exports.SparklineBorder = ej2Charts.SparklineBorder;
exports.SparklineFont = ej2Charts.SparklineFont;
exports.TrackLineSettings = ej2Charts.TrackLineSettings;
exports.SparklineTooltipSettings = ej2Charts.SparklineTooltipSettings;
exports.ContainerArea = ej2Charts.ContainerArea;
exports.LineSettings = ej2Charts.LineSettings;
exports.RangeBandSettings = ej2Charts.RangeBandSettings;
exports.AxisSettings = ej2Charts.AxisSettings;
exports.Padding = ej2Charts.Padding;
exports.SparklineMarkerSettings = ej2Charts.SparklineMarkerSettings;
exports.LabelOffset = ej2Charts.LabelOffset;
exports.SparklineDataLabelSettings = ej2Charts.SparklineDataLabelSettings;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ej2-angular-charts.umd.js.map
