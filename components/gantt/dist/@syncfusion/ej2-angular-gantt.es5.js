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
import { ColumnMenu, ContextMenu, DayMarkers, Edit, ExcelExport, Filter, Gantt, PdfExport, Reorder, Resize, RowDD, Selection, Sort, Toolbar } from '@syncfusion/ej2-gantt';
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
var input = ['allowEditing', 'allowFiltering', 'allowReordering', 'allowResizing', 'allowSorting', 'clipMode', 'customAttributes', 'disableHtmlEncode', 'displayAsCheckBox', 'edit', 'editType', 'field', 'filter', 'format', 'formatter', 'headerTemplate', 'headerText', 'headerTextAlign', 'hideAtMedia', 'isPrimaryKey', 'maxWidth', 'minWidth', 'template', 'textAlign', 'type', 'valueAccessor', 'visible', 'width'];
var outputs = [];
/**
 * `e-column` directive represent a column of the Angular Gantt.
 * It must be contained in a Gantt component(`ejs-gantt`).
 * ```html
 * <ejs-gantt [dataSource]='data' allowSelection='true' allowSorting='true'>
 *   <e-columns>
 *    <e-column field='ID' width='150'></e-column>
 *    <e-column field='taskName' headerText='Task Name' width='200'></e-column>
 *   </e-columns>
 * </ejs-gantt>
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
                selector: 'ejs-gantt>e-columns>e-column',
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
};
__decorate([
    Template(),
    __metadata("design:type", Object)
], ColumnDirective.prototype, "template", void 0);
__decorate([
    Template(),
    __metadata("design:type", Object)
], ColumnDirective.prototype, "headerTemplate", void 0);
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
                selector: 'ejs-gantt>e-columns',
                queries: {
                    children: new ContentChildren(ColumnDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
ColumnsDirective.ctorParameters = function () { return []; };
var input$1 = ['fields', 'headerText', 'type'];
var outputs$1 = [];
/**
 * `e-add-dialog-field` directive represent a add dialog fields collection in Gantt task add dialog.
 * It must be contained in a Gantt component(`ejs-gantt`).
 * ```html
 * <ejs-gantt [dataSource]='data' allowSelection='true' allowSorting='true'>
 *   <e-add-dialog-fields>
 *     <e-add-dialog-field type='General' headerText='General'></e-add-dialog-field>
 *     <e-add-dialog-field type='Dependency' headerText='Dependency'></e-add-dialog-field>
 *   </e-add-dialog-fields>
 * </ejs-gantt>
 * ```
 */
var AddDialogFieldDirective = /** @class */ (function (_super) {
    __extends(AddDialogFieldDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function AddDialogFieldDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$1);
        _this.directivePropList = input$1;
        return _this;
    }
    return AddDialogFieldDirective;
}(ComplexBase));
AddDialogFieldDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-gantt>e-add-dialog-fields>e-add-dialog-field',
                inputs: input$1,
                outputs: outputs$1,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
AddDialogFieldDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * AddDialogField Array Directive
 */
