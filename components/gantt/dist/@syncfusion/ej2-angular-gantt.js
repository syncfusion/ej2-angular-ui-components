import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, Directive, ElementRef, Injector, NgModule, Renderer2, ViewContainerRef } from '@angular/core';
import { ArrayBase, ComplexBase, ComponentBase, ComponentMixins, Template, setValue } from '@syncfusion/ej2-angular-base';
import { ColumnMenu, ContextMenu, DayMarkers, Edit, ExcelExport, Filter, Gantt, PdfExport, Reorder, Resize, RowDD, Selection, Sort, Toolbar } from '@syncfusion/ej2-gantt';
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
let input = ['allowEditing', 'allowFiltering', 'allowReordering', 'allowResizing', 'allowSorting', 'clipMode', 'customAttributes', 'disableHtmlEncode', 'displayAsCheckBox', 'edit', 'editType', 'field', 'filter', 'format', 'formatter', 'headerTemplate', 'headerText', 'headerTextAlign', 'hideAtMedia', 'isPrimaryKey', 'maxWidth', 'minWidth', 'template', 'textAlign', 'type', 'valueAccessor', 'visible', 'width'];
let outputs = [];
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
                selector: 'ejs-gantt>e-columns>e-column',
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
class ColumnsDirective extends ArrayBase {
    constructor() {
        super('columns');
    }
}
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
ColumnsDirective.ctorParameters = () => [];

let input$1 = ['fields', 'headerText', 'type'];
let outputs$1 = [];
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
class AddDialogFieldDirective extends ComplexBase {
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
AddDialogFieldDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * AddDialogField Array Directive
 */
class AddDialogFieldsDirective extends ArrayBase {
    constructor() {
        super('adddialogfields');
    }
}
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
AddDialogFieldsDirective.ctorParameters = () => [];

let input$2 = ['fields', 'headerText', 'type'];
let outputs$2 = [];
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
class EditDialogFieldDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$2);
        this.directivePropList = input$2;
    }
}
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
EditDialogFieldDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * EditDialogField Array Directive
 */
class EditDialogFieldsDirective extends ArrayBase {
    constructor() {
        super('editdialogfields');
    }
}
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
EditDialogFieldsDirective.ctorParameters = () => [];

let input$3 = ['from', 'to'];
let outputs$3 = [];
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
class DayWorkingTimeDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$3);
        this.directivePropList = input$3;
    }
}
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
DayWorkingTimeDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * DayWorkingTime Array Directive
 */
class DayWorkingTimeCollectionDirective extends ArrayBase {
    constructor() {
        super('dayworkingtime');
    }
}
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
DayWorkingTimeCollectionDirective.ctorParameters = () => [];

let input$4 = ['cssClass', 'from', 'label', 'to'];
let outputs$4 = [];
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
class HolidayDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$4);
        this.directivePropList = input$4;
    }
}
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
HolidayDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * Holiday Array Directive
 */
class HolidaysDirective extends ArrayBase {
    constructor() {
        super('holidays');
    }
}
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
HolidaysDirective.ctorParameters = () => [];

let input$5 = ['cssClass', 'day', 'label'];
let outputs$5 = [];
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
class EventMarkerDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$5);
        this.directivePropList = input$5;
    }
}
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
EventMarkerDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * EventMarker Array Directive
 */
class EventMarkersDirective extends ArrayBase {
    constructor() {
        super('eventmarkers');
    }
}
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
EventMarkersDirective.ctorParameters = () => [];

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs = ['addDialogFields', 'allowExcelExport', 'allowFiltering', 'allowKeyboard', 'allowPdfExport', 'allowReordering', 'allowResizing', 'allowRowDragAndDrop', 'allowSelection', 'allowSorting', 'allowUnscheduledTasks', 'autoFocusTasks', 'baselineColor', 'collapseAllParentTasks', 'columnMenuItems', 'columns', 'connectorLineBackground', 'connectorLineWidth', 'contextMenuItems', 'dataSource', 'dateFormat', 'dayWorkingTime', 'disableHtmlEncode', 'durationUnit', 'editDialogFields', 'editSettings', 'enableContextMenu', 'enablePersistence', 'enablePredecessorValidation', 'enableRtl', 'eventMarkers', 'filterSettings', 'gridLines', 'height', 'highlightWeekends', 'holidays', 'includeWeekend', 'labelSettings', 'locale', 'milestoneTemplate', 'parentTaskbarTemplate', 'projectEndDate', 'projectStartDate', 'query', 'renderBaseline', 'resourceFields', 'resourceIDMapping', 'resourceNameMapping', 'resources', 'rowHeight', 'searchSettings', 'selectedRowIndex', 'selectionSettings', 'showColumnMenu', 'showInlineNotes', 'sortSettings', 'splitterSettings', 'taskFields', 'taskMode', 'taskType', 'taskbarHeight', 'taskbarTemplate', 'timelineSettings', 'toolbar', 'tooltipSettings', 'treeColumnIndex', 'validateManualTasksOnLinking', 'viewType', 'width', 'workUnit', 'workWeek'];
const outputs$6 = ['actionBegin', 'actionComplete', 'actionFailure', 'beforeExcelExport', 'beforePdfExport', 'beforeTooltipRender', 'cellDeselected', 'cellDeselecting', 'cellEdit', 'cellSelected', 'cellSelecting', 'collapsed', 'collapsing', 'columnDrag', 'columnDragStart', 'columnDrop', 'columnMenuClick', 'columnMenuOpen', 'contextMenuClick', 'contextMenuOpen', 'created', 'dataBound', 'destroyed', 'endEdit', 'excelExportComplete', 'excelHeaderQueryCellInfo', 'excelQueryCellInfo', 'expanded', 'expanding', 'headerCellInfo', 'load', 'onMouseMove', 'onTaskbarClick', 'pdfColumnHeaderQueryCellInfo', 'pdfExportComplete', 'pdfQueryCellInfo', 'pdfQueryTaskbarInfo', 'pdfQueryTimelineCellInfo', 'queryCellInfo', 'queryTaskbarInfo', 'recordDoubleClick', 'resizeStart', 'resizeStop', 'resizing', 'rowDataBound', 'rowDeselected', 'rowDeselecting', 'rowDrag', 'rowDragStart', 'rowDragStartHelper', 'rowDrop', 'rowSelected', 'rowSelecting', 'splitterResizeStart', 'splitterResized', 'splitterResizing', 'taskbarEdited', 'taskbarEditing', 'toolbarClick', 'dataSourceChange'];
const twoWays = ['dataSource'];
/**
 * `ejs-gantt` represents the Angular Gantt Component.
 * ```html
 * <ejs-gantt [dataSource]='data' allowSelection='true' allowSorting='true'></ejs-gantt>
 * ```
 */
