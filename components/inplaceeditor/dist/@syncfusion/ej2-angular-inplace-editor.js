import { ChangeDetectionStrategy, Component, ContentChild, ElementRef, Injector, NgModule, Renderer2, ViewContainerRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ComponentBase, ComponentMixins, FormBase, Template, setValue } from '@syncfusion/ej2-angular-base';
import { AutoComplete, ColorPicker, ComboBox, DateRangePicker, InPlaceEditor, MultiSelect, Rte, Slider, TimePicker } from '@syncfusion/ej2-inplace-editor';
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
const inputs = ['actionOnBlur', 'adaptor', 'cancelButton', 'cssClass', 'disabled', 'editableOn', 'emptyText', 'enableEditMode', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'locale', 'mode', 'model', 'name', 'popupSettings', 'primaryKey', 'saveButton', 'showButtons', 'submitOnEnter', 'template', 'textOption', 'type', 'url', 'validationRules', 'value'];
const outputs = ['focus', 'blur', 'actionBegin', 'actionFailure', 'actionSuccess', 'beforeSanitizeHtml', 'beginEdit', 'created', 'destroyed', 'validating'];
const twoWays = [''];
/**
 * `ejs-inplaceeditor` represents the Angular InPlaceEditor Component.
 * ```html
 * <ejs-inplaceeditor></ejs-inplaceeditor>
 * ```
 */
let InPlaceEditorComponent = InPlaceEditorComponent_1 = class InPlaceEditorComponent extends InPlaceEditor {
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
            let mod = this.injector.get('InPlace-EditorAutoComplete');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            let mod = this.injector.get('InPlace-EditorColorPicker');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            let mod = this.injector.get('InPlace-EditorComboBox');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            let mod = this.injector.get('InPlace-EditorDateRangePicker');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            let mod = this.injector.get('InPlace-EditorMultiSelect');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            let mod = this.injector.get('InPlace-EditorRte');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        try {
            let mod = this.injector.get('InPlace-EditorSlider');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_g) { }
        try {
            let mod = this.injector.get('InPlace-EditorTimePicker');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_h) { }
        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
        this.formContext = new FormBase();
        this.formCompContext = new ComponentBase();
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
        this.formCompContext.ngOnInit(this);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.formContext.ngAfterViewInit(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.formCompContext.ngOnDestroy(this);
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        this.formCompContext.ngAfterContentChecked(this);
    }
};
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
                        useExisting: forwardRef(() => InPlaceEditorComponent_1),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
InPlaceEditorComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
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
class InPlaceEditorModule {
}
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
InPlaceEditorModule.ctorParameters = () => [];

const AutoCompleteService = { provide: 'InPlace-EditorAutoComplete', useValue: AutoComplete };
const ColorPickerService = { provide: 'InPlace-EditorColorPicker', useValue: ColorPicker };
const ComboBoxService = { provide: 'InPlace-EditorComboBox', useValue: ComboBox };
const DateRangePickerService = { provide: 'InPlace-EditorDateRangePicker', useValue: DateRangePicker };
const MultiSelectService = { provide: 'InPlace-EditorMultiSelect', useValue: MultiSelect };
const RteService = { provide: 'InPlace-EditorRte', useValue: Rte };
const SliderService = { provide: 'InPlace-EditorSlider', useValue: Slider };
const TimePickerService = { provide: 'InPlace-EditorTimePicker', useValue: TimePicker };
/**
 * NgModule definition for the InPlaceEditor component with providers.
 */
class InPlaceEditorAllModule {
}
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
InPlaceEditorAllModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { InPlaceEditorComponent, InPlaceEditorModule, InPlaceEditorAllModule, AutoCompleteService, ColorPickerService, ComboBoxService, DateRangePickerService, MultiSelectService, RteService, SliderService, TimePickerService, inputs as ɵa, outputs as ɵb };
export { parseValue, getCompValue, render, update, destroy, setFocus, accessValue, destroyModules, showPopup, PopupSettings, modulesList, localeConstant, ROOT, ROOT_TIP, VALUE_WRAPPER, VALUE, OVERLAY_ICON, TIP_TITLE, TITLE, INLINE, POPUP, WRAPPER, LOADING, FORM, CTRL_GROUP, INPUT, BUTTONS, EDITABLE_ERROR, ELEMENTS, OPEN, BTN_SAVE, BTN_CANCEL, RTE_SPIN_WRAP, CTRL_OVERLAY, DISABLE, ICONS, PRIMARY, SHOW, HIDE, RTL, ERROR, LOAD, InPlaceEditor, Base, AutoComplete, ColorPicker, ComboBox, DateRangePicker, MultiSelect, Rte, Slider, TimePicker } from '@syncfusion/ej2-inplace-editor';
//# sourceMappingURL=ej2-angular-inplace-editor.js.map
