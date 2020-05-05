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
import { Agenda, Day, DragAndDrop, ExcelExport, ICalendarExport, ICalendarImport, Month, MonthAgenda, Print, RecurrenceEditor, Resize, Schedule, TimelineMonth, TimelineViews, TimelineYear, Week, WorkWeek } from '@syncfusion/ej2-schedule';
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
var input = ['allowVirtualScrolling', 'cellHeaderTemplate', 'cellTemplate', 'dateFormat', 'dateHeaderTemplate', 'displayName', 'endHour', 'eventTemplate', 'firstDayOfWeek', 'group', 'headerRows', 'interval', 'isSelected', 'option', 'orientation', 'readonly', 'resourceHeaderTemplate', 'showWeekNumber', 'showWeekend', 'startHour', 'timeScale', 'workDays'];
var outputs = [];
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
var ViewDirective = /** @class */ (function (_super) {
    __extends(ViewDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function ViewDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs);
        _this.directivePropList = input;
        return _this;
    }
    return ViewDirective;
}(ComplexBase));
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
ViewDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
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
var ViewsDirective = /** @class */ (function (_super) {
    __extends(ViewsDirective, _super);
    function ViewsDirective() {
        return _super.call(this, 'views') || this;
    }
    return ViewsDirective;
}(ArrayBase));
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
ViewsDirective.ctorParameters = function () { return []; };
var input$1 = ['allowMultiple', 'colorField', 'cssClassField', 'dataSource', 'endHourField', 'expandedField', 'field', 'groupIDField', 'idField', 'name', 'query', 'startHourField', 'textField', 'title', 'workDaysField'];
var outputs$1 = [];
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
var ResourceDirective = /** @class */ (function (_super) {
    __extends(ResourceDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function ResourceDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$1);
        _this.directivePropList = input$1;
        return _this;
    }
    return ResourceDirective;
}(ComplexBase));
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
ResourceDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * Resource Array Directive
 */
var ResourcesDirective = /** @class */ (function (_super) {
    __extends(ResourcesDirective, _super);
    function ResourcesDirective() {
        return _super.call(this, 'resources') || this;
    }
    return ResourcesDirective;
}(ArrayBase));
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
ResourcesDirective.ctorParameters = function () { return []; };
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
var input$2 = ['option', 'template'];
var outputs$2 = [];
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
var HeaderRowDirective = /** @class */ (function (_super) {
    __extends(HeaderRowDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function HeaderRowDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$2);
        _this.directivePropList = input$2;
        return _this;
    }
    return HeaderRowDirective;
}(ComplexBase));
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
HeaderRowDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
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
var HeaderRowsDirective = /** @class */ (function (_super) {
    __extends(HeaderRowsDirective, _super);
    function HeaderRowsDirective() {
        return _super.call(this, 'headerrows') || this;
    }
    return HeaderRowsDirective;
}(ArrayBase));
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
HeaderRowsDirective.ctorParameters = function () { return []; };
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
var inputs = ['agendaDaysCount', 'allowDragAndDrop', 'allowKeyboardInteraction', 'allowMultiCellSelection', 'allowMultiRowSelection', 'allowResizing', 'calendarMode', 'cellHeaderTemplate', 'cellTemplate', 'cssClass', 'currentView', 'dateFormat', 'dateHeaderTemplate', 'editorTemplate', 'enablePersistence', 'enableRecurrenceValidation', 'enableRtl', 'endHour', 'eventDragArea', 'eventSettings', 'firstDayOfWeek', 'group', 'headerRows', 'height', 'hideEmptyAgendaDays', 'locale', 'maxDate', 'minDate', 'quickInfoOnSelectionEnd', 'quickInfoTemplates', 'readonly', 'resourceHeaderTemplate', 'resources', 'rowAutoHeight', 'selectedDate', 'showHeaderBar', 'showQuickInfo', 'showTimeIndicator', 'showWeekNumber', 'showWeekend', 'startHour', 'timeScale', 'timezone', 'views', 'width', 'workDays', 'workHours'];
var outputs$3 = ['actionBegin', 'actionComplete', 'actionFailure', 'cellClick', 'cellDoubleClick', 'created', 'dataBinding', 'dataBound', 'destroyed', 'drag', 'dragStart', 'dragStop', 'eventClick', 'eventRendered', 'hover', 'moreEventsClick', 'navigating', 'popupClose', 'popupOpen', 'renderCell', 'resizeStart', 'resizeStop', 'resizing', 'select', 'currentViewChange', 'selectedDateChange'];
var twoWays = ['currentView', 'selectedDate'];
/**
 * `ej-schedule` represents the Angular Schedule Component.
 * ```html
 * <ejs-schedule></ejs-schedule>
 * ```
 */
