(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@syncfusion/ej2-angular-base'), require('@syncfusion/ej2-gantt'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@syncfusion/ej2-angular-base', '@syncfusion/ej2-gantt', '@angular/common'], factory) :
	(factory((global['ej2-angular-gantt'] = {}),global.ng.core,global.ej2.angular.base,global.ej2.gantt,global.ng.common));
}(this, (function (exports,core,ej2AngularBase,ej2Gantt,common) { 'use strict';

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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs);
        return _this;
    }
    return ColumnDirective;
}(ej2AngularBase.ComplexBase));
ColumnDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
]; };
ColumnDirective.propDecorators = {
    'template': [{ type: core.ContentChild, args: ['template',] },],
    'headerTemplate': [{ type: core.ContentChild, args: ['headerTemplate',] },],
};
__decorate([
    ej2AngularBase.Template(),
    __metadata("design:type", Object)
], ColumnDirective.prototype, "template", void 0);
__decorate([
    ej2AngularBase.Template(),
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
}(ej2AngularBase.ArrayBase));
ColumnsDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-gantt>e-columns',
                queries: {
                    children: new core.ContentChildren(ColumnDirective)
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$1);
        return _this;
    }
    return AddDialogFieldDirective;
}(ej2AngularBase.ComplexBase));
AddDialogFieldDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
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
}(ej2AngularBase.ArrayBase));
AddDialogFieldsDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-gantt>e-add-dialog-fields',
                queries: {
                    children: new core.ContentChildren(AddDialogFieldDirective)
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$2);
        return _this;
    }
    return EditDialogFieldDirective;
}(ej2AngularBase.ComplexBase));
EditDialogFieldDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
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
}(ej2AngularBase.ArrayBase));
EditDialogFieldsDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-gantt>e-edit-dialog-fields',
                queries: {
                    children: new core.ContentChildren(EditDialogFieldDirective)
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$3);
        return _this;
    }
    return DayWorkingTimeDirective;
}(ej2AngularBase.ComplexBase));
DayWorkingTimeDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
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
}(ej2AngularBase.ArrayBase));
DayWorkingTimeCollectionDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-gantt>e-day-working-time-collection',
                queries: {
                    children: new core.ContentChildren(DayWorkingTimeDirective)
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$4);
        return _this;
    }
    return HolidayDirective;
}(ej2AngularBase.ComplexBase));
HolidayDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
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
}(ej2AngularBase.ArrayBase));
HolidaysDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-gantt>e-holidays',
                queries: {
                    children: new core.ContentChildren(HolidayDirective)
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$5);
        return _this;
    }
    return EventMarkerDirective;
}(ej2AngularBase.ComplexBase));
EventMarkerDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
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
}(ej2AngularBase.ArrayBase));
EventMarkersDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-gantt>e-event-markers',
                queries: {
                    children: new core.ContentChildren(EventMarkerDirective)
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
var inputs = ['addDialogFields', 'allowFiltering', 'allowReordering', 'allowResizing', 'allowSelection', 'allowSorting', 'allowUnscheduledTasks', 'autoFocusTasks', 'baselineColor', 'collapseAllParentTasks', 'columnMenuItems', 'columns', 'connectorLineBackground', 'connectorLineWidth', 'contextMenuItems', 'dataSource', 'dateFormat', 'dayWorkingTime', 'durationUnit', 'editDialogFields', 'editSettings', 'enableContextMenu', 'enablePersistence', 'enablePredecessorValidation', 'enableRtl', 'eventMarkers', 'filterSettings', 'gridLines', 'height', 'highlightWeekends', 'holidays', 'includeWeekend', 'labelSettings', 'locale', 'milestoneTemplate', 'parentTaskbarTemplate', 'projectEndDate', 'projectStartDate', 'query', 'renderBaseline', 'resourceIDMapping', 'resourceNameMapping', 'resources', 'rowHeight', 'searchSettings', 'selectedRowIndex', 'selectionSettings', 'showColumnMenu', 'showInlineNotes', 'sortSettings', 'splitterSettings', 'taskFields', 'taskbarHeight', 'taskbarTemplate', 'timelineSettings', 'toolbar', 'tooltipSettings', 'treeColumnIndex', 'width', 'workWeek'];
var outputs$6 = ['actionBegin', 'actionComplete', 'actionFailure', 'beforeTooltipRender', 'cellDeselected', 'cellDeselecting', 'cellEdit', 'cellSelected', 'cellSelecting', 'collapsed', 'collapsing', 'columnDrag', 'columnDragStart', 'columnDrop', 'columnMenuClick', 'columnMenuOpen', 'contextMenuClick', 'contextMenuOpen', 'dataBound', 'endEdit', 'expanded', 'expanding', 'headerCellInfo', 'load', 'queryCellInfo', 'queryTaskbarInfo', 'resizeStart', 'resizeStop', 'resizing', 'rowDataBound', 'rowDeselected', 'rowDeselecting', 'rowSelected', 'rowSelecting', 'splitterResizeStart', 'splitterResized', 'splitterResizing', 'taskbarEdited', 'taskbarEditing', 'toolbarClick', 'dataSourceChange'];
var twoWays = ['dataSource'];
/**
 * `ejs-gantt` represents the Angular Gantt Component.
 * ```html
 * <ejs-gantt [dataSource]='data' allowSelection='true' allowSorting='true'></ejs-gantt>
 * ```
 */
exports.GanttComponent = /** @class */ (function (_super) {
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
        _this.registerEvents(outputs$6);
        _this.addTwoWay.call(_this, twoWays);
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @return {?}
     */
    GanttComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    GanttComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    GanttComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    GanttComponent.prototype.ngAfterContentChecked = function () {
    };
    return GanttComponent;
}(ej2Gantt.Gantt));
exports.GanttComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-gantt',
                inputs: inputs,
                outputs: outputs$6,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {
                    childColumns: new core.ContentChild(ColumnsDirective),
                    childAddDialogFields: new core.ContentChild(AddDialogFieldsDirective),
                    childEditDialogFields: new core.ContentChild(EditDialogFieldsDirective),
                    childDayWorkingTime: new core.ContentChild(DayWorkingTimeCollectionDirective),
                    childHolidays: new core.ContentChild(HolidaysDirective),
                    childEventMarkers: new core.ContentChild(EventMarkersDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
exports.GanttComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.GanttComponent.propDecorators = {
    'parentTaskbarTemplate': [{ type: core.ContentChild, args: ['parentTaskbarTemplate',] },],
    'milestoneTemplate': [{ type: core.ContentChild, args: ['milestoneTemplate',] },],
    'taskbarTemplate': [{ type: core.ContentChild, args: ['taskbarTemplate',] },],
    'labelSettings_rightLabel': [{ type: core.ContentChild, args: ['labelSettingsRightLabel',] },],
    'labelSettings_leftLabel': [{ type: core.ContentChild, args: ['labelSettingsLeftLabel',] },],
    'labelSettings_taskLabel': [{ type: core.ContentChild, args: ['labelSettingsTaskLabel',] },],
    'tooltipSettings_taskbar': [{ type: core.ContentChild, args: ['tooltipSettingsTaskbar',] },],
    'tooltipSettings_baseline': [{ type: core.ContentChild, args: ['tooltipSettingsBaseline',] },],
    'tooltipSettings_connectorLine': [{ type: core.ContentChild, args: ['tooltipSettingsConnectorLine',] },],
    'tooltipSettings_editing': [{ type: core.ContentChild, args: ['tooltipSettingsEditing',] },],
};
__decorate$1([
    ej2AngularBase.Template(),
    __metadata$1("design:type", Object)
], exports.GanttComponent.prototype, "parentTaskbarTemplate", void 0);
__decorate$1([
    ej2AngularBase.Template(),
    __metadata$1("design:type", Object)
], exports.GanttComponent.prototype, "milestoneTemplate", void 0);
__decorate$1([
    ej2AngularBase.Template(),
    __metadata$1("design:type", Object)
], exports.GanttComponent.prototype, "taskbarTemplate", void 0);
__decorate$1([
    ej2AngularBase.Template(),
    __metadata$1("design:type", Object)
], exports.GanttComponent.prototype, "labelSettings_rightLabel", void 0);
__decorate$1([
    ej2AngularBase.Template(),
    __metadata$1("design:type", Object)
], exports.GanttComponent.prototype, "labelSettings_leftLabel", void 0);
__decorate$1([
    ej2AngularBase.Template(),
    __metadata$1("design:type", Object)
], exports.GanttComponent.prototype, "labelSettings_taskLabel", void 0);
__decorate$1([
    ej2AngularBase.Template(),
    __metadata$1("design:type", Object)
], exports.GanttComponent.prototype, "tooltipSettings_taskbar", void 0);
__decorate$1([
    ej2AngularBase.Template(),
    __metadata$1("design:type", Object)
], exports.GanttComponent.prototype, "tooltipSettings_baseline", void 0);
__decorate$1([
    ej2AngularBase.Template(),
    __metadata$1("design:type", Object)
], exports.GanttComponent.prototype, "tooltipSettings_connectorLine", void 0);
__decorate$1([
    ej2AngularBase.Template(),
    __metadata$1("design:type", Object)
], exports.GanttComponent.prototype, "tooltipSettings_editing", void 0);
exports.GanttComponent = __decorate$1([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata$1("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.GanttComponent);
/**
 * NgModule definition for the Gantt component.
 */
var GanttModule = /** @class */ (function () {
    function GanttModule() {
    }
    return GanttModule;
}());
GanttModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.GanttComponent,
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
                    exports.GanttComponent,
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
var FilterService = { provide: 'GanttFilter', useValue: ej2Gantt.Filter };
var SelectionService = { provide: 'GanttSelection', useValue: ej2Gantt.Selection };
var SortService = { provide: 'GanttSort', useValue: ej2Gantt.Sort };
var ReorderService = { provide: 'GanttReorder', useValue: ej2Gantt.Reorder };
var ResizeService = { provide: 'GanttResize', useValue: ej2Gantt.Resize };
var EditService = { provide: 'GanttEdit', useValue: ej2Gantt.Edit };
var DayMarkersService = { provide: 'GanttDayMarkers', useValue: ej2Gantt.DayMarkers };
var ToolbarService = { provide: 'GanttToolbar', useValue: ej2Gantt.Toolbar };
var ContextMenuService = { provide: 'GanttContextMenu', useValue: ej2Gantt.ContextMenu };
/**
 * NgModule definition for the Gantt component with providers.
 */
var GanttAllModule = /** @class */ (function () {
    function GanttAllModule() {
    }
    return GanttAllModule;
}());
GanttAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, GanttModule],
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
                    ContextMenuService
                ]
            },] },
];
/**
 * @nocollapse
 */
