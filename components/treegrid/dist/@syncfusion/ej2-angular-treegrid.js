import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, Directive, ElementRef, Injector, NgModule, Renderer2, ViewContainerRef } from '@angular/core';
import { ArrayBase, ComplexBase, ComponentBase, ComponentMixins, Template, setValue } from '@syncfusion/ej2-angular-base';
import { Aggregate, ColumnChooser, ColumnMenu, CommandColumn, ContextMenu, DetailRow, Edit, ExcelExport, Filter, Freeze, Logger, Page, PdfExport, Reorder, Resize, RowDD, Selection, Sort, Toolbar, TreeGrid, VirtualScroll } from '@syncfusion/ej2-treegrid';
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
let input = ['allowEditing', 'allowFiltering', 'allowReordering', 'allowResizing', 'allowSorting', 'clipMode', 'columns', 'commands', 'customAttributes', 'defaultValue', 'disableHtmlEncode', 'displayAsCheckBox', 'edit', 'editTemplate', 'editType', 'field', 'filter', 'filterBarTemplate', 'filterTemplate', 'format', 'formatter', 'headerTemplate', 'headerText', 'headerTextAlign', 'hideAtMedia', 'isFrozen', 'isIdentity', 'isPrimaryKey', 'lockColumn', 'maxWidth', 'minWidth', 'showCheckbox', 'showColumnMenu', 'showInColumnChooser', 'sortComparer', 'template', 'textAlign', 'type', 'uid', 'validationRules', 'valueAccessor', 'visible', 'width'];
let outputs = [];
/**
 * `e-column` directive represent a column of the Angular TreeGrid.
 * It must be contained in a TreeGrid component(`ejs-treegrid`).
 * ```html
 * <ejs-treegrid [dataSource]='data' allowPaging='true' allowSorting='true'>
 *   <e-columns>
 *    <e-column field='ID' width='100'></e-column>
 *    <e-column field='name' headerText='Name' width='100'></e-column>
 *   </e-columns>
 * </ejs-treegrid>
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
        this.directivePropList = input;
    }
}
ColumnDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-treegrid>e-columns>e-column',
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
    'filter_itemTemplate': [{ type: ContentChild, args: ['filterItemTemplate',] },],
    'filterTemplate': [{ type: ContentChild, args: ['filterTemplate',] },],
    'commandsTemplate': [{ type: ContentChild, args: ['commandsTemplate',] },],
    'editTemplate': [{ type: ContentChild, args: ['editTemplate',] },],
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
], ColumnDirective.prototype, "filter_itemTemplate", void 0);
__decorate([
    Template(),
    __metadata("design:type", Object)
], ColumnDirective.prototype, "filterTemplate", void 0);
__decorate([
    Template(),
    __metadata("design:type", Object)
], ColumnDirective.prototype, "commandsTemplate", void 0);
__decorate([
    Template(),
    __metadata("design:type", Object)
], ColumnDirective.prototype, "editTemplate", void 0);
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
                selector: 'ejs-treegrid>e-columns',
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
let input$1 = ['columnName', 'customAggregate', 'field', 'footerTemplate', 'format', 'type'];
let outputs$1 = [];
/**
 * `e-aggregate->e-column` directive represent a aggregate column of the Angular TreeGrid.
 * ```html
 * <ejs-treegrid [dataSource]='data' allowPaging='true' allowSorting='true'>
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
 * </ejs-treegrid>
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
        this.directivePropList = input$1;
    }
}
AggregateColumnDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-treegrid>e-aggregates>e-aggregate>e-columns>e-column',
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
};
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], AggregateColumnDirective.prototype, "footerTemplate", void 0);
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
                selector: 'ejs-treegrid>e-aggregates>e-aggregate>e-columns',
                queries: {
                    children: new ContentChildren(AggregateColumnDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
AggregateColumnsDirective.ctorParameters = () => [];

let input$2 = ['columns', 'showChildSummary'];
let outputs$2 = [];
/**
 * `e-aggregate` directive represent a aggregate row of the Angular TreeGrid.
 * It must be contained in a TreeGrid component(`ejs-treegrid`).
 * ```html
 * <ejs-treegrid [dataSource]='data' allowPaging='true' allowSorting='true'>
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
 * </ejs-treegrid>
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
        this.directivePropList = input$2;
    }
}
AggregateDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-treegrid>e-aggregates>e-aggregate',
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
                selector: 'ejs-treegrid>e-aggregates',
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
const inputs = ['aggregates', 'allowExcelExport', 'allowFiltering', 'allowMultiSorting', 'allowPaging', 'allowPdfExport', 'allowReordering', 'allowResizing', 'allowRowDragAndDrop', 'allowSelection', 'allowSorting', 'allowTextWrap', 'autoCheckHierarchy', 'childMapping', 'clipMode', 'columnMenuItems', 'columnQueryMode', 'columns', 'contextMenuItems', 'copyHierarchyMode', 'dataSource', 'detailTemplate', 'editSettings', 'enableAltRow', 'enableAutoFill', 'enableCollapseAll', 'enableHover', 'enableImmutableMode', 'enablePersistence', 'enableRtl', 'enableVirtualization', 'expandStateMapping', 'filterSettings', 'frozenColumns', 'frozenRows', 'gridLines', 'hasChildMapping', 'height', 'idMapping', 'loadChildOnDemand', 'locale', 'pageSettings', 'parentIdMapping', 'printMode', 'query', 'rowDropSettings', 'rowHeight', 'rowTemplate', 'searchSettings', 'selectedRowIndex', 'selectionSettings', 'showColumnChooser', 'showColumnMenu', 'sortSettings', 'textWrapSettings', 'toolbar', 'treeColumnIndex', 'width'];
const outputs$3 = ['actionBegin', 'actionComplete', 'actionFailure', 'batchAdd', 'batchCancel', 'batchDelete', 'beforeBatchAdd', 'beforeBatchDelete', 'beforeBatchSave', 'beforeCopy', 'beforeDataBound', 'beforeExcelExport', 'beforePaste', 'beforePdfExport', 'beforePrint', 'beginEdit', 'cellDeselected', 'cellDeselecting', 'cellEdit', 'cellSave', 'cellSaved', 'cellSelected', 'cellSelecting', 'checkboxChange', 'collapsed', 'collapsing', 'columnDrag', 'columnDragStart', 'columnDrop', 'columnMenuClick', 'columnMenuOpen', 'contextMenuClick', 'contextMenuOpen', 'created', 'dataBound', 'dataSourceChanged', 'dataStateChange', 'detailDataBound', 'excelExportComplete', 'excelHeaderQueryCellInfo', 'excelQueryCellInfo', 'expanded', 'expanding', 'headerCellInfo', 'load', 'pdfExportComplete', 'pdfHeaderQueryCellInfo', 'pdfQueryCellInfo', 'printComplete', 'queryCellInfo', 'recordDoubleClick', 'resizeStart', 'resizeStop', 'resizing', 'rowDataBound', 'rowDeselected', 'rowDeselecting', 'rowDrag', 'rowDragStart', 'rowDragStartHelper', 'rowDrop', 'rowSelected', 'rowSelecting', 'toolbarClick', 'dataSourceChange'];
const twoWays = ['dataSource'];
/**
 * `ejs-treegrid` represents the Angular TreeTreeGrid Component.
 * ```html
 * <ejs-treegrid [dataSource]='data' allowPaging='true' allowSorting='true'></ejs-treegrid>
 * ```
 */