var AddDialogFieldsDirective = /** @class */ (function (_super) {
    __extends(AddDialogFieldsDirective, _super);
    function AddDialogFieldsDirective() {
        return _super.call(this, 'adddialogfields') || this;
    }
    return AddDialogFieldsDirective;
}(ArrayBase));
AddDialogFieldsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-gantt>e-add-dialog-fields',
                queries: {
                    children: new ContentChildren(AddDialogFieldDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
AddDialogFieldsDirective.ctorParameters = function () { return []; };
var input$2 = ['fields', 'headerText', 'type'];
var outputs$2 = [];
/**
 * `e-edit-dialog-field` directive represent a edit dialog fields collection in Gantt task add dialog.
 * It must be contained in a Gantt component(`ejs-gantt`).
 * ```html
 * <ejs-gantt [dataSource]='data' allowSelection='true' allowSorting='true'>
 *   <e-edit-dialog-fields>
 *     <e-edit-dialog-field type='General' headerText='General'></e-edit-dialog-field>
 *     <e-edit-dialog-field type='Dependency' headerText='Dependency'></e-edit-dialog-field>
 *   </e-edit-dialog-fields>
 * </ejs-gantt>
 * ```
 */
var EditDialogFieldDirective = /** @class */ (function (_super) {
    __extends(EditDialogFieldDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function EditDialogFieldDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$2);
        _this.directivePropList = input$2;
        return _this;
    }
    return EditDialogFieldDirective;
}(ComplexBase));
EditDialogFieldDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-gantt>e-edit-dialog-fields>e-edit-dialog-field',
                inputs: input$2,
                outputs: outputs$2,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
EditDialogFieldDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * EditDialogField Array Directive
 */
var EditDialogFieldsDirective = /** @class */ (function (_super) {
    __extends(EditDialogFieldsDirective, _super);
    function EditDialogFieldsDirective() {
        return _super.call(this, 'editdialogfields') || this;
    }
    return EditDialogFieldsDirective;
}(ArrayBase));
EditDialogFieldsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-gantt>e-edit-dialog-fields',
                queries: {
                    children: new ContentChildren(EditDialogFieldDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
EditDialogFieldsDirective.ctorParameters = function () { return []; };
var input$3 = ['from', 'to'];
var outputs$3 = [];
/**
 * `e-day-working-time-collection` directive represent a working time ranges in a day.
 * It must be contained in a Gantt component(`ejs-gantt`).
 * ```html
 * <ejs-gantt [dataSource]='data' allowSelection='true' allowSorting='true'>
 *   <e-day-working-time-collection>
 *     <e-day-working-time from='8' to='12'></e-day-working-time>
 *     <e-day-working-time from='13' to='17'></e-day-working-time>
 *   </e-day-working-time-collection>
 * </ejs-gantt>
 * ```
 */
var DayWorkingTimeDirective = /** @class */ (function (_super) {
    __extends(DayWorkingTimeDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function DayWorkingTimeDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$3);
        _this.directivePropList = input$3;
        return _this;
    }
    return DayWorkingTimeDirective;
}(ComplexBase));
DayWorkingTimeDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-gantt>e-day-working-time-collection>e-day-working-time',
                inputs: input$3,
                outputs: outputs$3,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
DayWorkingTimeDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * DayWorkingTime Array Directive
 */
var DayWorkingTimeCollectionDirective = /** @class */ (function (_super) {
    __extends(DayWorkingTimeCollectionDirective, _super);
    function DayWorkingTimeCollectionDirective() {
        return _super.call(this, 'dayworkingtime') || this;
    }
    return DayWorkingTimeCollectionDirective;
}(ArrayBase));
DayWorkingTimeCollectionDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-gantt>e-day-working-time-collection',
                queries: {
                    children: new ContentChildren(DayWorkingTimeDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
DayWorkingTimeCollectionDirective.ctorParameters = function () { return []; };
var input$4 = ['cssClass', 'from', 'label', 'to'];
var outputs$4 = [];
/**
 * `e-holidays` directive represent a holidays collection in Gantt.
 * It must be contained in a Gantt component(`ejs-gantt`).
 * ```html
 * <ejs-gantt [dataSource]='data' allowSelection='true' allowSorting='true'>
 *   <e-holidays>
 *     <e-holiday from='02/20/2018' label='Holiday 1'></e-holiday>
 *     <e-holiday from='05/15/2018' label='Holiday 2'></e-holiday>
 *   </e-holidays>
 * </ejs-gantt>
 * ```
 */
var HolidayDirective = /** @class */ (function (_super) {
    __extends(HolidayDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function HolidayDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$4);
        _this.directivePropList = input$4;
        return _this;
    }
    return HolidayDirective;
}(ComplexBase));
HolidayDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-gantt>e-holidays>e-holidays',
                inputs: input$4,
                outputs: outputs$4,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
HolidayDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * Holiday Array Directive
 */
var HolidaysDirective = /** @class */ (function (_super) {
    __extends(HolidaysDirective, _super);
    function HolidaysDirective() {
        return _super.call(this, 'holidays') || this;
    }
    return HolidaysDirective;
}(ArrayBase));
HolidaysDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-gantt>e-holidays',
                queries: {
                    children: new ContentChildren(HolidayDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
HolidaysDirective.ctorParameters = function () { return []; };
var input$5 = ['cssClass', 'day', 'label'];
var outputs$5 = [];
/**
 * `e-event-markers` directive represent a event marker collection in Gantt.
 * It must be contained in a Gantt component(`ejs-gantt`).
 * ```html
 * <ejs-gantt [dataSource]='data' allowSelection='true' allowSorting='true'>
 *   <e-event-markers>
 *     <e-event-marker day='02/10/2018' label='Project Starts'></e-event-marker>
 *   </e-event-markers>
 * </ejs-gantt>
 * ```
 */
var EventMarkerDirective = /** @class */ (function (_super) {
    __extends(EventMarkerDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function EventMarkerDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$5);
        _this.directivePropList = input$5;
        return _this;
    }
    return EventMarkerDirective;
}(ComplexBase));
EventMarkerDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-gantt>e-event-markers>e-event-marker',
                inputs: input$5,
                outputs: outputs$5,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
EventMarkerDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * EventMarker Array Directive
 */
var EventMarkersDirective = /** @class */ (function (_super) {
    __extends(EventMarkersDirective, _super);
    function EventMarkersDirective() {
        return _super.call(this, 'eventmarkers') || this;
    }
    return EventMarkersDirective;
}(ArrayBase));
EventMarkersDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-gantt>e-event-markers',
                queries: {
                    children: new ContentChildren(EventMarkerDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
EventMarkersDirective.ctorParameters = function () { return []; };
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
var inputs = ['addDialogFields', 'allowExcelExport', 'allowFiltering', 'allowKeyboard', 'allowPdfExport', 'allowReordering', 'allowResizing', 'allowRowDragAndDrop', 'allowSelection', 'allowSorting', 'allowUnscheduledTasks', 'autoFocusTasks', 'baselineColor', 'collapseAllParentTasks', 'columnMenuItems', 'columns', 'connectorLineBackground', 'connectorLineWidth', 'contextMenuItems', 'dataSource', 'dateFormat', 'dayWorkingTime', 'disableHtmlEncode', 'durationUnit', 'editDialogFields', 'editSettings', 'enableContextMenu', 'enablePersistence', 'enablePredecessorValidation', 'enableRtl', 'eventMarkers', 'filterSettings', 'gridLines', 'height', 'highlightWeekends', 'holidays', 'includeWeekend', 'labelSettings', 'locale', 'milestoneTemplate', 'parentTaskbarTemplate', 'projectEndDate', 'projectStartDate', 'query', 'renderBaseline', 'resourceFields', 'resourceIDMapping', 'resourceNameMapping', 'resources', 'rowHeight', 'searchSettings', 'selectedRowIndex', 'selectionSettings', 'showColumnMenu', 'showInlineNotes', 'sortSettings', 'splitterSettings', 'taskFields', 'taskMode', 'taskType', 'taskbarHeight', 'taskbarTemplate', 'timelineSettings', 'toolbar', 'tooltipSettings', 'treeColumnIndex', 'validateManualTasksOnLinking', 'viewType', 'width', 'workUnit', 'workWeek'];
var outputs$6 = ['actionBegin', 'actionComplete', 'actionFailure', 'beforeExcelExport', 'beforePdfExport', 'beforeTooltipRender', 'cellDeselected', 'cellDeselecting', 'cellEdit', 'cellSelected', 'cellSelecting', 'collapsed', 'collapsing', 'columnDrag', 'columnDragStart', 'columnDrop', 'columnMenuClick', 'columnMenuOpen', 'contextMenuClick', 'contextMenuOpen', 'created', 'dataBound', 'destroyed', 'endEdit', 'excelExportComplete', 'excelHeaderQueryCellInfo', 'excelQueryCellInfo', 'expanded', 'expanding', 'headerCellInfo', 'load', 'onMouseMove', 'onTaskbarClick', 'pdfColumnHeaderQueryCellInfo', 'pdfExportComplete', 'pdfQueryCellInfo', 'pdfQueryTaskbarInfo', 'pdfQueryTimelineCellInfo', 'queryCellInfo', 'queryTaskbarInfo', 'recordDoubleClick', 'resizeStart', 'resizeStop', 'resizing', 'rowDataBound', 'rowDeselected', 'rowDeselecting', 'rowDrag', 'rowDragStart', 'rowDragStartHelper', 'rowDrop', 'rowSelected', 'rowSelecting', 'splitterResizeStart', 'splitterResized', 'splitterResizing', 'taskbarEdited', 'taskbarEditing', 'toolbarClick', 'dataSourceChange'];
var twoWays = ['dataSource'];
/**
 * `ejs-gantt` represents the Angular Gantt Component.
 * ```html
 * <ejs-gantt [dataSource]='data' allowSelection='true' allowSorting='true'></ejs-gantt>
 * ```
 */
var GanttComponent = /** @class */ (function (_super) {
    __extends(GanttComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function GanttComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.tags = ['columns', 'addDialogFields', 'editDialogFields', 'dayWorkingTime', 'holidays', 'eventMarkers'];
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        try {
            var mod = _this.injector.get('GanttFilter');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            var mod = _this.injector.get('GanttSelection');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            var mod = _this.injector.get('GanttSort');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            var mod = _this.injector.get('GanttReorder');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            var mod = _this.injector.get('GanttResize');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            var mod = _this.injector.get('GanttEdit');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        try {
            var mod = _this.injector.get('GanttDayMarkers');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_g) { }
        try {
            var mod = _this.injector.get('GanttToolbar');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_h) { }
        try {
            var mod = _this.injector.get('GanttContextMenu');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_j) { }
        try {
            var mod = _this.injector.get('GanttExcelExport');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_k) { }
        try {
            var mod = _this.injector.get('GanttRowDD');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_l) { }
        try {
            var mod = _this.injector.get('GanttColumnMenu');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_m) { }
        try {
            var mod = _this.injector.get('GanttPdfExport');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_o) { }
        _this.registerEvents(outputs$6);
        _this.addTwoWay.call(_this, twoWays);
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.context = new ComponentBase();
        return _this;
    }
    /**
     * @return {?}
     */
    GanttComponent.prototype.ngOnInit = function () {
        this.context.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    GanttComponent.prototype.ngAfterViewInit = function () {
        this.context.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    GanttComponent.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    GanttComponent.prototype.ngAfterContentChecked = function () {
        this.tagObjects[0].instance = this.childColumns;
        if (this.childAddDialogFields) {
            this.tagObjects[1].instance = this.childAddDialogFields;
        }
        if (this.childEditDialogFields) {
            this.tagObjects[2].instance = this.childEditDialogFields;
        }
        if (this.childDayWorkingTime) {
            this.tagObjects[3].instance = this.childDayWorkingTime;
        }
        if (this.childHolidays) {
            this.tagObjects[4].instance = this.childHolidays;
        }
        if (this.childEventMarkers) {
            this.tagObjects[5].instance = this.childEventMarkers;
        }
        this.context.ngAfterContentChecked(this);
    };
    return GanttComponent;
}(Gantt));
GanttComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-gantt',
                inputs: inputs,
                outputs: outputs$6,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {
                    childColumns: new ContentChild(ColumnsDirective),
                    childAddDialogFields: new ContentChild(AddDialogFieldsDirective),
                    childEditDialogFields: new ContentChild(EditDialogFieldsDirective),
                    childDayWorkingTime: new ContentChild(DayWorkingTimeCollectionDirective),
                    childHolidays: new ContentChild(HolidaysDirective),
                    childEventMarkers: new ContentChild(EventMarkersDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
GanttComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
GanttComponent.propDecorators = {
    'parentTaskbarTemplate': [{ type: ContentChild, args: ['parentTaskbarTemplate',] },],
    'milestoneTemplate': [{ type: ContentChild, args: ['milestoneTemplate',] },],
    'taskbarTemplate': [{ type: ContentChild, args: ['taskbarTemplate',] },],
    'labelSettings_rightLabel': [{ type: ContentChild, args: ['labelSettingsRightLabel',] },],
    'labelSettings_leftLabel': [{ type: ContentChild, args: ['labelSettingsLeftLabel',] },],
    'labelSettings_taskLabel': [{ type: ContentChild, args: ['labelSettingsTaskLabel',] },],
    'tooltipSettings_taskbar': [{ type: ContentChild, args: ['tooltipSettingsTaskbar',] },],
    'tooltipSettings_baseline': [{ type: ContentChild, args: ['tooltipSettingsBaseline',] },],
    'tooltipSettings_connectorLine': [{ type: ContentChild, args: ['tooltipSettingsConnectorLine',] },],
    'tooltipSettings_editing': [{ type: ContentChild, args: ['tooltipSettingsEditing',] },],
};
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], GanttComponent.prototype, "parentTaskbarTemplate", void 0);
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], GanttComponent.prototype, "milestoneTemplate", void 0);
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], GanttComponent.prototype, "taskbarTemplate", void 0);
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], GanttComponent.prototype, "labelSettings_rightLabel", void 0);
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], GanttComponent.prototype, "labelSettings_leftLabel", void 0);
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], GanttComponent.prototype, "labelSettings_taskLabel", void 0);
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], GanttComponent.prototype, "tooltipSettings_taskbar", void 0);
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], GanttComponent.prototype, "tooltipSettings_baseline", void 0);
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], GanttComponent.prototype, "tooltipSettings_connectorLine", void 0);
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], GanttComponent.prototype, "tooltipSettings_editing", void 0);
GanttComponent = __decorate$1([
    ComponentMixins([ComponentBase]),
    __metadata$1("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], GanttComponent);
/**
 * NgModule definition for the Gantt component.
 */
var GanttModule = /** @class */ (function () {
    function GanttModule() {
    }
    return GanttModule;
}());
GanttModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    GanttComponent,
                    ColumnDirective,
                    ColumnsDirective,
                    AddDialogFieldDirective,
                    AddDialogFieldsDirective,
                    EditDialogFieldDirective,
                    EditDialogFieldsDirective,
                    DayWorkingTimeDirective,
                    DayWorkingTimeCollectionDirective,
                    HolidayDirective,
                    HolidaysDirective,
                    EventMarkerDirective,
                    EventMarkersDirective
                ],
                exports: [
                    GanttComponent,
                    ColumnDirective,
                    ColumnsDirective,
                    AddDialogFieldDirective,
                    AddDialogFieldsDirective,
                    EditDialogFieldDirective,
                    EditDialogFieldsDirective,
                    DayWorkingTimeDirective,
                    DayWorkingTimeCollectionDirective,
                    HolidayDirective,
                    HolidaysDirective,
                    EventMarkerDirective,
                    EventMarkersDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
GanttModule.ctorParameters = function () { return []; };
var FilterService = { provide: 'GanttFilter', useValue: Filter };
var SelectionService = { provide: 'GanttSelection', useValue: Selection };
var SortService = { provide: 'GanttSort', useValue: Sort };
var ReorderService = { provide: 'GanttReorder', useValue: Reorder };
var ResizeService = { provide: 'GanttResize', useValue: Resize };
var EditService = { provide: 'GanttEdit', useValue: Edit };
var DayMarkersService = { provide: 'GanttDayMarkers', useValue: DayMarkers };
var ToolbarService = { provide: 'GanttToolbar', useValue: Toolbar };
var ContextMenuService = { provide: 'GanttContextMenu', useValue: ContextMenu };
var ExcelExportService = { provide: 'GanttExcelExport', useValue: ExcelExport };
var RowDDService = { provide: 'GanttRowDD', useValue: RowDD };
var ColumnMenuService = { provide: 'GanttColumnMenu', useValue: ColumnMenu };
var PdfExportService = { provide: 'GanttPdfExport', useValue: PdfExport };
/**
 * NgModule definition for the Gantt component with providers.
 */
var GanttAllModule = /** @class */ (function () {
    function GanttAllModule() {
    }
    return GanttAllModule;
}());
GanttAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, GanttModule],
                exports: [
                    GanttModule
                ],
                providers: [
                    FilterService,
                    SelectionService,
                    SortService,
                    ReorderService,
                    ResizeService,
                    EditService,
                    DayMarkersService,
                    ToolbarService,
                    ContextMenuService,
                    ExcelExportService,
                    RowDDService,
                    ColumnMenuService,
                    PdfExportService
                ]
            },] },
];
/**
 * @nocollapse
 */
GanttAllModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { ColumnDirective, ColumnsDirective, AddDialogFieldDirective, AddDialogFieldsDirective, EditDialogFieldDirective, EditDialogFieldsDirective, DayWorkingTimeDirective, DayWorkingTimeCollectionDirective, HolidayDirective, HolidaysDirective, EventMarkerDirective, EventMarkersDirective, GanttComponent, GanttModule, GanttAllModule, FilterService, SelectionService, SortService, ReorderService, ResizeService, EditService, DayMarkersService, ToolbarService, ContextMenuService, ExcelExportService, RowDDService, ColumnMenuService, PdfExportService, inputs as ɵa, outputs$6 as ɵb };
export { Gantt, PdfHorizontalOverflowType, parentsUntil, isScheduledTask, getSwapKey, isRemoteData, getTaskData, formatString, getIndex, pixelToPoint, pointToPixel, load, rowDataBound, queryCellInfo, toolbarClick, keyPressed, Edit, Reorder, Resize, Filter, Sort, Dependency, Selection, Toolbar, DayMarkers, ContextMenu, ExcelExport, ColumnMenu, RowDD, PdfExport, Column, DayWorkingTime, AddDialogFieldSettings, EditDialogFieldSettings, EditSettings, EventMarker, FilterSettings, SearchSettings, Holiday, LabelSettings, SelectionSettings, SplitterSettings, TaskFields, TimelineTierSettings, TimelineSettings, TooltipSettings, SortDescriptor, SortSettings, ResourceFields } from '@syncfusion/ej2-gantt';
//# sourceMappingURL=ej2-angular-gantt.es5.js.map
