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
import { AutoComplete, CheckBoxSelection, ComboBox, DropDownList, ListBox, MultiSelect } from '@syncfusion/ej2-dropdowns';
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
var inputs = ['actionFailureTemplate', 'allowFiltering', 'cssClass', 'dataSource', 'enablePersistence', 'enableRtl', 'enabled', 'fields', 'filterBarPlaceholder', 'filterType', 'floatLabelType', 'footerTemplate', 'groupTemplate', 'headerTemplate', 'htmlAttributes', 'ignoreAccent', 'ignoreCase', 'index', 'itemTemplate', 'locale', 'noRecordsTemplate', 'placeholder', 'popupHeight', 'popupWidth', 'query', 'readonly', 'showClearButton', 'sortOrder', 'text', 'value', 'valueTemplate', 'width', 'zIndex'];
var outputs = ['actionBegin', 'actionComplete', 'actionFailure', 'beforeOpen', 'blur', 'change', 'close', 'created', 'dataBound', 'destroyed', 'filtering', 'focus', 'open', 'select', 'valueChange'];
var twoWays = ['value'];
/**
 * The DropDownList component contains a list of predefined values, from which the user can choose a single value.
 * ```html
 * <ejs-dropdownlist></ejs-dropdownlist>
 * ```
 */
var DropDownListComponent = DropDownListComponent_1 = /** @class */ (function (_super) {
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
        setValue('currentInstance', _this, _this.viewContainerRef);
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
}(DropDownList));
DropDownListComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-dropdownlist',
                inputs: inputs,
                outputs: outputs,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return DropDownListComponent_1; }),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
DropDownListComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
DropDownListComponent.propDecorators = {
    'footerTemplate': [{ type: ContentChild, args: ['footerTemplate',] },],
    'headerTemplate': [{ type: ContentChild, args: ['headerTemplate',] },],
    'valueTemplate': [{ type: ContentChild, args: ['valueTemplate',] },],
    'groupTemplate': [{ type: ContentChild, args: ['groupTemplate',] },],
    'itemTemplate': [{ type: ContentChild, args: ['itemTemplate',] },],
    'noRecordsTemplate': [{ type: ContentChild, args: ['noRecordsTemplate',] },],
    'actionFailureTemplate': [{ type: ContentChild, args: ['actionFailureTemplate',] },],
};
__decorate([
    Template(),
    __metadata("design:type", Object)
], DropDownListComponent.prototype, "footerTemplate", void 0);
__decorate([
    Template(),
    __metadata("design:type", Object)
], DropDownListComponent.prototype, "headerTemplate", void 0);
__decorate([
    Template(),
    __metadata("design:type", Object)
], DropDownListComponent.prototype, "valueTemplate", void 0);
__decorate([
    Template(),
    __metadata("design:type", Object)
], DropDownListComponent.prototype, "groupTemplate", void 0);
__decorate([
    Template(),
    __metadata("design:type", Object)
], DropDownListComponent.prototype, "itemTemplate", void 0);
__decorate([
    Template('No Records Found'),
    __metadata("design:type", Object)
], DropDownListComponent.prototype, "noRecordsTemplate", void 0);
__decorate([
    Template('The Request Failed'),
    __metadata("design:type", Object)
], DropDownListComponent.prototype, "actionFailureTemplate", void 0);
DropDownListComponent = DropDownListComponent_1 = __decorate([
    ComponentMixins([ComponentBase, FormBase]),
    __metadata("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], DropDownListComponent);
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
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    DropDownListComponent
                ],
                exports: [
                    DropDownListComponent
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
    { type: NgModule, args: [{
                imports: [CommonModule, DropDownListModule],
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
var ComboBoxComponent = ComboBoxComponent_1 = /** @class */ (function (_super) {
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
        setValue('currentInstance', _this, _this.viewContainerRef);
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
}(ComboBox));
ComboBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-combobox',
                inputs: inputs$1,
                outputs: outputs$1,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return ComboBoxComponent_1; }),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
ComboBoxComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
ComboBoxComponent.propDecorators = {
    'footerTemplate': [{ type: ContentChild, args: ['footerTemplate',] },],
    'headerTemplate': [{ type: ContentChild, args: ['headerTemplate',] },],
    'groupTemplate': [{ type: ContentChild, args: ['groupTemplate',] },],
    'itemTemplate': [{ type: ContentChild, args: ['itemTemplate',] },],
    'noRecordsTemplate': [{ type: ContentChild, args: ['noRecordsTemplate',] },],
    'actionFailureTemplate': [{ type: ContentChild, args: ['actionFailureTemplate',] },],
};
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], ComboBoxComponent.prototype, "footerTemplate", void 0);
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], ComboBoxComponent.prototype, "headerTemplate", void 0);
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], ComboBoxComponent.prototype, "groupTemplate", void 0);
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], ComboBoxComponent.prototype, "itemTemplate", void 0);
__decorate$1([
    Template('No Records Found'),
    __metadata$1("design:type", Object)
], ComboBoxComponent.prototype, "noRecordsTemplate", void 0);
__decorate$1([
    Template('The Request Failed'),
    __metadata$1("design:type", Object)
], ComboBoxComponent.prototype, "actionFailureTemplate", void 0);
ComboBoxComponent = ComboBoxComponent_1 = __decorate$1([
    ComponentMixins([ComponentBase, FormBase]),
    __metadata$1("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], ComboBoxComponent);
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
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    ComboBoxComponent
                ],
                exports: [
                    ComboBoxComponent
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
    { type: NgModule, args: [{
                imports: [CommonModule, ComboBoxModule],
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
var AutoCompleteComponent = AutoCompleteComponent_1 = /** @class */ (function (_super) {
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
        setValue('currentInstance', _this, _this.viewContainerRef);
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
}(AutoComplete));
AutoCompleteComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-autocomplete',
                inputs: inputs$2,
                outputs: outputs$2,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return AutoCompleteComponent_1; }),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
AutoCompleteComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
AutoCompleteComponent.propDecorators = {
    'footerTemplate': [{ type: ContentChild, args: ['footerTemplate',] },],
    'headerTemplate': [{ type: ContentChild, args: ['headerTemplate',] },],
    'groupTemplate': [{ type: ContentChild, args: ['groupTemplate',] },],
    'itemTemplate': [{ type: ContentChild, args: ['itemTemplate',] },],
    'noRecordsTemplate': [{ type: ContentChild, args: ['noRecordsTemplate',] },],
    'actionFailureTemplate': [{ type: ContentChild, args: ['actionFailureTemplate',] },],
};
__decorate$2([
    Template(),
    __metadata$2("design:type", Object)
], AutoCompleteComponent.prototype, "footerTemplate", void 0);
__decorate$2([
    Template(),
    __metadata$2("design:type", Object)
], AutoCompleteComponent.prototype, "headerTemplate", void 0);
__decorate$2([
    Template(),
    __metadata$2("design:type", Object)
], AutoCompleteComponent.prototype, "groupTemplate", void 0);
__decorate$2([
    Template(),
    __metadata$2("design:type", Object)
], AutoCompleteComponent.prototype, "itemTemplate", void 0);
__decorate$2([
    Template('No Records Found'),
    __metadata$2("design:type", Object)
], AutoCompleteComponent.prototype, "noRecordsTemplate", void 0);
__decorate$2([
    Template('The Request Failed'),
    __metadata$2("design:type", Object)
], AutoCompleteComponent.prototype, "actionFailureTemplate", void 0);
AutoCompleteComponent = AutoCompleteComponent_1 = __decorate$2([
    ComponentMixins([ComponentBase, FormBase]),
    __metadata$2("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], AutoCompleteComponent);
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
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    AutoCompleteComponent
                ],
                exports: [
                    AutoCompleteComponent
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
    { type: NgModule, args: [{
                imports: [CommonModule, AutoCompleteModule],
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
var MultiSelectComponent = MultiSelectComponent_1 = /** @class */ (function (_super) {
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
        setValue('currentInstance', _this, _this.viewContainerRef);
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
}(MultiSelect));
MultiSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-multiselect',
                inputs: inputs$3,
                outputs: outputs$3,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return MultiSelectComponent_1; }),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
MultiSelectComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
MultiSelectComponent.propDecorators = {
    'footerTemplate': [{ type: ContentChild, args: ['footerTemplate',] },],
    'headerTemplate': [{ type: ContentChild, args: ['headerTemplate',] },],
    'valueTemplate': [{ type: ContentChild, args: ['valueTemplate',] },],
    'itemTemplate': [{ type: ContentChild, args: ['itemTemplate',] },],
    'noRecordsTemplate': [{ type: ContentChild, args: ['noRecordsTemplate',] },],
    'actionFailureTemplate': [{ type: ContentChild, args: ['actionFailureTemplate',] },],
};
__decorate$3([
    Template(),
    __metadata$3("design:type", Object)
], MultiSelectComponent.prototype, "footerTemplate", void 0);
__decorate$3([
    Template(),
    __metadata$3("design:type", Object)
], MultiSelectComponent.prototype, "headerTemplate", void 0);
__decorate$3([
    Template(),
    __metadata$3("design:type", Object)
], MultiSelectComponent.prototype, "valueTemplate", void 0);
__decorate$3([
    Template(),
    __metadata$3("design:type", Object)
], MultiSelectComponent.prototype, "itemTemplate", void 0);
__decorate$3([
    Template('No Records Found'),
    __metadata$3("design:type", Object)
], MultiSelectComponent.prototype, "noRecordsTemplate", void 0);
__decorate$3([
    Template('The Request Failed'),
    __metadata$3("design:type", Object)
], MultiSelectComponent.prototype, "actionFailureTemplate", void 0);
MultiSelectComponent = MultiSelectComponent_1 = __decorate$3([
    ComponentMixins([ComponentBase, FormBase]),
    __metadata$3("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], MultiSelectComponent);
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
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    MultiSelectComponent
                ],
                exports: [
                    MultiSelectComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
MultiSelectModule.ctorParameters = function () { return []; };
var CheckBoxSelectionService = { provide: 'DropDownsCheckBoxSelection', useValue: CheckBoxSelection };
/**
 * NgModule definition for the MultiSelect component with providers.
 */
var MultiSelectAllModule = /** @class */ (function () {
    function MultiSelectAllModule() {
    }
    return MultiSelectAllModule;
}());
MultiSelectAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, MultiSelectModule],
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
var outputs$4 = ['focus', 'blur', 'actionBegin', 'actionComplete', 'actionFailure', 'beforeItemRender', 'change', 'created', 'dataBound', 'destroyed', 'drag', 'dragStart', 'drop', 'filtering', 'select', 'valueChange'];
var twoWays$4 = ['value'];
/**
 * The ListBox allows the user to select values from the predefined list of values.
 * ```html
 * <ejs-listbox [dataSource]='data'></ejs-listbox>
 * ```
 */
var ListBoxComponent = ListBoxComponent_1 = /** @class */ (function (_super) {
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
        setValue('currentInstance', _this, _this.viewContainerRef);
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
}(ListBox));
ListBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-listbox',
                inputs: inputs$4,
                outputs: outputs$4,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return ListBoxComponent_1; }),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
ListBoxComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
ListBoxComponent.propDecorators = {
    'itemTemplate': [{ type: ContentChild, args: ['itemTemplate',] },],
};
__decorate$4([
    Template(),
    __metadata$4("design:type", Object)
], ListBoxComponent.prototype, "itemTemplate", void 0);
ListBoxComponent = ListBoxComponent_1 = __decorate$4([
    ComponentMixins([ComponentBase, FormBase]),
    __metadata$4("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], ListBoxComponent);
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
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    ListBoxComponent
                ],
                exports: [
                    ListBoxComponent
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
    { type: NgModule, args: [{
                imports: [CommonModule, ListBoxModule],
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
/**
 * Generated bundle index. Do not edit.
 */
export { DropDownListComponent, DropDownListModule, DropDownListAllModule, ComboBoxComponent, ComboBoxModule, ComboBoxAllModule, AutoCompleteComponent, AutoCompleteModule, AutoCompleteAllModule, MultiSelectComponent, MultiSelectModule, MultiSelectAllModule, CheckBoxSelectionService, ListBoxComponent, ListBoxModule, ListBoxAllModule, inputs$2 as ɵe, outputs$2 as ɵf, inputs$1 as ɵc, outputs$1 as ɵd, inputs as ɵa, outputs as ɵb, inputs$4 as ɵi, outputs$4 as ɵj, inputs$3 as ɵg, outputs$3 as ɵh };
export { incrementalSearch, Search, highlightSearch, revertHighlightSearch, FieldSettings, dropDownBaseClasses, DropDownBase, dropDownListClasses, DropDownList, ComboBox, AutoComplete, MultiSelect, CheckBoxSelection, SelectionSettings, ToolbarSettings, ListBox } from '@syncfusion/ej2-dropdowns';
//# sourceMappingURL=ej2-angular-dropdowns.es5.js.map
