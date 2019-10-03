import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, Directive, ElementRef, Injector, NgModule, Renderer2, ViewContainerRef, forwardRef } from '@angular/core';
import { ArrayBase, ComplexBase, ComponentBase, ComponentMixins, FormBase, setValue } from '@syncfusion/ej2-angular-base';
import { Button, CheckBox, ChipList, RadioButton, Switch } from '@syncfusion/ej2-buttons';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs = ['content', 'cssClass', 'disabled', 'enablePersistence', 'enableRtl', 'iconCss', 'iconPosition', 'isPrimary', 'isToggle', 'locale'];
const outputs = ['created'];
const twoWays = [];
/**
 * Represents the Angular Button Component.
 * ```html
 * <button ejs-button>Button</button>
 * ```
 */
let ButtonComponent = class ButtonComponent extends Button {
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
        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
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
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: '[ejs-button]',
                inputs: inputs,
                outputs: outputs,
                template: `<ng-content ></ng-content>`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
ButtonComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
ButtonComponent = __decorate([
    ComponentMixins([ComponentBase]),
    __metadata("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], ButtonComponent);

/**
 * NgModule definition for the Button component.
 */
class ButtonModule {
}
ButtonModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    ButtonComponent
                ],
                exports: [
                    ButtonComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
ButtonModule.ctorParameters = () => [];

/**
 * NgModule definition for the Button component with providers.
 */
class ButtonAllModule {
}
ButtonAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, ButtonModule],
                exports: [
                    ButtonModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
ButtonAllModule.ctorParameters = () => [];

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs$1 = ['checked', 'cssClass', 'disabled', 'enablePersistence', 'enableRtl', 'htmlAttributes', 'indeterminate', 'label', 'labelPosition', 'locale', 'name', 'value'];
const outputs$1 = ['focus', 'blur', 'change', 'created', 'checkedChange', 'indeterminateChange'];
const twoWays$1 = ['checked', 'indeterminate'];
/**
 * Represents the Angular CheckBox Component.
 * ```html
 * <ejs-checkbox label='Default'></ejs-checkbox>
 * ```
 */
let CheckBoxComponent = CheckBoxComponent_1 = class CheckBoxComponent extends CheckBox {
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
CheckBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-checkbox',
                inputs: inputs$1,
                outputs: outputs$1,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => CheckBoxComponent_1),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
CheckBoxComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
CheckBoxComponent = CheckBoxComponent_1 = __decorate$1([
    ComponentMixins([ComponentBase, FormBase]),
    __metadata$1("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], CheckBoxComponent);
var CheckBoxComponent_1;

/**
 * NgModule definition for the CheckBox component.
 */
class CheckBoxModule {
}
CheckBoxModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    CheckBoxComponent
                ],
                exports: [
                    CheckBoxComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
CheckBoxModule.ctorParameters = () => [];

/**
 * NgModule definition for the CheckBox component with providers.
 */
class CheckBoxAllModule {
}
CheckBoxAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, CheckBoxModule],
                exports: [
                    CheckBoxModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
CheckBoxAllModule.ctorParameters = () => [];

var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs$2 = ['checked', 'cssClass', 'disabled', 'enablePersistence', 'enableRtl', 'label', 'labelPosition', 'locale', 'name', 'value'];
const outputs$2 = ['focus', 'blur', 'change', 'created', 'checkedChange'];
const twoWays$2 = ['checked'];
/**
 * Represents the Angular RadioButton Component.
 * ```html
 * <ejs-radiobutton label='Default'></ejs-radiobutton>
 * ```
 */
let RadioButtonComponent = RadioButtonComponent_1 = class RadioButtonComponent extends RadioButton {
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
RadioButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-radiobutton',
                inputs: inputs$2,
                outputs: outputs$2,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => RadioButtonComponent_1),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
RadioButtonComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
RadioButtonComponent = RadioButtonComponent_1 = __decorate$2([
    ComponentMixins([ComponentBase, FormBase]),
    __metadata$2("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], RadioButtonComponent);
var RadioButtonComponent_1;

/**
 * NgModule definition for the RadioButton component.
 */
class RadioButtonModule {
}
RadioButtonModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    RadioButtonComponent
                ],
                exports: [
                    RadioButtonComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
RadioButtonModule.ctorParameters = () => [];

/**
 * NgModule definition for the RadioButton component with providers.
 */
class RadioButtonAllModule {
}
RadioButtonAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, RadioButtonModule],
                exports: [
                    RadioButtonModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
RadioButtonAllModule.ctorParameters = () => [];

var __decorate$3 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs$3 = ['checked', 'cssClass', 'disabled', 'enablePersistence', 'enableRtl', 'locale', 'name', 'offLabel', 'onLabel', 'value'];
const outputs$3 = ['focus', 'blur', 'change', 'created', 'checkedChange'];
const twoWays$3 = ['checked'];
/**
 * Represents the Angular Switch Component.
 * ```html
 * <ejs-switch></ejs-switch>
 * ```
 */
let SwitchComponent = SwitchComponent_1 = class SwitchComponent extends Switch {
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
SwitchComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-switch',
                inputs: inputs$3,
                outputs: outputs$3,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => SwitchComponent_1),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
SwitchComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
SwitchComponent = SwitchComponent_1 = __decorate$3([
    ComponentMixins([ComponentBase, FormBase]),
    __metadata$3("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], SwitchComponent);
var SwitchComponent_1;

/**
 * NgModule definition for the Switch component.
 */
class SwitchModule {
}
SwitchModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    SwitchComponent
                ],
                exports: [
                    SwitchComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
SwitchModule.ctorParameters = () => [];

/**
 * NgModule definition for the Switch component with providers.
 */
class SwitchAllModule {
}
SwitchAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, SwitchModule],
                exports: [
                    SwitchModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
SwitchAllModule.ctorParameters = () => [];

let input = ['avatarIconCss', 'avatarText', 'cssClass', 'enabled', 'leadingIconCss', 'text', 'trailingIconCss'];
let outputs$4 = [];
/**
 * `e-chip` directive represent a chip of the Angular ChipList.
 * ```html
 * <ejs-chiplist >
 *   <e-chips>
 *    <e-chip text='chip1'></e-chip>
 *    <e-chip text='chip2'></e-chip>
 *   </e-chips>
 * </ejs-chiplist>
 * ```
 */
class ChipDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$4);
    }
}
ChipDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-chips>e-chip',
                inputs: input,
                outputs: outputs$4,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
ChipDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * Chip Array Directive
 */
class ChipsDirective extends ArrayBase {
    constructor() {
        super('chips');
    }
}
ChipsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-chiplist>e-chips',
                queries: {
                    children: new ContentChildren(ChipDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
ChipsDirective.ctorParameters = () => [];

var __decorate$4 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$4 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs$4 = ['avatarIconCss', 'avatarText', 'chips', 'cssClass', 'enableDelete', 'enablePersistence', 'enableRtl', 'enabled', 'leadingIconCss', 'locale', 'selectedChips', 'selection', 'text', 'trailingIconCss'];
const outputs$5 = ['click', 'created', 'delete'];
const twoWays$4 = [''];
/**
 * Represents the Essential JS 2 Angular ChipList Component.
 * ```html
 * <ejs-chiplist></ejs-chiplist>
 * ```
 */
let ChipListComponent = class ChipListComponent extends ChipList {
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
        this.tags = ['chips'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        this.registerEvents(outputs$5);
        this.addTwoWay.call(this, twoWays$4);
        setValue('currentInstance', this, this.viewContainerRef);
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
ChipListComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-chiplist',
                inputs: inputs$4,
                outputs: outputs$5,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {
                    childChips: new ContentChild(ChipsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
ChipListComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
ChipListComponent = __decorate$4([
    ComponentMixins([ComponentBase]),
    __metadata$4("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], ChipListComponent);

/**
 * NgModule definition for the ChipList component.
 */
class ChipListModule {
}
ChipListModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    ChipListComponent,
                    ChipDirective,
                    ChipsDirective
                ],
                exports: [
                    ChipListComponent,
                    ChipDirective,
                    ChipsDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
ChipListModule.ctorParameters = () => [];

/**
 * NgModule definition for the ChipList component with providers.
 */
class ChipListAllModule {
}
ChipListAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, ChipListModule],
                exports: [
                    ChipListModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
ChipListAllModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent, ButtonModule, ButtonAllModule, CheckBoxComponent, CheckBoxModule, CheckBoxAllModule, RadioButtonComponent, RadioButtonModule, RadioButtonAllModule, SwitchComponent, SwitchModule, SwitchAllModule, ChipDirective, ChipsDirective, ChipListComponent, ChipListModule, ChipListAllModule, inputs as ɵa, outputs as ɵb, inputs$1 as ɵc, outputs$1 as ɵd, inputs$4 as ɵi, outputs$5 as ɵj, inputs$2 as ɵe, outputs$2 as ɵf, inputs$3 as ɵg, outputs$3 as ɵh };
export { wrapperInitialize, getTextNode, destroy, preRender, createCheckBox, rippleMouseHandler, setHiddenInput, Button, CheckBox, RadioButton, Switch, classNames, ChipList, Chip } from '@syncfusion/ej2-buttons';
//# sourceMappingURL=ej2-angular-buttons.js.map
