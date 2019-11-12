import { ChangeDetectionStrategy, Component, ContentChild, ElementRef, Injector, NgModule, Renderer2, ViewContainerRef } from '@angular/core';
import { ComponentBase, ComponentMixins, Template, setValue } from '@syncfusion/ej2-angular-base';
import { CalculatedField, ConditionalFormatting, DrillThrough, ExcelExport, FieldList, GroupingBar, NumberFormatting, PDFExport, PivotChart, PivotFieldList, PivotView, Toolbar, VirtualScroll } from '@syncfusion/ej2-pivotview';
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
const inputs = ['allowCalculatedField', 'allowConditionalFormatting', 'allowDataCompression', 'allowDeferLayoutUpdate', 'allowDrillThrough', 'allowExcelExport', 'allowNumberFormatting', 'allowPdfExport', 'cellTemplate', 'chartSettings', 'currencyCode', 'dataSourceSettings', 'displayOption', 'editSettings', 'enablePersistence', 'enableRtl', 'enableValueSorting', 'enableVirtualization', 'gridSettings', 'groupingBarSettings', 'height', 'hyperlinkSettings', 'loadOnDemandInMemberEditor', 'locale', 'maxNodeLimitInMemberEditor', 'maxRowsInDrillThrough', 'pivotValues', 'showFieldList', 'showGroupingBar', 'showToolbar', 'showTooltip', 'showValuesButton', 'spinnerTemplate', 'toolbar', 'width'];
const outputs = ['aggregateCellInfo', 'beforeExport', 'beginDrillThrough', 'cellClick', 'cellSelected', 'cellSelecting', 'chartSeriesCreated', 'conditionalFormatting', 'created', 'dataBound', 'destroyed', 'drill', 'drillThrough', 'enginePopulated', 'enginePopulating', 'fetchReport', 'fieldListRefreshed', 'hyperlinkCellClick', 'load', 'loadReport', 'memberFiltering', 'newReport', 'onFieldDropped', 'onPdfCellRender', 'removeReport', 'renameReport', 'saveReport', 'toolbarClick', 'toolbarRender'];
const twoWays = [];
/**
 * `ej-pivotview` represents the Angular PivotView Component.
 * ```html
 * <ej-pivotview></ej-pivotview>
 * ```
 */
