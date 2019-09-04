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
import { ChangeDetectionStrategy, Component, ElementRef, Injector, NgModule, Renderer2, ViewContainerRef } from '@angular/core';
import { ComponentBase, ComponentMixins, setValue } from '@syncfusion/ej2-angular-base';
import { Adaptor, HeatMap, Legend, Tooltip } from '@syncfusion/ej2-heatmap';
import { CommonModule } from '@angular/common';
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
var HeatMapComponent = /** @class */ (function (_super) {
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
        setValue('currentInstance', _this, _this.viewContainerRef);
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
}(HeatMap));
HeatMapComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-heatmap',
                inputs: inputs,
                outputs: outputs,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
HeatMapComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
HeatMapComponent = __decorate([
    ComponentMixins([ComponentBase]),
    __metadata("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], HeatMapComponent);
/**
 * NgModule definition for the HeatMap component.
 */
var HeatMapModule = /** @class */ (function () {
    function HeatMapModule() {
    }
    return HeatMapModule;
}());
HeatMapModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    HeatMapComponent
                ],
                exports: [
                    HeatMapComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
HeatMapModule.ctorParameters = function () { return []; };
var LegendService = { provide: 'HeatMapLegend', useValue: Legend };
var TooltipService = { provide: 'HeatMapTooltip', useValue: Tooltip };
var AdaptorService = { provide: 'HeatMapAdaptor', useValue: Adaptor };
/**
 * NgModule definition for the HeatMap component with providers.
 */
var HeatMapAllModule = /** @class */ (function () {
    function HeatMapAllModule() {
    }
    return HeatMapAllModule;
}());
HeatMapAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, HeatMapModule],
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
/**
 * Generated bundle index. Do not edit.
 */
export { HeatMapComponent, HeatMapModule, HeatMapAllModule, LegendService, TooltipService, AdaptorService, inputs as ɵa, outputs as ɵb };
export { HeatMap, Axis, AxisHelper, Data, AdaptiveMinMax, Adaptor, TwoDimensional, LegendSettings, Legend, Font, Margin, Border, TooltipBorder, BubbleData, Title, PaletteCollection, AxisLabelBorder, BubbleSize, MultiLevelCategories, MultiLevelLabels, ColorCollection, BubbleTooltipData, LegendColorCollection, CellSettings, Series, PaletteSettings, RgbColor, CellColor, TooltipSettings, Tooltip, stringToNumber, measureText, TextElement, titlePositionX, Size, CustomizeOption, PathOption, CurrentRect, SelectedCellDetails, RectOption, CircleOption, Rect, TextOption, TextBasic, Line, LineOption, PathAttributes, Path, sum, titlePositionY, rotateTextSize, DrawSvgCanvas, getTitle, textWrap, textTrim, textNone, Gradient, GradientColor, showTooltip, removeElement, getElement, increaseDateTimeInterval, CanvasTooltip, getTooltipText, PaletterColor, GradientPointer, CurrentLegendRect, LegendRange, ToggleVisibility, colorNameToHex, convertToHexCode, componentToHex, convertHexToColor, formatValue, MultiLevelPosition } from '@syncfusion/ej2-heatmap';
//# sourceMappingURL=ej2-angular-heatmap.es5.js.map