var ScheduleComponent = /** @class */ (function (_super) {
    __extends(ScheduleComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function ScheduleComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.tags = ['views', 'resources', 'headerRows'];
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        try {
            var mod = _this.injector.get('ScheduleDay');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            var mod = _this.injector.get('ScheduleWeek');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            var mod = _this.injector.get('ScheduleWorkWeek');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            var mod = _this.injector.get('ScheduleMonth');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            var mod = _this.injector.get('ScheduleAgenda');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            var mod = _this.injector.get('ScheduleMonthAgenda');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        try {
            var mod = _this.injector.get('ScheduleTimelineViews');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_g) { }
        try {
            var mod = _this.injector.get('ScheduleTimelineMonth');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_h) { }
        try {
            var mod = _this.injector.get('ScheduleTimelineYear');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_j) { }
        try {
            var mod = _this.injector.get('ScheduleResize');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_k) { }
        try {
            var mod = _this.injector.get('ScheduleDragAndDrop');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_l) { }
        try {
            var mod = _this.injector.get('ScheduleExcelExport');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_m) { }
        try {
            var mod = _this.injector.get('ScheduleICalendarExport');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_o) { }
        try {
            var mod = _this.injector.get('ScheduleICalendarImport');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_p) { }
        try {
            var mod = _this.injector.get('SchedulePrint');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_q) { }
        _this.registerEvents(outputs$3);
        _this.addTwoWay.call(_this, twoWays);
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.context = new ComponentBase();
        return _this;
    }
    /**
     * @return {?}
     */
    ScheduleComponent.prototype.ngOnInit = function () {
        this.context.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    ScheduleComponent.prototype.ngAfterViewInit = function () {
        this.context.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    ScheduleComponent.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    ScheduleComponent.prototype.ngAfterContentChecked = function () {
        this.tagObjects[0].instance = this.childViews;
        if (this.childResources) {
            this.tagObjects[1].instance = this.childResources;
        }
        if (this.childHeaderRows) {
            this.tagObjects[2].instance = this.childHeaderRows;
        }
        this.context.ngAfterContentChecked(this);
    };
    return ScheduleComponent;
}(Schedule));
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
ScheduleComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
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
var ScheduleModule = /** @class */ (function () {
    function ScheduleModule() {
    }
    return ScheduleModule;
}());
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
ScheduleModule.ctorParameters = function () { return []; };
var DayService = { provide: 'ScheduleDay', useValue: Day };
var WeekService = { provide: 'ScheduleWeek', useValue: Week };
var WorkWeekService = { provide: 'ScheduleWorkWeek', useValue: WorkWeek };
var MonthService = { provide: 'ScheduleMonth', useValue: Month };
var AgendaService = { provide: 'ScheduleAgenda', useValue: Agenda };
var MonthAgendaService = { provide: 'ScheduleMonthAgenda', useValue: MonthAgenda };
var TimelineViewsService = { provide: 'ScheduleTimelineViews', useValue: TimelineViews };
var TimelineMonthService = { provide: 'ScheduleTimelineMonth', useValue: TimelineMonth };
var TimelineYearService = { provide: 'ScheduleTimelineYear', useValue: TimelineYear };
var ResizeService = { provide: 'ScheduleResize', useValue: Resize };
var DragAndDropService = { provide: 'ScheduleDragAndDrop', useValue: DragAndDrop };
var ExcelExportService = { provide: 'ScheduleExcelExport', useValue: ExcelExport };
var ICalendarExportService = { provide: 'ScheduleICalendarExport', useValue: ICalendarExport };
var ICalendarImportService = { provide: 'ScheduleICalendarImport', useValue: ICalendarImport };
var PrintService = { provide: 'SchedulePrint', useValue: Print };
/**
 * NgModule definition for the Schedule component with providers.
 */
var ScheduleAllModule = /** @class */ (function () {
    function ScheduleAllModule() {
    }
    return ScheduleAllModule;
}());
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
ScheduleAllModule.ctorParameters = function () { return []; };
var __decorate$3 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var inputs$1 = ['calendarMode', 'cssClass', 'dateFormat', 'enablePersistence', 'enableRtl', 'firstDayOfWeek', 'frequencies', 'locale', 'maxDate', 'minDate', 'selectedType', 'startDate', 'value'];
var outputs$4 = ['change'];
var twoWays$1 = [];
/**
 * `ejs-recurrenceeditor` represents the Angular RecurrenceEditor Component.
 * ```html
 * <ejs-recurrenceeditor></ejs-recurrenceeditor>
 * ```
 */
var RecurrenceEditorComponent = /** @class */ (function (_super) {
    __extends(RecurrenceEditorComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function RecurrenceEditorComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        _this.registerEvents(outputs$4);
        _this.addTwoWay.call(_this, twoWays$1);
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.context = new ComponentBase();
        return _this;
    }
    /**
     * @return {?}
     */
    RecurrenceEditorComponent.prototype.ngOnInit = function () {
        this.context.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    RecurrenceEditorComponent.prototype.ngAfterViewInit = function () {
        this.context.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    RecurrenceEditorComponent.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    RecurrenceEditorComponent.prototype.ngAfterContentChecked = function () {
        this.context.ngAfterContentChecked(this);
    };
    return RecurrenceEditorComponent;
}(RecurrenceEditor));
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
RecurrenceEditorComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
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
var RecurrenceEditorModule = /** @class */ (function () {
    function RecurrenceEditorModule() {
    }
    return RecurrenceEditorModule;
}());
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
RecurrenceEditorModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the RecurrenceEditor component with providers.
 */
var RecurrenceEditorAllModule = /** @class */ (function () {
    function RecurrenceEditorAllModule() {
    }
    return RecurrenceEditorAllModule;
}());
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
RecurrenceEditorAllModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { ViewDirective, ViewsDirective, ResourceDirective, ResourcesDirective, HeaderRowDirective, HeaderRowsDirective, ScheduleComponent, ScheduleModule, ScheduleAllModule, DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService, TimelineYearService, ResizeService, DragAndDropService, ExcelExportService, ICalendarExportService, ICalendarImportService, PrintService, RecurrenceEditorComponent, RecurrenceEditorModule, RecurrenceEditorAllModule, inputs$1 as ɵc, outputs$4 as ɵd, inputs as ɵa, outputs$3 as ɵb };
export { Schedule, cellClick, cellDoubleClick, moreEventsClick, select, hover, actionBegin, actionComplete, actionFailure, navigating, renderCell, eventClick, eventRendered, dataBinding, dataBound, popupOpen, popupClose, dragStart, drag, dragStop, resizeStart, resizing, resizeStop, initialLoad, initialEnd, dataReady, eventsLoaded, contentReady, scroll, virtualScroll, scrollUiUpdate, uiUpdate, documentClick, cellMouseDown, WEEK_LENGTH, MS_PER_DAY, MS_PER_MINUTE, getElementHeightFromClass, getTranslateY, getWeekFirstDate, getWeekLastDate, firstDateOfMonth, lastDateOfMonth, getWeekNumber, setTime, resetTime, getDateInMs, getDateCount, addDays, addMonths, addYears, getStartEndHours, getMaxDays, getDaysCount, getDateFromString, getScrollBarWidth, findIndexInData, getOuterHeight, removeChildren, isDaylightSavingTime, addLocalOffset, addLocalOffsetToEvent, capitalizeFirstWord, Resize, DragAndDrop, HeaderRenderer, ViewHelper, ViewBase, Day, Week, WorkWeek, Month, Agenda, MonthAgenda, TimelineViews, TimelineMonth, TimelineYear, Timezone, timezoneData, ICalendarExport, ICalendarImport, ExcelExport, Print, RecurrenceEditor, generateSummary, generate, getDateFromRecurrenceDateString, extractObjectFromRule, getCalendarUtil, getRecurrenceStringFromDate, Gregorian, Islamic } from '@syncfusion/ej2-schedule';
//# sourceMappingURL=ej2-angular-schedule.es5.js.map
