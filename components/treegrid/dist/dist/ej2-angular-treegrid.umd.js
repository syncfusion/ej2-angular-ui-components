(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@syncfusion/ej2-angular-base'), require('@syncfusion/ej2-treegrid'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@syncfusion/ej2-angular-base', '@syncfusion/ej2-treegrid', '@angular/common'], factory) :
	(factory((global['ej2-angular-treegrid'] = {}),global.ng.core,global.ej2.angular.base,global.ej2.treegrid,global.ng.common));
}(this, (function (exports,core,ej2AngularBase,ej2Treegrid,common) { 'use strict';

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
var input = ['allowEditing', 'allowFiltering', 'allowReordering', 'allowResizing', 'allowSorting', 'clipMode', 'columns', 'commands', 'customAttributes', 'defaultValue', 'disableHtmlEncode', 'displayAsCheckBox', 'edit', 'editTemplate', 'editType', 'field', 'filter', 'filterBarTemplate', 'filterTemplate', 'format', 'formatter', 'headerTemplate', 'headerText', 'headerTextAlign', 'hideAtMedia', 'isFrozen', 'isIdentity', 'isPrimaryKey', 'lockColumn', 'maxWidth', 'minWidth', 'showCheckbox', 'showColumnMenu', 'sortComparer', 'template', 'textAlign', 'type', 'uid', 'validationRules', 'valueAccessor', 'visible', 'width'];
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs);
        _this.directivePropList = input;
        return _this;
    }
    return ColumnDirective;
}(ej2AngularBase.ComplexBase));
ColumnDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
]; };
ColumnDirective.propDecorators = {
    'template': [{ type: core.ContentChild, args: ['template',] },],
    'headerTemplate': [{ type: core.ContentChild, args: ['headerTemplate',] },],
    'filter_itemTemplate': [{ type: core.ContentChild, args: ['filterItemTemplate',] },],
    'filterTemplate': [{ type: core.ContentChild, args: ['filterTemplate',] },],
    'commandsTemplate': [{ type: core.ContentChild, args: ['commandsTemplate',] },],
    'editTemplate': [{ type: core.ContentChild, args: ['editTemplate',] },],
};
__decorate([
    ej2AngularBase.Template(),
    __metadata("design:type", Object)
], ColumnDirective.prototype, "template", void 0);
__decorate([
    ej2AngularBase.Template(),
    __metadata("design:type", Object)
], ColumnDirective.prototype, "headerTemplate", void 0);
__decorate([
    ej2AngularBase.Template(),
    __metadata("design:type", Object)
], ColumnDirective.prototype, "filter_itemTemplate", void 0);
__decorate([
    ej2AngularBase.Template(),
    __metadata("design:type", Object)
], ColumnDirective.prototype, "filterTemplate", void 0);
__decorate([
    ej2AngularBase.Template(),
    __metadata("design:type", Object)
], ColumnDirective.prototype, "commandsTemplate", void 0);
__decorate([
    ej2AngularBase.Template(),
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
}(ej2AngularBase.ArrayBase));
ColumnsDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-treegrid>e-columns',
                queries: {
                    children: new core.ContentChildren(ColumnDirective)
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$1);
        _this.directivePropList = input$1;
        return _this;
    }
    return AggregateColumnDirective;
}(ej2AngularBase.ComplexBase));
AggregateColumnDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
]; };
AggregateColumnDirective.propDecorators = {
    'footerTemplate': [{ type: core.ContentChild, args: ['footerTemplate',] },],
};
__decorate$1([
    ej2AngularBase.Template(),
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
}(ej2AngularBase.ArrayBase));
AggregateColumnsDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-treegrid>e-aggregates>e-aggregate>e-columns',
                queries: {
                    children: new core.ContentChildren(AggregateColumnDirective)
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$2);
        _this.directivePropList = input$2;
        return _this;
    }
    return AggregateDirective;
}(ej2AngularBase.ComplexBase));
AggregateDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-treegrid>e-aggregates>e-aggregate',
                inputs: input$2,
                outputs: outputs$2,
                queries: {
                    childColumns: new core.ContentChild(AggregateColumnsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
AggregateDirective.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
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
}(ej2AngularBase.ArrayBase));
AggregatesDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-treegrid>e-aggregates',
                queries: {
                    children: new core.ContentChildren(AggregateDirective)
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
var inputs = ['aggregates', 'allowExcelExport', 'allowFiltering', 'allowMultiSorting', 'allowPaging', 'allowPdfExport', 'allowReordering', 'allowResizing', 'allowRowDragAndDrop', 'allowSelection', 'allowSorting', 'allowTextWrap', 'autoCheckHierarchy', 'childMapping', 'columnMenuItems', 'columnQueryMode', 'columns', 'contextMenuItems', 'dataSource', 'detailTemplate', 'editSettings', 'enableAltRow', 'enableAutoFill', 'enableCollapseAll', 'enableHover', 'enablePersistence', 'enableRtl', 'enableVirtualization', 'expandStateMapping', 'filterSettings', 'frozenColumns', 'frozenRows', 'gridLines', 'hasChildMapping', 'height', 'idMapping', 'loadChildOnDemand', 'locale', 'pageSettings', 'parentIdMapping', 'printMode', 'query', 'rowDropSettings', 'rowHeight', 'rowTemplate', 'searchSettings', 'selectedRowIndex', 'selectionSettings', 'showColumnMenu', 'sortSettings', 'textWrapSettings', 'toolbar', 'treeColumnIndex', 'width'];
var outputs$3 = ['actionBegin', 'actionComplete', 'actionFailure', 'beforeDataBound', 'beforeExcelExport', 'beforePdfExport', 'beforePrint', 'beginEdit', 'cellDeselected', 'cellDeselecting', 'cellEdit', 'cellSave', 'cellSelected', 'cellSelecting', 'checkboxChange', 'collapsed', 'collapsing', 'columnDrag', 'columnDragStart', 'columnDrop', 'columnMenuClick', 'columnMenuOpen', 'contextMenuClick', 'contextMenuOpen', 'created', 'dataBound', 'dataSourceChanged', 'dataStateChange', 'detailDataBound', 'excelExportComplete', 'excelHeaderQueryCellInfo', 'excelQueryCellInfo', 'expanded', 'expanding', 'headerCellInfo', 'load', 'pdfExportComplete', 'pdfHeaderQueryCellInfo', 'pdfQueryCellInfo', 'printComplete', 'queryCellInfo', 'recordDoubleClick', 'resizeStart', 'resizeStop', 'resizing', 'rowDataBound', 'rowDeselected', 'rowDeselecting', 'rowDrag', 'rowDragStart', 'rowDragStartHelper', 'rowDrop', 'rowSelected', 'rowSelecting', 'toolbarClick', 'dataSourceChange'];
var twoWays = ['dataSource'];
/**
 * `ejs-treegrid` represents the Angular TreeTreeGrid Component.
 * ```html
 * <ejs-treegrid [dataSource]='data' allowPaging='true' allowSorting='true'></ejs-treegrid>
 * ```
 */
exports.TreeGridComponent = /** @class */ (function (_super) {
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
        _this.registerEvents(outputs$3);
        _this.addTwoWay.call(_this, twoWays);
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.context = new ej2AngularBase.ComponentBase();
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
            this.tagObjects[1].instance = ((this.childAggregates)).list[0].childColumns;
            for (var /** @type {?} */ d = 0; d < ((this.childAggregates)).list.length; d++) {
                if (((this.childAggregates)).list[d + 1]) {
                    this.tagObjects[1].instance.list.push(((this.childAggregates)).list[d + 1].childColumns.list[0]);
                }
            }
        }
        this.context.ngAfterContentChecked(this);
    };
    return TreeGridComponent;
}(ej2Treegrid.TreeGrid));
exports.TreeGridComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-treegrid',
                inputs: inputs,
                outputs: outputs$3,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {
                    childColumns: new core.ContentChild(ColumnsDirective),
                    childAggregates: new core.ContentChild(AggregatesDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
exports.TreeGridComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.TreeGridComponent.propDecorators = {
    'toolbarTemplate': [{ type: core.ContentChild, args: ['toolbarTemplate',] },],
    'pagerTemplate': [{ type: core.ContentChild, args: ['pagerTemplate',] },],
    'rowTemplate': [{ type: core.ContentChild, args: ['rowTemplate',] },],
    'detailTemplate': [{ type: core.ContentChild, args: ['detailTemplate',] },],
    'editSettings_template': [{ type: core.ContentChild, args: ['editSettingsTemplate',] },],
};
__decorate$2([
    ej2AngularBase.Template(),
    __metadata$2("design:type", Object)
], exports.TreeGridComponent.prototype, "toolbarTemplate", void 0);
__decorate$2([
    ej2AngularBase.Template(),
    __metadata$2("design:type", Object)
], exports.TreeGridComponent.prototype, "pagerTemplate", void 0);
__decorate$2([
    ej2AngularBase.Template(),
    __metadata$2("design:type", Object)
], exports.TreeGridComponent.prototype, "rowTemplate", void 0);
__decorate$2([
    ej2AngularBase.Template(),
    __metadata$2("design:type", Object)
], exports.TreeGridComponent.prototype, "detailTemplate", void 0);
__decorate$2([
    ej2AngularBase.Template(),
    __metadata$2("design:type", Object)
], exports.TreeGridComponent.prototype, "editSettings_template", void 0);
exports.TreeGridComponent = __decorate$2([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata$2("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.TreeGridComponent);
/**
 * NgModule definition for the TreeGrid component.
 */
var TreeGridModule = /** @class */ (function () {
    function TreeGridModule() {
    }
    return TreeGridModule;
}());
TreeGridModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.TreeGridComponent,
                    ColumnDirective,
                    ColumnsDirective,
                    AggregateColumnDirective,
                    AggregateColumnsDirective,
                    AggregateDirective,
                    AggregatesDirective
                ],
                exports: [
                    exports.TreeGridComponent,
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
var FilterService = { provide: 'TreeGridFilter', useValue: ej2Treegrid.Filter };
var PageService = { provide: 'TreeGridPage', useValue: ej2Treegrid.Page };
var SortService = { provide: 'TreeGridSort', useValue: ej2Treegrid.Sort };
var ReorderService = { provide: 'TreeGridReorder', useValue: ej2Treegrid.Reorder };
var ToolbarService = { provide: 'TreeGridToolbar', useValue: ej2Treegrid.Toolbar };
var AggregateService = { provide: 'TreeGridAggregate', useValue: ej2Treegrid.Aggregate };
var ResizeService = { provide: 'TreeGridResize', useValue: ej2Treegrid.Resize };
var ColumnMenuService = { provide: 'TreeGridColumnMenu', useValue: ej2Treegrid.ColumnMenu };
var ExcelExportService = { provide: 'TreeGridExcelExport', useValue: ej2Treegrid.ExcelExport };
var PdfExportService = { provide: 'TreeGridPdfExport', useValue: ej2Treegrid.PdfExport };
var CommandColumnService = { provide: 'TreeGridCommandColumn', useValue: ej2Treegrid.CommandColumn };
var ContextMenuService = { provide: 'TreeGridContextMenu', useValue: ej2Treegrid.ContextMenu };
var EditService = { provide: 'TreeGridEdit', useValue: ej2Treegrid.Edit };
var SelectionService = { provide: 'TreeGridSelection', useValue: ej2Treegrid.Selection };
var VirtualScrollService = { provide: 'TreeGridVirtualScroll', useValue: ej2Treegrid.VirtualScroll };
var DetailRowService = { provide: 'TreeGridDetailRow', useValue: ej2Treegrid.DetailRow };
var RowDDService = { provide: 'TreeGridRowDD', useValue: ej2Treegrid.RowDD };
var FreezeService = { provide: 'TreeGridFreeze', useValue: ej2Treegrid.Freeze };
/**
 * NgModule definition for the TreeGrid component with providers.
 */
var TreeGridAllModule = /** @class */ (function () {
    function TreeGridAllModule() {
    }
    return TreeGridAllModule;
}());
TreeGridAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, TreeGridModule],
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
                    FreezeService
                ]
            },] },
];
/**
 * @nocollapse
 */
