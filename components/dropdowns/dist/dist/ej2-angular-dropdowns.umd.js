(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@syncfusion/ej2-angular-base'), require('@syncfusion/ej2-dropdowns'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/forms', '@syncfusion/ej2-angular-base', '@syncfusion/ej2-dropdowns', '@angular/common'], factory) :
	(factory((global['ej2-angular-dropdowns'] = {}),global.ng.core,global.ng.forms,global.ej2.angular.base,global.ej2.dropdowns,global.ng.common));
}(this, (function (exports,core,forms,ej2AngularBase,ej2Dropdowns,common) { 'use strict';

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
var inputs = ['actionFailureTemplate', 'allowFiltering', 'cssClass', 'dataSource', 'enablePersistence', 'enableRtl', 'enabled', 'fields', 'filterBarPlaceholder', 'filterType', 'floatLabelType', 'footerTemplate', 'groupTemplate', 'headerTemplate', 'htmlAttributes', 'ignoreAccent', 'ignoreCase', 'index', 'itemTemplate', 'locale', 'noRecordsTemplate', 'placeholder', 'popupHeight', 'popupWidth', 'query', 'readonly', 'showClearButton', 'sortOrder', 'text', 'value', 'valueTemplate', 'width', 'zIndex'];
var outputs = ['actionBegin', 'actionComplete', 'actionFailure', 'beforeOpen', 'blur', 'change', 'close', 'created', 'dataBound', 'destroyed', 'filtering', 'focus', 'open', 'select', 'valueChange'];
var twoWays = ['value'];
/**
 * The DropDownList component contains a list of predefined values, from which the user can choose a single value.
 * ```html
 * <ejs-dropdownlist></ejs-dropdownlist>
 * ```
 */
exports.DropDownListComponent = DropDownListComponent_1 = /** @class */ (function (_super) {
    __extends(DropDownListComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function DropDownListComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.skipFromEvent = true;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        _this.registerEvents(outputs);
        _this.addTwoWay.call(_this, twoWays);
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    DropDownListComponent.prototype.registerOnChange = function (registerFunction) {
    };
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    DropDownListComponent.prototype.registerOnTouched = function (registerFunction) {
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DropDownListComponent.prototype.writeValue = function (value) {
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    DropDownListComponent.prototype.setDisabledState = function (disabled) {
    };
    /**
     * @return {?}
     */
    DropDownListComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    DropDownListComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    DropDownListComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    DropDownListComponent.prototype.ngAfterContentChecked = function () {
    };
    return DropDownListComponent;
}(ej2Dropdowns.DropDownList));
exports.DropDownListComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-dropdownlist',
                inputs: inputs,
                outputs: outputs,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return DropDownListComponent_1; }),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
exports.DropDownListComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.DropDownListComponent.propDecorators = {
    'footerTemplate': [{ type: core.ContentChild, args: ['footerTemplate',] },],
    'headerTemplate': [{ type: core.ContentChild, args: ['headerTemplate',] },],
    'valueTemplate': [{ type: core.ContentChild, args: ['valueTemplate',] },],
    'groupTemplate': [{ type: core.ContentChild, args: ['groupTemplate',] },],
    'itemTemplate': [{ type: core.ContentChild, args: ['itemTemplate',] },],
    'noRecordsTemplate': [{ type: core.ContentChild, args: ['noRecordsTemplate',] },],
    'actionFailureTemplate': [{ type: core.ContentChild, args: ['actionFailureTemplate',] },],
};
__decorate([
    ej2AngularBase.Template(),
    __metadata("design:type", Object)
], exports.DropDownListComponent.prototype, "footerTemplate", void 0);
__decorate([
    ej2AngularBase.Template(),
    __metadata("design:type", Object)
], exports.DropDownListComponent.prototype, "headerTemplate", void 0);
__decorate([
    ej2AngularBase.Template(),
    __metadata("design:type", Object)
], exports.DropDownListComponent.prototype, "valueTemplate", void 0);
__decorate([
    ej2AngularBase.Template(),
    __metadata("design:type", Object)
], exports.DropDownListComponent.prototype, "groupTemplate", void 0);
__decorate([
    ej2AngularBase.Template(),
    __metadata("design:type", Object)
], exports.DropDownListComponent.prototype, "itemTemplate", void 0);
__decorate([
    ej2AngularBase.Template('No Records Found'),
    __metadata("design:type", Object)
], exports.DropDownListComponent.prototype, "noRecordsTemplate", void 0);
__decorate([
    ej2AngularBase.Template('The Request Failed'),
    __metadata("design:type", Object)
], exports.DropDownListComponent.prototype, "actionFailureTemplate", void 0);
exports.DropDownListComponent = DropDownListComponent_1 = __decorate([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase, ej2AngularBase.FormBase]),
    __metadata("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.DropDownListComponent);
var DropDownListComponent_1;
/**
 * NgModule definition for the DropDownList component.
 */
var DropDownListModule = /** @class */ (function () {
    function DropDownListModule() {
    }
    return DropDownListModule;
}());
DropDownListModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.DropDownListComponent
                ],
                exports: [
                    exports.DropDownListComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
DropDownListModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the DropDownList component with providers.
 */
var DropDownListAllModule = /** @class */ (function () {
    function DropDownListAllModule() {
    }
    return DropDownListAllModule;
}());
DropDownListAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, DropDownListModule],
                exports: [
                    DropDownListModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
DropDownListAllModule.ctorParameters = function () { return []; };
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
var inputs$1 = ['actionFailureTemplate', 'allowCustom', 'allowFiltering', 'autofill', 'cssClass', 'dataSource', 'enablePersistence', 'enableRtl', 'enabled', 'fields', 'filterBarPlaceholder', 'filterType', 'floatLabelType', 'footerTemplate', 'groupTemplate', 'headerTemplate', 'htmlAttributes', 'ignoreAccent', 'ignoreCase', 'index', 'itemTemplate', 'locale', 'noRecordsTemplate', 'placeholder', 'popupHeight', 'popupWidth', 'query', 'readonly', 'showClearButton', 'sortOrder', 'text', 'value', 'valueTemplate', 'width', 'zIndex'];
var outputs$1 = ['actionBegin', 'actionComplete', 'actionFailure', 'beforeOpen', 'blur', 'change', 'close', 'created', 'customValueSpecifier', 'dataBound', 'destroyed', 'filtering', 'focus', 'open', 'select', 'valueChange'];
var twoWays$1 = ['value'];
/**
 * The ComboBox component allows the user to type a value or choose an option from the list of predefined options.
 * ```html
 * <ejs-combobox></ejs-combobox>
 * ```
 */
exports.ComboBoxComponent = ComboBoxComponent_1 = /** @class */ (function (_super) {
    __extends(ComboBoxComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function ComboBoxComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.skipFromEvent = true;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        _this.registerEvents(outputs$1);
        _this.addTwoWay.call(_this, twoWays$1);
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    ComboBoxComponent.prototype.registerOnChange = function (registerFunction) {
    };
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    ComboBoxComponent.prototype.registerOnTouched = function (registerFunction) {
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ComboBoxComponent.prototype.writeValue = function (value) {
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    ComboBoxComponent.prototype.setDisabledState = function (disabled) {
    };
    /**
     * @return {?}
     */
    ComboBoxComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    ComboBoxComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    ComboBoxComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    ComboBoxComponent.prototype.ngAfterContentChecked = function () {
    };
    return ComboBoxComponent;
}(ej2Dropdowns.ComboBox));
exports.ComboBoxComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-combobox',
                inputs: inputs$1,
                outputs: outputs$1,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return ComboBoxComponent_1; }),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
exports.ComboBoxComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.ComboBoxComponent.propDecorators = {
    'footerTemplate': [{ type: core.ContentChild, args: ['footerTemplate',] },],
    'headerTemplate': [{ type: core.ContentChild, args: ['headerTemplate',] },],
    'groupTemplate': [{ type: core.ContentChild, args: ['groupTemplate',] },],
    'itemTemplate': [{ type: core.ContentChild, args: ['itemTemplate',] },],
    'noRecordsTemplate': [{ type: core.ContentChild, args: ['noRecordsTemplate',] },],
    'actionFailureTemplate': [{ type: core.ContentChild, args: ['actionFailureTemplate',] },],
};
__decorate$1([
    ej2AngularBase.Template(),
    __metadata$1("design:type", Object)
], exports.ComboBoxComponent.prototype, "footerTemplate", void 0);
__decorate$1([
    ej2AngularBase.Template(),
    __metadata$1("design:type", Object)
], exports.ComboBoxComponent.prototype, "headerTemplate", void 0);
__decorate$1([
    ej2AngularBase.Template(),
    __metadata$1("design:type", Object)
], exports.ComboBoxComponent.prototype, "groupTemplate", void 0);
__decorate$1([
    ej2AngularBase.Template(),
    __metadata$1("design:type", Object)
], exports.ComboBoxComponent.prototype, "itemTemplate", void 0);
__decorate$1([
    ej2AngularBase.Template('No Records Found'),
    __metadata$1("design:type", Object)
], exports.ComboBoxComponent.prototype, "noRecordsTemplate", void 0);
__decorate$1([
    ej2AngularBase.Template('The Request Failed'),
    __metadata$1("design:type", Object)
], exports.ComboBoxComponent.prototype, "actionFailureTemplate", void 0);
exports.ComboBoxComponent = ComboBoxComponent_1 = __decorate$1([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase, ej2AngularBase.FormBase]),
    __metadata$1("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.ComboBoxComponent);
var ComboBoxComponent_1;
/**
 * NgModule definition for the ComboBox component.
 */
var ComboBoxModule = /** @class */ (function () {
    function ComboBoxModule() {
    }
    return ComboBoxModule;
}());
ComboBoxModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.ComboBoxComponent
                ],
                exports: [
                    exports.ComboBoxComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
ComboBoxModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the ComboBox component with providers.
 */
var ComboBoxAllModule = /** @class */ (function () {
    function ComboBoxAllModule() {
    }
    return ComboBoxAllModule;
}());
ComboBoxAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, ComboBoxModule],
                exports: [
                    ComboBoxModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
ComboBoxAllModule.ctorParameters = function () { return []; };
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
var inputs$2 = ['actionFailureTemplate', 'allowCustom', 'allowFiltering', 'autofill', 'cssClass', 'dataSource', 'enablePersistence', 'enableRtl', 'enabled', 'fields', 'filterBarPlaceholder', 'filterType', 'floatLabelType', 'footerTemplate', 'groupTemplate', 'headerTemplate', 'highlight', 'htmlAttributes', 'ignoreAccent', 'ignoreCase', 'index', 'itemTemplate', 'locale', 'minLength', 'noRecordsTemplate', 'placeholder', 'popupHeight', 'popupWidth', 'query', 'readonly', 'showClearButton', 'showPopupButton', 'sortOrder', 'suggestionCount', 'text', 'value', 'valueTemplate', 'width', 'zIndex'];
var outputs$2 = ['actionBegin', 'actionComplete', 'actionFailure', 'beforeOpen', 'blur', 'change', 'close', 'created', 'customValueSpecifier', 'dataBound', 'destroyed', 'filtering', 'focus', 'open', 'select', 'valueChange'];
var twoWays$2 = ['value'];
/**
 * The AutoComplete component provides the matched suggestion list when type into the input, from which the user can select one.
 * ```html
 * <ejs-autocomplete></ejs-autocomplete>
 * ```
 */
exports.AutoCompleteComponent = AutoCompleteComponent_1 = /** @class */ (function (_super) {
    __extends(AutoCompleteComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function AutoCompleteComponent(ngEle, srenderer, viewContainerRef, injector) {
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
    AutoCompleteComponent.prototype.registerOnChange = function (registerFunction) {
    };
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    AutoCompleteComponent.prototype.registerOnTouched = function (registerFunction) {
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AutoCompleteComponent.prototype.writeValue = function (value) {
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    AutoCompleteComponent.prototype.setDisabledState = function (disabled) {
    };
    /**
     * @return {?}
     */
    AutoCompleteComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    AutoCompleteComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    AutoCompleteComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    AutoCompleteComponent.prototype.ngAfterContentChecked = function () {
    };
    return AutoCompleteComponent;
}(ej2Dropdowns.AutoComplete));
exports.AutoCompleteComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-autocomplete',
                inputs: inputs$2,
                outputs: outputs$2,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return AutoCompleteComponent_1; }),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
exports.AutoCompleteComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.AutoCompleteComponent.propDecorators = {
    'footerTemplate': [{ type: core.ContentChild, args: ['footerTemplate',] },],
    'headerTemplate': [{ type: core.ContentChild, args: ['headerTemplate',] },],
    'groupTemplate': [{ type: core.ContentChild, args: ['groupTemplate',] },],
    'itemTemplate': [{ type: core.ContentChild, args: ['itemTemplate',] },],
    'noRecordsTemplate': [{ type: core.ContentChild, args: ['noRecordsTemplate',] },],
    'actionFailureTemplate': [{ type: core.ContentChild, args: ['actionFailureTemplate',] },],
};
__decorate$2([
    ej2AngularBase.Template(),
    __metadata$2("design:type", Object)
], exports.AutoCompleteComponent.prototype, "footerTemplate", void 0);
__decorate$2([
    ej2AngularBase.Template(),
    __metadata$2("design:type", Object)
], exports.AutoCompleteComponent.prototype, "headerTemplate", void 0);
__decorate$2([
    ej2AngularBase.Template(),
    __metadata$2("design:type", Object)
], exports.AutoCompleteComponent.prototype, "groupTemplate", void 0);
__decorate$2([
    ej2AngularBase.Template(),
    __metadata$2("design:type", Object)
], exports.AutoCompleteComponent.prototype, "itemTemplate", void 0);
__decorate$2([
    ej2AngularBase.Template('No Records Found'),
    __metadata$2("design:type", Object)
], exports.AutoCompleteComponent.prototype, "noRecordsTemplate", void 0);
__decorate$2([
    ej2AngularBase.Template('The Request Failed'),
    __metadata$2("design:type", Object)
], exports.AutoCompleteComponent.prototype, "actionFailureTemplate", void 0);
exports.AutoCompleteComponent = AutoCompleteComponent_1 = __decorate$2([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase, ej2AngularBase.FormBase]),
    __metadata$2("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.AutoCompleteComponent);
var AutoCompleteComponent_1;
/**
 * NgModule definition for the AutoComplete component.
 */
var AutoCompleteModule = /** @class */ (function () {
    function AutoCompleteModule() {
    }
    return AutoCompleteModule;
}());
AutoCompleteModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.AutoCompleteComponent
                ],
                exports: [
                    exports.AutoCompleteComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
AutoCompleteModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the AutoComplete component with providers.
 */
var AutoCompleteAllModule = /** @class */ (function () {
    function AutoCompleteAllModule() {
    }
    return AutoCompleteAllModule;
}());
AutoCompleteAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, AutoCompleteModule],
                exports: [
                    AutoCompleteModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
AutoCompleteAllModule.ctorParameters = function () { return []; };
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
var inputs$3 = ['actionFailureTemplate', 'allowCustomValue', 'allowFiltering', 'changeOnBlur', 'closePopupOnSelect', 'cssClass', 'dataSource', 'delimiterChar', 'enableGroupCheckBox', 'enablePersistence', 'enableRtl', 'enableSelectionOrder', 'enabled', 'fields', 'filterBarPlaceholder', 'filterType', 'floatLabelType', 'footerTemplate', 'groupTemplate', 'headerTemplate', 'hideSelectedItem', 'htmlAttributes', 'ignoreAccent', 'ignoreCase', 'itemTemplate', 'locale', 'maximumSelectionLength', 'mode', 'noRecordsTemplate', 'openOnClick', 'placeholder', 'popupHeight', 'popupWidth', 'query', 'readonly', 'selectAllText', 'showClearButton', 'showDropDownIcon', 'showSelectAll', 'sortOrder', 'text', 'unSelectAllText', 'value', 'valueTemplate', 'width', 'zIndex'];
var outputs$3 = ['actionBegin', 'actionComplete', 'actionFailure', 'beforeOpen', 'blur', 'change', 'chipSelection', 'close', 'created', 'customValueSelection', 'dataBound', 'destroyed', 'filtering', 'focus', 'open', 'removed', 'removing', 'select', 'selectedAll', 'tagging', 'valueChange'];
var twoWays$3 = ['value'];
/**
 * The MultiSelect allows the user to pick a values from the predefined list of values.
 * ```html
 * <ejs-multiselect></ejs-multiselect>
 * ```
 */
exports.MultiSelectComponent = MultiSelectComponent_1 = /** @class */ (function (_super) {
    __extends(MultiSelectComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function MultiSelectComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.skipFromEvent = true;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        try {
            var mod = _this.injector.get('DropDownsCheckBoxSelection');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        _this.registerEvents(outputs$3);
        _this.addTwoWay.call(_this, twoWays$3);
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    MultiSelectComponent.prototype.registerOnChange = function (registerFunction) {
    };
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    MultiSelectComponent.prototype.registerOnTouched = function (registerFunction) {
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MultiSelectComponent.prototype.writeValue = function (value) {
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    MultiSelectComponent.prototype.setDisabledState = function (disabled) {
    };
    /**
     * @return {?}
     */
    MultiSelectComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    MultiSelectComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    MultiSelectComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    MultiSelectComponent.prototype.ngAfterContentChecked = function () {
    };
    return MultiSelectComponent;
}(ej2Dropdowns.MultiSelect));
exports.MultiSelectComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-multiselect',
                inputs: inputs$3,
                outputs: outputs$3,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return MultiSelectComponent_1; }),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
exports.MultiSelectComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.MultiSelectComponent.propDecorators = {
    'footerTemplate': [{ type: core.ContentChild, args: ['footerTemplate',] },],
    'headerTemplate': [{ type: core.ContentChild, args: ['headerTemplate',] },],
    'valueTemplate': [{ type: core.ContentChild, args: ['valueTemplate',] },],
    'itemTemplate': [{ type: core.ContentChild, args: ['itemTemplate',] },],
    'noRecordsTemplate': [{ type: core.ContentChild, args: ['noRecordsTemplate',] },],
    'actionFailureTemplate': [{ type: core.ContentChild, args: ['actionFailureTemplate',] },],
};
__decorate$3([
    ej2AngularBase.Template(),
    __metadata$3("design:type", Object)
], exports.MultiSelectComponent.prototype, "footerTemplate", void 0);
__decorate$3([
    ej2AngularBase.Template(),
    __metadata$3("design:type", Object)
], exports.MultiSelectComponent.prototype, "headerTemplate", void 0);
__decorate$3([
    ej2AngularBase.Template(),
    __metadata$3("design:type", Object)
], exports.MultiSelectComponent.prototype, "valueTemplate", void 0);
__decorate$3([
    ej2AngularBase.Template(),
    __metadata$3("design:type", Object)
], exports.MultiSelectComponent.prototype, "itemTemplate", void 0);
__decorate$3([
    ej2AngularBase.Template('No Records Found'),
    __metadata$3("design:type", Object)
], exports.MultiSelectComponent.prototype, "noRecordsTemplate", void 0);
__decorate$3([
    ej2AngularBase.Template('The Request Failed'),
    __metadata$3("design:type", Object)
], exports.MultiSelectComponent.prototype, "actionFailureTemplate", void 0);
exports.MultiSelectComponent = MultiSelectComponent_1 = __decorate$3([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase, ej2AngularBase.FormBase]),
    __metadata$3("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.MultiSelectComponent);
var MultiSelectComponent_1;
/**
 * NgModule definition for the MultiSelect component.
 */
var MultiSelectModule = /** @class */ (function () {
    function MultiSelectModule() {
    }
    return MultiSelectModule;
}());
MultiSelectModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.MultiSelectComponent
                ],
                exports: [
                    exports.MultiSelectComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
MultiSelectModule.ctorParameters = function () { return []; };
var CheckBoxSelectionService = { provide: 'DropDownsCheckBoxSelection', useValue: ej2Dropdowns.CheckBoxSelection };
/**
 * NgModule definition for the MultiSelect component with providers.
 */
var MultiSelectAllModule = /** @class */ (function () {
    function MultiSelectAllModule() {
    }
    return MultiSelectAllModule;
}());
MultiSelectAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, MultiSelectModule],
                exports: [
                    MultiSelectModule
                ],
                providers: [
                    CheckBoxSelectionService
                ]
            },] },
];
/**
 * @nocollapse
 */
MultiSelectAllModule.ctorParameters = function () { return []; };
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
var inputs$4 = ['actionFailureTemplate', 'allowDragAndDrop', 'allowFiltering', 'cssClass', 'dataSource', 'enablePersistence', 'enableRtl', 'enabled', 'fields', 'filterType', 'groupTemplate', 'height', 'ignoreAccent', 'ignoreCase', 'itemTemplate', 'locale', 'maximumSelectionLength', 'noRecordsTemplate', 'query', 'scope', 'selectionSettings', 'sortOrder', 'toolbarSettings', 'value', 'zIndex'];
var outputs$4 = ['focus', 'blur', 'actionBegin', 'actionComplete', 'actionFailure', 'beforeDrop', 'beforeItemRender', 'change', 'created', 'dataBound', 'destroyed', 'drag', 'dragStart', 'drop', 'filtering', 'select', 'valueChange'];
var twoWays$4 = ['value'];
/**
 * The ListBox allows the user to select values from the predefined list of values.
 * ```html
 * <ejs-listbox [dataSource]='data'></ejs-listbox>
 * ```
 */
exports.ListBoxComponent = ListBoxComponent_1 = /** @class */ (function (_super) {
    __extends(ListBoxComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function ListBoxComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        try {
            var mod = _this.injector.get('DropDownsCheckBoxSelection');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        _this.registerEvents(outputs$4);
        _this.addTwoWay.call(_this, twoWays$4);
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    ListBoxComponent.prototype.registerOnChange = function (registerFunction) {
    };
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    ListBoxComponent.prototype.registerOnTouched = function (registerFunction) {
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ListBoxComponent.prototype.writeValue = function (value) {
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    ListBoxComponent.prototype.setDisabledState = function (disabled) {
    };
    /**
     * @return {?}
     */
    ListBoxComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    ListBoxComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    ListBoxComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    ListBoxComponent.prototype.ngAfterContentChecked = function () {
    };
    return ListBoxComponent;
}(ej2Dropdowns.ListBox));
exports.ListBoxComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-listbox',
                inputs: inputs$4,
                outputs: outputs$4,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return ListBoxComponent_1; }),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
exports.ListBoxComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.ListBoxComponent.propDecorators = {
    'itemTemplate': [{ type: core.ContentChild, args: ['itemTemplate',] },],
};
__decorate$4([
    ej2AngularBase.Template(),
    __metadata$4("design:type", Object)
], exports.ListBoxComponent.prototype, "itemTemplate", void 0);
exports.ListBoxComponent = ListBoxComponent_1 = __decorate$4([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase, ej2AngularBase.FormBase]),
    __metadata$4("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.ListBoxComponent);
var ListBoxComponent_1;
/**
 * NgModule definition for the ListBox component.
 */
var ListBoxModule = /** @class */ (function () {
    function ListBoxModule() {
    }
    return ListBoxModule;
}());
ListBoxModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.ListBoxComponent
                ],
                exports: [
                    exports.ListBoxComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
ListBoxModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the ListBox component with providers.
 */
var ListBoxAllModule = /** @class */ (function () {
    function ListBoxAllModule() {
    }
    return ListBoxAllModule;
}());
ListBoxAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, ListBoxModule],
                exports: [
                    ListBoxModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
ListBoxAllModule.ctorParameters = function () { return []; };

exports.DropDownListModule = DropDownListModule;
exports.DropDownListAllModule = DropDownListAllModule;
exports.ComboBoxModule = ComboBoxModule;
exports.ComboBoxAllModule = ComboBoxAllModule;
exports.AutoCompleteModule = AutoCompleteModule;
exports.AutoCompleteAllModule = AutoCompleteAllModule;
exports.MultiSelectModule = MultiSelectModule;
exports.MultiSelectAllModule = MultiSelectAllModule;
exports.CheckBoxSelectionService = CheckBoxSelectionService;
exports.ListBoxModule = ListBoxModule;
exports.ListBoxAllModule = ListBoxAllModule;
exports.ɵe = inputs$2;
exports.ɵf = outputs$2;
exports.ɵc = inputs$1;
exports.ɵd = outputs$1;
exports.ɵa = inputs;
exports.ɵb = outputs;
exports.ɵi = inputs$4;
exports.ɵj = outputs$4;
exports.ɵg = inputs$3;
exports.ɵh = outputs$3;
exports.incrementalSearch = ej2Dropdowns.incrementalSearch;
exports.Search = ej2Dropdowns.Search;
exports.highlightSearch = ej2Dropdowns.highlightSearch;
exports.revertHighlightSearch = ej2Dropdowns.revertHighlightSearch;
exports.FieldSettings = ej2Dropdowns.FieldSettings;
exports.dropDownBaseClasses = ej2Dropdowns.dropDownBaseClasses;
exports.DropDownBase = ej2Dropdowns.DropDownBase;
exports.dropDownListClasses = ej2Dropdowns.dropDownListClasses;
exports.DropDownList = ej2Dropdowns.DropDownList;
exports.ComboBox = ej2Dropdowns.ComboBox;
exports.AutoComplete = ej2Dropdowns.AutoComplete;
exports.MultiSelect = ej2Dropdowns.MultiSelect;
exports.CheckBoxSelection = ej2Dropdowns.CheckBoxSelection;
exports.SelectionSettings = ej2Dropdowns.SelectionSettings;
exports.ToolbarSettings = ej2Dropdowns.ToolbarSettings;
exports.ListBox = ej2Dropdowns.ListBox;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ej2-angular-dropdowns.umd.js.map
