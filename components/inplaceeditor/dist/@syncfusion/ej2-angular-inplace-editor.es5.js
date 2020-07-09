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
import { ChangeDetectionStrategy, Component, ContentChild, ElementRef, Injector, NgModule, Renderer2, ViewContainerRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ComponentBase, ComponentMixins, FormBase, Template, setValue } from '@syncfusion/ej2-angular-base';
import { AutoComplete, ColorPicker, ComboBox, DateRangePicker, InPlaceEditor, MultiSelect, Rte, Slider, TimePicker } from '@syncfusion/ej2-inplace-editor';
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
var inputs = ['actionOnBlur', 'adaptor', 'cancelButton', 'cssClass', 'disabled', 'editableOn', 'emptyText', 'enableEditMode', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'locale', 'mode', 'model', 'name', 'popupSettings', 'primaryKey', 'saveButton', 'showButtons', 'submitOnEnter', 'template', 'textOption', 'type', 'url', 'validationRules', 'value'];
var outputs = ['focus', 'blur', 'actionBegin', 'actionFailure', 'actionSuccess', 'beforeSanitizeHtml', 'beginEdit', 'created', 'destroyed', 'validating'];
var twoWays = [''];
/**
 * `ejs-inplaceeditor` represents the Angular InPlaceEditor Component.
 * ```html
 * <ejs-inplaceeditor></ejs-inplaceeditor>
 * ```
 */
var InPlaceEditorComponent = InPlaceEditorComponent_1 = /** @class */ (function (_super) {
    __extends(InPlaceEditorComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function InPlaceEditorComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        try {
            var mod = _this.injector.get('InPlace-EditorAutoComplete');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            var mod = _this.injector.get('InPlace-EditorColorPicker');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            var mod = _this.injector.get('InPlace-EditorComboBox');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            var mod = _this.injector.get('InPlace-EditorDateRangePicker');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            var mod = _this.injector.get('InPlace-EditorMultiSelect');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            var mod = _this.injector.get('InPlace-EditorRte');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        try {
            var mod = _this.injector.get('InPlace-EditorSlider');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_g) { }
        try {
            var mod = _this.injector.get('InPlace-EditorTimePicker');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_h) { }
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
    InPlaceEditorComponent.prototype.registerOnChange = function (registerFunction) {
    };
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    InPlaceEditorComponent.prototype.registerOnTouched = function (registerFunction) {
    };
    /**
     * @param {?} value
     * @return {?}
     */
    InPlaceEditorComponent.prototype.writeValue = function (value) {
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    InPlaceEditorComponent.prototype.setDisabledState = function (disabled) {
    };
    /**
     * @return {?}
     */
    InPlaceEditorComponent.prototype.ngOnInit = function () {
        this.formCompContext.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    InPlaceEditorComponent.prototype.ngAfterViewInit = function () {
        this.formContext.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    InPlaceEditorComponent.prototype.ngOnDestroy = function () {
        this.formCompContext.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    InPlaceEditorComponent.prototype.ngAfterContentChecked = function () {
        this.formCompContext.ngAfterContentChecked(this);
    };
    return InPlaceEditorComponent;
}(InPlaceEditor));
InPlaceEditorComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-inplaceeditor',
                inputs: inputs,
                outputs: outputs,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return InPlaceEditorComponent_1; }),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
InPlaceEditorComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
InPlaceEditorComponent.propDecorators = {
    'template': [{ type: ContentChild, args: ['template',] },],
};
__decorate([
    Template(),
    __metadata("design:type", Object)
], InPlaceEditorComponent.prototype, "template", void 0);
InPlaceEditorComponent = InPlaceEditorComponent_1 = __decorate([
    ComponentMixins([ComponentBase, FormBase]),
    __metadata("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], InPlaceEditorComponent);
var InPlaceEditorComponent_1;
/**
 * NgModule definition for the InPlaceEditor component.
 */
var InPlaceEditorModule = /** @class */ (function () {
    function InPlaceEditorModule() {
    }
    return InPlaceEditorModule;
}());
InPlaceEditorModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    InPlaceEditorComponent
                ],
                exports: [
                    InPlaceEditorComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
InPlaceEditorModule.ctorParameters = function () { return []; };
var AutoCompleteService = { provide: 'InPlace-EditorAutoComplete', useValue: AutoComplete };
var ColorPickerService = { provide: 'InPlace-EditorColorPicker', useValue: ColorPicker };
var ComboBoxService = { provide: 'InPlace-EditorComboBox', useValue: ComboBox };
var DateRangePickerService = { provide: 'InPlace-EditorDateRangePicker', useValue: DateRangePicker };
var MultiSelectService = { provide: 'InPlace-EditorMultiSelect', useValue: MultiSelect };
var RteService = { provide: 'InPlace-EditorRte', useValue: Rte };
var SliderService = { provide: 'InPlace-EditorSlider', useValue: Slider };
var TimePickerService = { provide: 'InPlace-EditorTimePicker', useValue: TimePicker };
/**
 * NgModule definition for the InPlaceEditor component with providers.
 */
var InPlaceEditorAllModule = /** @class */ (function () {
    function InPlaceEditorAllModule() {
    }
    return InPlaceEditorAllModule;
}());
InPlaceEditorAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, InPlaceEditorModule],
                exports: [
                    InPlaceEditorModule
                ],
                providers: [
                    AutoCompleteService,
                    ColorPickerService,
                    ComboBoxService,
                    DateRangePickerService,
                    MultiSelectService,
                    RteService,
                    SliderService,
                    TimePickerService
                ]
            },] },
];
/**
 * @nocollapse
 */
InPlaceEditorAllModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { InPlaceEditorComponent, InPlaceEditorModule, InPlaceEditorAllModule, AutoCompleteService, ColorPickerService, ComboBoxService, DateRangePickerService, MultiSelectService, RteService, SliderService, TimePickerService, inputs as ɵa, outputs as ɵb };
export { parseValue, getCompValue, render, update, destroy, setFocus, accessValue, destroyModules, showPopup, PopupSettings, modulesList, localeConstant, ROOT, ROOT_TIP, VALUE_WRAPPER, VALUE, OVERLAY_ICON, TIP_TITLE, TITLE, INLINE, POPUP, WRAPPER, LOADING, FORM, CTRL_GROUP, INPUT, BUTTONS, EDITABLE_ERROR, ELEMENTS, OPEN, BTN_SAVE, BTN_CANCEL, RTE_SPIN_WRAP, CTRL_OVERLAY, DISABLE, ICONS, PRIMARY, SHOW, HIDE, RTL, ERROR, LOAD, InPlaceEditor, Base, AutoComplete, ColorPicker, ComboBox, DateRangePicker, MultiSelect, Rte, Slider, TimePicker } from '@syncfusion/ej2-inplace-editor';
//# sourceMappingURL=ej2-angular-inplace-editor.es5.js.map