GanttAllModule.ctorParameters = function () { return []; };

exports.ColumnDirective = ColumnDirective;
exports.ColumnsDirective = ColumnsDirective;
exports.AddDialogFieldDirective = AddDialogFieldDirective;
exports.AddDialogFieldsDirective = AddDialogFieldsDirective;
exports.EditDialogFieldDirective = EditDialogFieldDirective;
exports.EditDialogFieldsDirective = EditDialogFieldsDirective;
exports.DayWorkingTimeDirective = DayWorkingTimeDirective;
exports.DayWorkingTimeCollectionDirective = DayWorkingTimeCollectionDirective;
exports.HolidayDirective = HolidayDirective;
exports.HolidaysDirective = HolidaysDirective;
exports.EventMarkerDirective = EventMarkerDirective;
exports.EventMarkersDirective = EventMarkersDirective;
exports.GanttModule = GanttModule;
exports.GanttAllModule = GanttAllModule;
exports.FilterService = FilterService;
exports.SelectionService = SelectionService;
exports.SortService = SortService;
exports.ReorderService = ReorderService;
exports.ResizeService = ResizeService;
exports.EditService = EditService;
exports.DayMarkersService = DayMarkersService;
exports.ToolbarService = ToolbarService;
exports.ContextMenuService = ContextMenuService;
exports.ɵa = inputs;
exports.ɵb = outputs$6;
exports.Gantt = ej2Gantt.Gantt;
exports.parentsUntil = ej2Gantt.parentsUntil;
exports.isScheduledTask = ej2Gantt.isScheduledTask;
exports.getSwapKey = ej2Gantt.getSwapKey;
exports.isRemoteData = ej2Gantt.isRemoteData;
exports.getTaskData = ej2Gantt.getTaskData;
exports.formatString = ej2Gantt.formatString;
exports.getIndex = ej2Gantt.getIndex;
exports.load = ej2Gantt.load;
exports.rowDataBound = ej2Gantt.rowDataBound;
exports.queryCellInfo = ej2Gantt.queryCellInfo;
exports.toolbarClick = ej2Gantt.toolbarClick;
exports.keyPressed = ej2Gantt.keyPressed;
exports.Edit = ej2Gantt.Edit;
exports.Reorder = ej2Gantt.Reorder;
exports.Resize = ej2Gantt.Resize;
exports.Filter = ej2Gantt.Filter;
exports.Sort = ej2Gantt.Sort;
exports.Dependency = ej2Gantt.Dependency;
exports.Selection = ej2Gantt.Selection;
exports.Toolbar = ej2Gantt.Toolbar;
exports.DayMarkers = ej2Gantt.DayMarkers;
exports.ContextMenu = ej2Gantt.ContextMenu;
exports.Column = ej2Gantt.Column;
exports.DayWorkingTime = ej2Gantt.DayWorkingTime;
exports.AddDialogFieldSettings = ej2Gantt.AddDialogFieldSettings;
exports.EditDialogFieldSettings = ej2Gantt.EditDialogFieldSettings;
exports.EditSettings = ej2Gantt.EditSettings;
exports.EventMarker = ej2Gantt.EventMarker;
exports.FilterSettings = ej2Gantt.FilterSettings;
exports.SearchSettings = ej2Gantt.SearchSettings;
exports.Holiday = ej2Gantt.Holiday;
exports.LabelSettings = ej2Gantt.LabelSettings;
exports.SelectionSettings = ej2Gantt.SelectionSettings;
exports.SplitterSettings = ej2Gantt.SplitterSettings;
exports.TaskFields = ej2Gantt.TaskFields;
exports.TimelineTierSettings = ej2Gantt.TimelineTierSettings;
exports.TimelineSettings = ej2Gantt.TimelineSettings;
exports.TooltipSettings = ej2Gantt.TooltipSettings;
exports.SortDescriptor = ej2Gantt.SortDescriptor;
exports.SortSettings = ej2Gantt.SortSettings;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ej2-angular-gantt.umd.js.map
