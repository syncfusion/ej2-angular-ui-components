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
import { ArrayBase, ComplexBase, ComponentBase, ComponentMixins, FormBase, setValue } from '@syncfusion/ej2-angular-base';
import { Button, CheckBox, ChipList, RadioButton, Switch } from '@syncfusion/ej2-buttons';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
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
var inputs = ['content', 'cssClass', 'disabled', 'enablePersistence', 'enableRtl', 'iconCss', 'iconPosition', 'isPrimary', 'isToggle', 'locale'];
var outputs = ['created'];
var twoWays = [];
/**
 * Represents the Angular Button Component.
 * ```html
 * <button ejs-button>Button</button>
 * ```
 */
var ButtonComponent = /** @class */ (function (_super) {
    __extends(ButtonComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function ButtonComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        _this.registerEvents(outputs);
        _this.addTwoWay.call(_this, twoWays);
        setValue('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @return {?}
     */
    ButtonComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    ButtonComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    ButtonComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    ButtonComponent.prototype.ngAfterContentChecked = function () {
    };
    return ButtonComponent;
}(Button));
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: '[ejs-button]',
                inputs: inputs,
                outputs: outputs,
                template: "<ng-content ></ng-content>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
ButtonComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
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
var ButtonModule = /** @class */ (function () {
    function ButtonModule() {
    }
    return ButtonModule;
}());
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
ButtonModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the Button component with providers.
 */
var ButtonAllModule = /** @class */ (function () {
    function ButtonAllModule() {
    }
    return ButtonAllModule;
}());
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
ButtonAllModule.ctorParameters = function () { return []; };
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
var inputs$1 = ['checked', 'cssClass', 'disabled', 'enablePersistence', 'enableRtl', 'htmlAttributes', 'indeterminate', 'label', 'labelPosition', 'locale', 'name', 'value'];
var outputs$1 = ['focus', 'blur', 'change', 'created', 'checkedChange', 'indeterminateChange'];
var twoWays$1 = ['checked', 'indeterminate'];
/**
 * Represents the Angular CheckBox Component.
 * ```html
 * <ejs-checkbox label='Default'></ejs-checkbox>
 * ```
 */
var CheckBoxComponent = CheckBoxComponent_1 = /** @class */ (function (_super) {
    __extends(CheckBoxComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function CheckBoxComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
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
    CheckBoxComponent.prototype.registerOnChange = function (registerFunction) {
    };
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    CheckBoxComponent.prototype.registerOnTouched = function (registerFunction) {
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CheckBoxComponent.prototype.writeValue = function (value) {
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    CheckBoxComponent.prototype.setDisabledState = function (disabled) {
    };
    /**
     * @return {?}
     */
    CheckBoxComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    CheckBoxComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    CheckBoxComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    CheckBoxComponent.prototype.ngAfterContentChecked = function () {
    };
    return CheckBoxComponent;
}(CheckBox));
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
                        useExisting: forwardRef(function () { return CheckBoxComponent_1; }),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
CheckBoxComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
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
var CheckBoxModule = /** @class */ (function () {
    function CheckBoxModule() {
    }
    return CheckBoxModule;
}());
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
CheckBoxModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the CheckBox component with providers.
 */
var CheckBoxAllModule = /** @class */ (function () {
    function CheckBoxAllModule() {
    }
    return CheckBoxAllModule;
}());
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
CheckBoxAllModule.ctorParameters = function () { return []; };
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
var inputs$2 = ['checked', 'cssClass', 'disabled', 'enablePersistence', 'enableRtl', 'label', 'labelPosition', 'locale', 'name', 'value'];
var outputs$2 = ['focus', 'blur', 'change', 'created', 'checkedChange'];
var twoWays$2 = ['checked'];
/**
 * Represents the Angular RadioButton Component.
 * ```html
 * <ejs-radiobutton label='Default'></ejs-radiobutton>
 * ```
 */
var RadioButtonComponent = RadioButtonComponent_1 = /** @class */ (function (_super) {
    __extends(RadioButtonComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function RadioButtonComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
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
    RadioButtonComponent.prototype.registerOnChange = function (registerFunction) {
    };
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    RadioButtonComponent.prototype.registerOnTouched = function (registerFunction) {
    };
    /**
     * @param {?} value
     * @return {?}
     */
    RadioButtonComponent.prototype.writeValue = function (value) {
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    RadioButtonComponent.prototype.setDisabledState = function (disabled) {
    };
    /**
     * @return {?}
     */
    RadioButtonComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    RadioButtonComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    RadioButtonComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    RadioButtonComponent.prototype.ngAfterContentChecked = function () {
    };
    return RadioButtonComponent;
}(RadioButton));
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
                        useExisting: forwardRef(function () { return RadioButtonComponent_1; }),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
RadioButtonComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
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
var RadioButtonModule = /** @class */ (function () {
    function RadioButtonModule() {
    }
    return RadioButtonModule;
}());
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
RadioButtonModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the RadioButton component with providers.
 */
var RadioButtonAllModule = /** @class */ (function () {
    function RadioButtonAllModule() {
    }
    return RadioButtonAllModule;
}());
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
RadioButtonAllModule.ctorParameters = function () { return []; };
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
var inputs$3 = ['checked', 'cssClass', 'disabled', 'enablePersistence', 'enableRtl', 'locale', 'name', 'offLabel', 'onLabel', 'value'];
var outputs$3 = ['focus', 'blur', 'change', 'created', 'checkedChange'];
var twoWays$3 = ['checked'];
/**
 * Represents the Angular Switch Component.
 * ```html
 * <ejs-switch></ejs-switch>
 * ```
 */
var SwitchComponent = SwitchComponent_1 = /** @class */ (function (_super) {
    __extends(SwitchComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function SwitchComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        _this.registerEvents(outputs$3);
        _this.addTwoWay.call(_this, twoWays$3);
        setValue('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    SwitchComponent.prototype.registerOnChange = function (registerFunction) {
    };
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    SwitchComponent.prototype.registerOnTouched = function (registerFunction) {
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SwitchComponent.prototype.writeValue = function (value) {
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    SwitchComponent.prototype.setDisabledState = function (disabled) {
    };
    /**
     * @return {?}
     */
    SwitchComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    SwitchComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    SwitchComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    SwitchComponent.prototype.ngAfterContentChecked = function () {
    };
    return SwitchComponent;
}(Switch));
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
                        useExisting: forwardRef(function () { return SwitchComponent_1; }),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
SwitchComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
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
var SwitchModule = /** @class */ (function () {
    function SwitchModule() {
    }
    return SwitchModule;
}());
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
SwitchModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the Switch component with providers.
 */
var SwitchAllModule = /** @class */ (function () {
    function SwitchAllModule() {
    }
    return SwitchAllModule;
}());
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
SwitchAllModule.ctorParameters = function () { return []; };
var input = ['avatarIconCss', 'avatarText', 'cssClass', 'enabled', 'leadingIconCss', 'text', 'trailingIconCss'];
var outputs$4 = [];
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
var ChipDirective = /** @class */ (function (_super) {
    __extends(ChipDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function ChipDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$4);
        return _this;
    }
    return ChipDirective;
}(ComplexBase));
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
ChipDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * Chip Array Directive
 */
var ChipsDirective = /** @class */ (function (_super) {
    __extends(ChipsDirective, _super);
    function ChipsDirective() {
        return _super.call(this, 'chips') || this;
    }
    return ChipsDirective;
}(ArrayBase));
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
ChipsDirective.ctorParameters = function () { return []; };
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
var inputs$4 = ['avatarIconCss', 'avatarText', 'chips', 'cssClass', 'enableDelete', 'enablePersistence', 'enableRtl', 'enabled', 'leadingIconCss', 'locale', 'selectedChips', 'selection', 'text', 'trailingIconCss'];
var outputs$5 = ['click', 'created', 'delete'];
var twoWays$4 = [''];
/**
 * Represents the Essential JS 2 Angular ChipList Component.
 * ```html
 * <ejs-chiplist></ejs-chiplist>
 * ```
 */
var ChipListComponent = /** @class */ (function (_super) {
    __extends(ChipListComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function ChipListComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.tags = ['chips'];
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        _this.registerEvents(outputs$5);
        _this.addTwoWay.call(_this, twoWays$4);
        setValue('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @return {?}
     */
    ChipListComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    ChipListComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    ChipListComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    ChipListComponent.prototype.ngAfterContentChecked = function () {
    };
    return ChipListComponent;
}(ChipList));
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
ChipListComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
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
var ChipListModule = /** @class */ (function () {
    function ChipListModule() {
    }
    return ChipListModule;
}());
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
ChipListModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the ChipList component with providers.
 */
var ChipListAllModule = /** @class */ (function () {
    function ChipListAllModule() {
    }
    return ChipListAllModule;
}());
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
ChipListAllModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { ButtonComponent, ButtonModule, ButtonAllModule, CheckBoxComponent, CheckBoxModule, CheckBoxAllModule, RadioButtonComponent, RadioButtonModule, RadioButtonAllModule, SwitchComponent, SwitchModule, SwitchAllModule, ChipDirective, ChipsDirective, ChipListComponent, ChipListModule, ChipListAllModule, inputs as ɵa, outputs as ɵb, inputs$1 as ɵc, outputs$1 as ɵd, inputs$4 as ɵi, outputs$5 as ɵj, inputs$2 as ɵe, outputs$2 as ɵf, inputs$3 as ɵg, outputs$3 as ɵh };
export { wrapperInitialize, getTextNode, destroy, preRender, createCheckBox, rippleMouseHandler, setHiddenInput, Button, CheckBox, RadioButton, Switch, classNames, ChipList, Chip } from '@syncfusion/ej2-buttons';
//# sourceMappingURL=ej2-angular-buttons.es5.js.map
