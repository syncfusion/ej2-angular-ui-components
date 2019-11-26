import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, Directive, ElementRef, Injector, NgModule, Renderer2, ViewContainerRef } from '@angular/core';
import { ArrayBase, ComplexBase, ComponentBase, ComponentMixins, Template, setValue } from '@syncfusion/ej2-angular-base';
import { Aggregate, ColumnChooser, ColumnMenu, CommandColumn, ContextMenu, DetailRow, Edit, ExcelExport, Filter, ForeignKey, Freeze, Grid, Group, Page, Pager, PdfExport, Reorder, Resize, RowDD, Search, Selection, Sort, Toolbar, VirtualScroll } from '@syncfusion/ej2-grids';
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
let input = ['allowEditing', 'allowFiltering', 'allowGrouping', 'allowReordering', 'allowResizing', 'allowSearching', 'allowSorting', 'autoFit', 'clipMode', 'columns', 'commands', 'customAttributes', 'dataSource', 'defaultValue', 'disableHtmlEncode', 'displayAsCheckBox', 'edit', 'editTemplate', 'editType', 'enableGroupByFormat', 'field', 'filter', 'filterBarTemplate', 'filterTemplate', 'foreignKeyField', 'foreignKeyValue', 'format', 'formatter', 'headerTemplate', 'headerText', 'headerTextAlign', 'hideAtMedia', 'index', 'isFrozen', 'isIdentity', 'isPrimaryKey', 'lockColumn', 'maxWidth', 'minWidth', 'showColumnMenu', 'showInColumnChooser', 'sortComparer', 'template', 'textAlign', 'type', 'uid', 'validationRules', 'valueAccessor', 'visible', 'width'];
let outputs = [];
/**
 * `e-column` directive represent a column of the Angular Grid.
 * It must be contained in a Grid component(`ejs-grid`).
 * ```html
 * <ejs-grid [dataSource]='data' allowPaging='true' allowSorting='true'>
 *   <e-columns>
 *    <e-column field='ID' width='100'></e-column>
 *    <e-column field='name' headerText='Name' width='100'></e-column>
 *   </e-columns>
 * </ejs-grid>
 * ```
 */
class ColumnDirective extends ComplexBase {
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
ColumnDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-grid>e-columns>e-column',
                inputs: input,
                outputs: outputs,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
ColumnDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
ColumnDirective.propDecorators = {
    'template': [{ type: ContentChild, args: ['template',] },],
    'headerTemplate': [{ type: ContentChild, args: ['headerTemplate',] },],
    'commandsTemplate': [{ type: ContentChild, args: ['commandsTemplate',] },],
    'filter_itemTemplate': [{ type: ContentChild, args: ['filterItemTemplate',] },],
    'editTemplate': [{ type: ContentChild, args: ['editTemplate',] },],
    'filterTemplate': [{ type: ContentChild, args: ['filterTemplate',] },],
};
__decorate([
    Template(),
    __metadata("design:type", Object)
], ColumnDirective.prototype, "template", void 0);
__decorate([
    Template(),
    __metadata("design:type", Object)
], ColumnDirective.prototype, "headerTemplate", void 0);
__decorate([
    Template(),
    __metadata("design:type", Object)
], ColumnDirective.prototype, "commandsTemplate", void 0);
__decorate([
    Template(),
    __metadata("design:type", Object)
], ColumnDirective.prototype, "filter_itemTemplate", void 0);
__decorate([
    Template(),
    __metadata("design:type", Object)
], ColumnDirective.prototype, "editTemplate", void 0);
__decorate([
    Template(),
    __metadata("design:type", Object)
], ColumnDirective.prototype, "filterTemplate", void 0);
/**
 * Column Array Directive
 */
class ColumnsDirective extends ArrayBase {
    constructor() {
        super('columns');
    }
}
ColumnsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-grid>e-columns',
                queries: {
                    children: new ContentChildren(ColumnDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
ColumnsDirective.ctorParameters = () => [];

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let input$1 = ['columnName', 'customAggregate', 'field', 'footerTemplate', 'format', 'groupCaptionTemplate', 'groupFooterTemplate', 'type'];
let outputs$1 = [];
/**
 * `e-aggregate->e-column` directive represent a aggregate column of the Angular Grid.
 * ```html
 * <ejs-grid [dataSource]='data' allowPaging='true' allowSorting='true'>
 *   <e-columns>
 *     <e-column field='ID' width='100'></e-column>
 *     <e-column field='name' headerText='Name' width='100'></e-column>
 *   </e-columns>
 *   <e-aggregates>
 *     <e-aggregate>
 *       <e-columns>
 *         <e-column field='ID' type='Min'></e-column>
 *       </e-columns>
 *      </e-aggregate>
 *    </e-aggregates>
 * </ejs-grid>
 * ```
 */
class AggregateColumnDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$1);
    }
}
AggregateColumnDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-grid>e-aggregates>e-aggregate>e-columns>e-column',
                inputs: input$1,
                outputs: outputs$1,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
AggregateColumnDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
AggregateColumnDirective.propDecorators = {
    'footerTemplate': [{ type: ContentChild, args: ['footerTemplate',] },],
    'groupFooterTemplate': [{ type: ContentChild, args: ['groupFooterTemplate',] },],
    'groupCaptionTemplate': [{ type: ContentChild, args: ['groupCaptionTemplate',] },],
};
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], AggregateColumnDirective.prototype, "footerTemplate", void 0);
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], AggregateColumnDirective.prototype, "groupFooterTemplate", void 0);
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], AggregateColumnDirective.prototype, "groupCaptionTemplate", void 0);
/**
 * AggregateColumn Array Directive
 */
class AggregateColumnsDirective extends ArrayBase {
    constructor() {
        super('columns');
    }
}
AggregateColumnsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-grid>e-aggregates>e-aggregate>e-columns',
                queries: {
                    children: new ContentChildren(AggregateColumnDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
AggregateColumnsDirective.ctorParameters = () => [];

let input$2 = ['columns'];
let outputs$2 = [];
/**
 * `e-aggregate` directive represent a aggregate row of the Angular Grid.
 * It must be contained in a Grid component(`ejs-grid`).
 * ```html
 * <ejs-grid [dataSource]='data' allowPaging='true' allowSorting='true'>
 *   <e-columns>
 *     <e-column field='ID' width='100'></e-column>
 *     <e-column field='name' headerText='Name' width='100'></e-column>
 *   </e-columns>
 *   <e-aggregates>
 *     <e-aggregate>
 *       <e-columns>
 *         <e-column field='ID' type='Min'></e-column>
 *       </e-columns>
 *      </e-aggregate>
 *    </e-aggregates>
 * </ejs-grid>
 * ```
 */
class AggregateDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        this.tags = ['columns'];
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$2);
    }
}
AggregateDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-grid>e-aggregates>e-aggregate',
                inputs: input$2,
                outputs: outputs$2,
                queries: {
                    childColumns: new ContentChild(AggregateColumnsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
AggregateDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * Aggregate Array Directive
 */
class AggregatesDirective extends ArrayBase {
    constructor() {
        super('aggregates');
    }
}
AggregatesDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-grid>e-aggregates',
                queries: {
                    children: new ContentChildren(AggregateDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
AggregatesDirective.ctorParameters = () => [];

var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs = ['aggregates', 'allowExcelExport', 'allowFiltering', 'allowGrouping', 'allowMultiSorting', 'allowPaging', 'allowPdfExport', 'allowReordering', 'allowResizing', 'allowRowDragAndDrop', 'allowSelection', 'allowSorting', 'allowTextWrap', 'childGrid', 'columnMenuItems', 'columnQueryMode', 'columns', 'contextMenuItems', 'currencyCode', 'dataSource', 'detailTemplate', 'editSettings', 'enableAltRow', 'enableAutoFill', 'enableColumnVirtualization', 'enableHover', 'enablePersistence', 'enableRtl', 'enableVirtualization', 'filterSettings', 'frozenColumns', 'frozenRows', 'gridLines', 'groupSettings', 'height', 'hierarchyPrintMode', 'locale', 'pageSettings', 'pagerTemplate', 'printMode', 'query', 'queryString', 'rowDropSettings', 'rowHeight', 'rowTemplate', 'searchSettings', 'selectedRowIndex', 'selectionSettings', 'showColumnChooser', 'showColumnMenu', 'sortSettings', 'textWrapSettings', 'toolbar', 'toolbarTemplate', 'width'];
const outputs$3 = ['actionBegin', 'actionComplete', 'actionFailure', 'batchAdd', 'batchCancel', 'batchDelete', 'beforeBatchAdd', 'beforeBatchDelete', 'beforeBatchSave', 'beforeCopy', 'beforeDataBound', 'beforeExcelExport', 'beforeOpenColumnChooser', 'beforePaste', 'beforePdfExport', 'beforePrint', 'beginEdit', 'cellDeselected', 'cellDeselecting', 'cellEdit', 'cellSave', 'cellSaved', 'cellSelected', 'cellSelecting', 'checkBoxChange', 'columnDrag', 'columnDragStart', 'columnDrop', 'columnMenuClick', 'columnMenuOpen', 'commandClick', 'contextMenuClick', 'contextMenuOpen', 'created', 'dataBound', 'dataSourceChanged', 'dataStateChange', 'destroyed', 'detailDataBound', 'excelExportComplete', 'excelHeaderQueryCellInfo', 'excelQueryCellInfo', 'exportDetailDataBound', 'exportGroupCaption', 'headerCellInfo', 'keyPressed', 'load', 'pdfExportComplete', 'pdfHeaderQueryCellInfo', 'pdfQueryCellInfo', 'printComplete', 'queryCellInfo', 'recordDoubleClick', 'resizeStart', 'resizeStop', 'resizing', 'rowDataBound', 'rowDeselected', 'rowDeselecting', 'rowDrag', 'rowDragStart', 'rowDragStartHelper', 'rowDrop', 'rowSelected', 'rowSelecting', 'toolbarClick', 'dataSourceChange'];
const twoWays = ['dataSource'];
/**
 * `ejs-grid` represents the Angular Grid Component.
 * ```html
 * <ejs-grid [dataSource]='data' allowPaging='true' allowSorting='true'></ejs-grid>
 * ```
 */
let GridComponent = class GridComponent extends Grid {
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
        this.tags = ['columns', 'aggregates'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('GridsFilter');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            let mod = this.injector.get('GridsPage');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            let mod = this.injector.get('GridsSelection');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            let mod = this.injector.get('GridsSort');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            let mod = this.injector.get('GridsGroup');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            let mod = this.injector.get('GridsReorder');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        try {
            let mod = this.injector.get('GridsRowDD');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_g) { }
        try {
            let mod = this.injector.get('GridsDetailRow');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_h) { }
        try {
            let mod = this.injector.get('GridsToolbar');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_j) { }
        try {
            let mod = this.injector.get('GridsAggregate');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_k) { }
        try {
            let mod = this.injector.get('GridsSearch');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_l) { }
        try {
            let mod = this.injector.get('GridsVirtualScroll');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_m) { }
        try {
            let mod = this.injector.get('GridsEdit');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_o) { }
        try {
            let mod = this.injector.get('GridsResize');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_p) { }
        try {
            let mod = this.injector.get('GridsExcelExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_q) { }
        try {
            let mod = this.injector.get('GridsPdfExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_r) { }
        try {
            let mod = this.injector.get('GridsCommandColumn');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_s) { }
        try {
            let mod = this.injector.get('GridsContextMenu');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_t) { }
        try {
            let mod = this.injector.get('GridsFreeze');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_u) { }
        try {
            let mod = this.injector.get('GridsColumnMenu');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_v) { }
        try {
            let mod = this.injector.get('GridsColumnChooser');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_w) { }
        try {
            let mod = this.injector.get('GridsForeignKey');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_x) { }
        this.registerEvents(outputs$3);
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
GridComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-grid',
                inputs: inputs,
                outputs: outputs$3,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {
                    childColumns: new ContentChild(ColumnsDirective),
                    childAggregates: new ContentChild(AggregatesDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
GridComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
GridComponent.propDecorators = {
    'rowTemplate': [{ type: ContentChild, args: ['rowTemplate',] },],
    'detailTemplate': [{ type: ContentChild, args: ['detailTemplate',] },],
    'toolbarTemplate': [{ type: ContentChild, args: ['toolbarTemplate',] },],
    'pagerTemplate': [{ type: ContentChild, args: ['pagerTemplate',] },],
    'editSettings_template': [{ type: ContentChild, args: ['editSettingsTemplate',] },],
    'groupSettings_captionTemplate': [{ type: ContentChild, args: ['groupSettingsCaptionTemplate',] },],
};
__decorate$2([
    Template(),
    __metadata$2("design:type", Object)
], GridComponent.prototype, "rowTemplate", void 0);
__decorate$2([
    Template(),
    __metadata$2("design:type", Object)
], GridComponent.prototype, "detailTemplate", void 0);
__decorate$2([
    Template(),
    __metadata$2("design:type", Object)
], GridComponent.prototype, "toolbarTemplate", void 0);
__decorate$2([
    Template(),
    __metadata$2("design:type", Object)
], GridComponent.prototype, "pagerTemplate", void 0);
__decorate$2([
    Template(),
    __metadata$2("design:type", Object)
], GridComponent.prototype, "editSettings_template", void 0);
__decorate$2([
    Template(),
    __metadata$2("design:type", Object)
], GridComponent.prototype, "groupSettings_captionTemplate", void 0);
GridComponent = __decorate$2([
    ComponentMixins([ComponentBase]),
    __metadata$2("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], GridComponent);

/**
 * NgModule definition for the Grid component.
 */
class GridModule {
}
GridModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    GridComponent,
                    ColumnDirective,
                    ColumnsDirective,
                    AggregateColumnDirective,
                    AggregateColumnsDirective,
                    AggregateDirective,
                    AggregatesDirective
                ],
                exports: [
                    GridComponent,
                    ColumnDirective,
                    ColumnsDirective,
                    AggregateColumnDirective,
                    AggregateColumnsDirective,
                    AggregateDirective,
                    AggregatesDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
GridModule.ctorParameters = () => [];

const FilterService = { provide: 'GridsFilter', useValue: Filter };
const PageService = { provide: 'GridsPage', useValue: Page };
const SelectionService = { provide: 'GridsSelection', useValue: Selection };
const SortService = { provide: 'GridsSort', useValue: Sort };
const GroupService = { provide: 'GridsGroup', useValue: Group };
const ReorderService = { provide: 'GridsReorder', useValue: Reorder };
const RowDDService = { provide: 'GridsRowDD', useValue: RowDD };
const DetailRowService = { provide: 'GridsDetailRow', useValue: DetailRow };
const ToolbarService = { provide: 'GridsToolbar', useValue: Toolbar };
const AggregateService = { provide: 'GridsAggregate', useValue: Aggregate };
const SearchService = { provide: 'GridsSearch', useValue: Search };
const VirtualScrollService = { provide: 'GridsVirtualScroll', useValue: VirtualScroll };
const EditService = { provide: 'GridsEdit', useValue: Edit };
const ResizeService = { provide: 'GridsResize', useValue: Resize };
const ExcelExportService = { provide: 'GridsExcelExport', useValue: ExcelExport };
const PdfExportService = { provide: 'GridsPdfExport', useValue: PdfExport };
const CommandColumnService = { provide: 'GridsCommandColumn', useValue: CommandColumn };
const ContextMenuService = { provide: 'GridsContextMenu', useValue: ContextMenu };
const FreezeService = { provide: 'GridsFreeze', useValue: Freeze };
const ColumnMenuService = { provide: 'GridsColumnMenu', useValue: ColumnMenu };
const ColumnChooserService = { provide: 'GridsColumnChooser', useValue: ColumnChooser };
const ForeignKeyService = { provide: 'GridsForeignKey', useValue: ForeignKey };
/**
 * NgModule definition for the Grid component with providers.
 */
class GridAllModule {
}
GridAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, GridModule],
                exports: [
                    GridModule
                ],
                providers: [
                    FilterService,
                    PageService,
                    SelectionService,
                    SortService,
                    GroupService,
                    ReorderService,
                    RowDDService,
                    DetailRowService,
                    ToolbarService,
                    AggregateService,
                    SearchService,
                    VirtualScrollService,
                    EditService,
                    ResizeService,
                    ExcelExportService,
                    PdfExportService,
                    CommandColumnService,
                    ContextMenuService,
                    FreezeService,
                    ColumnMenuService,
                    ColumnChooserService,
                    ForeignKeyService
                ]
            },] },
];
/**
 * @nocollapse
 */
GridAllModule.ctorParameters = () => [];

var __decorate$3 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs$1 = ['currentPage', 'customText', 'enableExternalMessage', 'enablePagerMessage', 'enablePersistence', 'enableQueryString', 'enableRtl', 'externalMessage', 'locale', 'pageCount', 'pageSize', 'pageSizes', 'template', 'totalRecordsCount'];
const outputs$4 = ['click', 'created', 'dropDownChanged'];
const twoWays$1 = [];
/**
 * `ejs-pager` represents the Angular Pager Component.
 * ```html
 * <ejs-pager></ejs-pager>
 * ```
 */
let PagerComponent = class PagerComponent extends Pager {
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
        this.registerEvents(outputs$4);
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
PagerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-pager',
                inputs: inputs$1,
                outputs: outputs$4,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
PagerComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
PagerComponent.propDecorators = {
    'template': [{ type: ContentChild, args: ['template',] },],
};
__decorate$3([
    Template(),
    __metadata$3("design:type", Object)
], PagerComponent.prototype, "template", void 0);
PagerComponent = __decorate$3([
    ComponentMixins([ComponentBase]),
    __metadata$3("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], PagerComponent);

/**
 * NgModule definition for the Pager component.
 */
class PagerModule {
}
PagerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    PagerComponent
                ],
                exports: [
                    PagerComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
PagerModule.ctorParameters = () => [];

/**
 * NgModule definition for the Pager component with providers.
 */
class PagerAllModule {
}
PagerAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, PagerModule],
                exports: [
                    PagerModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
PagerAllModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { ColumnDirective, ColumnsDirective, AggregateColumnDirective, AggregateColumnsDirective, AggregateDirective, AggregatesDirective, GridComponent, GridModule, GridAllModule, FilterService, PageService, SelectionService, SortService, GroupService, ReorderService, RowDDService, DetailRowService, ToolbarService, AggregateService, SearchService, VirtualScrollService, EditService, ResizeService, ExcelExportService, PdfExportService, CommandColumnService, ContextMenuService, FreezeService, ColumnMenuService, ColumnChooserService, ForeignKeyService, PagerComponent, PagerModule, PagerAllModule, inputs as ɵa, outputs$3 as ɵb, inputs$1 as ɵc, outputs$4 as ɵd };
export { CheckBoxFilterBase, ExcelFilterBase, SortDescriptor, SortSettings, Predicate, FilterSettings, SelectionSettings, SearchSettings, RowDropSettings, TextWrapSettings, GroupSettings, EditSettings, Grid, CellType, RenderType, ToolbarItem, doesImplementInterface, valueAccessor, getUpdateUsingRaf, updatecloneRow, getCollapsedRowsCount, recursive, iterateArrayOrObject, iterateExtend, templateCompiler, setStyleAndAttributes, extend, setColumnIndex, prepareColumns, setCssInGridPopUp, getActualProperties, parentsUntil, getElementIndex, inArray, getActualPropFromColl, removeElement, getPosition, getUid, appendChildren, parents, calculateAggregate, getScrollBarWidth, getRowHeight, isComplexField, getComplexFieldID, setComplexFieldID, isEditable, isActionPrevent, wrap, setFormatter, addRemoveActiveClasses, distinctStringValues, getFilterMenuPostion, getZIndexCalcualtion, toogleCheckbox, createCboxWithWrap, removeAddCboxClasses, refreshForeignData, getForeignData, getColumnByForeignKeyValue, getDatePredicate, renderMovable, isGroupAdaptive, getObject, getCustomDateFormat, getExpandedState, getPrintGridModel, extendObjWithFn, measureColumnDepth, checkDepth, refreshFilteredColsUid, Global, getTransformValues, applyBiggerTheme, created, destroyed, load, rowDataBound, queryCellInfo, headerCellInfo, actionBegin, actionComplete, actionFailure, dataBound, rowSelecting, rowSelected, rowDeselecting, rowDeselected, cellSelecting, cellSelected, cellDeselecting, cellDeselected, columnDragStart, columnDrag, columnDrop, rowDragStartHelper, rowDragStart, rowDrag, rowDrop, beforePrint, printComplete, detailDataBound, toolbarClick, batchAdd, batchCancel, batchDelete, beforeBatchAdd, beforeBatchDelete, beforeBatchSave, beginEdit, cellEdit, cellSave, cellSaved, endAdd, endDelete, endEdit, recordDoubleClick, recordClick, beforeDataBound, beforeOpenColumnChooser, resizeStart, onResize, resizeStop, checkBoxChange, beforeCopy, beforePaste, filterChoiceRequest, filterAfterOpen, filterBeforeOpen, filterSearchBegin, commandClick, exportGroupCaption, initialLoad, initialEnd, dataReady, contentReady, uiUpdate, onEmpty, inBoundModelChanged, modelChanged, colGroupRefresh, headerRefreshed, pageBegin, pageComplete, sortBegin, sortComplete, filterBegin, filterComplete, searchBegin, searchComplete, reorderBegin, reorderComplete, rowDragAndDropBegin, rowDragAndDropComplete, groupBegin, groupComplete, ungroupBegin, ungroupComplete, groupAggregates, refreshFooterRenderer, refreshAggregateCell, refreshAggregates, rowSelectionBegin, rowSelectionComplete, columnSelectionBegin, columnSelectionComplete, cellSelectionBegin, cellSelectionComplete, beforeCellFocused, cellFocused, keyPressed, click, destroy, columnVisibilityChanged, scroll, columnWidthChanged, columnPositionChanged, rowDragAndDrop, rowsAdded, rowsRemoved, columnDragStop, headerDrop, dataSourceModified, refreshComplete, refreshVirtualBlock, dblclick, toolbarRefresh, bulkSave, autoCol, tooltipDestroy, updateData, editBegin, editComplete, addBegin, addComplete, saveComplete, deleteBegin, deleteComplete, preventBatch, dialogDestroy, crudAction, addDeleteAction, destroyForm, doubleTap, beforeExcelExport, excelExportComplete, excelQueryCellInfo, excelHeaderQueryCellInfo, exportDetailDataBound, beforePdfExport, pdfExportComplete, pdfQueryCellInfo, pdfHeaderQueryCellInfo, accessPredicate, contextMenuClick, freezeRender, freezeRefresh, contextMenuOpen, columnMenuClick, columnMenuOpen, filterOpen, filterDialogCreated, filterMenuClose, initForeignKeyColumn, getForeignKeyData, generateQuery, showEmptyGrid, foreignKeyData, dataStateChange, dataSourceChanged, rtlUpdated, beforeFragAppend, frozenHeight, textWrapRefresh, recordAdded, cancelBegin, editNextValCell, hierarchyPrint, expandChildGrid, printGridInit, exportRowDataBound, rowPositionChanged, columnChooserOpened, batchForm, beforeStartEdit, beforeBatchCancel, batchEditFormRendered, partialRefresh, beforeCustomFilterOpen, selectVirtualRow, columnsPrepared, cBoxFltrBegin, cBoxFltrComplete, fltrPrevent, beforeFltrcMenuOpen, valCustomPlacement, filterCboxValue, Data, Sort, Page, Selection, Filter, Search, Scroll, resizeClassList, Resize, Reorder, RowDD, Group, getCloneProperties, Print, DetailRow, Toolbar, Aggregate, summaryIterator, VirtualScroll, Edit, BatchEdit, InlineEdit, NormalEdit, DialogEdit, ColumnChooser, ExcelExport, PdfExport, ExportHelper, ExportValueFormatter, Clipboard, CommandColumn, CheckBoxFilter, menuClass, ContextMenu, Freeze, ColumnMenu, ExcelFilter, ForeignKey, Logger, detailLists, Column, CommandColumnModel, Row, Cell, HeaderRender, ContentRender, RowRenderer, CellRenderer, HeaderCellRenderer, FilterCellRenderer, StackedHeaderCellRenderer, Render, IndentCellRenderer, GroupCaptionCellRenderer, GroupCaptionEmptyCellRenderer, BatchEditRender, DialogEditRender, InlineEditRender, EditRender, BooleanEditCell, DefaultEditCell, DropDownEditCell, NumericEditCell, DatePickerEditCell, CommandColumnRenderer, FreezeContentRender, FreezeRender, StringFilterUI, NumberFilterUI, DateFilterUI, BooleanFilterUI, FlMenuOptrUI, AutoCompleteEditCell, ComboboxEditCell, MultiSelectEditCell, TimePickerEditCell, ToggleEditCell, MaskedTextBoxCellEdit, VirtualContentRenderer, VirtualHeaderRenderer, VirtualElementHandler, CellRendererFactory, ServiceLocator, RowModelGenerator, GroupModelGenerator, FreezeRowModelGenerator, ValueFormatter, VirtualRowModelGenerator, InterSectionObserver, Pager, ExternalMessage, NumericContainer, PagerMessage, PagerDropDown } from '@syncfusion/ej2-grids';
//# sourceMappingURL=ej2-angular-grids.js.map
