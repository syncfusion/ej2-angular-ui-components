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
import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, Directive, ElementRef, Injector, NgModule, Renderer2, ViewContainerRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ArrayBase, ComplexBase, ComponentBase, ComponentMixins, FormBase, Template, setValue } from '@syncfusion/ej2-angular-base';
import { Calendar, DatePicker, DateRangePicker, DateTimePicker, Islamic, TimePicker } from '@syncfusion/ej2-calendars';
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
var inputs = ['calendarMode', 'dayHeaderFormat', 'depth', 'enablePersistence', 'enableRtl', 'firstDayOfWeek', 'isMultiSelection', 'keyConfigs', 'locale', 'max', 'min', 'serverTimezoneOffset', 'showTodayButton', 'start', 'value', 'values', 'weekNumber'];
var outputs = ['focus', 'blur', 'change', 'created', 'destroyed', 'navigated', 'renderDayCell', 'valueChange', 'valuesChange'];
var twoWays = ['value', 'values'];
/**
 * Represents the Essential JS 2 Angular Calendar Component.
 * ```html
 * <ejs-calendar [value]='date'></ejs-calendar>
 * ```
 */
var CalendarComponent = CalendarComponent_1 = /** @class */ (function (_super) {
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
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.formContext = new FormBase();
        _this.formCompContext = new ComponentBase();
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
        this.formCompContext.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.ngAfterViewInit = function () {
        this.formContext.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.ngOnDestroy = function () {
        this.formCompContext.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.ngAfterContentChecked = function () {
        this.formCompContext.ngAfterContentChecked(this);
    };
    return CalendarComponent;
}(Calendar));
CalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-calendar',
                inputs: inputs,
                outputs: outputs,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return CalendarComponent_1; }),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
CalendarComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
CalendarComponent = CalendarComponent_1 = __decorate([
    ComponentMixins([ComponentBase, FormBase]),
    __metadata("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], CalendarComponent);
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
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    CalendarComponent
                ],
                exports: [
                    CalendarComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
CalendarModule.ctorParameters = function () { return []; };
var IslamicService = { provide: 'CalendarsIslamic', useValue: Islamic };
/**
 * NgModule definition for the Calendar component with providers.
 */
var CalendarAllModule = /** @class */ (function () {
    function CalendarAllModule() {
    }
    return CalendarAllModule;
}());
CalendarAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, CalendarModule],
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
var inputs$1 = ['allowEdit', 'calendarMode', 'cssClass', 'dayHeaderFormat', 'depth', 'enablePersistence', 'enableRtl', 'enabled', 'firstDayOfWeek', 'floatLabelType', 'format', 'htmlAttributes', 'isMultiSelection', 'keyConfigs', 'locale', 'max', 'min', 'placeholder', 'readonly', 'serverTimezoneOffset', 'showClearButton', 'showTodayButton', 'start', 'strictMode', 'value', 'values', 'weekNumber', 'width', 'zIndex'];
var outputs$1 = ['blur', 'change', 'cleared', 'close', 'created', 'destroyed', 'focus', 'navigated', 'open', 'renderDayCell', 'valueChange'];
var twoWays$1 = ['value'];
/**
 * Represents the Essential JS 2 Angular DatePicker Component.
 * ```html
 * <ejs-datepicker [value]='date'></ejs-datepicker>
 * ```
 */
var DatePickerComponent = DatePickerComponent_1 = /** @class */ (function (_super) {
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
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.formContext = new FormBase();
        _this.formCompContext = new ComponentBase();
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
        this.formCompContext.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    DatePickerComponent.prototype.ngAfterViewInit = function () {
        this.formContext.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    DatePickerComponent.prototype.ngOnDestroy = function () {
        this.formCompContext.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    DatePickerComponent.prototype.ngAfterContentChecked = function () {
        this.formCompContext.ngAfterContentChecked(this);
    };
    return DatePickerComponent;
}(DatePicker));
DatePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-datepicker',
                inputs: inputs$1,
                outputs: outputs$1,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return DatePickerComponent_1; }),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
DatePickerComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
DatePickerComponent = DatePickerComponent_1 = __decorate$1([
    ComponentMixins([ComponentBase, FormBase]),
    __metadata$1("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], DatePickerComponent);
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
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    DatePickerComponent
                ],
                exports: [
                    DatePickerComponent
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
    { type: NgModule, args: [{
                imports: [CommonModule, DatePickerModule],
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
var inputs$2 = ['allowEdit', 'cssClass', 'enablePersistence', 'enableRtl', 'enabled', 'floatLabelType', 'format', 'htmlAttributes', 'keyConfigs', 'locale', 'max', 'min', 'placeholder', 'readonly', 'scrollTo', 'showClearButton', 'step', 'strictMode', 'value', 'width', 'zIndex'];
var outputs$2 = ['blur', 'change', 'cleared', 'close', 'created', 'destroyed', 'focus', 'itemRender', 'open', 'valueChange'];
var twoWays$2 = ['value'];
/**
 * Represents the Essential JS 2 Angular TimePicker Component.
 * ```html
 * <ejs-timepicker [value]='dateTime'></ejs-timepicker>
 * ```
 */
var TimePickerComponent = TimePickerComponent_1 = /** @class */ (function (_super) {
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
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.formContext = new FormBase();
        _this.formCompContext = new ComponentBase();
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
        this.formCompContext.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.ngAfterViewInit = function () {
        this.formContext.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.ngOnDestroy = function () {
        this.formCompContext.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.ngAfterContentChecked = function () {
        this.formCompContext.ngAfterContentChecked(this);
    };
    return TimePickerComponent;
}(TimePicker));
TimePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-timepicker',
                inputs: inputs$2,
                outputs: outputs$2,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return TimePickerComponent_1; }),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
TimePickerComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
TimePickerComponent = TimePickerComponent_1 = __decorate$2([
    ComponentMixins([ComponentBase, FormBase]),
    __metadata$2("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], TimePickerComponent);
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
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    TimePickerComponent
                ],
                exports: [
                    TimePickerComponent
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
    { type: NgModule, args: [{
                imports: [CommonModule, TimePickerModule],
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
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$3);
        _this.directivePropList = input;
        return _this;
    }
    return PresetDirective;
}(ComplexBase));
PresetDirective.decorators = [
    { type: Directive, args: [{
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
    { type: ViewContainerRef, },
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
}(ArrayBase));
PresetsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-daterangepicker>e-presets',
                queries: {
                    children: new ContentChildren(PresetDirective)
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
var inputs$3 = ['allowEdit', 'calendarMode', 'cssClass', 'dayHeaderFormat', 'depth', 'enablePersistence', 'enableRtl', 'enabled', 'endDate', 'firstDayOfWeek', 'floatLabelType', 'format', 'htmlAttributes', 'keyConfigs', 'locale', 'max', 'maxDays', 'min', 'minDays', 'placeholder', 'presets', 'readonly', 'separator', 'serverTimezoneOffset', 'showClearButton', 'start', 'startDate', 'strictMode', 'value', 'weekNumber', 'width', 'zIndex'];
var outputs$4 = ['blur', 'change', 'cleared', 'close', 'created', 'destroyed', 'focus', 'navigated', 'open', 'renderDayCell', 'select', 'startDateChange', 'endDateChange', 'valueChange'];
var twoWays$3 = ['startDate', 'endDate', 'value'];
/**
 * Represents the Essential JS 2 Angular DateRangePicker Component.
 * ```html
 * <ejs-daterangepicker [startDate]='date' [endDate]='date'></ejs-daterangepicker>
 * ```
 */
var DateRangePickerComponent = DateRangePickerComponent_1 = /** @class */ (function (_super) {
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
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.formContext = new FormBase();
        _this.formCompContext = new ComponentBase();
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
        this.formCompContext.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    DateRangePickerComponent.prototype.ngAfterViewInit = function () {
        this.formContext.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    DateRangePickerComponent.prototype.ngOnDestroy = function () {
        this.formCompContext.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    DateRangePickerComponent.prototype.ngAfterContentChecked = function () {
        this.tagObjects[0].instance = this.childPresets;
        this.formCompContext.ngAfterContentChecked(this);
    };
    return DateRangePickerComponent;
}(DateRangePicker));
DateRangePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-daterangepicker',
                inputs: inputs$3,
                outputs: outputs$4,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return DateRangePickerComponent_1; }),
                        multi: true
                    }
                ],
                queries: {
                    childPresets: new ContentChild(PresetsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
DateRangePickerComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
DateRangePickerComponent.propDecorators = {
    'start': [{ type: ContentChild, args: ['start',] },],
    'end': [{ type: ContentChild, args: ['end',] },],
};
__decorate$3([
    Template(),
    __metadata$3("design:type", Object)
], DateRangePickerComponent.prototype, "start", void 0);
__decorate$3([
    Template(),
    __metadata$3("design:type", Object)
], DateRangePickerComponent.prototype, "end", void 0);
DateRangePickerComponent = DateRangePickerComponent_1 = __decorate$3([
    ComponentMixins([ComponentBase, FormBase]),
    __metadata$3("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], DateRangePickerComponent);
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
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    DateRangePickerComponent,
                    PresetDirective,
                    PresetsDirective
                ],
                exports: [
                    DateRangePickerComponent,
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
    { type: NgModule, args: [{
                imports: [CommonModule, DateRangePickerModule],
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
var inputs$4 = ['allowEdit', 'calendarMode', 'cssClass', 'dayHeaderFormat', 'depth', 'enablePersistence', 'enableRtl', 'enabled', 'firstDayOfWeek', 'floatLabelType', 'format', 'htmlAttributes', 'isMultiSelection', 'keyConfigs', 'locale', 'max', 'min', 'placeholder', 'readonly', 'scrollTo', 'serverTimezoneOffset', 'showClearButton', 'showTodayButton', 'start', 'step', 'strictMode', 'timeFormat', 'value', 'values', 'weekNumber', 'width', 'zIndex'];
var outputs$5 = ['blur', 'change', 'cleared', 'close', 'created', 'destroyed', 'focus', 'navigated', 'open', 'renderDayCell', 'valueChange'];
var twoWays$4 = ['value'];
/**
 * Represents the Essential JS 2 Angular DateTimePicker Component.
 * ```html
 * <ejs-datetimepicker [value]='dateTime'></ejs-datetimepicker>
 * ```
 */
var DateTimePickerComponent = DateTimePickerComponent_1 = /** @class */ (function (_super) {
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
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.formContext = new FormBase();
        _this.formCompContext = new ComponentBase();
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
        this.formCompContext.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    DateTimePickerComponent.prototype.ngAfterViewInit = function () {
        this.formContext.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    DateTimePickerComponent.prototype.ngOnDestroy = function () {
        this.formCompContext.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    DateTimePickerComponent.prototype.ngAfterContentChecked = function () {
        this.formCompContext.ngAfterContentChecked(this);
    };
    return DateTimePickerComponent;
}(DateTimePicker));
DateTimePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-datetimepicker',
                inputs: inputs$4,
                outputs: outputs$5,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return DateTimePickerComponent_1; }),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
DateTimePickerComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
DateTimePickerComponent = DateTimePickerComponent_1 = __decorate$4([
    ComponentMixins([ComponentBase, FormBase]),
    __metadata$4("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], DateTimePickerComponent);
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
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    DateTimePickerComponent
                ],
                exports: [
                    DateTimePickerComponent
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
    { type: NgModule, args: [{
                imports: [CommonModule, DateTimePickerModule],
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
/**
 * Generated bundle index. Do not edit.
 */
export { CalendarComponent, CalendarModule, CalendarAllModule, IslamicService, DatePickerComponent, DatePickerModule, DatePickerAllModule, TimePickerComponent, TimePickerModule, TimePickerAllModule, PresetDirective, PresetsDirective, DateRangePickerComponent, DateRangePickerModule, DateRangePickerAllModule, DateTimePickerComponent, DateTimePickerModule, DateTimePickerAllModule, inputs as ɵa, outputs as ɵb, inputs$1 as ɵc, outputs$1 as ɵd, inputs$3 as ɵg, outputs$4 as ɵh, inputs$4 as ɵi, outputs$5 as ɵj, inputs$2 as ɵe, outputs$2 as ɵf };
export { CalendarBase, Calendar, Islamic, DatePicker, Presets, DateRangePicker, TimePickerBase, TimePicker, DateTimePicker } from '@syncfusion/ej2-calendars';
//# sourceMappingURL=ej2-angular-calendars.es5.js.map
