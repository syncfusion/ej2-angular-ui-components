(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@syncfusion/ej2-angular-base'), require('@syncfusion/ej2-schedule'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@syncfusion/ej2-angular-base', '@syncfusion/ej2-schedule', '@angular/common'], factory) :
	(factory((global['ej2-angular-schedule'] = {}),global.ng.core,global.ej2.angular.base,global.ej2.schedule,global.ng.common));
}(this, (function (exports,core,ej2AngularBase,ej2Schedule,common) { 'use strict';

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
var input = ['allowVirtualScrolling', 'cellTemplate', 'dateFormat', 'dateHeaderTemplate', 'displayName', 'endHour', 'eventTemplate', 'group', 'headerRows', 'interval', 'isSelected', 'option', 'readonly', 'resourceHeaderTemplate', 'showWeekNumber', 'showWeekend', 'startHour', 'timeScale', 'workDays'];
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs);
        return _this;
    }
    return ViewDirective;
}(ej2AngularBase.ComplexBase));
ViewDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
]; };
ViewDirective.propDecorators = {
    'dateHeaderTemplate': [{ type: core.ContentChild, args: ['dateHeaderTemplate',] },],
    'cellTemplate': [{ type: core.ContentChild, args: ['cellTemplate',] },],
    'eventTemplate': [{ type: core.ContentChild, args: ['eventTemplate',] },],
    'resourceHeaderTemplate': [{ type: core.ContentChild, args: ['resourceHeaderTemplate',] },],
    'timeScale_minorSlotTemplate': [{ type: core.ContentChild, args: ['timeScaleMinorSlotTemplate',] },],
    'timeScale_majorSlotTemplate': [{ type: core.ContentChild, args: ['timeScaleMajorSlotTemplate',] },],
    'group_headerTooltipTemplate': [{ type: core.ContentChild, args: ['groupHeaderTooltipTemplate',] },],
};
__decorate([
    ej2AngularBase.Template(),
    __metadata("design:type", Object)
], ViewDirective.prototype, "dateHeaderTemplate", void 0);
__decorate([
    ej2AngularBase.Template(),
    __metadata("design:type", Object)
], ViewDirective.prototype, "cellTemplate", void 0);
__decorate([
    ej2AngularBase.Template(),
    __metadata("design:type", Object)
], ViewDirective.prototype, "eventTemplate", void 0);
__decorate([
    ej2AngularBase.Template(),
    __metadata("design:type", Object)
], ViewDirective.prototype, "resourceHeaderTemplate", void 0);
__decorate([
    ej2AngularBase.Template(),
    __metadata("design:type", Object)
], ViewDirective.prototype, "timeScale_minorSlotTemplate", void 0);
__decorate([
    ej2AngularBase.Template(),
    __metadata("design:type", Object)
], ViewDirective.prototype, "timeScale_majorSlotTemplate", void 0);
__decorate([
    ej2AngularBase.Template(),
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
}(ej2AngularBase.ArrayBase));
ViewsDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-schedule>e-views',
                queries: {
                    children: new core.ContentChildren(ViewDirective)
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$1);
        return _this;
    }
    return ResourceDirective;
}(ej2AngularBase.ComplexBase));
ResourceDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
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
}(ej2AngularBase.ArrayBase));
ResourcesDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-schedule>e-resources',
                queries: {
                    children: new core.ContentChildren(ResourceDirective)
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$2);
        return _this;
    }
    return HeaderRowDirective;
}(ej2AngularBase.ComplexBase));
HeaderRowDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
]; };
HeaderRowDirective.propDecorators = {
    'template': [{ type: core.ContentChild, args: ['template',] },],
};
__decorate$1([
    ej2AngularBase.Template(),
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
}(ej2AngularBase.ArrayBase));
HeaderRowsDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-schedule>e-header-rows',
                queries: {
                    children: new core.ContentChildren(HeaderRowDirective)
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
var inputs = ['agendaDaysCount', 'allowDragAndDrop', 'allowKeyboardInteraction', 'allowResizing', 'calendarMode', 'cellTemplate', 'cssClass', 'currentView', 'dateFormat', 'dateHeaderTemplate', 'editorTemplate', 'enablePersistence', 'enableRtl', 'endHour', 'eventDragArea', 'eventSettings', 'firstDayOfWeek', 'group', 'headerRows', 'height', 'hideEmptyAgendaDays', 'locale', 'quickInfoTemplates', 'readonly', 'resourceHeaderTemplate', 'resources', 'rowAutoHeight', 'selectedDate', 'showHeaderBar', 'showQuickInfo', 'showTimeIndicator', 'showWeekNumber', 'showWeekend', 'startHour', 'timeScale', 'timezone', 'views', 'width', 'workDays', 'workHours'];
var outputs$3 = ['actionBegin', 'actionComplete', 'actionFailure', 'cellClick', 'cellDoubleClick', 'created', 'dataBinding', 'dataBound', 'destroyed', 'drag', 'dragStart', 'dragStop', 'eventClick', 'eventRendered', 'navigating', 'popupOpen', 'renderCell', 'resizeStart', 'resizeStop', 'resizing', 'select', 'currentViewChange', 'selectedDateChange'];
var twoWays = ['currentView', 'selectedDate'];
/**
 * `ej-schedule` represents the Angular Schedule Component.
 * ```html
 * <ejs-schedule></ejs-schedule>
 * ```
 */
exports.ScheduleComponent = /** @class */ (function (_super) {
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
            var mod = _this.injector.get('ScheduleResize');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_j) { }
        try {
            var mod = _this.injector.get('ScheduleDragAndDrop');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_k) { }
        try {
            var mod = _this.injector.get('ScheduleExcelExport');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_l) { }
        try {
            var mod = _this.injector.get('ScheduleICalendarExport');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_m) { }
        try {
            var mod = _this.injector.get('ScheduleICalendarImport');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_o) { }
        _this.registerEvents(outputs$3);
        _this.addTwoWay.call(_this, twoWays);
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @return {?}
     */
    ScheduleComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    ScheduleComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    ScheduleComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    ScheduleComponent.prototype.ngAfterContentChecked = function () {
    };
    return ScheduleComponent;
}(ej2Schedule.Schedule));
exports.ScheduleComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-schedule',
                inputs: inputs,
                outputs: outputs$3,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {
                    childViews: new core.ContentChild(ViewsDirective),
                    childResources: new core.ContentChild(ResourcesDirective),
                    childHeaderRows: new core.ContentChild(HeaderRowsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
exports.ScheduleComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.ScheduleComponent.propDecorators = {
    'dateHeaderTemplate': [{ type: core.ContentChild, args: ['dateHeaderTemplate',] },],
    'cellTemplate': [{ type: core.ContentChild, args: ['cellTemplate',] },],
    'eventSettings_tooltipTemplate': [{ type: core.ContentChild, args: ['eventSettingsTooltipTemplate',] },],
    'eventSettings_template': [{ type: core.ContentChild, args: ['eventSettingsTemplate',] },],
    'editorTemplate': [{ type: core.ContentChild, args: ['editorTemplate',] },],
    'timeScale_minorSlotTemplate': [{ type: core.ContentChild, args: ['timeScaleMinorSlotTemplate',] },],
    'timeScale_majorSlotTemplate': [{ type: core.ContentChild, args: ['timeScaleMajorSlotTemplate',] },],
    'resourceHeaderTemplate': [{ type: core.ContentChild, args: ['resourceHeaderTemplate',] },],
    'quickInfoTemplates_header': [{ type: core.ContentChild, args: ['quickInfoTemplatesHeader',] },],
    'quickInfoTemplates_content': [{ type: core.ContentChild, args: ['quickInfoTemplatesContent',] },],
    'quickInfoTemplates_footer': [{ type: core.ContentChild, args: ['quickInfoTemplatesFooter',] },],
    'group_headerTooltipTemplate': [{ type: core.ContentChild, args: ['groupHeaderTooltipTemplate',] },],
};
__decorate$2([
    ej2AngularBase.Template(),
    __metadata$2("design:type", Object)
], exports.ScheduleComponent.prototype, "dateHeaderTemplate", void 0);
__decorate$2([
    ej2AngularBase.Template(),
    __metadata$2("design:type", Object)
], exports.ScheduleComponent.prototype, "cellTemplate", void 0);
__decorate$2([
    ej2AngularBase.Template(),
    __metadata$2("design:type", Object)
], exports.ScheduleComponent.prototype, "eventSettings_tooltipTemplate", void 0);
__decorate$2([
    ej2AngularBase.Template(),
    __metadata$2("design:type", Object)
], exports.ScheduleComponent.prototype, "eventSettings_template", void 0);
__decorate$2([
    ej2AngularBase.Template(),
    __metadata$2("design:type", Object)
], exports.ScheduleComponent.prototype, "editorTemplate", void 0);
__decorate$2([
    ej2AngularBase.Template(),
    __metadata$2("design:type", Object)
], exports.ScheduleComponent.prototype, "timeScale_minorSlotTemplate", void 0);
__decorate$2([
    ej2AngularBase.Template(),
    __metadata$2("design:type", Object)
], exports.ScheduleComponent.prototype, "timeScale_majorSlotTemplate", void 0);
__decorate$2([
    ej2AngularBase.Template(),
    __metadata$2("design:type", Object)
], exports.ScheduleComponent.prototype, "resourceHeaderTemplate", void 0);
__decorate$2([
    ej2AngularBase.Template(),
    __metadata$2("design:type", Object)
], exports.ScheduleComponent.prototype, "quickInfoTemplates_header", void 0);
__decorate$2([
    ej2AngularBase.Template(),
    __metadata$2("design:type", Object)
], exports.ScheduleComponent.prototype, "quickInfoTemplates_content", void 0);
__decorate$2([
    ej2AngularBase.Template(),
    __metadata$2("design:type", Object)
], exports.ScheduleComponent.prototype, "quickInfoTemplates_footer", void 0);
__decorate$2([
    ej2AngularBase.Template(),
    __metadata$2("design:type", Object)
], exports.ScheduleComponent.prototype, "group_headerTooltipTemplate", void 0);
exports.ScheduleComponent = __decorate$2([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata$2("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.ScheduleComponent);
/**
 * NgModule definition for the Schedule component.
 */
var ScheduleModule = /** @class */ (function () {
    function ScheduleModule() {
    }
    return ScheduleModule;
}());
ScheduleModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.ScheduleComponent,
                    ViewDirective,
                    ViewsDirective,
                    ResourceDirective,
                    ResourcesDirective,
                    HeaderRowDirective,
                    HeaderRowsDirective
                ],
                exports: [
                    exports.ScheduleComponent,
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
var DayService = { provide: 'ScheduleDay', useValue: ej2Schedule.Day };
var WeekService = { provide: 'ScheduleWeek', useValue: ej2Schedule.Week };
var WorkWeekService = { provide: 'ScheduleWorkWeek', useValue: ej2Schedule.WorkWeek };
var MonthService = { provide: 'ScheduleMonth', useValue: ej2Schedule.Month };
var AgendaService = { provide: 'ScheduleAgenda', useValue: ej2Schedule.Agenda };
var MonthAgendaService = { provide: 'ScheduleMonthAgenda', useValue: ej2Schedule.MonthAgenda };
var TimelineViewsService = { provide: 'ScheduleTimelineViews', useValue: ej2Schedule.TimelineViews };
var TimelineMonthService = { provide: 'ScheduleTimelineMonth', useValue: ej2Schedule.TimelineMonth };
var ResizeService = { provide: 'ScheduleResize', useValue: ej2Schedule.Resize };
var DragAndDropService = { provide: 'ScheduleDragAndDrop', useValue: ej2Schedule.DragAndDrop };
var ExcelExportService = { provide: 'ScheduleExcelExport', useValue: ej2Schedule.ExcelExport };
var ICalendarExportService = { provide: 'ScheduleICalendarExport', useValue: ej2Schedule.ICalendarExport };
var ICalendarImportService = { provide: 'ScheduleICalendarImport', useValue: ej2Schedule.ICalendarImport };
/**
 * NgModule definition for the Schedule component with providers.
 */
var ScheduleAllModule = /** @class */ (function () {
    function ScheduleAllModule() {
    }
    return ScheduleAllModule;
}());
ScheduleAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, ScheduleModule],
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
                    ResizeService,
                    DragAndDropService,
                    ExcelExportService,
                    ICalendarExportService,
                    ICalendarImportService
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
exports.RecurrenceEditorComponent = /** @class */ (function (_super) {
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @return {?}
     */
    RecurrenceEditorComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    RecurrenceEditorComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    RecurrenceEditorComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    RecurrenceEditorComponent.prototype.ngAfterContentChecked = function () {
    };
    return RecurrenceEditorComponent;
}(ej2Schedule.RecurrenceEditor));
exports.RecurrenceEditorComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-recurrenceeditor',
                inputs: inputs$1,
                outputs: outputs$4,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
exports.RecurrenceEditorComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.RecurrenceEditorComponent = __decorate$3([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata$3("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.RecurrenceEditorComponent);
/**
 * NgModule definition for the RecurrenceEditor component.
 */
var RecurrenceEditorModule = /** @class */ (function () {
    function RecurrenceEditorModule() {
    }
    return RecurrenceEditorModule;
}());
RecurrenceEditorModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.RecurrenceEditorComponent
                ],
                exports: [
                    exports.RecurrenceEditorComponent
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
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, RecurrenceEditorModule],
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

exports.ViewDirective = ViewDirective;
exports.ViewsDirective = ViewsDirective;
exports.ResourceDirective = ResourceDirective;
exports.ResourcesDirective = ResourcesDirective;
exports.HeaderRowDirective = HeaderRowDirective;
exports.HeaderRowsDirective = HeaderRowsDirective;
exports.ScheduleModule = ScheduleModule;
exports.ScheduleAllModule = ScheduleAllModule;
exports.DayService = DayService;
exports.WeekService = WeekService;
exports.WorkWeekService = WorkWeekService;
exports.MonthService = MonthService;
exports.AgendaService = AgendaService;
exports.MonthAgendaService = MonthAgendaService;
exports.TimelineViewsService = TimelineViewsService;
exports.TimelineMonthService = TimelineMonthService;
exports.ResizeService = ResizeService;
exports.DragAndDropService = DragAndDropService;
exports.ExcelExportService = ExcelExportService;
exports.ICalendarExportService = ICalendarExportService;
exports.ICalendarImportService = ICalendarImportService;
exports.RecurrenceEditorModule = RecurrenceEditorModule;
exports.RecurrenceEditorAllModule = RecurrenceEditorAllModule;
exports.ɵc = inputs$1;
exports.ɵd = outputs$4;
exports.ɵa = inputs;
exports.ɵb = outputs$3;
exports.Schedule = ej2Schedule.Schedule;
exports.cellClick = ej2Schedule.cellClick;
exports.cellDoubleClick = ej2Schedule.cellDoubleClick;
exports.select = ej2Schedule.select;
exports.actionBegin = ej2Schedule.actionBegin;
exports.actionComplete = ej2Schedule.actionComplete;
exports.actionFailure = ej2Schedule.actionFailure;
exports.navigating = ej2Schedule.navigating;
exports.renderCell = ej2Schedule.renderCell;
exports.eventClick = ej2Schedule.eventClick;
exports.eventRendered = ej2Schedule.eventRendered;
exports.dataBinding = ej2Schedule.dataBinding;
exports.dataBound = ej2Schedule.dataBound;
exports.popupOpen = ej2Schedule.popupOpen;
exports.dragStart = ej2Schedule.dragStart;
exports.drag = ej2Schedule.drag;
exports.dragStop = ej2Schedule.dragStop;
exports.resizeStart = ej2Schedule.resizeStart;
exports.resizing = ej2Schedule.resizing;
exports.resizeStop = ej2Schedule.resizeStop;
exports.initialLoad = ej2Schedule.initialLoad;
exports.initialEnd = ej2Schedule.initialEnd;
exports.dataReady = ej2Schedule.dataReady;
exports.contentReady = ej2Schedule.contentReady;
exports.scroll = ej2Schedule.scroll;
exports.virtualScroll = ej2Schedule.virtualScroll;
exports.scrollUiUpdate = ej2Schedule.scrollUiUpdate;
exports.uiUpdate = ej2Schedule.uiUpdate;
exports.documentClick = ej2Schedule.documentClick;
exports.cellMouseDown = ej2Schedule.cellMouseDown;
exports.WEEK_LENGTH = ej2Schedule.WEEK_LENGTH;
exports.MS_PER_DAY = ej2Schedule.MS_PER_DAY;
exports.MS_PER_MINUTE = ej2Schedule.MS_PER_MINUTE;
exports.getElementHeightFromClass = ej2Schedule.getElementHeightFromClass;
exports.getTranslateY = ej2Schedule.getTranslateY;
exports.getWeekFirstDate = ej2Schedule.getWeekFirstDate;
exports.firstDateOfMonth = ej2Schedule.firstDateOfMonth;
exports.lastDateOfMonth = ej2Schedule.lastDateOfMonth;
exports.getWeekNumber = ej2Schedule.getWeekNumber;
exports.setTime = ej2Schedule.setTime;
exports.resetTime = ej2Schedule.resetTime;
exports.getDateInMs = ej2Schedule.getDateInMs;
exports.getDateCount = ej2Schedule.getDateCount;
exports.addDays = ej2Schedule.addDays;
exports.addMonths = ej2Schedule.addMonths;
exports.addYears = ej2Schedule.addYears;
exports.getStartEndHours = ej2Schedule.getStartEndHours;
exports.getMaxDays = ej2Schedule.getMaxDays;
exports.getDaysCount = ej2Schedule.getDaysCount;
exports.getDateFromString = ej2Schedule.getDateFromString;
exports.getScrollBarWidth = ej2Schedule.getScrollBarWidth;
exports.findIndexInData = ej2Schedule.findIndexInData;
exports.getOuterHeight = ej2Schedule.getOuterHeight;
exports.Resize = ej2Schedule.Resize;
exports.DragAndDrop = ej2Schedule.DragAndDrop;
exports.HeaderRenderer = ej2Schedule.HeaderRenderer;
exports.ViewBase = ej2Schedule.ViewBase;
exports.Day = ej2Schedule.Day;
exports.Week = ej2Schedule.Week;
exports.WorkWeek = ej2Schedule.WorkWeek;
exports.Month = ej2Schedule.Month;
exports.Agenda = ej2Schedule.Agenda;
exports.MonthAgenda = ej2Schedule.MonthAgenda;
exports.TimelineViews = ej2Schedule.TimelineViews;
exports.TimelineMonth = ej2Schedule.TimelineMonth;
exports.Timezone = ej2Schedule.Timezone;
exports.timezoneData = ej2Schedule.timezoneData;
exports.ExcelExport = ej2Schedule.ExcelExport;
exports.ICalendarExport = ej2Schedule.ICalendarExport;
exports.ICalendarImport = ej2Schedule.ICalendarImport;
exports.RecurrenceEditor = ej2Schedule.RecurrenceEditor;
exports.Gregorian = ej2Schedule.Gregorian;
exports.Islamic = ej2Schedule.Islamic;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ej2-angular-schedule.umd.js.map
