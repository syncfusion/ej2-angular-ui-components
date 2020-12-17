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
import { Aggregate, ColumnChooser, ColumnMenu, CommandColumn, ContextMenu, DetailRow, Edit, ExcelExport, Filter, Freeze, Logger, Page, PdfExport, Reorder, Resize, RowDD, Selection, Sort, Toolbar, TreeGrid, VirtualScroll } from '@syncfusion/ej2-treegrid';
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
var input = ['allowEditing', 'allowFiltering', 'allowReordering', 'allowResizing', 'allowSorting', 'clipMode', 'columns', 'commands', 'customAttributes', 'defaultValue', 'disableHtmlEncode', 'displayAsCheckBox', 'edit', 'editTemplate', 'editType', 'field', 'filter', 'filterBarTemplate', 'filterTemplate', 'format', 'formatter', 'headerTemplate', 'headerText', 'headerTextAlign', 'hideAtMedia', 'isFrozen', 'isIdentity', 'isPrimaryKey', 'lockColumn', 'maxWidth', 'minWidth', 'showCheckbox', 'showColumnMenu', 'showInColumnChooser', 'sortComparer', 'template', 'textAlign', 'type', 'uid', 'validationRules', 'valueAccessor', 'visible', 'width'];
var outputs = [];
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
var ColumnDirective = /** @class */ (function (_super) {
    __extends(ColumnDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function ColumnDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs);
        _this.directivePropList = input;
        return _this;
    }
    return ColumnDirective;
}(ComplexBase));
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
ColumnDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
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
var ColumnsDirective = /** @class */ (function (_super) {
    __extends(ColumnsDirective, _super);
    function ColumnsDirective() {
        return _super.call(this, 'columns') || this;
    }
    return ColumnsDirective;
}(ArrayBase));
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
ColumnsDirective.ctorParameters = function () { return []; };
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
var input$1 = ['columnName', 'customAggregate', 'field', 'footerTemplate', 'format', 'type'];
var outputs$1 = [];
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
var AggregateColumnDirective = /** @class */ (function (_super) {
    __extends(AggregateColumnDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function AggregateColumnDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$1);
        _this.directivePropList = input$1;
        return _this;
    }
    return AggregateColumnDirective;
}(ComplexBase));
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
AggregateColumnDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
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
var AggregateColumnsDirective = /** @class */ (function (_super) {
    __extends(AggregateColumnsDirective, _super);
    function AggregateColumnsDirective() {
        return _super.call(this, 'columns') || this;
    }
    return AggregateColumnsDirective;
}(ArrayBase));
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
AggregateColumnsDirective.ctorParameters = function () { return []; };
var input$2 = ['columns', 'showChildSummary'];
var outputs$2 = [];
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
var AggregateDirective = /** @class */ (function (_super) {
    __extends(AggregateDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function AggregateDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        _this.tags = ['columns'];
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$2);
        _this.directivePropList = input$2;
        return _this;
    }
    return AggregateDirective;
}(ComplexBase));
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
AggregateDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * Aggregate Array Directive
 */
