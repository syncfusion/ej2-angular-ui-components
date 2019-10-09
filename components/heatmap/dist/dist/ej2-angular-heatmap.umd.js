(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@syncfusion/ej2-angular-base'), require('@syncfusion/ej2-heatmap'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@syncfusion/ej2-angular-base', '@syncfusion/ej2-heatmap', '@angular/common'], factory) :
	(factory((global['ej2-angular-heatmap'] = {}),global.ng.core,global.ej2.angular.base,global.ej2.heatmap,global.ng.common));
}(this, (function (exports,core,ej2AngularBase,ej2Heatmap,common) { 'use strict';

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
var inputs = ['allowSelection', 'cellSettings', 'dataSource', 'dataSourceSettings', 'enablePersistence', 'enableRtl', 'height', 'legendSettings', 'locale', 'margin', 'paletteSettings', 'renderingMode', 'showTooltip', 'theme', 'titleSettings', 'tooltipSettings', 'width', 'xAxis', 'yAxis'];
var outputs = ['cellClick', 'cellRender', 'cellSelected', 'created', 'legendRender', 'load', 'loaded', 'resized', 'tooltipRender'];
var twoWays = [''];
/**
 * `ejs-heatmap` represents the Angular HeatMap Component.
 * ```html
 * <ejs-heatmap></ejs-heatmap>
 * ```
 */
exports.HeatMapComponent = /** @class */ (function (_super) {
    __extends(HeatMapComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function HeatMapComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.tags = [''];
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        try {
            var mod = _this.injector.get('HeatMapLegend');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            var mod = _this.injector.get('HeatMapTooltip');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            var mod = _this.injector.get('HeatMapAdaptor');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        _this.registerEvents(outputs);
        _this.addTwoWay.call(_this, twoWays);
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @return {?}
     */
    HeatMapComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    HeatMapComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    HeatMapComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    HeatMapComponent.prototype.ngAfterContentChecked = function () {
    };
    return HeatMapComponent;
}(ej2Heatmap.HeatMap));
exports.HeatMapComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-heatmap',
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
exports.HeatMapComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.HeatMapComponent = __decorate([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.HeatMapComponent);
/**
 * NgModule definition for the HeatMap component.
 */
var HeatMapModule = /** @class */ (function () {
    function HeatMapModule() {
    }
    return HeatMapModule;
}());
HeatMapModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.HeatMapComponent
                ],
                exports: [
                    exports.HeatMapComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
HeatMapModule.ctorParameters = function () { return []; };
var LegendService = { provide: 'HeatMapLegend', useValue: ej2Heatmap.Legend };
var TooltipService = { provide: 'HeatMapTooltip', useValue: ej2Heatmap.Tooltip };
var AdaptorService = { provide: 'HeatMapAdaptor', useValue: ej2Heatmap.Adaptor };
/**
 * NgModule definition for the HeatMap component with providers.
 */
var HeatMapAllModule = /** @class */ (function () {
    function HeatMapAllModule() {
    }
    return HeatMapAllModule;
}());
HeatMapAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, HeatMapModule],
                exports: [
                    HeatMapModule
                ],
                providers: [
                    LegendService,
                    TooltipService,
                    AdaptorService
                ]
            },] },
];
/**
 * @nocollapse
 */
HeatMapAllModule.ctorParameters = function () { return []; };

exports.HeatMapModule = HeatMapModule;
exports.HeatMapAllModule = HeatMapAllModule;
exports.LegendService = LegendService;
exports.TooltipService = TooltipService;
exports.AdaptorService = AdaptorService;
exports.ɵa = inputs;
exports.ɵb = outputs;
exports.HeatMap = ej2Heatmap.HeatMap;
exports.Axis = ej2Heatmap.Axis;
exports.AxisHelper = ej2Heatmap.AxisHelper;
exports.Data = ej2Heatmap.Data;
exports.AdaptiveMinMax = ej2Heatmap.AdaptiveMinMax;
exports.Adaptor = ej2Heatmap.Adaptor;
exports.TwoDimensional = ej2Heatmap.TwoDimensional;
exports.LegendSettings = ej2Heatmap.LegendSettings;
exports.Legend = ej2Heatmap.Legend;
exports.Font = ej2Heatmap.Font;
exports.Margin = ej2Heatmap.Margin;
exports.Border = ej2Heatmap.Border;
exports.TooltipBorder = ej2Heatmap.TooltipBorder;
exports.BubbleData = ej2Heatmap.BubbleData;
exports.Title = ej2Heatmap.Title;
exports.PaletteCollection = ej2Heatmap.PaletteCollection;
exports.AxisLabelBorder = ej2Heatmap.AxisLabelBorder;
exports.BubbleSize = ej2Heatmap.BubbleSize;
exports.MultiLevelCategories = ej2Heatmap.MultiLevelCategories;
exports.MultiLevelLabels = ej2Heatmap.MultiLevelLabels;
exports.ColorCollection = ej2Heatmap.ColorCollection;
exports.BubbleTooltipData = ej2Heatmap.BubbleTooltipData;
exports.LegendColorCollection = ej2Heatmap.LegendColorCollection;
exports.CellSettings = ej2Heatmap.CellSettings;
exports.Series = ej2Heatmap.Series;
exports.PaletteSettings = ej2Heatmap.PaletteSettings;
exports.RgbColor = ej2Heatmap.RgbColor;
exports.CellColor = ej2Heatmap.CellColor;
exports.TooltipSettings = ej2Heatmap.TooltipSettings;
exports.Tooltip = ej2Heatmap.Tooltip;
exports.stringToNumber = ej2Heatmap.stringToNumber;
exports.measureText = ej2Heatmap.measureText;
exports.TextElement = ej2Heatmap.TextElement;
exports.titlePositionX = ej2Heatmap.titlePositionX;
exports.Size = ej2Heatmap.Size;
exports.CustomizeOption = ej2Heatmap.CustomizeOption;
exports.PathOption = ej2Heatmap.PathOption;
exports.CurrentRect = ej2Heatmap.CurrentRect;
exports.SelectedCellDetails = ej2Heatmap.SelectedCellDetails;
exports.RectOption = ej2Heatmap.RectOption;
exports.CircleOption = ej2Heatmap.CircleOption;
exports.Rect = ej2Heatmap.Rect;
exports.TextOption = ej2Heatmap.TextOption;
exports.TextBasic = ej2Heatmap.TextBasic;
exports.Line = ej2Heatmap.Line;
exports.LineOption = ej2Heatmap.LineOption;
exports.PathAttributes = ej2Heatmap.PathAttributes;
exports.Path = ej2Heatmap.Path;
exports.sum = ej2Heatmap.sum;
exports.titlePositionY = ej2Heatmap.titlePositionY;
exports.rotateTextSize = ej2Heatmap.rotateTextSize;
exports.DrawSvgCanvas = ej2Heatmap.DrawSvgCanvas;
exports.getTitle = ej2Heatmap.getTitle;
exports.textWrap = ej2Heatmap.textWrap;
exports.textTrim = ej2Heatmap.textTrim;
exports.textNone = ej2Heatmap.textNone;
exports.Gradient = ej2Heatmap.Gradient;
exports.GradientColor = ej2Heatmap.GradientColor;
exports.showTooltip = ej2Heatmap.showTooltip;
exports.removeElement = ej2Heatmap.removeElement;
exports.getElement = ej2Heatmap.getElement;
exports.increaseDateTimeInterval = ej2Heatmap.increaseDateTimeInterval;
exports.CanvasTooltip = ej2Heatmap.CanvasTooltip;
exports.getTooltipText = ej2Heatmap.getTooltipText;
exports.PaletterColor = ej2Heatmap.PaletterColor;
exports.GradientPointer = ej2Heatmap.GradientPointer;
exports.CurrentLegendRect = ej2Heatmap.CurrentLegendRect;
exports.LegendRange = ej2Heatmap.LegendRange;
exports.ToggleVisibility = ej2Heatmap.ToggleVisibility;
exports.colorNameToHex = ej2Heatmap.colorNameToHex;
exports.convertToHexCode = ej2Heatmap.convertToHexCode;
exports.componentToHex = ej2Heatmap.componentToHex;
exports.convertHexToColor = ej2Heatmap.convertHexToColor;
exports.formatValue = ej2Heatmap.formatValue;
exports.MultiLevelPosition = ej2Heatmap.MultiLevelPosition;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ej2-angular-heatmap.umd.js.map