let PivotViewComponent = class PivotViewComponent extends PivotView {
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
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('PivotViewGroupingBar');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            let mod = this.injector.get('PivotViewFieldList');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            let mod = this.injector.get('PivotViewCalculatedField');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            let mod = this.injector.get('PivotViewConditionalFormatting');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            let mod = this.injector.get('PivotViewVirtualScroll');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            let mod = this.injector.get('PivotViewDrillThrough');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        try {
            let mod = this.injector.get('PivotViewToolbar');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_g) { }
        try {
            let mod = this.injector.get('PivotViewPivotChart');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_h) { }
        try {
            let mod = this.injector.get('PivotViewPDFExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_j) { }
        try {
            let mod = this.injector.get('PivotViewExcelExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_k) { }
        try {
            let mod = this.injector.get('PivotViewNumberFormatting');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_l) { }
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
PivotViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-pivotview',
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
PivotViewComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
PivotViewComponent.propDecorators = {
    'cellTemplate': [{ type: ContentChild, args: ['cellTemplate',] },],
};
__decorate([
    Template(),
    __metadata("design:type", Object)
], PivotViewComponent.prototype, "cellTemplate", void 0);
PivotViewComponent = __decorate([
    ComponentMixins([ComponentBase]),
    __metadata("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], PivotViewComponent);

/**
 * NgModule definition for the PivotView component.
 */
class PivotViewModule {
}
PivotViewModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    PivotViewComponent
                ],
                exports: [
                    PivotViewComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
PivotViewModule.ctorParameters = () => [];

const GroupingBarService = { provide: 'PivotViewGroupingBar', useValue: GroupingBar };
const FieldListService = { provide: 'PivotViewFieldList', useValue: FieldList };
const CalculatedFieldService = { provide: 'PivotViewCalculatedField', useValue: CalculatedField };
const ConditionalFormattingService = { provide: 'PivotViewConditionalFormatting', useValue: ConditionalFormatting };
const VirtualScrollService = { provide: 'PivotViewVirtualScroll', useValue: VirtualScroll };
const DrillThroughService = { provide: 'PivotViewDrillThrough', useValue: DrillThrough };
const ToolbarService = { provide: 'PivotViewToolbar', useValue: Toolbar };
const PivotChartService = { provide: 'PivotViewPivotChart', useValue: PivotChart };
const PDFExportService = { provide: 'PivotViewPDFExport', useValue: PDFExport };
const ExcelExportService = { provide: 'PivotViewExcelExport', useValue: ExcelExport };
const NumberFormattingService = { provide: 'PivotViewNumberFormatting', useValue: NumberFormatting };
/**
 * NgModule definition for the PivotView component with providers.
 */
class PivotViewAllModule {
}
PivotViewAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, PivotViewModule],
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
                    NumberFormattingService
                ]
            },] },
];
/**
 * @nocollapse
 */
PivotViewAllModule.ctorParameters = () => [];

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs$1 = ['allowCalculatedField', 'allowDeferLayoutUpdate', 'cssClass', 'dataSourceSettings', 'enablePersistence', 'enableRtl', 'loadOnDemandInMemberEditor', 'locale', 'maxNodeLimitInMemberEditor', 'renderMode', 'showValuesButton', 'spinnerTemplate', 'target'];
const outputs$1 = ['aggregateCellInfo', 'created', 'dataBound', 'destroyed', 'enginePopulated', 'enginePopulating', 'load', 'memberFiltering', 'onFieldDropped'];
const twoWays$1 = [];
/**
 * `ej-pivotfieldlist` represents the Angular PivotFieldList Component.
 * ```html
 * <ej-pivotfieldlist></ej-pivotfieldlist>
 * ```
 */
let PivotFieldListComponent = class PivotFieldListComponent extends PivotFieldList {
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
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        this.registerEvents(outputs$1);
        this.addTwoWay.call(this, twoWays$1);
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
PivotFieldListComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-pivotfieldlist',
                inputs: inputs$1,
                outputs: outputs$1,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
PivotFieldListComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
PivotFieldListComponent = __decorate$1([
    ComponentMixins([ComponentBase]),
    __metadata$1("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], PivotFieldListComponent);

/**
 * NgModule definition for the PivotFieldList component.
 */
class PivotFieldListModule {
}
PivotFieldListModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    PivotFieldListComponent
                ],
                exports: [
                    PivotFieldListComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
PivotFieldListModule.ctorParameters = () => [];

/**
 * NgModule definition for the PivotFieldList component with providers.
 */
class PivotFieldListAllModule {
}
PivotFieldListAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, PivotFieldListModule],
                exports: [
                    PivotFieldListModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
PivotFieldListAllModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { PivotViewComponent, PivotViewModule, PivotViewAllModule, GroupingBarService, FieldListService, CalculatedFieldService, ConditionalFormattingService, VirtualScrollService, DrillThroughService, ToolbarService, PivotChartService, PDFExportService, ExcelExportService, NumberFormattingService, PivotFieldListComponent, PivotFieldListModule, PivotFieldListAllModule, inputs$1 as ɵc, outputs$1 as ɵd, inputs as ɵa, outputs as ɵb };
export { GroupingBarSettings, CellEditSettings, ConditionalSettings, HyperlinkSettings, DisplayOption, PivotView, Render, ExcelExport, PDFExport, KeyboardInteraction, VirtualScroll, DrillThrough, PivotChart, PivotFieldList, TreeViewRenderer, AxisFieldRenderer, AxisTableRenderer, DialogRenderer, EventBase, NodeStateModified, DataSourceUpdate, FieldList, CommonKeyboardInteraction, GroupingBar, CalculatedField, ConditionalFormatting, PivotCommon, load, enginePopulating, enginePopulated, onFieldDropped, beforePivotTableRender, afterPivotTableRender, beforeExport, excelHeaderQueryCellInfo, pdfHeaderQueryCellInfo, excelQueryCellInfo, pdfQueryCellInfo, onPdfCellRender, dataBound, queryCellInfo, headerCellInfo, hyperlinkCellClick, resizing, resizeStop, cellClick, drillThrough, beforeColumnsRender, selected, cellSelecting, drill, cellSelected, cellDeselected, rowSelected, rowDeselected, beginDrillThrough, saveReport, fetchReport, loadReport, renameReport, removeReport, newReport, toolbarRender, toolbarClick, chartTooltipRender, chartLoaded, chartLoad, chartResized, chartAxisLabelRender, chartSeriesCreated, aggregateCellInfo, contextMenuClick, contextMenuOpen, fieldListRefreshed, conditionalFormatting, beforePdfExport, beforeExcelExport, memberFiltering, initialLoad, uiUpdate, scroll, contentReady, dataReady, initSubComponent, treeViewUpdate, pivotButtonUpdate, initCalculatedField, click, initToolbar, initFormatting, ErrorDialog, FilterDialog, PivotContextMenu, AggregateMenu, Toolbar, NumberFormatting, PivotEngine, PivotUtil, OlapEngine, MDXQuery } from '@syncfusion/ej2-pivotview';
//# sourceMappingURL=ej2-angular-pivotview.js.map