var AggregatesDirective = /** @class */ (function (_super) {
    __extends(AggregatesDirective, _super);
    function AggregatesDirective() {
        return _super.call(this, 'aggregates') || this;
    }
    return AggregatesDirective;
}(ArrayBase));
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
AggregatesDirective.ctorParameters = function () { return []; };
var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var inputs = ['aggregates', 'allowExcelExport', 'allowFiltering', 'allowMultiSorting', 'allowPaging', 'allowPdfExport', 'allowReordering', 'allowResizing', 'allowRowDragAndDrop', 'allowSelection', 'allowSorting', 'allowTextWrap', 'autoCheckHierarchy', 'childMapping', 'clipMode', 'columnMenuItems', 'columnQueryMode', 'columns', 'contextMenuItems', 'copyHierarchyMode', 'dataSource', 'detailTemplate', 'editSettings', 'enableAltRow', 'enableAutoFill', 'enableCollapseAll', 'enableHover', 'enableImmutableMode', 'enablePersistence', 'enableRtl', 'enableVirtualization', 'expandStateMapping', 'filterSettings', 'frozenColumns', 'frozenRows', 'gridLines', 'hasChildMapping', 'height', 'idMapping', 'loadChildOnDemand', 'locale', 'pageSettings', 'parentIdMapping', 'printMode', 'query', 'rowDropSettings', 'rowHeight', 'rowTemplate', 'searchSettings', 'selectedRowIndex', 'selectionSettings', 'showColumnChooser', 'showColumnMenu', 'sortSettings', 'textWrapSettings', 'toolbar', 'treeColumnIndex', 'width'];
var outputs$3 = ['actionBegin', 'actionComplete', 'actionFailure', 'batchAdd', 'batchCancel', 'batchDelete', 'beforeBatchAdd', 'beforeBatchDelete', 'beforeBatchSave', 'beforeCopy', 'beforeDataBound', 'beforeExcelExport', 'beforePaste', 'beforePdfExport', 'beforePrint', 'beginEdit', 'cellDeselected', 'cellDeselecting', 'cellEdit', 'cellSave', 'cellSaved', 'cellSelected', 'cellSelecting', 'checkboxChange', 'collapsed', 'collapsing', 'columnDrag', 'columnDragStart', 'columnDrop', 'columnMenuClick', 'columnMenuOpen', 'contextMenuClick', 'contextMenuOpen', 'created', 'dataBound', 'dataSourceChanged', 'dataStateChange', 'detailDataBound', 'excelExportComplete', 'excelHeaderQueryCellInfo', 'excelQueryCellInfo', 'expanded', 'expanding', 'headerCellInfo', 'load', 'pdfExportComplete', 'pdfHeaderQueryCellInfo', 'pdfQueryCellInfo', 'printComplete', 'queryCellInfo', 'recordDoubleClick', 'resizeStart', 'resizeStop', 'resizing', 'rowDataBound', 'rowDeselected', 'rowDeselecting', 'rowDrag', 'rowDragStart', 'rowDragStartHelper', 'rowDrop', 'rowSelected', 'rowSelecting', 'toolbarClick', 'dataSourceChange'];
var twoWays = ['dataSource'];
/**
 * `ejs-treegrid` represents the Angular TreeTreeGrid Component.
 * ```html
 * <ejs-treegrid [dataSource]='data' allowPaging='true' allowSorting='true'></ejs-treegrid>
 * ```
 */
