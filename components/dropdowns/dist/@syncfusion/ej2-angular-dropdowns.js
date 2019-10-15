import { ChangeDetectionStrategy, Component, ContentChild, ElementRef, Injector, NgModule, Renderer2, ViewContainerRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ComponentBase, ComponentMixins, FormBase, Template, setValue } from '@syncfusion/ej2-angular-base';
import { AutoComplete, CheckBoxSelection, ComboBox, DropDownList, ListBox, MultiSelect } from '@syncfusion/ej2-dropdowns';
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
const inputs = ['actionFailureTemplate', 'allowFiltering', 'cssClass', 'dataSource', 'enablePersistence', 'enableRtl', 'enabled', 'fields', 'filterBarPlaceholder', 'filterType', 'floatLabelType', 'footerTemplate', 'groupTemplate', 'headerTemplate', 'htmlAttributes', 'ignoreAccent', 'ignoreCase', 'index', 'itemTemplate', 'locale', 'noRecordsTemplate', 'placeholder', 'popupHeight', 'popupWidth', 'query', 'readonly', 'showClearButton', 'sortOrder', 'text', 'value', 'valueTemplate', 'width', 'zIndex'];
const outputs = ['actionBegin', 'actionComplete', 'actionFailure', 'beforeOpen', 'blur', 'change', 'close', 'created', 'dataBound', 'destroyed', 'filtering', 'focus', 'open', 'select', 'valueChange'];
const twoWays = ['value'];
/**
 * The DropDownList component contains a list of predefined values, from which the user can choose a single value.
 * ```html
 * <ejs-dropdownlist></ejs-dropdownlist>
 * ```
 */
let DropDownListComponent = DropDownListComponent_1 = class DropDownListComponent extends DropDownList {
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
        this.skipFromEvent = true;
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
    }
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    registerOnChange(registerFunction) {
    }
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    registerOnTouched(registerFunction) {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    setDisabledState(disabled) {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
    }
};
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
                        useExisting: forwardRef(() => DropDownListComponent_1),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
DropDownListComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
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
class DropDownListModule {
}
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
DropDownListModule.ctorParameters = () => [];

/**
 * NgModule definition for the DropDownList component with providers.
 */
class DropDownListAllModule {
}
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
DropDownListAllModule.ctorParameters = () => [];

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs$1 = ['actionFailureTemplate', 'allowCustom', 'allowFiltering', 'autofill', 'cssClass', 'dataSource', 'enablePersistence', 'enableRtl', 'enabled', 'fields', 'filterBarPlaceholder', 'filterType', 'floatLabelType', 'footerTemplate', 'groupTemplate', 'headerTemplate', 'htmlAttributes', 'ignoreAccent', 'ignoreCase', 'index', 'itemTemplate', 'locale', 'noRecordsTemplate', 'placeholder', 'popupHeight', 'popupWidth', 'query', 'readonly', 'showClearButton', 'sortOrder', 'text', 'value', 'valueTemplate', 'width', 'zIndex'];
const outputs$1 = ['actionBegin', 'actionComplete', 'actionFailure', 'beforeOpen', 'blur', 'change', 'close', 'created', 'customValueSpecifier', 'dataBound', 'destroyed', 'filtering', 'focus', 'open', 'select', 'valueChange'];
const twoWays$1 = ['value'];
/**
 * The ComboBox component allows the user to type a value or choose an option from the list of predefined options.
 * ```html
 * <ejs-combobox></ejs-combobox>
 * ```
 */
let ComboBoxComponent = ComboBoxComponent_1 = class ComboBoxComponent extends ComboBox {
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
        this.skipFromEvent = true;
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        this.registerEvents(outputs$1);
        this.addTwoWay.call(this, twoWays$1);
        setValue('currentInstance', this, this.viewContainerRef);
    }
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    registerOnChange(registerFunction) {
    }
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    registerOnTouched(registerFunction) {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    setDisabledState(disabled) {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
    }
};
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
                        useExisting: forwardRef(() => ComboBoxComponent_1),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
ComboBoxComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
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
class ComboBoxModule {
}
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
ComboBoxModule.ctorParameters = () => [];

/**
 * NgModule definition for the ComboBox component with providers.
 */
class ComboBoxAllModule {
}
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
ComboBoxAllModule.ctorParameters = () => [];

var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs$2 = ['actionFailureTemplate', 'allowCustom', 'allowFiltering', 'autofill', 'cssClass', 'dataSource', 'enablePersistence', 'enableRtl', 'enabled', 'fields', 'filterBarPlaceholder', 'filterType', 'floatLabelType', 'footerTemplate', 'groupTemplate', 'headerTemplate', 'highlight', 'htmlAttributes', 'ignoreAccent', 'ignoreCase', 'index', 'itemTemplate', 'locale', 'minLength', 'noRecordsTemplate', 'placeholder', 'popupHeight', 'popupWidth', 'query', 'readonly', 'showClearButton', 'showPopupButton', 'sortOrder', 'suggestionCount', 'text', 'value', 'valueTemplate', 'width', 'zIndex'];
const outputs$2 = ['actionBegin', 'actionComplete', 'actionFailure', 'beforeOpen', 'blur', 'change', 'close', 'created', 'customValueSpecifier', 'dataBound', 'destroyed', 'filtering', 'focus', 'open', 'select', 'valueChange'];
const twoWays$2 = ['value'];
/**
 * The AutoComplete component provides the matched suggestion list when type into the input, from which the user can select one.
 * ```html
 * <ejs-autocomplete></ejs-autocomplete>
 * ```
 */
let AutoCompleteComponent = AutoCompleteComponent_1 = class AutoCompleteComponent extends AutoComplete {
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
        this.skipFromEvent = true;
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        this.registerEvents(outputs$2);
        this.addTwoWay.call(this, twoWays$2);
        setValue('currentInstance', this, this.viewContainerRef);
    }
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    registerOnChange(registerFunction) {
    }
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    registerOnTouched(registerFunction) {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    setDisabledState(disabled) {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
    }
};
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
                        useExisting: forwardRef(() => AutoCompleteComponent_1),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
AutoCompleteComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
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
class AutoCompleteModule {
}
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
AutoCompleteModule.ctorParameters = () => [];

/**
 * NgModule definition for the AutoComplete component with providers.
 */
class AutoCompleteAllModule {
}
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
AutoCompleteAllModule.ctorParameters = () => [];

var __decorate$3 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs$3 = ['actionFailureTemplate', 'allowCustomValue', 'allowFiltering', 'changeOnBlur', 'closePopupOnSelect', 'cssClass', 'dataSource', 'delimiterChar', 'enableGroupCheckBox', 'enablePersistence', 'enableRtl', 'enableSelectionOrder', 'enabled', 'fields', 'filterBarPlaceholder', 'filterType', 'floatLabelType', 'footerTemplate', 'groupTemplate', 'headerTemplate', 'hideSelectedItem', 'htmlAttributes', 'ignoreAccent', 'ignoreCase', 'itemTemplate', 'locale', 'maximumSelectionLength', 'mode', 'noRecordsTemplate', 'openOnClick', 'placeholder', 'popupHeight', 'popupWidth', 'query', 'readonly', 'selectAllText', 'showClearButton', 'showDropDownIcon', 'showSelectAll', 'sortOrder', 'text', 'unSelectAllText', 'value', 'valueTemplate', 'width', 'zIndex'];
const outputs$3 = ['actionBegin', 'actionComplete', 'actionFailure', 'beforeOpen', 'blur', 'change', 'chipSelection', 'close', 'created', 'customValueSelection', 'dataBound', 'destroyed', 'filtering', 'focus', 'open', 'removed', 'removing', 'select', 'selectedAll', 'tagging', 'valueChange'];
const twoWays$3 = ['value'];
/**
 * The MultiSelect allows the user to pick a values from the predefined list of values.
 * ```html
 * <ejs-multiselect></ejs-multiselect>
 * ```
 */
