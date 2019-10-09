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
import { TreeMap, TreeMapHighlight, TreeMapLegend, TreeMapSelection, TreeMapTooltip } from '@syncfusion/ej2-treemap';
import { CommonModule } from '@angular/common';
var input = ['color', 'from', 'label', 'maxOpacity', 'minOpacity', 'showLegend', 'to', 'value'];
var outputs = [];
var ColorMappingDirective = /** @class */ (function (_super) {
    __extends(ColorMappingDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function ColorMappingDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs);
        return _this;
    }
    return ColorMappingDirective;
}(ComplexBase));
ColorMappingDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-levels>e-colorMappings>e-colorMapping',
                inputs: input,
                outputs: outputs,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
ColorMappingDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * ColorMapping Array Directive
 */
var ColorMappingsDirective = /** @class */ (function (_super) {
    __extends(ColorMappingsDirective, _super);
    function ColorMappingsDirective() {
        return _super.call(this, 'colormapping') || this;
    }
    return ColorMappingsDirective;
}(ArrayBase));
ColorMappingsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-levels>e-colorMappings',
                queries: {
                    children: new ContentChildren(ColorMappingDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
ColorMappingsDirective.ctorParameters = function () { return []; };
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
var input$1 = ['autoFill', 'border', 'colorMapping', 'fill', 'groupGap', 'groupPadding', 'groupPath', 'headerAlignment', 'headerFormat', 'headerHeight', 'headerStyle', 'headerTemplate', 'opacity', 'showHeader', 'templatePosition'];
var outputs$1 = [];
/**
 * Level Directive
 * ```html
 * <e-levels>
 * <e-level></e-level>
 * </e-levels>
 * ```
 */
var LevelDirective = /** @class */ (function (_super) {
    __extends(LevelDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function LevelDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        _this.tags = ['colorMapping'];
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$1);
        return _this;
    }
    return LevelDirective;
}(ComplexBase));
LevelDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-levels>e-level',
                inputs: input$1,
                outputs: outputs$1,
                queries: {
                    childColorMapping: new ContentChild(ColorMappingsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
LevelDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
LevelDirective.propDecorators = {
    'headerTemplate': [{ type: ContentChild, args: ['headerTemplate',] },],
};
__decorate([
    Template(),
    __metadata("design:type", Object)
], LevelDirective.prototype, "headerTemplate", void 0);
/**
 * Level Array Directive
 */
var LevelsDirective = /** @class */ (function (_super) {
    __extends(LevelsDirective, _super);
    function LevelsDirective() {
        return _super.call(this, 'levels') || this;
    }
    return LevelsDirective;
}(ArrayBase));
LevelsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ej-treemap>e-levels',
                queries: {
                    children: new ContentChildren(LevelDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
LevelsDirective.ctorParameters = function () { return []; };
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
var inputs = ['background', 'border', 'breadcrumbConnector', 'colorValuePath', 'dataSource', 'description', 'drillDownView', 'enableBreadcrumb', 'enableDrillDown', 'enablePersistence', 'enableRtl', 'equalColorValuePath', 'format', 'height', 'highlightSettings', 'initialDrillDown', 'layoutType', 'leafItemSettings', 'legendSettings', 'levels', 'locale', 'margin', 'palette', 'query', 'rangeColorValuePath', 'renderDirection', 'selectionSettings', 'tabIndex', 'theme', 'titleSettings', 'tooltipSettings', 'useGroupingSeparator', 'weightValuePath', 'width'];
var outputs$2 = ['beforePrint', 'click', 'doubleClick', 'drillEnd', 'drillStart', 'itemClick', 'itemHighlight', 'itemMove', 'itemRendering', 'itemSelected', 'legendItemRendering', 'legendRendering', 'load', 'loaded', 'mouseMove', 'resize', 'rightClick', 'tooltipRendering'];
var twoWays = [''];
/**
 * TreeMap Component
 * ```html
 * <ej-treemap></ej-treemap>
 * ```
 */
var TreeMapComponent = /** @class */ (function (_super) {
    __extends(TreeMapComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function TreeMapComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.tags = ['levels'];
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        try {
            var mod = _this.injector.get('TreeMapTreeMapTooltip');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            var mod = _this.injector.get('TreeMapTreeMapLegend');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            var mod = _this.injector.get('TreeMapTreeMapHighlight');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            var mod = _this.injector.get('TreeMapTreeMapSelection');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        _this.registerEvents(outputs$2);
        _this.addTwoWay.call(_this, twoWays);
        setValue('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @return {?}
     */
    TreeMapComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    TreeMapComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    TreeMapComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    TreeMapComponent.prototype.ngAfterContentChecked = function () {
    };
    return TreeMapComponent;
}(TreeMap));
TreeMapComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-treemap',
                inputs: inputs,
                outputs: outputs$2,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {
                    childLevels: new ContentChild(LevelsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
TreeMapComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
TreeMapComponent.propDecorators = {
    'tooltipSettings_template': [{ type: ContentChild, args: ['tooltipSettingsTemplate',] },],
    'leafItemSettings_labelTemplate': [{ type: ContentChild, args: ['leafItemSettingsLabelTemplate',] },],
};
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], TreeMapComponent.prototype, "tooltipSettings_template", void 0);
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], TreeMapComponent.prototype, "leafItemSettings_labelTemplate", void 0);
TreeMapComponent = __decorate$1([
    ComponentMixins([ComponentBase]),
    __metadata$1("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], TreeMapComponent);
/**
 * NgModule definition for the TreeMap component.
 */
var TreeMapModule = /** @class */ (function () {
    function TreeMapModule() {
    }
    return TreeMapModule;
}());
TreeMapModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    TreeMapComponent,
                    ColorMappingDirective,
                    ColorMappingsDirective,
                    LevelDirective,
                    LevelsDirective
                ],
                exports: [
                    TreeMapComponent,
                    ColorMappingDirective,
                    ColorMappingsDirective,
                    LevelDirective,
                    LevelsDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
TreeMapModule.ctorParameters = function () { return []; };
var TreeMapTooltipService = { provide: 'TreeMapTreeMapTooltip', useValue: TreeMapTooltip };
var TreeMapLegendService = { provide: 'TreeMapTreeMapLegend', useValue: TreeMapLegend };
var TreeMapHighlightService = { provide: 'TreeMapTreeMapHighlight', useValue: TreeMapHighlight };
var TreeMapSelectionService = { provide: 'TreeMapTreeMapSelection', useValue: TreeMapSelection };
/**
 * NgModule definition for the TreeMap component with providers.
 */
var TreeMapAllModule = /** @class */ (function () {
    function TreeMapAllModule() {
    }
    return TreeMapAllModule;
}());
TreeMapAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, TreeMapModule],
                exports: [
                    TreeMapModule
                ],
                providers: [
                    TreeMapTooltipService,
                    TreeMapLegendService,
                    TreeMapHighlightService,
                    TreeMapSelectionService
                ]
            },] },
];
/**
 * @nocollapse
 */
TreeMapAllModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { ColorMappingDirective, ColorMappingsDirective, LevelDirective, LevelsDirective, TreeMapComponent, TreeMapModule, TreeMapAllModule, TreeMapTooltipService, TreeMapLegendService, TreeMapHighlightService, TreeMapSelectionService, inputs as ɵa, outputs$2 as ɵb };
export { TreeMap, LevelsData, Border, Margin, Font, CommonTitleSettings, SubTitleSettings, TitleSettings, ColorMapping, LegendSettings, InitialDrillSettings, LeafItemSettings, TooltipSettings, SelectionSettings, HighlightSettings, LevelSettings, load, loaded, beforePrint, itemRendering, drillStart, drillEnd, itemSelected, itemHighlight, tooltipRendering, itemClick, itemMove, click, doubleClick, rightClick, mouseMove, legendItemRendering, legendRendering, resize, defaultFont, Theme, getThemeStyle, Size, stringToNumber, Rect, RectOption, PathOption, measureText, TextOption, textTrim, Location, findPosition, createTextStyle, renderTextElement, getElement, itemsToOrder, isContainsData, findChildren, findHightLightItems, getTemplateFunction, convertElement, findLabelLocation, measureElement, getArea, getShortestEdge, convertToContainer, convertToRect, getMousePosition, colorMap, deSaturationColor, colorCollections, rgbToHex, getColorByValue, getGradientColor, getPercentageColor, getPercentage, wordWrap, textWrap, hide, orderByArea, removeClassNames, applyOptions, textFormatter, formatValue, ColorValue, convertToHexCode, componentToHex, convertHexToColor, colorNameToHex, drawSymbol, renderLegendShape, isParentItem, TreeMapAjax, removeShape, removeLegend, setColor, removeSelectionWithHighlight, getLegendIndex, pushCollection, ExportUtils, TreeMapLegend, LayoutPanel, TreeMapHighlight, TreeMapSelection, TreeMapTooltip } from '@syncfusion/ej2-treemap';
//# sourceMappingURL=ej2-angular-treemap.es5.js.map
