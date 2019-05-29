(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@syncfusion/ej2-angular-base'), require('@syncfusion/ej2-calendars'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/forms', '@syncfusion/ej2-angular-base', '@syncfusion/ej2-calendars', '@angular/common'], factory) :
	(factory((global['ej2-angular-calendars'] = {}),global.ng.core,global.ng.forms,global.ej2.angular.base,global.ej2.calendars,global.ng.common));
}(this, (function (exports,core,forms,ej2AngularBase,ej2Calendars,common) { 'use strict';

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
var inputs = ['calendarMode', 'depth', 'enablePersistence', 'enableRtl', 'firstDayOfWeek', 'isMultiSelection', 'locale', 'max', 'min', 'showTodayButton', 'start', 'value', 'values', 'weekNumber'];
var outputs = ['focus', 'blur', 'change', 'created', 'destroyed', 'navigated', 'renderDayCell', 'valueChange', 'valuesChange'];
var twoWays = ['value', 'values'];
/**
 * Represents the Essential JS 2 Angular Calendar Component.
 * ```html
 * <ejs-calendar [value]='date'></ejs-calendar>
 * ```
 */
exports.CalendarComponent = CalendarComponent_1 = /** @class */ (function (_super) {
    __extends(CalendarComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function CalendarComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        try {
            var mod = _this.injector.get('CalendarsIslamic');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        _this.registerEvents(outputs);
        _this.addTwoWay.call(_this, twoWays);
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    CalendarComponent.prototype.registerOnChange = function (registerFunction) {
    };
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    CalendarComponent.prototype.registerOnTouched = function (registerFunction) {
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CalendarComponent.prototype.writeValue = function (value) {
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    CalendarComponent.prototype.setDisabledState = function (disabled) {
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.ngAfterContentChecked = function () {
    };
    return CalendarComponent;
}(ej2Calendars.Calendar));
exports.CalendarComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-calendar',
                inputs: inputs,
                outputs: outputs,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return CalendarComponent_1; }),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
exports.CalendarComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.CalendarComponent = CalendarComponent_1 = __decorate([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase, ej2AngularBase.FormBase]),
    __metadata("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.CalendarComponent);
var CalendarComponent_1;
/**
 * NgModule definition for the Calendar component.
 */
var CalendarModule = /** @class */ (function () {
    function CalendarModule() {
    }
    return CalendarModule;
}());
CalendarModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.CalendarComponent
                ],
                exports: [
                    exports.CalendarComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
CalendarModule.ctorParameters = function () { return []; };
var IslamicService = { provide: 'CalendarsIslamic', useValue: ej2Calendars.Islamic };
/**
 * NgModule definition for the Calendar component with providers.
 */
var CalendarAllModule = /** @class */ (function () {
    function CalendarAllModule() {
    }
    return CalendarAllModule;
}());
CalendarAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, CalendarModule],
                exports: [
                    CalendarModule
                ],
                providers: [
                    IslamicService
                ]
            },] },
];
/**
 * @nocollapse
 */
CalendarAllModule.ctorParameters = function () { return []; };
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
var inputs$1 = ['allowEdit', 'calendarMode', 'cssClass', 'depth', 'enablePersistence', 'enableRtl', 'enabled', 'firstDayOfWeek', 'floatLabelType', 'format', 'isMultiSelection', 'locale', 'max', 'min', 'placeholder', 'readonly', 'showClearButton', 'showTodayButton', 'start', 'strictMode', 'value', 'values', 'weekNumber', 'width', 'zIndex'];
var outputs$1 = ['blur', 'change', 'close', 'created', 'destroyed', 'focus', 'navigated', 'open', 'renderDayCell', 'valueChange'];
var twoWays$1 = ['value'];
/**
 * Represents the Essential JS 2 Angular DatePicker Component.
 * ```html
 * <ejs-datepicker [value]='date'></ejs-datepicker>
 * ```
 */
exports.DatePickerComponent = DatePickerComponent_1 = /** @class */ (function (_super) {
    __extends(DatePickerComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function DatePickerComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.skipFromEvent = true;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        try {
            var mod = _this.injector.get('CalendarsIslamic');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        _this.registerEvents(outputs$1);
        _this.addTwoWay.call(_this, twoWays$1);
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    DatePickerComponent.prototype.registerOnChange = function (registerFunction) {
    };
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    DatePickerComponent.prototype.registerOnTouched = function (registerFunction) {
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DatePickerComponent.prototype.writeValue = function (value) {
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    DatePickerComponent.prototype.setDisabledState = function (disabled) {
    };
    /**
     * @return {?}
     */
    DatePickerComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    DatePickerComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    DatePickerComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    DatePickerComponent.prototype.ngAfterContentChecked = function () {
    };
    return DatePickerComponent;
}(ej2Calendars.DatePicker));
exports.DatePickerComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-datepicker',
                inputs: inputs$1,
                outputs: outputs$1,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return DatePickerComponent_1; }),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
exports.DatePickerComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.DatePickerComponent = DatePickerComponent_1 = __decorate$1([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase, ej2AngularBase.FormBase]),
    __metadata$1("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.DatePickerComponent);
var DatePickerComponent_1;
/**
 * NgModule definition for the DatePicker component.
 */
var DatePickerModule = /** @class */ (function () {
    function DatePickerModule() {
    }
    return DatePickerModule;
}());
DatePickerModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.DatePickerComponent
                ],
                exports: [
                    exports.DatePickerComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
DatePickerModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the DatePicker component with providers.
 */
var DatePickerAllModule = /** @class */ (function () {
    function DatePickerAllModule() {
    }
    return DatePickerAllModule;
}());
DatePickerAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, DatePickerModule],
                exports: [
                    DatePickerModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
DatePickerAllModule.ctorParameters = function () { return []; };
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
var inputs$2 = ['allowEdit', 'cssClass', 'enablePersistence', 'enableRtl', 'enabled', 'floatLabelType', 'format', 'locale', 'max', 'min', 'placeholder', 'readonly', 'scrollTo', 'showClearButton', 'step', 'strictMode', 'value', 'width', 'zIndex'];
var outputs$2 = ['blur', 'change', 'close', 'created', 'destroyed', 'focus', 'itemRender', 'open', 'valueChange'];
var twoWays$2 = ['value'];
/**
 * Represents the Essential JS 2 Angular TimePicker Component.
 * ```html
 * <ejs-timepicker [value]='dateTime'></ejs-timepicker>
 * ```
 */
exports.TimePickerComponent = TimePickerComponent_1 = /** @class */ (function (_super) {
    __extends(TimePickerComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function TimePickerComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.skipFromEvent = true;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        _this.registerEvents(outputs$2);
        _this.addTwoWay.call(_this, twoWays$2);
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    TimePickerComponent.prototype.registerOnChange = function (registerFunction) {
    };
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    TimePickerComponent.prototype.registerOnTouched = function (registerFunction) {
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TimePickerComponent.prototype.writeValue = function (value) {
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    TimePickerComponent.prototype.setDisabledState = function (disabled) {
    };
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.ngAfterContentChecked = function () {
    };
    return TimePickerComponent;
}(ej2Calendars.TimePicker));
exports.TimePickerComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-timepicker',
                inputs: inputs$2,
                outputs: outputs$2,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return TimePickerComponent_1; }),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
exports.TimePickerComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.TimePickerComponent = TimePickerComponent_1 = __decorate$2([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase, ej2AngularBase.FormBase]),
    __metadata$2("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.TimePickerComponent);
var TimePickerComponent_1;
/**
 * NgModule definition for the TimePicker component.
 */
var TimePickerModule = /** @class */ (function () {
    function TimePickerModule() {
    }
    return TimePickerModule;
}());
TimePickerModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.TimePickerComponent
                ],
                exports: [
                    exports.TimePickerComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
TimePickerModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the TimePicker component with providers.
 */
var TimePickerAllModule = /** @class */ (function () {
    function TimePickerAllModule() {
    }
    return TimePickerAllModule;
}());
TimePickerAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, TimePickerModule],
                exports: [
                    TimePickerModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
TimePickerAllModule.ctorParameters = function () { return []; };
var input = ['end', 'label', 'start'];
var outputs$3 = [];
/**
 * 'e-presets' directive represent a presets of angular daterangepicker
 * It must be contained in a daterangepicker component(`ej-daterangepicker`).
 * ```html
 * <ejs-daterangepicker id='range'>
 *   <e-presets>
 *    <e-preset label='Last Week' [start]=new Date('06/07/2018') [end]= new Date('06/01/2018')></e-preset>
 *    <e-preset label='Last Month' [start]=new Date('06/07/2018') [end]= new Date('05/07/2018')></e-preset>
 *   </e-presets>
 * </ejs-daterangepicker>
 * ```
 */
var PresetDirective = /** @class */ (function (_super) {
    __extends(PresetDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function PresetDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$3);
        return _this;
    }
    return PresetDirective;
}(ej2AngularBase.ComplexBase));
PresetDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-presets>e-preset',
                inputs: input,
                outputs: outputs$3,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
PresetDirective.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
]; };
/**
 * Preset Array Directive
 */
var PresetsDirective = /** @class */ (function (_super) {
    __extends(PresetsDirective, _super);
    function PresetsDirective() {
        return _super.call(this, 'presets') || this;
    }
    return PresetsDirective;
}(ej2AngularBase.ArrayBase));
PresetsDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-daterangepicker>e-presets',
                queries: {
                    children: new core.ContentChildren(PresetDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
PresetsDirective.ctorParameters = function () { return []; };
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
var inputs$3 = ['allowEdit', 'calendarMode', 'cssClass', 'depth', 'enablePersistence', 'enableRtl', 'enabled', 'endDate', 'firstDayOfWeek', 'floatLabelType', 'format', 'locale', 'max', 'maxDays', 'min', 'minDays', 'placeholder', 'presets', 'readonly', 'separator', 'showClearButton', 'start', 'startDate', 'strictMode', 'value', 'weekNumber', 'width', 'zIndex'];
var outputs$4 = ['blur', 'change', 'close', 'created', 'destroyed', 'focus', 'navigated', 'open', 'renderDayCell', 'select', 'startDateChange', 'endDateChange', 'valueChange'];
var twoWays$3 = ['startDate', 'endDate', 'value'];
/**
 * Represents the Essential JS 2 Angular DateRangePicker Component.
 * ```html
 * <ejs-daterangepicker [startDate]='date' [endDate]='date'></ejs-daterangepicker>
 * ```
 */
exports.DateRangePickerComponent = DateRangePickerComponent_1 = /** @class */ (function (_super) {
    __extends(DateRangePickerComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function DateRangePickerComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.tags = ['presets'];
        _this.skipFromEvent = true;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        _this.registerEvents(outputs$4);
        _this.addTwoWay.call(_this, twoWays$3);
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    DateRangePickerComponent.prototype.registerOnChange = function (registerFunction) {
    };
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    DateRangePickerComponent.prototype.registerOnTouched = function (registerFunction) {
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DateRangePickerComponent.prototype.writeValue = function (value) {
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    DateRangePickerComponent.prototype.setDisabledState = function (disabled) {
    };
    /**
     * @return {?}
     */
    DateRangePickerComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    DateRangePickerComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    DateRangePickerComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    DateRangePickerComponent.prototype.ngAfterContentChecked = function () {
    };
    return DateRangePickerComponent;
}(ej2Calendars.DateRangePicker));
exports.DateRangePickerComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-daterangepicker',
                inputs: inputs$3,
                outputs: outputs$4,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return DateRangePickerComponent_1; }),
                        multi: true
                    }
                ],
                queries: {
                    childPresets: new core.ContentChild(PresetsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
exports.DateRangePickerComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.DateRangePickerComponent.propDecorators = {
    'start': [{ type: core.ContentChild, args: ['start',] },],
    'end': [{ type: core.ContentChild, args: ['end',] },],
};
__decorate$3([
    ej2AngularBase.Template(),
    __metadata$3("design:type", Object)
], exports.DateRangePickerComponent.prototype, "start", void 0);
__decorate$3([
    ej2AngularBase.Template(),
    __metadata$3("design:type", Object)
], exports.DateRangePickerComponent.prototype, "end", void 0);
exports.DateRangePickerComponent = DateRangePickerComponent_1 = __decorate$3([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase, ej2AngularBase.FormBase]),
    __metadata$3("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.DateRangePickerComponent);
var DateRangePickerComponent_1;
/**
 * NgModule definition for the DateRangePicker component.
 */
var DateRangePickerModule = /** @class */ (function () {
    function DateRangePickerModule() {
    }
    return DateRangePickerModule;
}());
DateRangePickerModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.DateRangePickerComponent,
                    PresetDirective,
                    PresetsDirective
                ],
                exports: [
                    exports.DateRangePickerComponent,
                    PresetDirective,
                    PresetsDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
DateRangePickerModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the DateRangePicker component with providers.
 */
var DateRangePickerAllModule = /** @class */ (function () {
    function DateRangePickerAllModule() {
    }
    return DateRangePickerAllModule;
}());
DateRangePickerAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, DateRangePickerModule],
                exports: [
                    DateRangePickerModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
DateRangePickerAllModule.ctorParameters = function () { return []; };
var __decorate$4 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$4 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var inputs$4 = ['allowEdit', 'calendarMode', 'cssClass', 'depth', 'enablePersistence', 'enableRtl', 'enabled', 'firstDayOfWeek', 'floatLabelType', 'format', 'isMultiSelection', 'locale', 'max', 'min', 'placeholder', 'readonly', 'scrollTo', 'showClearButton', 'showTodayButton', 'start', 'step', 'strictMode', 'timeFormat', 'value', 'values', 'weekNumber', 'width', 'zIndex'];
var outputs$5 = ['blur', 'change', 'close', 'created', 'destroyed', 'focus', 'navigated', 'open', 'renderDayCell', 'valueChange'];
var twoWays$4 = ['value'];
/**
 * Represents the Essential JS 2 Angular DateTimePicker Component.
 * ```html
 * <ejs-datetimepicker [value]='dateTime'></ejs-datetimepicker>
 * ```
 */
exports.DateTimePickerComponent = DateTimePickerComponent_1 = /** @class */ (function (_super) {
    __extends(DateTimePickerComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function DateTimePickerComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.skipFromEvent = true;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        try {
            var mod = _this.injector.get('CalendarsIslamic');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        _this.registerEvents(outputs$5);
        _this.addTwoWay.call(_this, twoWays$4);
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    DateTimePickerComponent.prototype.registerOnChange = function (registerFunction) {
    };
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    DateTimePickerComponent.prototype.registerOnTouched = function (registerFunction) {
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DateTimePickerComponent.prototype.writeValue = function (value) {
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    DateTimePickerComponent.prototype.setDisabledState = function (disabled) {
    };
    /**
     * @return {?}
     */
    DateTimePickerComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    DateTimePickerComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    DateTimePickerComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    DateTimePickerComponent.prototype.ngAfterContentChecked = function () {
    };
    return DateTimePickerComponent;
}(ej2Calendars.DateTimePicker));
exports.DateTimePickerComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-datetimepicker',
                inputs: inputs$4,
                outputs: outputs$5,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return DateTimePickerComponent_1; }),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
exports.DateTimePickerComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.DateTimePickerComponent = DateTimePickerComponent_1 = __decorate$4([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase, ej2AngularBase.FormBase]),
    __metadata$4("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.DateTimePickerComponent);
var DateTimePickerComponent_1;
/**
 * NgModule definition for the DateTimePicker component.
 */
var DateTimePickerModule = /** @class */ (function () {
    function DateTimePickerModule() {
    }
    return DateTimePickerModule;
}());
DateTimePickerModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.DateTimePickerComponent
                ],
                exports: [
                    exports.DateTimePickerComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
DateTimePickerModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the DateTimePicker component with providers.
 */
var DateTimePickerAllModule = /** @class */ (function () {
    function DateTimePickerAllModule() {
    }
    return DateTimePickerAllModule;
}());
DateTimePickerAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, DateTimePickerModule],
                exports: [
                    DateTimePickerModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
DateTimePickerAllModule.ctorParameters = function () { return []; };

exports.CalendarModule = CalendarModule;
exports.CalendarAllModule = CalendarAllModule;
exports.IslamicService = IslamicService;
exports.DatePickerModule = DatePickerModule;
exports.DatePickerAllModule = DatePickerAllModule;
exports.TimePickerModule = TimePickerModule;
exports.TimePickerAllModule = TimePickerAllModule;
exports.PresetDirective = PresetDirective;
exports.PresetsDirective = PresetsDirective;
exports.DateRangePickerModule = DateRangePickerModule;
exports.DateRangePickerAllModule = DateRangePickerAllModule;
exports.DateTimePickerModule = DateTimePickerModule;
exports.DateTimePickerAllModule = DateTimePickerAllModule;
exports.ɵa = inputs;
exports.ɵb = outputs;
exports.ɵc = inputs$1;
exports.ɵd = outputs$1;
exports.ɵg = inputs$3;
exports.ɵh = outputs$4;
exports.ɵi = inputs$4;
exports.ɵj = outputs$5;
exports.ɵe = inputs$2;
exports.ɵf = outputs$2;
exports.CalendarBase = ej2Calendars.CalendarBase;
exports.Calendar = ej2Calendars.Calendar;
exports.Islamic = ej2Calendars.Islamic;
exports.DatePicker = ej2Calendars.DatePicker;
exports.Presets = ej2Calendars.Presets;
exports.DateRangePicker = ej2Calendars.DateRangePicker;
exports.TimePickerBase = ej2Calendars.TimePickerBase;
exports.TimePicker = ej2Calendars.TimePicker;
exports.DateTimePicker = ej2Calendars.DateTimePicker;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ej2-angular-calendars.umd.js.map
