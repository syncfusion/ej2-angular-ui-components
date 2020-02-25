(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@syncfusion/ej2-angular-base'), require('@syncfusion/ej2-inplace-editor'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/forms', '@syncfusion/ej2-angular-base', '@syncfusion/ej2-inplace-editor', '@angular/common'], factory) :
	(factory((global['ej2-angular-inplace-editor'] = {}),global.ng.core,global.ng.forms,global.ej2.angular.base,global.ej2.inplace.editor,global.ng.common));
}(this, (function (exports,core,forms,ej2AngularBase,ej2InplaceEditor,common) { 'use strict';

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
var inputs = ['actionOnBlur', 'adaptor', 'cancelButton', 'cssClass', 'disabled', 'editableOn', 'emptyText', 'enableEditMode', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'locale', 'mode', 'model', 'name', 'popupSettings', 'primaryKey', 'saveButton', 'showButtons', 'submitOnEnter', 'template', 'textOption', 'type', 'url', 'validationRules', 'value'];
var outputs = ['focus', 'blur', 'actionBegin', 'actionFailure', 'actionSuccess', 'beforeSanitizeHtml', 'beginEdit', 'created', 'destroyed', 'validating'];
var twoWays = [''];
/**
 * `ejs-inplaceeditor` represents the Angular InPlaceEditor Component.
 * ```html
 * <ejs-inplaceeditor></ejs-inplaceeditor>
 * ```
 */
exports.InPlaceEditorComponent = InPlaceEditorComponent_1 = /** @class */ (function (_super) {
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
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
    };
    /**
     * @return {?}
     */
    InPlaceEditorComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    InPlaceEditorComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    InPlaceEditorComponent.prototype.ngAfterContentChecked = function () {
    };
    return InPlaceEditorComponent;
}(ej2InplaceEditor.InPlaceEditor));
exports.InPlaceEditorComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-inplaceeditor',
                inputs: inputs,
                outputs: outputs,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return InPlaceEditorComponent_1; }),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
exports.InPlaceEditorComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.InPlaceEditorComponent.propDecorators = {
    'template': [{ type: core.ContentChild, args: ['template',] },],
};
__decorate([
    ej2AngularBase.Template(),
    __metadata("design:type", Object)
], exports.InPlaceEditorComponent.prototype, "template", void 0);
exports.InPlaceEditorComponent = InPlaceEditorComponent_1 = __decorate([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase, ej2AngularBase.FormBase]),
    __metadata("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.InPlaceEditorComponent);
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
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.InPlaceEditorComponent
                ],
                exports: [
                    exports.InPlaceEditorComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
InPlaceEditorModule.ctorParameters = function () { return []; };
var AutoCompleteService = { provide: 'InPlace-EditorAutoComplete', useValue: ej2InplaceEditor.AutoComplete };
var ColorPickerService = { provide: 'InPlace-EditorColorPicker', useValue: ej2InplaceEditor.ColorPicker };
var ComboBoxService = { provide: 'InPlace-EditorComboBox', useValue: ej2InplaceEditor.ComboBox };
var DateRangePickerService = { provide: 'InPlace-EditorDateRangePicker', useValue: ej2InplaceEditor.DateRangePicker };
var MultiSelectService = { provide: 'InPlace-EditorMultiSelect', useValue: ej2InplaceEditor.MultiSelect };
var RteService = { provide: 'InPlace-EditorRte', useValue: ej2InplaceEditor.Rte };
var SliderService = { provide: 'InPlace-EditorSlider', useValue: ej2InplaceEditor.Slider };
var TimePickerService = { provide: 'InPlace-EditorTimePicker', useValue: ej2InplaceEditor.TimePicker };
/**
 * NgModule definition for the InPlaceEditor component with providers.
 */
var InPlaceEditorAllModule = /** @class */ (function () {
    function InPlaceEditorAllModule() {
    }
    return InPlaceEditorAllModule;
}());
InPlaceEditorAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, InPlaceEditorModule],
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