let TreeGridComponent = class TreeGridComponent extends TreeGrid {
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
            let mod = this.injector.get('TreeGridFilter');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            let mod = this.injector.get('TreeGridPage');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            let mod = this.injector.get('TreeGridSort');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            let mod = this.injector.get('TreeGridReorder');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            let mod = this.injector.get('TreeGridToolbar');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            let mod = this.injector.get('TreeGridAggregate');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        try {
            let mod = this.injector.get('TreeGridResize');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_g) { }
        try {
            let mod = this.injector.get('TreeGridColumnMenu');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_h) { }
        try {
            let mod = this.injector.get('TreeGridExcelExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_j) { }
        try {
            let mod = this.injector.get('TreeGridPdfExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_k) { }
        try {
            let mod = this.injector.get('TreeGridCommandColumn');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_l) { }
        try {
            let mod = this.injector.get('TreeGridContextMenu');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_m) { }
        try {
            let mod = this.injector.get('TreeGridEdit');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_o) { }
        try {
            let mod = this.injector.get('TreeGridSelection');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_p) { }
        try {
            let mod = this.injector.get('TreeGridVirtualScroll');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_q) { }
        try {
            let mod = this.injector.get('TreeGridDetailRow');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_r) { }
        try {
            let mod = this.injector.get('TreeGridRowDD');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_s) { }
        try {
            let mod = this.injector.get('TreeGridFreeze');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_t) { }
        try {
            let mod = this.injector.get('TreeGridColumnChooser');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_u) { }
        try {
            let mod = this.injector.get('TreeGridLogger');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_v) { }
        this.registerEvents(outputs$3);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context = new ComponentBase();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.context.ngOnInit(this);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.context.ngAfterViewInit(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.context.ngOnDestroy(this);
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        this.tagObjects[0].instance = this.childColumns;
        if (this.childAggregates) {
            this.tagObjects[1].instance = /** @type {?} */ (this.childAggregates);
        }
        this.context.ngAfterContentChecked(this);
    }
};
TreeGridComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-treegrid',
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
TreeGridComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
TreeGridComponent.propDecorators = {
    'toolbarTemplate': [{ type: ContentChild, args: ['toolbarTemplate',] },],
    'pagerTemplate': [{ type: ContentChild, args: ['pagerTemplate',] },],
    'rowTemplate': [{ type: ContentChild, args: ['rowTemplate',] },],
    'detailTemplate': [{ type: ContentChild, args: ['detailTemplate',] },],
    'editSettings_template': [{ type: ContentChild, args: ['editSettingsTemplate',] },],
};
__decorate$2([
    Template(),
    __metadata$2("design:type", Object)
], TreeGridComponent.prototype, "toolbarTemplate", void 0);
__decorate$2([
    Template(),
    __metadata$2("design:type", Object)
], TreeGridComponent.prototype, "pagerTemplate", void 0);
__decorate$2([
    Template(),
    __metadata$2("design:type", Object)
], TreeGridComponent.prototype, "rowTemplate", void 0);
__decorate$2([
    Template(),
    __metadata$2("design:type", Object)
], TreeGridComponent.prototype, "detailTemplate", void 0);
__decorate$2([
    Template(),
    __metadata$2("design:type", Object)
], TreeGridComponent.prototype, "editSettings_template", void 0);
TreeGridComponent = __decorate$2([
    ComponentMixins([ComponentBase]),
    __metadata$2("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], TreeGridComponent);

/**
 * NgModule definition for the TreeGrid component.
 */
class TreeGridModule {
}
TreeGridModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    TreeGridComponent,
                    ColumnDirective,
                    ColumnsDirective,
                    AggregateColumnDirective,
                    AggregateColumnsDirective,
                    AggregateDirective,
                    AggregatesDirective
                ],
                exports: [
                    TreeGridComponent,
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
TreeGridModule.ctorParameters = () => [];

const FilterService = { provide: 'TreeGridFilter', useValue: Filter };
const PageService = { provide: 'TreeGridPage', useValue: Page };
const SortService = { provide: 'TreeGridSort', useValue: Sort };
const ReorderService = { provide: 'TreeGridReorder', useValue: Reorder };
const ToolbarService = { provide: 'TreeGridToolbar', useValue: Toolbar };
const AggregateService = { provide: 'TreeGridAggregate', useValue: Aggregate };
const ResizeService = { provide: 'TreeGridResize', useValue: Resize };
const ColumnMenuService = { provide: 'TreeGridColumnMenu', useValue: ColumnMenu };
const ExcelExportService = { provide: 'TreeGridExcelExport', useValue: ExcelExport };
const PdfExportService = { provide: 'TreeGridPdfExport', useValue: PdfExport };
const CommandColumnService = { provide: 'TreeGridCommandColumn', useValue: CommandColumn };
const ContextMenuService = { provide: 'TreeGridContextMenu', useValue: ContextMenu };
const EditService = { provide: 'TreeGridEdit', useValue: Edit };
const SelectionService = { provide: 'TreeGridSelection', useValue: Selection };
const VirtualScrollService = { provide: 'TreeGridVirtualScroll', useValue: VirtualScroll };
const DetailRowService = { provide: 'TreeGridDetailRow', useValue: DetailRow };
const RowDDService = { provide: 'TreeGridRowDD', useValue: RowDD };
const FreezeService = { provide: 'TreeGridFreeze', useValue: Freeze };
const ColumnChooserService = { provide: 'TreeGridColumnChooser', useValue: ColumnChooser };
const LoggerService = { provide: 'TreeGridLogger', useValue: Logger };
/**
 * NgModule definition for the TreeGrid component with providers.
 */
class TreeGridAllModule {
}
TreeGridAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, TreeGridModule],
                exports: [
                    TreeGridModule
                ],
                providers: [
                    FilterService,
                    PageService,
                    SortService,
                    ReorderService,
                    ToolbarService,
                    AggregateService,
                    ResizeService,
                    ColumnMenuService,
                    ExcelExportService,
                    PdfExportService,
                    CommandColumnService,
                    ContextMenuService,
                    EditService,
                    SelectionService,
                    VirtualScrollService,
                    DetailRowService,
                    RowDDService,
                    FreezeService,
                    ColumnChooserService,
                    LoggerService
                ]
            },] },
];
/**
 * @nocollapse
 */
TreeGridAllModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { ColumnDirective, ColumnsDirective, AggregateColumnDirective, AggregateColumnsDirective, AggregateDirective, AggregatesDirective, TreeGridComponent, TreeGridModule, TreeGridAllModule, FilterService, PageService, SortService, ReorderService, ToolbarService, AggregateService, ResizeService, ColumnMenuService, ExcelExportService, PdfExportService, CommandColumnService, ContextMenuService, EditService, SelectionService, VirtualScrollService, DetailRowService, RowDDService, FreezeService, ColumnChooserService, LoggerService, inputs as ɵa, outputs$3 as ɵb };
export { TreeGrid, load, rowDataBound, dataBound, queryCellInfo, beforeDataBound, actionBegin, dataStateChange, actionComplete, rowSelecting, rowSelected, checkboxChange, rowDeselected, toolbarClick, beforeExcelExport, beforePdfExport, resizeStop, expanded, expanding, collapsed, collapsing, remoteExpand, localPagedExpandCollapse, pagingActions, printGridInit, contextMenuOpen, contextMenuClick, beforeCopy, beforePaste, savePreviousRowPosition, crudAction, beginEdit, beginAdd, recordDoubleClick, cellSave, cellSaved, cellEdit, batchDelete, batchCancel, batchAdd, beforeBatchDelete, beforeBatchAdd, beforeBatchSave, batchSave, keyPressed, updateData, doubleTap, virtualColumnIndex, virtualActionArgs, dataListener, indexModifier, beforeStartEdit, beforeBatchCancel, batchEditFormRendered, detailDataBound, rowDrag, rowDragStartHelper, rowDrop, rowDragStart, rowsAdd, rowsRemove, rowdraging, rowDropped, DataManipulation, Reorder, Resize, RowDD, Column, EditSettings, Predicate, FilterSettings, PageSettings, SearchSettings, SelectionSettings, AggregateColumn, AggregateRow, SortDescriptor, SortSettings, RowDropSettings, Render, TreeVirtualRowModelGenerator, isRemoteData, isCountRequired, isCheckboxcolumn, isFilterChildHierarchy, findParentRecords, getExpandStatus, findChildrenRecords, isOffline, extendArray, getPlainData, getParentData, isHidden, ToolbarItem, ContextMenuItems, Filter, ExcelExport, PdfExport, Page, Toolbar, Aggregate, Sort, TreeClipboard, ColumnMenu, ContextMenu, Edit, CommandColumn, Selection, DetailRow, VirtualScroll, TreeVirtual, Freeze, ColumnChooser, Logger, treeGridDetails } from '@syncfusion/ej2-treegrid';
//# sourceMappingURL=ej2-angular-treegrid.js.map