let MultiSelectComponent = MultiSelectComponent_1 = class MultiSelectComponent extends MultiSelect {
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
        this.skipFromEvent = true;
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('DropDownsCheckBoxSelection');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        this.registerEvents(outputs$3);
        this.addTwoWay.call(this, twoWays$3);
        setValue('currentInstance', this, this.viewContainerRef);
    }
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    registerOnChange(registerFunction) {
    }
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    registerOnTouched(registerFunction) {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    setDisabledState(disabled) {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
    }
};
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
                        useExisting: forwardRef(() => MultiSelectComponent_1),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
MultiSelectComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
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
class MultiSelectModule {
}
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
MultiSelectModule.ctorParameters = () => [];

const CheckBoxSelectionService = { provide: 'DropDownsCheckBoxSelection', useValue: CheckBoxSelection };
/**
 * NgModule definition for the MultiSelect component with providers.
 */
class MultiSelectAllModule {
}
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
MultiSelectAllModule.ctorParameters = () => [];

var __decorate$4 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$4 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs$4 = ['actionFailureTemplate', 'allowDragAndDrop', 'allowFiltering', 'cssClass', 'dataSource', 'enablePersistence', 'enableRtl', 'enabled', 'fields', 'filterType', 'groupTemplate', 'height', 'ignoreAccent', 'ignoreCase', 'itemTemplate', 'locale', 'maximumSelectionLength', 'noRecordsTemplate', 'query', 'scope', 'selectionSettings', 'sortOrder', 'toolbarSettings', 'value', 'zIndex'];
const outputs$4 = ['focus', 'blur', 'actionBegin', 'actionComplete', 'actionFailure', 'beforeItemRender', 'change', 'created', 'dataBound', 'destroyed', 'drag', 'dragStart', 'drop', 'filtering', 'select', 'valueChange'];
const twoWays$4 = ['value'];
/**
 * The ListBox allows the user to select values from the predefined list of values.
 * ```html
 * <ejs-listbox [dataSource]='data'></ejs-listbox>
 * ```
 */
let ListBoxComponent = ListBoxComponent_1 = class ListBoxComponent extends ListBox {
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
        try {
            let mod = this.injector.get('DropDownsCheckBoxSelection');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        this.registerEvents(outputs$4);
        this.addTwoWay.call(this, twoWays$4);
        setValue('currentInstance', this, this.viewContainerRef);
    }
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    registerOnChange(registerFunction) {
    }
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    registerOnTouched(registerFunction) {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    setDisabledState(disabled) {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
    }
};
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
                        useExisting: forwardRef(() => ListBoxComponent_1),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
ListBoxComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
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
class ListBoxModule {
}
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
ListBoxModule.ctorParameters = () => [];

/**
 * NgModule definition for the ListBox component with providers.
 */
class ListBoxAllModule {
}
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
ListBoxAllModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { DropDownListComponent, DropDownListModule, DropDownListAllModule, ComboBoxComponent, ComboBoxModule, ComboBoxAllModule, AutoCompleteComponent, AutoCompleteModule, AutoCompleteAllModule, MultiSelectComponent, MultiSelectModule, MultiSelectAllModule, CheckBoxSelectionService, ListBoxComponent, ListBoxModule, ListBoxAllModule, inputs$2 as ɵe, outputs$2 as ɵf, inputs$1 as ɵc, outputs$1 as ɵd, inputs as ɵa, outputs as ɵb, inputs$4 as ɵi, outputs$4 as ɵj, inputs$3 as ɵg, outputs$3 as ɵh };
export { incrementalSearch, Search, highlightSearch, revertHighlightSearch, FieldSettings, dropDownBaseClasses, DropDownBase, dropDownListClasses, DropDownList, ComboBox, AutoComplete, MultiSelect, CheckBoxSelection, SelectionSettings, ToolbarSettings, ListBox } from '@syncfusion/ej2-dropdowns';
//# sourceMappingURL=ej2-angular-dropdowns.js.map
