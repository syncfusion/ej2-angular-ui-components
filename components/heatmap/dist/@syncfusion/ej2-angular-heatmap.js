import { ChangeDetectionStrategy, Component, ElementRef, Injector, NgModule, Renderer2, ViewContainerRef } from '@angular/core';
import { ComponentBase, ComponentMixins, setValue } from '@syncfusion/ej2-angular-base';
import { Adaptor, HeatMap, Legend, Tooltip } from '@syncfusion/ej2-heatmap';
import { CommonModule } from '@angular/common';

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs = ['allowSelection', 'cellSettings', 'dataSource', 'dataSourceSettings', 'enablePersistence', 'enableRtl', 'height', 'legendSettings', 'locale', 'margin', 'paletteSettings', 'renderingMode', 'showTooltip', 'theme', 'titleSettings', 'tooltipSettings', 'width', 'xAxis', 'yAxis'];
const outputs = ['cellClick', 'cellRender', 'cellSelected', 'created', 'legendRender', 'load', 'loaded', 'resized', 'tooltipRender'];
const twoWays = [''];
/**
 * `ejs-heatmap` represents the Angular HeatMap Component.
 * ```html
 * <ejs-heatmap></ejs-heatmap>
 * ```
 */
let HeatMapComponent = class HeatMapComponent extends HeatMap {
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = [''];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('HeatMapLegend');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            let mod = this.injector.get('HeatMapTooltip');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            let mod = this.injector.get('HeatMapAdaptor');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
    }
};
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
HeatMapComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
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
class HeatMapModule {
}
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
HeatMapModule.ctorParameters = () => [];

const LegendService = { provide: 'HeatMapLegend', useValue: Legend };
const TooltipService = { provide: 'HeatMapTooltip', useValue: Tooltip };
const AdaptorService = { provide: 'HeatMapAdaptor', useValue: Adaptor };
/**
 * NgModule definition for the HeatMap component with providers.
 */
class HeatMapAllModule {
}
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
HeatMapAllModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { HeatMapComponent, HeatMapModule, HeatMapAllModule, LegendService, TooltipService, AdaptorService, inputs as ɵa, outputs as ɵb };
export { HeatMap, Axis, AxisHelper, Data, AdaptiveMinMax, Adaptor, TwoDimensional, LegendSettings, Legend, Font, Margin, Border, TooltipBorder, BubbleData, Title, PaletteCollection, AxisLabelBorder, BubbleSize, MultiLevelCategories, MultiLevelLabels, ColorCollection, BubbleTooltipData, LegendColorCollection, CellSettings, Series, PaletteSettings, RgbColor, CellColor, TooltipSettings, Tooltip, stringToNumber, measureText, TextElement, titlePositionX, Size, CustomizeOption, PathOption, CurrentRect, SelectedCellDetails, RectOption, CircleOption, Rect, TextOption, TextBasic, Line, LineOption, PathAttributes, Path, sum, titlePositionY, rotateTextSize, DrawSvgCanvas, getTitle, textWrap, textTrim, textNone, Gradient, GradientColor, showTooltip, removeElement, getElement, increaseDateTimeInterval, CanvasTooltip, getTooltipText, PaletterColor, GradientPointer, CurrentLegendRect, LegendRange, ToggleVisibility, colorNameToHex, convertToHexCode, componentToHex, convertHexToColor, formatValue, MultiLevelPosition } from '@syncfusion/ej2-heatmap';
//# sourceMappingURL=ej2-angular-heatmap.js.map
