(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@syncfusion/ej2-angular-base'), require('@syncfusion/ej2-pivotview'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@syncfusion/ej2-angular-base', '@syncfusion/ej2-pivotview', '@angular/common'], factory) :
	(factory((global['ej2-angular-pivotview'] = {}),global.ng.core,global.ej2.angular.base,global.ej2.pivotview,global.ng.common));
}(this, (function (exports,core,ej2AngularBase,ej2Pivotview,common) { 'use strict';

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
var inputs = ['allowCalculatedField', 'allowConditionalFormatting', 'allowDataCompression', 'allowDeferLayoutUpdate', 'allowDrillThrough', 'allowExcelExport', 'allowGrouping', 'allowNumberFormatting', 'allowPdfExport', 'cellTemplate', 'chartSettings', 'currencyCode', 'dataSourceSettings', 'displayOption', 'editSettings', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enableValueSorting', 'enableVirtualization', 'gridSettings', 'groupingBarSettings', 'height', 'hyperlinkSettings', 'loadOnDemandInMemberEditor', 'locale', 'maxNodeLimitInMemberEditor', 'maxRowsInDrillThrough', 'pivotValues', 'showFieldList', 'showGroupingBar', 'showToolbar', 'showTooltip', 'showValuesButton', 'spinnerTemplate', 'toolbar', 'width'];
var outputs = ['aggregateCellInfo', 'beforeExport', 'beginDrillThrough', 'cellClick', 'cellSelected', 'cellSelecting', 'chartSeriesCreated', 'conditionalFormatting', 'created', 'dataBound', 'destroyed', 'drill', 'drillThrough', 'enginePopulated', 'enginePopulating', 'fetchReport', 'fieldListRefreshed', 'hyperlinkCellClick', 'load', 'loadReport', 'memberFiltering', 'newReport', 'onFieldDropped', 'onPdfCellRender', 'removeReport', 'renameReport', 'saveReport', 'toolbarClick', 'toolbarRender'];
var twoWays = [];
/**
 * `ej-pivotview` represents the Angular PivotView Component.
 * ```html
 * <ej-pivotview></ej-pivotview>
 * ```
 */
exports.PivotViewComponent = /** @class */ (function (_super) {
    __extends(PivotViewComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function PivotViewComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        try {
            var mod = _this.injector.get('PivotViewGroupingBar');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            var mod = _this.injector.get('PivotViewFieldList');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            var mod = _this.injector.get('PivotViewCalculatedField');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            var mod = _this.injector.get('PivotViewConditionalFormatting');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            var mod = _this.injector.get('PivotViewVirtualScroll');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            var mod = _this.injector.get('PivotViewDrillThrough');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        try {
            var mod = _this.injector.get('PivotViewToolbar');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_g) { }
        try {
            var mod = _this.injector.get('PivotViewPivotChart');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_h) { }
        try {
            var mod = _this.injector.get('PivotViewPDFExport');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_j) { }
        try {
            var mod = _this.injector.get('PivotViewExcelExport');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_k) { }
        try {
            var mod = _this.injector.get('PivotViewNumberFormatting');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_l) { }
        try {
            var mod = _this.injector.get('PivotViewGrouping');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_m) { }
        _this.registerEvents(outputs);
        _this.addTwoWay.call(_this, twoWays);
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @return {?}
     */
    PivotViewComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    PivotViewComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    PivotViewComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    PivotViewComponent.prototype.ngAfterContentChecked = function () {
    };
    return PivotViewComponent;
}(ej2Pivotview.PivotView));
exports.PivotViewComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-pivotview',
                inputs: inputs,
                outputs: outputs,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
exports.PivotViewComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.PivotViewComponent.propDecorators = {
    'cellTemplate': [{ type: core.ContentChild, args: ['cellTemplate',] },],
};
__decorate([
    ej2AngularBase.Template(),
    __metadata("design:type", Object)
], exports.PivotViewComponent.prototype, "cellTemplate", void 0);
exports.PivotViewComponent = __decorate([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.PivotViewComponent);
/**
 * NgModule definition for the PivotView component.
 */
var PivotViewModule = /** @class */ (function () {
    function PivotViewModule() {
    }
    return PivotViewModule;
}());
PivotViewModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.PivotViewComponent
                ],
                exports: [
                    exports.PivotViewComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
PivotViewModule.ctorParameters = function () { return []; };
var GroupingBarService = { provide: 'PivotViewGroupingBar', useValue: ej2Pivotview.GroupingBar };
var FieldListService = { provide: 'PivotViewFieldList', useValue: ej2Pivotview.FieldList };
var CalculatedFieldService = { provide: 'PivotViewCalculatedField', useValue: ej2Pivotview.CalculatedField };
var ConditionalFormattingService = { provide: 'PivotViewConditionalFormatting', useValue: ej2Pivotview.ConditionalFormatting };
var VirtualScrollService = { provide: 'PivotViewVirtualScroll', useValue: ej2Pivotview.VirtualScroll };
var DrillThroughService = { provide: 'PivotViewDrillThrough', useValue: ej2Pivotview.DrillThrough };
var ToolbarService = { provide: 'PivotViewToolbar', useValue: ej2Pivotview.Toolbar };
var PivotChartService = { provide: 'PivotViewPivotChart', useValue: ej2Pivotview.PivotChart };
var PDFExportService = { provide: 'PivotViewPDFExport', useValue: ej2Pivotview.PDFExport };
var ExcelExportService = { provide: 'PivotViewExcelExport', useValue: ej2Pivotview.ExcelExport };
var NumberFormattingService = { provide: 'PivotViewNumberFormatting', useValue: ej2Pivotview.NumberFormatting };
var GroupingService = { provide: 'PivotViewGrouping', useValue: ej2Pivotview.Grouping };
/**
 * NgModule definition for the PivotView component with providers.
 */
var PivotViewAllModule = /** @class */ (function () {
    function PivotViewAllModule() {
    }
    return PivotViewAllModule;
}());
PivotViewAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, PivotViewModule],
                exports: [
                    PivotViewModule
                ],
                providers: [
                    GroupingBarService,
                    FieldListService,
                    CalculatedFieldService,
                    ConditionalFormattingService,
                    VirtualScrollService,
                    DrillThroughService,
                    ToolbarService,
                    PivotChartService,
                    PDFExportService,
                    ExcelExportService,
                    NumberFormattingService,
                    GroupingService
                ]
            },] },
];
/**
 * @nocollapse
 */
PivotViewAllModule.ctorParameters = function () { return []; };
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
var inputs$1 = ['allowCalculatedField', 'allowDeferLayoutUpdate', 'cssClass', 'dataSourceSettings', 'enablePersistence', 'enableRtl', 'loadOnDemandInMemberEditor', 'locale', 'maxNodeLimitInMemberEditor', 'renderMode', 'showValuesButton', 'spinnerTemplate', 'target'];
var outputs$1 = ['aggregateCellInfo', 'created', 'dataBound', 'destroyed', 'enginePopulated', 'enginePopulating', 'load', 'memberFiltering', 'onFieldDropped'];
var twoWays$1 = [];
/**
 * `ej-pivotfieldlist` represents the Angular PivotFieldList Component.
 * ```html
 * <ej-pivotfieldlist></ej-pivotfieldlist>
 * ```
 */
exports.PivotFieldListComponent = /** @class */ (function (_super) {
    __extends(PivotFieldListComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function PivotFieldListComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        _this.registerEvents(outputs$1);
        _this.addTwoWay.call(_this, twoWays$1);
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @return {?}
     */
    PivotFieldListComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    PivotFieldListComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    PivotFieldListComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    PivotFieldListComponent.prototype.ngAfterContentChecked = function () {
    };
    return PivotFieldListComponent;
}(ej2Pivotview.PivotFieldList));
exports.PivotFieldListComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-pivotfieldlist',
                inputs: inputs$1,
                outputs: outputs$1,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
exports.PivotFieldListComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.PivotFieldListComponent = __decorate$1([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata$1("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.PivotFieldListComponent);
/**
 * NgModule definition for the PivotFieldList component.
 */
var PivotFieldListModule = /** @class */ (function () {
    function PivotFieldListModule() {
    }
    return PivotFieldListModule;
}());
PivotFieldListModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.PivotFieldListComponent
                ],
                exports: [
                    exports.PivotFieldListComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
PivotFieldListModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the PivotFieldList component with providers.
 */
var PivotFieldListAllModule = /** @class */ (function () {
    function PivotFieldListAllModule() {
    }
    return PivotFieldListAllModule;
}());
PivotFieldListAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, PivotFieldListModule],
                exports: [
                    PivotFieldListModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
PivotFieldListAllModule.ctorParameters = function () { return []; };

exports.PivotViewModule = PivotViewModule;
exports.PivotViewAllModule = PivotViewAllModule;
exports.GroupingBarService = GroupingBarService;
exports.FieldListService = FieldListService;
exports.CalculatedFieldService = CalculatedFieldService;
exports.ConditionalFormattingService = ConditionalFormattingService;
exports.VirtualScrollService = VirtualScrollService;
exports.DrillThroughService = DrillThroughService;
exports.ToolbarService = ToolbarService;
exports.PivotChartService = PivotChartService;
exports.PDFExportService = PDFExportService;
exports.ExcelExportService = ExcelExportService;
exports.NumberFormattingService = NumberFormattingService;
exports.GroupingService = GroupingService;
exports.PivotFieldListModule = PivotFieldListModule;
exports.PivotFieldListAllModule = PivotFieldListAllModule;
exports.ɵc = inputs$1;
exports.ɵd = outputs$1;
exports.ɵa = inputs;
exports.ɵb = outputs;
exports.GroupingBarSettings = ej2Pivotview.GroupingBarSettings;
exports.CellEditSettings = ej2Pivotview.CellEditSettings;
exports.ConditionalSettings = ej2Pivotview.ConditionalSettings;
exports.HyperlinkSettings = ej2Pivotview.HyperlinkSettings;
exports.DisplayOption = ej2Pivotview.DisplayOption;
exports.PivotView = ej2Pivotview.PivotView;
exports.Render = ej2Pivotview.Render;
exports.ExcelExport = ej2Pivotview.ExcelExport;
exports.PDFExport = ej2Pivotview.PDFExport;
exports.KeyboardInteraction = ej2Pivotview.KeyboardInteraction;
exports.VirtualScroll = ej2Pivotview.VirtualScroll;
exports.DrillThrough = ej2Pivotview.DrillThrough;
exports.PivotChart = ej2Pivotview.PivotChart;
exports.PivotFieldList = ej2Pivotview.PivotFieldList;
exports.TreeViewRenderer = ej2Pivotview.TreeViewRenderer;
exports.AxisFieldRenderer = ej2Pivotview.AxisFieldRenderer;
exports.AxisTableRenderer = ej2Pivotview.AxisTableRenderer;
exports.DialogRenderer = ej2Pivotview.DialogRenderer;
exports.EventBase = ej2Pivotview.EventBase;
exports.NodeStateModified = ej2Pivotview.NodeStateModified;
exports.DataSourceUpdate = ej2Pivotview.DataSourceUpdate;
exports.FieldList = ej2Pivotview.FieldList;
exports.CommonKeyboardInteraction = ej2Pivotview.CommonKeyboardInteraction;
exports.GroupingBar = ej2Pivotview.GroupingBar;
exports.CalculatedField = ej2Pivotview.CalculatedField;
exports.ConditionalFormatting = ej2Pivotview.ConditionalFormatting;
exports.PivotCommon = ej2Pivotview.PivotCommon;
exports.load = ej2Pivotview.load;
exports.enginePopulating = ej2Pivotview.enginePopulating;
exports.enginePopulated = ej2Pivotview.enginePopulated;
exports.onFieldDropped = ej2Pivotview.onFieldDropped;
exports.beforePivotTableRender = ej2Pivotview.beforePivotTableRender;
exports.afterPivotTableRender = ej2Pivotview.afterPivotTableRender;
exports.beforeExport = ej2Pivotview.beforeExport;
exports.excelHeaderQueryCellInfo = ej2Pivotview.excelHeaderQueryCellInfo;
exports.pdfHeaderQueryCellInfo = ej2Pivotview.pdfHeaderQueryCellInfo;
exports.excelQueryCellInfo = ej2Pivotview.excelQueryCellInfo;
exports.pdfQueryCellInfo = ej2Pivotview.pdfQueryCellInfo;
exports.onPdfCellRender = ej2Pivotview.onPdfCellRender;
exports.dataBound = ej2Pivotview.dataBound;
exports.queryCellInfo = ej2Pivotview.queryCellInfo;
exports.headerCellInfo = ej2Pivotview.headerCellInfo;
exports.hyperlinkCellClick = ej2Pivotview.hyperlinkCellClick;
exports.resizing = ej2Pivotview.resizing;
exports.resizeStop = ej2Pivotview.resizeStop;
exports.cellClick = ej2Pivotview.cellClick;
exports.drillThrough = ej2Pivotview.drillThrough;
exports.beforeColumnsRender = ej2Pivotview.beforeColumnsRender;
exports.selected = ej2Pivotview.selected;
exports.cellSelecting = ej2Pivotview.cellSelecting;
exports.drill = ej2Pivotview.drill;
exports.cellSelected = ej2Pivotview.cellSelected;
exports.cellDeselected = ej2Pivotview.cellDeselected;
exports.rowSelected = ej2Pivotview.rowSelected;
exports.rowDeselected = ej2Pivotview.rowDeselected;
exports.beginDrillThrough = ej2Pivotview.beginDrillThrough;
exports.saveReport = ej2Pivotview.saveReport;
exports.fetchReport = ej2Pivotview.fetchReport;
exports.loadReport = ej2Pivotview.loadReport;
exports.renameReport = ej2Pivotview.renameReport;
exports.removeReport = ej2Pivotview.removeReport;
exports.newReport = ej2Pivotview.newReport;
exports.toolbarRender = ej2Pivotview.toolbarRender;
exports.toolbarClick = ej2Pivotview.toolbarClick;
exports.chartTooltipRender = ej2Pivotview.chartTooltipRender;
exports.chartLoaded = ej2Pivotview.chartLoaded;
exports.chartLoad = ej2Pivotview.chartLoad;
exports.chartResized = ej2Pivotview.chartResized;
exports.chartAxisLabelRender = ej2Pivotview.chartAxisLabelRender;
exports.chartSeriesCreated = ej2Pivotview.chartSeriesCreated;
exports.aggregateCellInfo = ej2Pivotview.aggregateCellInfo;
exports.contextMenuClick = ej2Pivotview.contextMenuClick;
exports.contextMenuOpen = ej2Pivotview.contextMenuOpen;
exports.fieldListRefreshed = ej2Pivotview.fieldListRefreshed;
exports.conditionalFormatting = ej2Pivotview.conditionalFormatting;
exports.beforePdfExport = ej2Pivotview.beforePdfExport;
exports.beforeExcelExport = ej2Pivotview.beforeExcelExport;
exports.memberFiltering = ej2Pivotview.memberFiltering;
exports.initialLoad = ej2Pivotview.initialLoad;
exports.uiUpdate = ej2Pivotview.uiUpdate;
exports.scroll = ej2Pivotview.scroll;
exports.contentReady = ej2Pivotview.contentReady;
exports.dataReady = ej2Pivotview.dataReady;
exports.initSubComponent = ej2Pivotview.initSubComponent;
exports.treeViewUpdate = ej2Pivotview.treeViewUpdate;
exports.pivotButtonUpdate = ej2Pivotview.pivotButtonUpdate;
exports.initCalculatedField = ej2Pivotview.initCalculatedField;
exports.click = ej2Pivotview.click;
exports.initToolbar = ej2Pivotview.initToolbar;
exports.initFormatting = ej2Pivotview.initFormatting;
exports.initGrouping = ej2Pivotview.initGrouping;
exports.ErrorDialog = ej2Pivotview.ErrorDialog;
exports.FilterDialog = ej2Pivotview.FilterDialog;
exports.PivotContextMenu = ej2Pivotview.PivotContextMenu;
exports.AggregateMenu = ej2Pivotview.AggregateMenu;
exports.Toolbar = ej2Pivotview.Toolbar;
exports.NumberFormatting = ej2Pivotview.NumberFormatting;
exports.Grouping = ej2Pivotview.Grouping;
exports.PivotEngine = ej2Pivotview.PivotEngine;
exports.PivotUtil = ej2Pivotview.PivotUtil;
exports.OlapEngine = ej2Pivotview.OlapEngine;
exports.MDXQuery = ej2Pivotview.MDXQuery;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ej2-angular-pivotview.umd.js.map