var TreeGridComponent = /** @class */ (function (_super) {
    __extends(TreeGridComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function TreeGridComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.tags = ['columns', 'aggregates'];
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        try {
            var mod = _this.injector.get('TreeGridFilter');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            var mod = _this.injector.get('TreeGridPage');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            var mod = _this.injector.get('TreeGridSort');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            var mod = _this.injector.get('TreeGridReorder');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            var mod = _this.injector.get('TreeGridToolbar');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            var mod = _this.injector.get('TreeGridAggregate');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        try {
            var mod = _this.injector.get('TreeGridResize');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_g) { }
        try {
            var mod = _this.injector.get('TreeGridColumnMenu');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_h) { }
        try {
            var mod = _this.injector.get('TreeGridExcelExport');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_j) { }
        try {
            var mod = _this.injector.get('TreeGridPdfExport');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_k) { }
        try {
            var mod = _this.injector.get('TreeGridCommandColumn');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_l) { }
        try {
            var mod = _this.injector.get('TreeGridContextMenu');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_m) { }
        try {
            var mod = _this.injector.get('TreeGridEdit');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_o) { }
        try {
            var mod = _this.injector.get('TreeGridSelection');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_p) { }
        try {
            var mod = _this.injector.get('TreeGridVirtualScroll');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_q) { }
        try {
            var mod = _this.injector.get('TreeGridDetailRow');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_r) { }
        try {
            var mod = _this.injector.get('TreeGridRowDD');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_s) { }
        try {
            var mod = _this.injector.get('TreeGridFreeze');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_t) { }
        try {
            var mod = _this.injector.get('TreeGridColumnChooser');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_u) { }
        try {
            var mod = _this.injector.get('TreeGridLogger');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_v) { }
        _this.registerEvents(outputs$3);
        _this.addTwoWay.call(_this, twoWays);
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.context = new ComponentBase();
        return _this;
    }
    /**
     * @return {?}
     */
    TreeGridComponent.prototype.ngOnInit = function () {
        this.context.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    TreeGridComponent.prototype.ngAfterViewInit = function () {
        this.context.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    TreeGridComponent.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    TreeGridComponent.prototype.ngAfterContentChecked = function () {
        this.tagObjects[0].instance = this.childColumns;
        if (this.childAggregates) {
            this.tagObjects[1].instance = /** @type {?} */ (this.childAggregates);
        }
        this.context.ngAfterContentChecked(this);
    };
    return TreeGridComponent;
}(TreeGrid));
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
TreeGridComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
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
var TreeGridModule = /** @class */ (function () {
    function TreeGridModule() {
    }
    return TreeGridModule;
}());
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
TreeGridModule.ctorParameters = function () { return []; };
var FilterService = { provide: 'TreeGridFilter', useValue: Filter };
var PageService = { provide: 'TreeGridPage', useValue: Page };
var SortService = { provide: 'TreeGridSort', useValue: Sort };
var ReorderService = { provide: 'TreeGridReorder', useValue: Reorder };
var ToolbarService = { provide: 'TreeGridToolbar', useValue: Toolbar };
var AggregateService = { provide: 'TreeGridAggregate', useValue: Aggregate };
var ResizeService = { provide: 'TreeGridResize', useValue: Resize };
var ColumnMenuService = { provide: 'TreeGridColumnMenu', useValue: ColumnMenu };
var ExcelExportService = { provide: 'TreeGridExcelExport', useValue: ExcelExport };
var PdfExportService = { provide: 'TreeGridPdfExport', useValue: PdfExport };
var CommandColumnService = { provide: 'TreeGridCommandColumn', useValue: CommandColumn };
var ContextMenuService = { provide: 'TreeGridContextMenu', useValue: ContextMenu };
var EditService = { provide: 'TreeGridEdit', useValue: Edit };
var SelectionService = { provide: 'TreeGridSelection', useValue: Selection };
var VirtualScrollService = { provide: 'TreeGridVirtualScroll', useValue: VirtualScroll };
var DetailRowService = { provide: 'TreeGridDetailRow', useValue: DetailRow };
var RowDDService = { provide: 'TreeGridRowDD', useValue: RowDD };
var FreezeService = { provide: 'TreeGridFreeze', useValue: Freeze };
var ColumnChooserService = { provide: 'TreeGridColumnChooser', useValue: ColumnChooser };
var LoggerService = { provide: 'TreeGridLogger', useValue: Logger };
/**
 * NgModule definition for the TreeGrid component with providers.
 */
var TreeGridAllModule = /** @class */ (function () {
    function TreeGridAllModule() {
    }
    return TreeGridAllModule;
}());
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
TreeGridAllModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { ColumnDirective, ColumnsDirective, AggregateColumnDirective, AggregateColumnsDirective, AggregateDirective, AggregatesDirective, TreeGridComponent, TreeGridModule, TreeGridAllModule, FilterService, PageService, SortService, ReorderService, ToolbarService, AggregateService, ResizeService, ColumnMenuService, ExcelExportService, PdfExportService, CommandColumnService, ContextMenuService, EditService, SelectionService, VirtualScrollService, DetailRowService, RowDDService, FreezeService, ColumnChooserService, LoggerService, inputs as ɵa, outputs$3 as ɵb };
export { TreeGrid, load, rowDataBound, dataBound, queryCellInfo, beforeDataBound, actionBegin, dataStateChange, actionComplete, rowSelecting, rowSelected, checkboxChange, rowDeselected, toolbarClick, beforeExcelExport, beforePdfExport, resizeStop, expanded, expanding, collapsed, collapsing, remoteExpand, localPagedExpandCollapse, pagingActions, printGridInit, contextMenuOpen, contextMenuClick, beforeCopy, beforePaste, savePreviousRowPosition, crudAction, beginEdit, beginAdd, recordDoubleClick, cellSave, cellSaved, cellEdit, batchDelete, batchCancel, batchAdd, beforeBatchDelete, beforeBatchAdd, beforeBatchSave, batchSave, keyPressed, updateData, doubleTap, virtualColumnIndex, virtualActionArgs, dataListener, indexModifier, beforeStartEdit, beforeBatchCancel, batchEditFormRendered, detailDataBound, rowDrag, rowDragStartHelper, rowDrop, rowDragStart, rowsAdd, rowsRemove, rowdraging, rowDropped, DataManipulation, Reorder, Resize, RowDD, Column, EditSettings, Predicate, FilterSettings, PageSettings, SearchSettings, SelectionSettings, AggregateColumn, AggregateRow, SortDescriptor, SortSettings, RowDropSettings, Render, TreeVirtualRowModelGenerator, isRemoteData, isCountRequired, isCheckboxcolumn, isFilterChildHierarchy, findParentRecords, getExpandStatus, findChildrenRecords, isOffline, extendArray, getPlainData, getParentData, isHidden, ToolbarItem, ContextMenuItems, Filter, ExcelExport, PdfExport, Page, Toolbar, Aggregate, Sort, TreeClipboard, ColumnMenu, ContextMenu, Edit, CommandColumn, Selection, DetailRow, VirtualScroll, TreeVirtual, Freeze, ColumnChooser, Logger, treeGridDetails } from '@syncfusion/ej2-treegrid';
//# sourceMappingURL=ej2-angular-treegrid.es5.js.map