exports.InPlaceEditorModule = InPlaceEditorModule;
exports.InPlaceEditorAllModule = InPlaceEditorAllModule;
exports.AutoCompleteService = AutoCompleteService;
exports.ColorPickerService = ColorPickerService;
exports.ComboBoxService = ComboBoxService;
exports.DateRangePickerService = DateRangePickerService;
exports.MultiSelectService = MultiSelectService;
exports.RteService = RteService;
exports.SliderService = SliderService;
exports.TimePickerService = TimePickerService;
exports.ɵa = inputs;
exports.ɵb = outputs;
exports.parseValue = ej2InplaceEditor.parseValue;
exports.getCompValue = ej2InplaceEditor.getCompValue;
exports.render = ej2InplaceEditor.render;
exports.update = ej2InplaceEditor.update;
exports.destroy = ej2InplaceEditor.destroy;
exports.setFocus = ej2InplaceEditor.setFocus;
exports.accessValue = ej2InplaceEditor.accessValue;
exports.destroyModules = ej2InplaceEditor.destroyModules;
exports.showPopup = ej2InplaceEditor.showPopup;
exports.PopupSettings = ej2InplaceEditor.PopupSettings;
exports.modulesList = ej2InplaceEditor.modulesList;
exports.localeConstant = ej2InplaceEditor.localeConstant;
exports.ROOT = ej2InplaceEditor.ROOT;
exports.ROOT_TIP = ej2InplaceEditor.ROOT_TIP;
exports.VALUE_WRAPPER = ej2InplaceEditor.VALUE_WRAPPER;
exports.VALUE = ej2InplaceEditor.VALUE;
exports.OVERLAY_ICON = ej2InplaceEditor.OVERLAY_ICON;
exports.TIP_TITLE = ej2InplaceEditor.TIP_TITLE;
exports.TITLE = ej2InplaceEditor.TITLE;
exports.INLINE = ej2InplaceEditor.INLINE;
exports.POPUP = ej2InplaceEditor.POPUP;
exports.WRAPPER = ej2InplaceEditor.WRAPPER;
exports.LOADING = ej2InplaceEditor.LOADING;
exports.FORM = ej2InplaceEditor.FORM;
exports.CTRL_GROUP = ej2InplaceEditor.CTRL_GROUP;
exports.INPUT = ej2InplaceEditor.INPUT;
exports.BUTTONS = ej2InplaceEditor.BUTTONS;
exports.EDITABLE_ERROR = ej2InplaceEditor.EDITABLE_ERROR;
exports.ELEMENTS = ej2InplaceEditor.ELEMENTS;
exports.OPEN = ej2InplaceEditor.OPEN;
exports.BTN_SAVE = ej2InplaceEditor.BTN_SAVE;
exports.BTN_CANCEL = ej2InplaceEditor.BTN_CANCEL;
exports.RTE_SPIN_WRAP = ej2InplaceEditor.RTE_SPIN_WRAP;
exports.CTRL_OVERLAY = ej2InplaceEditor.CTRL_OVERLAY;
exports.DISABLE = ej2InplaceEditor.DISABLE;
exports.ICONS = ej2InplaceEditor.ICONS;
exports.PRIMARY = ej2InplaceEditor.PRIMARY;
exports.SHOW = ej2InplaceEditor.SHOW;
exports.HIDE = ej2InplaceEditor.HIDE;
exports.RTL = ej2InplaceEditor.RTL;
exports.ERROR = ej2InplaceEditor.ERROR;
exports.LOAD = ej2InplaceEditor.LOAD;
exports.InPlaceEditor = ej2InplaceEditor.InPlaceEditor;
exports.Base = ej2InplaceEditor.Base;
exports.AutoComplete = ej2InplaceEditor.AutoComplete;
exports.ColorPicker = ej2InplaceEditor.ColorPicker;
exports.ComboBox = ej2InplaceEditor.ComboBox;
exports.DateRangePicker = ej2InplaceEditor.DateRangePicker;
exports.MultiSelect = ej2InplaceEditor.MultiSelect;
exports.Rte = ej2InplaceEditor.Rte;
exports.Slider = ej2InplaceEditor.Slider;
exports.TimePicker = ej2InplaceEditor.TimePicker;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ej2-angular-inplace-editor.umd.js.map
