import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, Directive, ElementRef, Injector, NgModule, Renderer2, ViewContainerRef } from '@angular/core';
import { ArrayBase, ComplexBase, ComponentBase, ComponentMixins, Template, setValue } from '@syncfusion/ej2-angular-base';
import { TreeMap, TreeMapHighlight, TreeMapLegend, TreeMapSelection, TreeMapTooltip } from '@syncfusion/ej2-treemap';
import { CommonModule } from '@angular/common';

let input = ['color', 'from', 'label', 'maxOpacity', 'minOpacity', 'showLegend', 'to', 'value'];
let outputs = [];
class ColorMappingDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
    }
}
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
ColorMappingDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * ColorMapping Array Directive
 */
class ColorMappingsDirective extends ArrayBase {
    constructor() {
        super('colormapping');
    }
}
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
ColorMappingsDirective.ctorParameters = () => [];

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let input$1 = ['autoFill', 'border', 'colorMapping', 'fill', 'groupGap', 'groupPadding', 'groupPath', 'headerAlignment', 'headerFormat', 'headerHeight', 'headerStyle', 'headerTemplate', 'opacity', 'showHeader', 'templatePosition'];
let outputs$1 = [];
/**
 * Level Directive
 * ```html
 * <e-levels>
 * <e-level></e-level>
 * </e-levels>
 * ```
 */
class LevelDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        this.tags = ['colorMapping'];
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$1);
    }
}
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
LevelDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
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
class LevelsDirective extends ArrayBase {
    constructor() {
        super('levels');
    }
}
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
LevelsDirective.ctorParameters = () => [];

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs = ['background', 'border', 'breadcrumbConnector', 'colorValuePath', 'dataSource', 'description', 'drillDownView', 'enableBreadcrumb', 'enableDrillDown', 'enablePersistence', 'enableRtl', 'equalColorValuePath', 'format', 'height', 'highlightSettings', 'initialDrillDown', 'layoutType', 'leafItemSettings', 'legendSettings', 'levels', 'locale', 'margin', 'palette', 'query', 'rangeColorValuePath', 'renderDirection', 'selectionSettings', 'tabIndex', 'theme', 'titleSettings', 'tooltipSettings', 'useGroupingSeparator', 'weightValuePath', 'width'];
const outputs$2 = ['beforePrint', 'click', 'doubleClick', 'drillEnd', 'drillStart', 'itemClick', 'itemHighlight', 'itemMove', 'itemRendering', 'itemSelected', 'legendItemRendering', 'legendRendering', 'load', 'loaded', 'mouseMove', 'resize', 'rightClick', 'tooltipRendering'];
const twoWays = [''];
/**
 * TreeMap Component
 * ```html
 * <ej-treemap></ej-treemap>
 * ```
 */
let TreeMapComponent = class TreeMapComponent extends TreeMap {
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
        this.tags = ['levels'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('TreeMapTreeMapTooltip');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            let mod = this.injector.get('TreeMapTreeMapLegend');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            let mod = this.injector.get('TreeMapTreeMapHighlight');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            let mod = this.injector.get('TreeMapTreeMapSelection');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        this.registerEvents(outputs$2);
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
TreeMapComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
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
class TreeMapModule {
}
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
TreeMapModule.ctorParameters = () => [];

const TreeMapTooltipService = { provide: 'TreeMapTreeMapTooltip', useValue: TreeMapTooltip };
const TreeMapLegendService = { provide: 'TreeMapTreeMapLegend', useValue: TreeMapLegend };
const TreeMapHighlightService = { provide: 'TreeMapTreeMapHighlight', useValue: TreeMapHighlight };
const TreeMapSelectionService = { provide: 'TreeMapTreeMapSelection', useValue: TreeMapSelection };
/**
 * NgModule definition for the TreeMap component with providers.
 */
class TreeMapAllModule {
}
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
TreeMapAllModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { ColorMappingDirective, ColorMappingsDirective, LevelDirective, LevelsDirective, TreeMapComponent, TreeMapModule, TreeMapAllModule, TreeMapTooltipService, TreeMapLegendService, TreeMapHighlightService, TreeMapSelectionService, inputs as ɵa, outputs$2 as ɵb };
export { TreeMap, LevelsData, Border, Margin, Font, CommonTitleSettings, SubTitleSettings, TitleSettings, ColorMapping, LegendSettings, InitialDrillSettings, LeafItemSettings, TooltipSettings, SelectionSettings, HighlightSettings, LevelSettings, load, loaded, beforePrint, itemRendering, drillStart, drillEnd, itemSelected, itemHighlight, tooltipRendering, itemClick, itemMove, click, doubleClick, rightClick, mouseMove, legendItemRendering, legendRendering, resize, defaultFont, Theme, getThemeStyle, Size, stringToNumber, Rect, RectOption, PathOption, measureText, TextOption, textTrim, Location, findPosition, createTextStyle, renderTextElement, getElement, itemsToOrder, isContainsData, findChildren, findHightLightItems, getTemplateFunction, convertElement, findLabelLocation, measureElement, getArea, getShortestEdge, convertToContainer, convertToRect, getMousePosition, colorMap, deSaturationColor, colorCollections, rgbToHex, getColorByValue, getGradientColor, getPercentageColor, getPercentage, wordWrap, textWrap, hide, orderByArea, removeClassNames, applyOptions, textFormatter, formatValue, ColorValue, convertToHexCode, componentToHex, convertHexToColor, colorNameToHex, drawSymbol, renderLegendShape, isParentItem, TreeMapAjax, removeShape, removeLegend, setColor, removeSelectionWithHighlight, getLegendIndex, pushCollection, ExportUtils, TreeMapLegend, LayoutPanel, TreeMapHighlight, TreeMapSelection, TreeMapTooltip } from '@syncfusion/ej2-treemap';
//# sourceMappingURL=ej2-angular-treemap.js.map
