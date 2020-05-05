import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, Directive, ElementRef, Injector, NgModule, Renderer2, ViewContainerRef } from '@angular/core';
import { ArrayBase, ComplexBase, ComponentBase, ComponentMixins, Template, setValue } from '@syncfusion/ej2-angular-base';
import { Agenda, Day, DragAndDrop, ExcelExport, ICalendarExport, ICalendarImport, Month, MonthAgenda, Print, RecurrenceEditor, Resize, Schedule, TimelineMonth, TimelineViews, TimelineYear, Week, WorkWeek } from '@syncfusion/ej2-schedule';
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
let input = ['allowVirtualScrolling', 'cellHeaderTemplate', 'cellTemplate', 'dateFormat', 'dateHeaderTemplate', 'displayName', 'endHour', 'eventTemplate', 'firstDayOfWeek', 'group', 'headerRows', 'interval', 'isSelected', 'option', 'orientation', 'readonly', 'resourceHeaderTemplate', 'showWeekNumber', 'showWeekend', 'startHour', 'timeScale', 'workDays'];
let outputs = [];
/**
 * `e-views` directive represent a view of the Angular Schedule.
 * It must be contained in a Schedule component(`ejs-schedule`).
 * ```html
 * <ejs-schedule>
 *   <e-views>
 *    <e-view option='day' dateFormat='dd MMM'></e-view>
 *    <e-view option='week'></e-view>
 *   </e-views>
 * </ejs-schedule>
 * ```
 */
