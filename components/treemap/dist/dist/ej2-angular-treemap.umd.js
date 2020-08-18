(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@syncfusion/ej2-angular-base'), require('@syncfusion/ej2-treemap'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@syncfusion/ej2-angular-base', '@syncfusion/ej2-treemap', '@angular/common'], factory) :
	(factory((global['ej2-angular-treemap'] = {}),global.ng.core,global.ej2.angular.base,global.ej2.treemap,global.ng.common));
}(this, (function (exports,core,ej2AngularBase,ej2Treemap,common) { 'use strict';

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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs);
        _this.directivePropList = input;
        return _this;
    }
    return ColorMappingDirective;
}(ej2AngularBase.ComplexBase));
ColorMappingDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
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
}(ej2AngularBase.ArrayBase));
ColorMappingsDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-levels>e-colorMappings',
                queries: {
                    children: new core.ContentChildren(ColorMappingDirective)
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$1);
        _this.directivePropList = input$1;
        return _this;
    }
    return LevelDirective;
}(ej2AngularBase.ComplexBase));
LevelDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-levels>e-level',
                inputs: input$1,
                outputs: outputs$1,
                queries: {
                    childColorMapping: new core.ContentChild(ColorMappingsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
LevelDirective.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
]; };
LevelDirective.propDecorators = {
    'headerTemplate': [{ type: core.ContentChild, args: ['headerTemplate',] },],
};
__decorate([
    ej2AngularBase.Template(),
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
}(ej2AngularBase.ArrayBase));
LevelsDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ej-treemap>e-levels',
                queries: {
                    children: new core.ContentChildren(LevelDirective)
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
var inputs = ['allowImageExport', 'allowPdfExport', 'allowPrint', 'background', 'border', 'breadcrumbConnector', 'colorValuePath', 'dataSource', 'description', 'drillDownView', 'enableBreadcrumb', 'enableDrillDown', 'enablePersistence', 'enableRtl', 'equalColorValuePath', 'format', 'height', 'highlightSettings', 'initialDrillDown', 'layoutType', 'leafItemSettings', 'legendSettings', 'levels', 'locale', 'margin', 'palette', 'query', 'rangeColorValuePath', 'renderDirection', 'selectionSettings', 'tabIndex', 'theme', 'titleSettings', 'tooltipSettings', 'useGroupingSeparator', 'weightValuePath', 'width'];
var outputs$2 = ['beforePrint', 'click', 'doubleClick', 'drillEnd', 'drillStart', 'itemClick', 'itemHighlight', 'itemMove', 'itemRendering', 'itemSelected', 'legendItemRendering', 'legendRendering', 'load', 'loaded', 'mouseMove', 'resize', 'rightClick', 'tooltipRendering'];
var twoWays = [''];
/**
 * TreeMap Component
 * ```html
 * <ej-treemap></ej-treemap>
 * ```
 */
exports.TreeMapComponent = /** @class */ (function (_super) {
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
            var mod = _this.injector.get('TreeMapPrint');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            var mod = _this.injector.get('TreeMapPdfExport');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            var mod = _this.injector.get('TreeMapImageExport');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            var mod = _this.injector.get('TreeMapTreeMapTooltip');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            var mod = _this.injector.get('TreeMapTreeMapLegend');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            var mod = _this.injector.get('TreeMapTreeMapHighlight');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        try {
            var mod = _this.injector.get('TreeMapTreeMapSelection');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_g) { }
        _this.registerEvents(outputs$2);
        _this.addTwoWay.call(_this, twoWays);
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.context = new ej2AngularBase.ComponentBase();
        return _this;
    }
    /**
     * @return {?}
     */
    TreeMapComponent.prototype.ngOnInit = function () {
        this.context.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    TreeMapComponent.prototype.ngAfterViewInit = function () {
        this.context.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    TreeMapComponent.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    TreeMapComponent.prototype.ngAfterContentChecked = function () {
        this.tagObjects[0].instance = this.childLevels;
        this.context.ngAfterContentChecked(this);
    };
    return TreeMapComponent;
}(ej2Treemap.TreeMap));
exports.TreeMapComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-treemap',
                inputs: inputs,
                outputs: outputs$2,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {
                    childLevels: new core.ContentChild(LevelsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
exports.TreeMapComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.TreeMapComponent.propDecorators = {
    'tooltipSettings_template': [{ type: core.ContentChild, args: ['tooltipSettingsTemplate',] },],
    'leafItemSettings_labelTemplate': [{ type: core.ContentChild, args: ['leafItemSettingsLabelTemplate',] },],
};
__decorate$1([
    ej2AngularBase.Template(),
    __metadata$1("design:type", Object)
], exports.TreeMapComponent.prototype, "tooltipSettings_template", void 0);
__decorate$1([
    ej2AngularBase.Template(),
    __metadata$1("design:type", Object)
], exports.TreeMapComponent.prototype, "leafItemSettings_labelTemplate", void 0);
exports.TreeMapComponent = __decorate$1([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata$1("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.TreeMapComponent);
/**
 * NgModule definition for the TreeMap component.
 */
var TreeMapModule = /** @class */ (function () {
    function TreeMapModule() {
    }
    return TreeMapModule;
}());
TreeMapModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.TreeMapComponent,
                    ColorMappingDirective,
                    ColorMappingsDirective,
                    LevelDirective,
                    LevelsDirective
                ],
                exports: [
                    exports.TreeMapComponent,
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
var PrintService = { provide: 'TreeMapPrint', useValue: ej2Treemap.Print };
var PdfExportService = { provide: 'TreeMapPdfExport', useValue: ej2Treemap.PdfExport };
var ImageExportService = { provide: 'TreeMapImageExport', useValue: ej2Treemap.ImageExport };
var TreeMapTooltipService = { provide: 'TreeMapTreeMapTooltip', useValue: ej2Treemap.TreeMapTooltip };
var TreeMapLegendService = { provide: 'TreeMapTreeMapLegend', useValue: ej2Treemap.TreeMapLegend };
var TreeMapHighlightService = { provide: 'TreeMapTreeMapHighlight', useValue: ej2Treemap.TreeMapHighlight };
var TreeMapSelectionService = { provide: 'TreeMapTreeMapSelection', useValue: ej2Treemap.TreeMapSelection };
/**
 * NgModule definition for the TreeMap component with providers.
 */
var TreeMapAllModule = /** @class */ (function () {
    function TreeMapAllModule() {
    }
    return TreeMapAllModule;
}());
TreeMapAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, TreeMapModule],
                exports: [
                    TreeMapModule
                ],
                providers: [
                    PrintService,
                    PdfExportService,
                    ImageExportService,
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

exports.ColorMappingDirective = ColorMappingDirective;
exports.ColorMappingsDirective = ColorMappingsDirective;
exports.LevelDirective = LevelDirective;
exports.LevelsDirective = LevelsDirective;
exports.TreeMapModule = TreeMapModule;
exports.TreeMapAllModule = TreeMapAllModule;
exports.PrintService = PrintService;
exports.PdfExportService = PdfExportService;
exports.ImageExportService = ImageExportService;
exports.TreeMapTooltipService = TreeMapTooltipService;
exports.TreeMapLegendService = TreeMapLegendService;
exports.TreeMapHighlightService = TreeMapHighlightService;
exports.TreeMapSelectionService = TreeMapSelectionService;
exports.ɵa = inputs;
exports.ɵb = outputs$2;
exports.TreeMap = ej2Treemap.TreeMap;
exports.LevelsData = ej2Treemap.LevelsData;
exports.Border = ej2Treemap.Border;
exports.Margin = ej2Treemap.Margin;
exports.Font = ej2Treemap.Font;
exports.CommonTitleSettings = ej2Treemap.CommonTitleSettings;
exports.SubTitleSettings = ej2Treemap.SubTitleSettings;
exports.TitleSettings = ej2Treemap.TitleSettings;
exports.ColorMapping = ej2Treemap.ColorMapping;
exports.LegendSettings = ej2Treemap.LegendSettings;
exports.InitialDrillSettings = ej2Treemap.InitialDrillSettings;
exports.LeafItemSettings = ej2Treemap.LeafItemSettings;
exports.TooltipSettings = ej2Treemap.TooltipSettings;
exports.SelectionSettings = ej2Treemap.SelectionSettings;
exports.HighlightSettings = ej2Treemap.HighlightSettings;
exports.LevelSettings = ej2Treemap.LevelSettings;
exports.load = ej2Treemap.load;
exports.loaded = ej2Treemap.loaded;
exports.beforePrint = ej2Treemap.beforePrint;
exports.itemRendering = ej2Treemap.itemRendering;
exports.drillStart = ej2Treemap.drillStart;
exports.drillEnd = ej2Treemap.drillEnd;
exports.itemSelected = ej2Treemap.itemSelected;
exports.itemHighlight = ej2Treemap.itemHighlight;
exports.tooltipRendering = ej2Treemap.tooltipRendering;
exports.itemClick = ej2Treemap.itemClick;
exports.itemMove = ej2Treemap.itemMove;
exports.click = ej2Treemap.click;
exports.doubleClick = ej2Treemap.doubleClick;
exports.rightClick = ej2Treemap.rightClick;
exports.mouseMove = ej2Treemap.mouseMove;
exports.legendItemRendering = ej2Treemap.legendItemRendering;
exports.legendRendering = ej2Treemap.legendRendering;
exports.resize = ej2Treemap.resize;
exports.defaultFont = ej2Treemap.defaultFont;
exports.Theme = ej2Treemap.Theme;
exports.getThemeStyle = ej2Treemap.getThemeStyle;
exports.Size = ej2Treemap.Size;
exports.stringToNumber = ej2Treemap.stringToNumber;
exports.Rect = ej2Treemap.Rect;
exports.RectOption = ej2Treemap.RectOption;
exports.PathOption = ej2Treemap.PathOption;
exports.measureText = ej2Treemap.measureText;
exports.TextOption = ej2Treemap.TextOption;
exports.textTrim = ej2Treemap.textTrim;
exports.Location = ej2Treemap.Location;
exports.findPosition = ej2Treemap.findPosition;
exports.createTextStyle = ej2Treemap.createTextStyle;
exports.renderTextElement = ej2Treemap.renderTextElement;
exports.getElement = ej2Treemap.getElement;
exports.itemsToOrder = ej2Treemap.itemsToOrder;
exports.isContainsData = ej2Treemap.isContainsData;
exports.findChildren = ej2Treemap.findChildren;
exports.findHightLightItems = ej2Treemap.findHightLightItems;
exports.getTemplateFunction = ej2Treemap.getTemplateFunction;
exports.convertElement = ej2Treemap.convertElement;
exports.findLabelLocation = ej2Treemap.findLabelLocation;
exports.measureElement = ej2Treemap.measureElement;
exports.getArea = ej2Treemap.getArea;
exports.getShortestEdge = ej2Treemap.getShortestEdge;
exports.convertToContainer = ej2Treemap.convertToContainer;
exports.convertToRect = ej2Treemap.convertToRect;
exports.getMousePosition = ej2Treemap.getMousePosition;
exports.colorMap = ej2Treemap.colorMap;
exports.deSaturationColor = ej2Treemap.deSaturationColor;
exports.colorCollections = ej2Treemap.colorCollections;
exports.rgbToHex = ej2Treemap.rgbToHex;
exports.getColorByValue = ej2Treemap.getColorByValue;
exports.getGradientColor = ej2Treemap.getGradientColor;
exports.getPercentageColor = ej2Treemap.getPercentageColor;
exports.getPercentage = ej2Treemap.getPercentage;
exports.wordWrap = ej2Treemap.wordWrap;
exports.textWrap = ej2Treemap.textWrap;
exports.hide = ej2Treemap.hide;
exports.orderByArea = ej2Treemap.orderByArea;
exports.maintainSelection = ej2Treemap.maintainSelection;
exports.legendMaintain = ej2Treemap.legendMaintain;
exports.removeClassNames = ej2Treemap.removeClassNames;
exports.applyOptions = ej2Treemap.applyOptions;
exports.textFormatter = ej2Treemap.textFormatter;
exports.formatValue = ej2Treemap.formatValue;
exports.ColorValue = ej2Treemap.ColorValue;
exports.convertToHexCode = ej2Treemap.convertToHexCode;
exports.componentToHex = ej2Treemap.componentToHex;
exports.convertHexToColor = ej2Treemap.convertHexToColor;
exports.colorNameToHex = ej2Treemap.colorNameToHex;
exports.drawSymbol = ej2Treemap.drawSymbol;
exports.renderLegendShape = ej2Treemap.renderLegendShape;
exports.isParentItem = ej2Treemap.isParentItem;
exports.TreeMapAjax = ej2Treemap.TreeMapAjax;
exports.removeShape = ej2Treemap.removeShape;
exports.removeLegend = ej2Treemap.removeLegend;
exports.setColor = ej2Treemap.setColor;
exports.removeSelectionWithHighlight = ej2Treemap.removeSelectionWithHighlight;
exports.getLegendIndex = ej2Treemap.getLegendIndex;
exports.pushCollection = ej2Treemap.pushCollection;
exports.triggerDownload = ej2Treemap.triggerDownload;
exports.removeElement = ej2Treemap.removeElement;
exports.TreeMapLegend = ej2Treemap.TreeMapLegend;
exports.LayoutPanel = ej2Treemap.LayoutPanel;
exports.TreeMapHighlight = ej2Treemap.TreeMapHighlight;
exports.TreeMapSelection = ej2Treemap.TreeMapSelection;
exports.TreeMapTooltip = ej2Treemap.TreeMapTooltip;
exports.ImageExport = ej2Treemap.ImageExport;
exports.PdfExport = ej2Treemap.PdfExport;
exports.Print = ej2Treemap.Print;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ej2-angular-treemap.umd.js.map