TreeGridAllModule.ctorParameters = function () { return []; };

exports.ColumnDirective = ColumnDirective;
exports.ColumnsDirective = ColumnsDirective;
exports.AggregateColumnDirective = AggregateColumnDirective;
exports.AggregateColumnsDirective = AggregateColumnsDirective;
exports.AggregateDirective = AggregateDirective;
exports.AggregatesDirective = AggregatesDirective;
exports.TreeGridModule = TreeGridModule;
exports.TreeGridAllModule = TreeGridAllModule;
exports.FilterService = FilterService;
exports.PageService = PageService;
exports.SortService = SortService;
exports.ReorderService = ReorderService;
exports.ToolbarService = ToolbarService;
exports.AggregateService = AggregateService;
exports.ResizeService = ResizeService;
exports.ColumnMenuService = ColumnMenuService;
exports.ExcelExportService = ExcelExportService;
exports.PdfExportService = PdfExportService;
exports.CommandColumnService = CommandColumnService;
exports.ContextMenuService = ContextMenuService;
exports.EditService = EditService;
exports.SelectionService = SelectionService;
exports.VirtualScrollService = VirtualScrollService;
exports.DetailRowService = DetailRowService;
exports.RowDDService = RowDDService;
exports.FreezeService = FreezeService;
exports.ɵa = inputs;
exports.ɵb = outputs$3;
exports.TreeGrid = ej2Treegrid.TreeGrid;
exports.load = ej2Treegrid.load;
exports.rowDataBound = ej2Treegrid.rowDataBound;
exports.dataBound = ej2Treegrid.dataBound;
exports.queryCellInfo = ej2Treegrid.queryCellInfo;
exports.beforeDataBound = ej2Treegrid.beforeDataBound;
exports.actionBegin = ej2Treegrid.actionBegin;
exports.dataStateChange = ej2Treegrid.dataStateChange;
exports.actionComplete = ej2Treegrid.actionComplete;
exports.rowSelecting = ej2Treegrid.rowSelecting;
exports.rowSelected = ej2Treegrid.rowSelected;
exports.checkboxChange = ej2Treegrid.checkboxChange;
exports.rowDeselected = ej2Treegrid.rowDeselected;
exports.toolbarClick = ej2Treegrid.toolbarClick;
exports.beforeExcelExport = ej2Treegrid.beforeExcelExport;
exports.beforePdfExport = ej2Treegrid.beforePdfExport;
exports.resizeStop = ej2Treegrid.resizeStop;
exports.expanded = ej2Treegrid.expanded;
exports.expanding = ej2Treegrid.expanding;
exports.collapsed = ej2Treegrid.collapsed;
exports.collapsing = ej2Treegrid.collapsing;
exports.remoteExpand = ej2Treegrid.remoteExpand;
exports.localPagedExpandCollapse = ej2Treegrid.localPagedExpandCollapse;
exports.pagingActions = ej2Treegrid.pagingActions;
exports.printGridInit = ej2Treegrid.printGridInit;
exports.contextMenuOpen = ej2Treegrid.contextMenuOpen;
exports.contextMenuClick = ej2Treegrid.contextMenuClick;
exports.savePreviousRowPosition = ej2Treegrid.savePreviousRowPosition;
exports.crudAction = ej2Treegrid.crudAction;
exports.beginEdit = ej2Treegrid.beginEdit;
exports.beginAdd = ej2Treegrid.beginAdd;
exports.recordDoubleClick = ej2Treegrid.recordDoubleClick;
exports.cellSave = ej2Treegrid.cellSave;
exports.cellSaved = ej2Treegrid.cellSaved;
exports.cellEdit = ej2Treegrid.cellEdit;
exports.batchDelete = ej2Treegrid.batchDelete;
exports.batchCancel = ej2Treegrid.batchCancel;
exports.batchAdd = ej2Treegrid.batchAdd;
exports.beforeBatchAdd = ej2Treegrid.beforeBatchAdd;
exports.beforeBatchSave = ej2Treegrid.beforeBatchSave;
exports.batchSave = ej2Treegrid.batchSave;
exports.keyPressed = ej2Treegrid.keyPressed;
exports.updateData = ej2Treegrid.updateData;
exports.doubleTap = ej2Treegrid.doubleTap;
exports.virtualColumnIndex = ej2Treegrid.virtualColumnIndex;
exports.virtualActionArgs = ej2Treegrid.virtualActionArgs;
exports.dataListener = ej2Treegrid.dataListener;
exports.indexModifier = ej2Treegrid.indexModifier;
exports.beforeStartEdit = ej2Treegrid.beforeStartEdit;
exports.beforeBatchCancel = ej2Treegrid.beforeBatchCancel;
exports.batchEditFormRendered = ej2Treegrid.batchEditFormRendered;
exports.detailDataBound = ej2Treegrid.detailDataBound;
exports.rowDrag = ej2Treegrid.rowDrag;
exports.rowDragStartHelper = ej2Treegrid.rowDragStartHelper;
exports.rowDrop = ej2Treegrid.rowDrop;
exports.rowDragStart = ej2Treegrid.rowDragStart;
exports.rowsAdd = ej2Treegrid.rowsAdd;
exports.rowsRemove = ej2Treegrid.rowsRemove;
exports.rowdraging = ej2Treegrid.rowdraging;
exports.rowDropped = ej2Treegrid.rowDropped;
exports.DataManipulation = ej2Treegrid.DataManipulation;
exports.Column = ej2Treegrid.Column;
exports.EditSettings = ej2Treegrid.EditSettings;
exports.Predicate = ej2Treegrid.Predicate;
exports.FilterSettings = ej2Treegrid.FilterSettings;
exports.PageSettings = ej2Treegrid.PageSettings;
exports.SearchSettings = ej2Treegrid.SearchSettings;
exports.SelectionSettings = ej2Treegrid.SelectionSettings;
exports.AggregateColumn = ej2Treegrid.AggregateColumn;
exports.AggregateRow = ej2Treegrid.AggregateRow;
exports.SortDescriptor = ej2Treegrid.SortDescriptor;
exports.SortSettings = ej2Treegrid.SortSettings;
exports.RowDropSettings = ej2Treegrid.RowDropSettings;
exports.Render = ej2Treegrid.Render;
exports.TreeVirtualRowModelGenerator = ej2Treegrid.TreeVirtualRowModelGenerator;
exports.isRemoteData = ej2Treegrid.isRemoteData;
exports.isCountRequired = ej2Treegrid.isCountRequired;
exports.isFilterChildHierarchy = ej2Treegrid.isFilterChildHierarchy;
exports.findParentRecords = ej2Treegrid.findParentRecords;
exports.getExpandStatus = ej2Treegrid.getExpandStatus;
exports.findChildrenRecords = ej2Treegrid.findChildrenRecords;
exports.isOffline = ej2Treegrid.isOffline;
exports.extendArray = ej2Treegrid.extendArray;
exports.getPlainData = ej2Treegrid.getPlainData;
exports.getParentData = ej2Treegrid.getParentData;
exports.ToolbarItem = ej2Treegrid.ToolbarItem;
exports.ContextMenuItems = ej2Treegrid.ContextMenuItems;
exports.Filter = ej2Treegrid.Filter;
exports.ExcelExport = ej2Treegrid.ExcelExport;
exports.PdfExport = ej2Treegrid.PdfExport;
exports.Page = ej2Treegrid.Page;
exports.Toolbar = ej2Treegrid.Toolbar;
exports.Aggregate = ej2Treegrid.Aggregate;
exports.Sort = ej2Treegrid.Sort;
exports.Reorder = ej2Treegrid.Reorder;
exports.Resize = ej2Treegrid.Resize;
exports.ColumnMenu = ej2Treegrid.ColumnMenu;
exports.ContextMenu = ej2Treegrid.ContextMenu;
exports.Edit = ej2Treegrid.Edit;
exports.CommandColumn = ej2Treegrid.CommandColumn;
exports.Selection = ej2Treegrid.Selection;
exports.DetailRow = ej2Treegrid.DetailRow;
exports.VirtualScroll = ej2Treegrid.VirtualScroll;
exports.TreeVirtual = ej2Treegrid.TreeVirtual;
exports.Freeze = ej2Treegrid.Freeze;
exports.RowDD = ej2Treegrid.RowDD;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ej2-angular-treegrid.umd.js.map