class ViewDirective extends ComplexBase {
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
ViewDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-views>e-view',
                inputs: input,
                outputs: outputs,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
ViewDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
ViewDirective.propDecorators = {
    'dateHeaderTemplate': [{ type: ContentChild, args: ['dateHeaderTemplate',] },],
    'cellHeaderTemplate': [{ type: ContentChild, args: ['cellHeaderTemplate',] },],
    'cellTemplate': [{ type: ContentChild, args: ['cellTemplate',] },],
    'eventTemplate': [{ type: ContentChild, args: ['eventTemplate',] },],
    'resourceHeaderTemplate': [{ type: ContentChild, args: ['resourceHeaderTemplate',] },],
    'timeScale_minorSlotTemplate': [{ type: ContentChild, args: ['timeScaleMinorSlotTemplate',] },],
    'timeScale_majorSlotTemplate': [{ type: ContentChild, args: ['timeScaleMajorSlotTemplate',] },],
    'group_headerTooltipTemplate': [{ type: ContentChild, args: ['groupHeaderTooltipTemplate',] },],
};
__decorate([
    Template(),
    __metadata("design:type", Object)
], ViewDirective.prototype, "dateHeaderTemplate", void 0);
__decorate([
    Template(),
    __metadata("design:type", Object)
], ViewDirective.prototype, "cellHeaderTemplate", void 0);
__decorate([
    Template(),
    __metadata("design:type", Object)
], ViewDirective.prototype, "cellTemplate", void 0);
__decorate([
    Template(),
    __metadata("design:type", Object)
], ViewDirective.prototype, "eventTemplate", void 0);
__decorate([
    Template(),
    __metadata("design:type", Object)
], ViewDirective.prototype, "resourceHeaderTemplate", void 0);
__decorate([
    Template(),
    __metadata("design:type", Object)
], ViewDirective.prototype, "timeScale_minorSlotTemplate", void 0);
__decorate([
    Template(),
    __metadata("design:type", Object)
], ViewDirective.prototype, "timeScale_majorSlotTemplate", void 0);
__decorate([
    Template(),
    __metadata("design:type", Object)
], ViewDirective.prototype, "group_headerTooltipTemplate", void 0);
/**
 * View Array Directive
 */
class ViewsDirective extends ArrayBase {
    constructor() {
        super('views');
    }
}
ViewsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-schedule>e-views',
                queries: {
                    children: new ContentChildren(ViewDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
ViewsDirective.ctorParameters = () => [];

let input$1 = ['allowMultiple', 'colorField', 'cssClassField', 'dataSource', 'endHourField', 'expandedField', 'field', 'groupIDField', 'idField', 'name', 'query', 'startHourField', 'textField', 'title', 'workDaysField'];
let outputs$1 = [];
/**
 * `e-resources` directive represent a resources of the Angular Schedule.
 * It must be contained in a Schedule component(`ejs-schedule`).
 * ```html
 * <ejs-schedule>
 *   <e-resources>
 *    <e-resource field='RoomId' name='Rooms'></e-resource>
 *    <e-resource field='OwnerId' name='Owners'></e-resource>
 *   </e-resources>
 * </ejs-schedule>
 * ```
 */
class ResourceDirective extends ComplexBase {
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
ResourceDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-resources>e-resource',
                inputs: input$1,
                outputs: outputs$1,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
ResourceDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * Resource Array Directive
 */
class ResourcesDirective extends ArrayBase {
    constructor() {
        super('resources');
    }
}
ResourcesDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-schedule>e-resources',
                queries: {
                    children: new ContentChildren(ResourceDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
ResourcesDirective.ctorParameters = () => [];

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let input$2 = ['option', 'template'];
let outputs$2 = [];
/**
 * `e-header-rows` directive represent a header rows of the Schedule.
 * It must be contained in a Schedule component(`ejs-schedule`).
 * ```html
 * <ejs-schedule>
 *   <e-header-rows>
 *    <e-header-row option='Week'></e-header-row>
 *    <e-header-row option='Date'></e-header-row>
 *   </e-header-rows>
 * </ejs-schedule>
 * ```
 */
class HeaderRowDirective extends ComplexBase {
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
HeaderRowDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-header-rows>e-header-row',
                inputs: input$2,
                outputs: outputs$2,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
HeaderRowDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
HeaderRowDirective.propDecorators = {
    'template': [{ type: ContentChild, args: ['template',] },],
};
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], HeaderRowDirective.prototype, "template", void 0);
/**
 * HeaderRow Array Directive
 */
class HeaderRowsDirective extends ArrayBase {
    constructor() {
        super('headerrows');
    }
}
HeaderRowsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-schedule>e-header-rows',
                queries: {
                    children: new ContentChildren(HeaderRowDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
HeaderRowsDirective.ctorParameters = () => [];

var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs = ['agendaDaysCount', 'allowDragAndDrop', 'allowKeyboardInteraction', 'allowMultiCellSelection', 'allowMultiRowSelection', 'allowResizing', 'calendarMode', 'cellHeaderTemplate', 'cellTemplate', 'cssClass', 'currentView', 'dateFormat', 'dateHeaderTemplate', 'editorTemplate', 'enablePersistence', 'enableRecurrenceValidation', 'enableRtl', 'endHour', 'eventDragArea', 'eventSettings', 'firstDayOfWeek', 'group', 'headerRows', 'height', 'hideEmptyAgendaDays', 'locale', 'maxDate', 'minDate', 'quickInfoOnSelectionEnd', 'quickInfoTemplates', 'readonly', 'resourceHeaderTemplate', 'resources', 'rowAutoHeight', 'selectedDate', 'showHeaderBar', 'showQuickInfo', 'showTimeIndicator', 'showWeekNumber', 'showWeekend', 'startHour', 'timeScale', 'timezone', 'views', 'width', 'workDays', 'workHours'];
const outputs$3 = ['actionBegin', 'actionComplete', 'actionFailure', 'cellClick', 'cellDoubleClick', 'created', 'dataBinding', 'dataBound', 'destroyed', 'drag', 'dragStart', 'dragStop', 'eventClick', 'eventRendered', 'hover', 'moreEventsClick', 'navigating', 'popupClose', 'popupOpen', 'renderCell', 'resizeStart', 'resizeStop', 'resizing', 'select', 'currentViewChange', 'selectedDateChange'];
const twoWays = ['currentView', 'selectedDate'];
/**
 * `ej-schedule` represents the Angular Schedule Component.
 * ```html
 * <ejs-schedule></ejs-schedule>
 * ```
 */
let ScheduleComponent = class ScheduleComponent extends Schedule {
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
        this.tags = ['views', 'resources', 'headerRows'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('ScheduleDay');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            let mod = this.injector.get('ScheduleWeek');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            let mod = this.injector.get('ScheduleWorkWeek');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            let mod = this.injector.get('ScheduleMonth');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            let mod = this.injector.get('ScheduleAgenda');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            let mod = this.injector.get('ScheduleMonthAgenda');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        try {
            let mod = this.injector.get('ScheduleTimelineViews');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_g) { }
        try {
            let mod = this.injector.get('ScheduleTimelineMonth');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_h) { }
        try {
            let mod = this.injector.get('ScheduleTimelineYear');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_j) { }
        try {
            let mod = this.injector.get('ScheduleResize');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_k) { }
        try {
            let mod = this.injector.get('ScheduleDragAndDrop');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_l) { }
        try {
            let mod = this.injector.get('ScheduleExcelExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_m) { }
        try {
            let mod = this.injector.get('ScheduleICalendarExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_o) { }
        try {
            let mod = this.injector.get('ScheduleICalendarImport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_p) { }
        try {
            let mod = this.injector.get('SchedulePrint');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_q) { }
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
        this.tagObjects[0].instance = this.childViews;
        if (this.childResources) {
            this.tagObjects[1].instance = this.childResources;
        }
        if (this.childHeaderRows) {
            this.tagObjects[2].instance = this.childHeaderRows;
        }
        this.context.ngAfterContentChecked(this);
    }
};
ScheduleComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-schedule',
                inputs: inputs,
                outputs: outputs$3,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {
                    childViews: new ContentChild(ViewsDirective),
                    childResources: new ContentChild(ResourcesDirective),
                    childHeaderRows: new ContentChild(HeaderRowsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
ScheduleComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
ScheduleComponent.propDecorators = {
    'dateHeaderTemplate': [{ type: ContentChild, args: ['dateHeaderTemplate',] },],
    'cellTemplate': [{ type: ContentChild, args: ['cellTemplate',] },],
    'cellHeaderTemplate': [{ type: ContentChild, args: ['cellHeaderTemplate',] },],
    'eventSettings_tooltipTemplate': [{ type: ContentChild, args: ['eventSettingsTooltipTemplate',] },],
    'eventSettings_template': [{ type: ContentChild, args: ['eventSettingsTemplate',] },],
    'editorTemplate': [{ type: ContentChild, args: ['editorTemplate',] },],
    'timeScale_minorSlotTemplate': [{ type: ContentChild, args: ['timeScaleMinorSlotTemplate',] },],
    'timeScale_majorSlotTemplate': [{ type: ContentChild, args: ['timeScaleMajorSlotTemplate',] },],
    'resourceHeaderTemplate': [{ type: ContentChild, args: ['resourceHeaderTemplate',] },],
    'quickInfoTemplates_header': [{ type: ContentChild, args: ['quickInfoTemplatesHeader',] },],
    'quickInfoTemplates_content': [{ type: ContentChild, args: ['quickInfoTemplatesContent',] },],
    'quickInfoTemplates_footer': [{ type: ContentChild, args: ['quickInfoTemplatesFooter',] },],
    'group_headerTooltipTemplate': [{ type: ContentChild, args: ['groupHeaderTooltipTemplate',] },],
};
__decorate$2([
    Template(),
    __metadata$2("design:type", Object)
], ScheduleComponent.prototype, "dateHeaderTemplate", void 0);
__decorate$2([
    Template(),
    __metadata$2("design:type", Object)
], ScheduleComponent.prototype, "cellTemplate", void 0);
__decorate$2([
    Template(),
    __metadata$2("design:type", Object)
], ScheduleComponent.prototype, "cellHeaderTemplate", void 0);
__decorate$2([
    Template(),
    __metadata$2("design:type", Object)
], ScheduleComponent.prototype, "eventSettings_tooltipTemplate", void 0);
__decorate$2([
    Template(),
    __metadata$2("design:type", Object)
], ScheduleComponent.prototype, "eventSettings_template", void 0);
__decorate$2([
    Template(),
    __metadata$2("design:type", Object)
], ScheduleComponent.prototype, "editorTemplate", void 0);
__decorate$2([
    Template(),
    __metadata$2("design:type", Object)
], ScheduleComponent.prototype, "timeScale_minorSlotTemplate", void 0);
__decorate$2([
    Template(),
    __metadata$2("design:type", Object)
], ScheduleComponent.prototype, "timeScale_majorSlotTemplate", void 0);
__decorate$2([
    Template(),
    __metadata$2("design:type", Object)
], ScheduleComponent.prototype, "resourceHeaderTemplate", void 0);
__decorate$2([
    Template(),
    __metadata$2("design:type", Object)
], ScheduleComponent.prototype, "quickInfoTemplates_header", void 0);
__decorate$2([
    Template(),
    __metadata$2("design:type", Object)
], ScheduleComponent.prototype, "quickInfoTemplates_content", void 0);
__decorate$2([
    Template(),
    __metadata$2("design:type", Object)
], ScheduleComponent.prototype, "quickInfoTemplates_footer", void 0);
__decorate$2([
    Template(),
    __metadata$2("design:type", Object)
], ScheduleComponent.prototype, "group_headerTooltipTemplate", void 0);
ScheduleComponent = __decorate$2([
    ComponentMixins([ComponentBase]),
    __metadata$2("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], ScheduleComponent);

/**
 * NgModule definition for the Schedule component.
 */
class ScheduleModule {
}
ScheduleModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    ScheduleComponent,
                    ViewDirective,
                    ViewsDirective,
                    ResourceDirective,
                    ResourcesDirective,
                    HeaderRowDirective,
                    HeaderRowsDirective
                ],
                exports: [
                    ScheduleComponent,
                    ViewDirective,
                    ViewsDirective,
                    ResourceDirective,
                    ResourcesDirective,
                    HeaderRowDirective,
                    HeaderRowsDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
ScheduleModule.ctorParameters = () => [];

const DayService = { provide: 'ScheduleDay', useValue: Day };
const WeekService = { provide: 'ScheduleWeek', useValue: Week };
const WorkWeekService = { provide: 'ScheduleWorkWeek', useValue: WorkWeek };
const MonthService = { provide: 'ScheduleMonth', useValue: Month };
const AgendaService = { provide: 'ScheduleAgenda', useValue: Agenda };
const MonthAgendaService = { provide: 'ScheduleMonthAgenda', useValue: MonthAgenda };
const TimelineViewsService = { provide: 'ScheduleTimelineViews', useValue: TimelineViews };
const TimelineMonthService = { provide: 'ScheduleTimelineMonth', useValue: TimelineMonth };
const TimelineYearService = { provide: 'ScheduleTimelineYear', useValue: TimelineYear };
const ResizeService = { provide: 'ScheduleResize', useValue: Resize };
const DragAndDropService = { provide: 'ScheduleDragAndDrop', useValue: DragAndDrop };
const ExcelExportService = { provide: 'ScheduleExcelExport', useValue: ExcelExport };
const ICalendarExportService = { provide: 'ScheduleICalendarExport', useValue: ICalendarExport };
const ICalendarImportService = { provide: 'ScheduleICalendarImport', useValue: ICalendarImport };
const PrintService = { provide: 'SchedulePrint', useValue: Print };
/**
 * NgModule definition for the Schedule component with providers.
 */
class ScheduleAllModule {
}
ScheduleAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, ScheduleModule],
                exports: [
                    ScheduleModule
                ],
                providers: [
                    DayService,
                    WeekService,
                    WorkWeekService,
                    MonthService,
                    AgendaService,
                    MonthAgendaService,
                    TimelineViewsService,
                    TimelineMonthService,
                    TimelineYearService,
                    ResizeService,
                    DragAndDropService,
                    ExcelExportService,
                    ICalendarExportService,
                    ICalendarImportService,
                    PrintService
                ]
            },] },
];
/**
 * @nocollapse
 */
ScheduleAllModule.ctorParameters = () => [];

var __decorate$3 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs$1 = ['calendarMode', 'cssClass', 'dateFormat', 'enablePersistence', 'enableRtl', 'firstDayOfWeek', 'frequencies', 'locale', 'maxDate', 'minDate', 'selectedType', 'startDate', 'value'];
const outputs$4 = ['change'];
const twoWays$1 = [];
/**
 * `ejs-recurrenceeditor` represents the Angular RecurrenceEditor Component.
 * ```html
 * <ejs-recurrenceeditor></ejs-recurrenceeditor>
 * ```
 */
let RecurrenceEditorComponent = class RecurrenceEditorComponent extends RecurrenceEditor {
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
        this.context.ngAfterContentChecked(this);
    }
};
RecurrenceEditorComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-recurrenceeditor',
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
RecurrenceEditorComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
RecurrenceEditorComponent = __decorate$3([
    ComponentMixins([ComponentBase]),
    __metadata$3("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], RecurrenceEditorComponent);

/**
 * NgModule definition for the RecurrenceEditor component.
 */
class RecurrenceEditorModule {
}
RecurrenceEditorModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    RecurrenceEditorComponent
                ],
                exports: [
                    RecurrenceEditorComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
RecurrenceEditorModule.ctorParameters = () => [];

/**
 * NgModule definition for the RecurrenceEditor component with providers.
 */
class RecurrenceEditorAllModule {
}
RecurrenceEditorAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, RecurrenceEditorModule],
                exports: [
                    RecurrenceEditorModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
RecurrenceEditorAllModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { ViewDirective, ViewsDirective, ResourceDirective, ResourcesDirective, HeaderRowDirective, HeaderRowsDirective, ScheduleComponent, ScheduleModule, ScheduleAllModule, DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService, TimelineYearService, ResizeService, DragAndDropService, ExcelExportService, ICalendarExportService, ICalendarImportService, PrintService, RecurrenceEditorComponent, RecurrenceEditorModule, RecurrenceEditorAllModule, inputs$1 as ɵc, outputs$4 as ɵd, inputs as ɵa, outputs$3 as ɵb };
export { Schedule, cellClick, cellDoubleClick, moreEventsClick, select, hover, actionBegin, actionComplete, actionFailure, navigating, renderCell, eventClick, eventRendered, dataBinding, dataBound, popupOpen, popupClose, dragStart, drag, dragStop, resizeStart, resizing, resizeStop, initialLoad, initialEnd, dataReady, eventsLoaded, contentReady, scroll, virtualScroll, scrollUiUpdate, uiUpdate, documentClick, cellMouseDown, WEEK_LENGTH, MS_PER_DAY, MS_PER_MINUTE, getElementHeightFromClass, getTranslateY, getWeekFirstDate, getWeekLastDate, firstDateOfMonth, lastDateOfMonth, getWeekNumber, setTime, resetTime, getDateInMs, getDateCount, addDays, addMonths, addYears, getStartEndHours, getMaxDays, getDaysCount, getDateFromString, getScrollBarWidth, findIndexInData, getOuterHeight, removeChildren, isDaylightSavingTime, addLocalOffset, addLocalOffsetToEvent, capitalizeFirstWord, Resize, DragAndDrop, HeaderRenderer, ViewHelper, ViewBase, Day, Week, WorkWeek, Month, Agenda, MonthAgenda, TimelineViews, TimelineMonth, TimelineYear, Timezone, timezoneData, ICalendarExport, ICalendarImport, ExcelExport, Print, RecurrenceEditor, generateSummary, generate, getDateFromRecurrenceDateString, extractObjectFromRule, getCalendarUtil, getRecurrenceStringFromDate, Gregorian, Islamic } from '@syncfusion/ej2-schedule';
//# sourceMappingURL=ej2-angular-schedule.js.map