let GanttComponent = class GanttComponent extends Gantt {
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
        this.tags = ['columns', 'addDialogFields', 'editDialogFields', 'dayWorkingTime', 'holidays', 'eventMarkers'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('GanttFilter');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            let mod = this.injector.get('GanttSelection');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            let mod = this.injector.get('GanttSort');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            let mod = this.injector.get('GanttReorder');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            let mod = this.injector.get('GanttResize');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            let mod = this.injector.get('GanttEdit');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        try {
            let mod = this.injector.get('GanttDayMarkers');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_g) { }
        try {
            let mod = this.injector.get('GanttToolbar');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_h) { }
        try {
            let mod = this.injector.get('GanttContextMenu');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_j) { }
        try {
            let mod = this.injector.get('GanttExcelExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_k) { }
        try {
            let mod = this.injector.get('GanttRowDD');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_l) { }
        try {
            let mod = this.injector.get('GanttColumnMenu');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_m) { }
        try {
            let mod = this.injector.get('GanttPdfExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_o) { }
        this.registerEvents(outputs$6);
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
    }
};
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
GanttComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
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
class GanttModule {
}
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
GanttModule.ctorParameters = () => [];

const FilterService = { provide: 'GanttFilter', useValue: Filter };
const SelectionService = { provide: 'GanttSelection', useValue: Selection };
const SortService = { provide: 'GanttSort', useValue: Sort };
const ReorderService = { provide: 'GanttReorder', useValue: Reorder };
const ResizeService = { provide: 'GanttResize', useValue: Resize };
const EditService = { provide: 'GanttEdit', useValue: Edit };
const DayMarkersService = { provide: 'GanttDayMarkers', useValue: DayMarkers };
const ToolbarService = { provide: 'GanttToolbar', useValue: Toolbar };
const ContextMenuService = { provide: 'GanttContextMenu', useValue: ContextMenu };
const ExcelExportService = { provide: 'GanttExcelExport', useValue: ExcelExport };
const RowDDService = { provide: 'GanttRowDD', useValue: RowDD };
const ColumnMenuService = { provide: 'GanttColumnMenu', useValue: ColumnMenu };
const PdfExportService = { provide: 'GanttPdfExport', useValue: PdfExport };
/**
 * NgModule definition for the Gantt component with providers.
 */
class GanttAllModule {
}
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
GanttAllModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { ColumnDirective, ColumnsDirective, AddDialogFieldDirective, AddDialogFieldsDirective, EditDialogFieldDirective, EditDialogFieldsDirective, DayWorkingTimeDirective, DayWorkingTimeCollectionDirective, HolidayDirective, HolidaysDirective, EventMarkerDirective, EventMarkersDirective, GanttComponent, GanttModule, GanttAllModule, FilterService, SelectionService, SortService, ReorderService, ResizeService, EditService, DayMarkersService, ToolbarService, ContextMenuService, ExcelExportService, RowDDService, ColumnMenuService, PdfExportService, inputs as ɵa, outputs$6 as ɵb };
export { Gantt, PdfHorizontalOverflowType, parentsUntil, isScheduledTask, getSwapKey, isRemoteData, getTaskData, formatString, getIndex, pixelToPoint, pointToPixel, load, rowDataBound, queryCellInfo, toolbarClick, keyPressed, Edit, Reorder, Resize, Filter, Sort, Dependency, Selection, Toolbar, DayMarkers, ContextMenu, ExcelExport, ColumnMenu, RowDD, PdfExport, Column, DayWorkingTime, AddDialogFieldSettings, EditDialogFieldSettings, EditSettings, EventMarker, FilterSettings, SearchSettings, Holiday, LabelSettings, SelectionSettings, SplitterSettings, TaskFields, TimelineTierSettings, TimelineSettings, TooltipSettings, SortDescriptor, SortSettings, ResourceFields } from '@syncfusion/ej2-gantt';
//# sourceMappingURL=ej2-angular-gantt.js.map
